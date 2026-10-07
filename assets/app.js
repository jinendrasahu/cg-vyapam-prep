/* CG व्यापम सहायक ग्रेड-3 तैयारी किट — पुस्तक पाठक, अभ्यास और मॉक टेस्ट */
(function () {
  'use strict';

  const BOOK = window.BOOK = {
    chapters: {}, gens: {},
    add(ch) { (this.chapters[ch.subject] = this.chapters[ch.subject] || []).push(ch); },
    addGenerator(g) { (this.gens[g.subject] = this.gens[g.subject] || []).push(g); }
  };

  const store = {
    get(k, d) { try { const v = localStorage.getItem('cgv3:' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('cgv3:' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };

  const $ = (sel, el) => (el || document).querySelector(sel);
  const h = (tag, attrs, html) => {
    const el = document.createElement(tag);
    for (const k in attrs || {}) {
      if (k === 'class') el.className = attrs[k];
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), attrs[k]);
      else el.setAttribute(k, attrs[k]);
    }
    if (html !== undefined) el.innerHTML = html;
    return el;
  };
  const KEYS = ['(क)', '(ख)', '(ग)', '(घ)'];
  const hi = n => Number(n).toLocaleString('hi-IN');

  function makeR(seed) {
    let s = (seed >>> 0) || 1;
    const rnd = () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const R = {
      rnd,
      int: (a, b) => a + Math.floor(rnd() * (b - a + 1)),
      pick: arr => arr[Math.floor(rnd() * arr.length)],
      shuffle: arr => { const x = arr.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; },
      mcq: (correct, wrong) => { const o = R.shuffle([correct, ...wrong.slice(0, 3)]); return { o: o.map(String), a: o.indexOf(correct) }; }
    };
    return R;
  }
  const freshR = () => makeR(Math.floor(Math.random() * 2 ** 31));

  function loadScripts(paths, done) {
    const missing = [];
    let i = 0;
    (function next() {
      if (i >= paths.length) return done(missing);
      const p = paths[i++];
      const s = document.createElement('script');
      s.src = p;
      s.onload = next;
      s.onerror = () => { missing.push(p); next(); };
      document.head.appendChild(s);
    })();
  }
  const subjectPaths = sub => sub.files.map(f => `data/${sub.key}/${f}.js`);
  const chaptersOf = sub => {
    const list = BOOK.chapters[sub.key] || [];
    return sub.files.map(f => list.find(c => c.id === f)).filter(Boolean);
  };
  const qid = (ch, i) => ch.id + '#' + i;

  /* progress: per chapter map { index: 1 (सही) | 0 (गलत) } */
  const getProg = chId => store.get('p:' + chId, {});
  const setProg = (chId, i, ok) => { const p = getProg(chId); p[i] = ok ? 1 : 0; store.set('p:' + chId, p); };
  function progressOf(chs) {
    let total = 0, done = 0, right = 0;
    for (const ch of chs) {
      total += ch.questions.length;
      const p = getProg(ch.id);
      for (const k in p) { done++; if (p[k]) right++; }
    }
    return { total, done, right };
  }

  function initTheme() {
    const btn = $('#theme-btn');
    const saved = store.get('theme', null);
    if (saved) document.documentElement.dataset.theme = saved;
    if (btn) btn.addEventListener('click', () => {
      const cur = document.documentElement.dataset.theme ||
        (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      store.set('theme', next);
    });
  }

  /* ---------- एक प्रश्न का कार्ड ---------- */
  function renderQ(q, n, opts) {
    const box = h('div', { class: 'q' });
    box.appendChild(h('div', { class: 'num' }, `प्रश्न ${hi(n)}${opts.tag ? ' · ' + opts.tag : ''}`));
    box.appendChild(h('div', { class: 'qtext' }, q.q));
    const grid = h('div', { class: 'opts' });
    const expl = h('div', { class: 'expl' });
    expl.style.display = 'none';
    expl.innerHTML = `<b>सही उत्तर: ${KEYS[q.a]} ${q.o[q.a]}</b>${q.e ? '<br>' + q.e : ''}`;
    const btns = q.o.map((o, i) => {
      const b = h('button', { class: 'opt', type: 'button' }, `<span class="k">${KEYS[i]}</span><span>${o}</span>`);
      b.addEventListener('click', () => {
        if (opts.mode === 'exam') {
          btns.forEach(x => x.classList.remove('sel'));
          b.classList.add('sel');
          opts.onAnswer && opts.onAnswer(i);
          return;
        }
        reveal(i);
        opts.onAnswer && opts.onAnswer(i === q.a);
      });
      grid.appendChild(b);
      return b;
    });
    function reveal(chosen) {
      btns.forEach((x, i) => {
        x.disabled = true;
        x.classList.remove('sel');
        if (i === q.a) x.classList.add('right');
        else if (i === chosen) x.classList.add('wrong');
      });
      expl.style.display = '';
    }
    box.appendChild(grid);
    box.appendChild(expl);
    if (opts.showAnswer) reveal(-1);
    else if (opts.prev !== undefined && opts.prev !== null && opts.mode !== 'exam') {
      /* पिछली बार का प्रयास: केवल संकेत, दोबारा हल करने दें */
      box.querySelector('.num').insertAdjacentHTML('beforeend', opts.prev ? ' · <span style="color:var(--good)">✓ पहले सही</span>' : ' · <span style="color:var(--bad)">✗ पहले गलत</span>');
    }
    box._reveal = reveal;
    return box;
  }

  /* ---------- पुस्तक पृष्ठ ---------- */
  function initBook() {
    initTheme();
    const params = new URLSearchParams(location.search);
    const sub = window.MANIFEST.subjects.find(s => s.key === params.get('s')) || window.MANIFEST.subjects[0];
    document.title = sub.title + ' — CG व्यापम सहायक ग्रेड-3';
    $('#book-title').textContent = `${sub.part}: ${sub.title}`;
    const main = $('#main');
    const side = $('#sidebar');
    $('#menu-btn').addEventListener('click', () => side.classList.toggle('open'));
    main.innerHTML = '<p class="empty">पुस्तक लोड हो रही है…</p>';

    loadScripts(subjectPaths(sub), missing => {
      const chs = chaptersOf(sub);
      const gens = BOOK.gens[sub.key] || [];
      const pending = sub.files.filter(f => !f.endsWith('-gen') && !chs.find(c => c.id === f));

      function route() {
        const p = new URLSearchParams(location.hash.slice(1));
        const view = p.get('v') || (chs.length ? 'ch' : 'home');
        renderSide(p);
        side.classList.remove('open');
        window.scrollTo(0, 0);
        if (view === 'ch') showChapter(chs.find(c => c.id === p.get('c')) || chs[0], p.get('t') || 'notes', +(p.get('pg') || 1));
        else if (view === 'gen') showGen();
        else if (view === 'wrong') showWrong();
        else showHome();
      }

      function renderSide(p) {
        side.innerHTML = '';
        const cur = p.get('c'), view = p.get('v') || 'ch';
        side.appendChild(h('a', { href: '#v=home', class: view === 'home' ? 'active' : '' }, 'पुस्तक परिचय व प्रगति'));
        const groups = sub.groups || [{ t: 'अध्याय', files: sub.files.filter(f => !f.endsWith('-gen')) }];
        let n = 0;
        groups.forEach(g => {
          const gq = g.files.reduce((t, f) => { const c = chs.find(x => x.id === f); return t + (c ? c.questions.length : 0); }, 0);
          side.appendChild(h('h4', {}, sub.groups ? `${g.t}<span class="meta">${hi(gq)} प्रश्न</span>` : g.t));
          g.files.forEach(f => {
            n++;
            const ch = chs.find(c => c.id === f);
            if (!ch) return side.appendChild(h('a', { href: '#v=home' }, `${hi(n)}. अध्याय तैयार हो रहा है<span class="meta">${f}</span>`));
            const pr = progressOf([ch]);
            side.appendChild(h('a', { href: `#v=ch&c=${ch.id}`, class: view === 'ch' && (cur === ch.id || (!cur && ch === chs[0])) ? 'active' : '' },
              `${hi(n)}. ${ch.title}<span class="meta">${hi(ch.questions.length)} प्रश्न · हल किए ${hi(pr.done)}</span>`));
          });
        });
        side.appendChild(h('h4', {}, 'अभ्यास'));
        if (gens.length) side.appendChild(h('a', { href: '#v=gen', class: view === 'gen' ? 'active' : '' }, `अनंत अभ्यास (स्वचालित प्रश्न)<span class="meta">${hi(gens.length)} प्रकार · हर बार नए प्रश्न</span>`));
        side.appendChild(h('a', { href: '#v=wrong', class: view === 'wrong' ? 'active' : '' }, 'मेरे गलत प्रश्न दोहराएँ'));
        side.appendChild(h('a', { href: 'mock.html' }, 'पूर्ण मॉक टेस्ट (100 प्रश्न)'));
        side.appendChild(h('a', { href: `print.html?s=${sub.key}`, target: '_blank' }, 'पूरी पुस्तक — प्रिंट / PDF'));
      }

      function showHome() {
        const pr = progressOf(chs);
        main.innerHTML = '';
        const c = h('div', { class: 'card' });
        c.innerHTML = `<h1>${sub.title}</h1><p class="lead">${sub.part} · ${sub.mockLabel || `परीक्षा में ${hi(sub.mockQ)} प्रश्न`} · इस पुस्तक में ${hi(chs.length)} अध्याय और ${hi(pr.total)} प्रश्न${gens.length ? ' + असीमित स्वचालित अभ्यास' : ''}</p>
          <div class="bar"><span style="width:${pr.total ? (pr.done / pr.total * 100).toFixed(1) : 0}%"></span></div>
          <p>हल किए: <b>${hi(pr.done)}</b> / ${hi(pr.total)} · सही: <b>${hi(pr.right)}</b>${pr.done ? ` (${Math.round(pr.right / pr.done * 100)}%)` : ''}</p>
          <p>हर अध्याय में तीन भाग हैं: <b>पाठ्य सामग्री</b> (पूरे नोट्स), <b>गहन तथ्य</b> (सामान्य किताबों से आगे की जानकारी) और <b>प्रश्न अभ्यास</b> (उत्तर व व्याख्या सहित)। पहले पाठ्य सामग्री पढ़ें, फिर प्रश्न हल करें, और गलत प्रश्नों को "मेरे गलत प्रश्न दोहराएँ" से बार-बार दोहराएँ।</p>
          ${sub.groups ? '<h3>पाठ्यक्रम के अनुसार प्रश्न</h3><table class="plan-table">' + sub.groups.map(g => {
            const gc = g.files.map(f => chs.find(x => x.id === f)).filter(Boolean);
            const gp = progressOf(gc);
            return `<tr><td>${g.t}</td><td>${hi(gc.length)} अध्याय</td><td><b>${hi(gp.total)}</b> प्रश्न</td><td>हल किए ${hi(gp.done)}</td></tr>`;
          }).join('') + '</table>' : ''}
          ${pending.length ? `<p class="tip">ये अध्याय अभी तैयार हो रहे हैं: ${pending.join(', ')}</p>` : ''}`;
        main.appendChild(c);
      }

      function showChapter(ch, tab, page) {
        main.innerHTML = '';
        if (!ch) { main.innerHTML = '<p class="empty">यह अध्याय अभी तैयार नहीं है।</p>'; return; }
        const idx = chs.indexOf(ch);
        main.appendChild(h('div', { class: 'num', style: 'color:var(--muted)' }, `${sub.part} · अध्याय ${hi(sub.files.indexOf(ch.id) + 1)}`));
        main.appendChild(h('h1', {}, ch.title));
        const tabs = h('div', { class: 'tabs' });
        const items = [['notes', 'पाठ्य सामग्री'], ...(ch.extra ? [['extra', 'गहन तथ्य']] : []), ['qs', `प्रश्न अभ्यास (${hi(ch.questions.length)})`]];
        items.forEach(([k, label]) => tabs.appendChild(h('button', { class: tab === k ? 'on' : '', onclick: () => { location.hash = `v=ch&c=${ch.id}&t=${k}`; } }, label)));
        main.appendChild(tabs);
        if (tab === 'notes') main.appendChild(h('div', { class: 'notes card' }, ch.notes));
        else if (tab === 'extra') main.appendChild(h('div', { class: 'notes card' }, ch.extra));
        else showQuestions(ch, page);
        const nav = h('div', { class: 'pager' });
        if (idx > 0) nav.appendChild(h('a', { class: 'btn', href: `#v=ch&c=${chs[idx - 1].id}` }, '← पिछला अध्याय'));
        if (tab === 'notes' || tab === 'extra') nav.appendChild(h('a', { class: 'btn primary', href: `#v=ch&c=${ch.id}&t=qs` }, 'प्रश्न हल करें →'));
        if (idx < chs.length - 1) nav.appendChild(h('a', { class: 'btn', href: `#v=ch&c=${chs[idx + 1].id}` }, 'अगला अध्याय →'));
        main.appendChild(nav);
      }

      function showQuestions(ch, page) {
        let PER = 25;
        const state = { search: store.get('srch', ''), show: store.get('showAns', false), order: null };
        const tool = h('div', { class: 'toolbar' });
        const search = h('input', { type: 'search', placeholder: 'प्रश्नों में खोजें…' });
        search.value = '';
        const show = h('input', { type: 'checkbox' });
        show.checked = state.show;
        const lbl = h('label', {}, '');
        lbl.appendChild(show); lbl.appendChild(document.createTextNode('उत्तर सहित पढ़ें'));
        const shuffleBtn = h('button', { class: 'btn small', type: 'button' }, 'प्रश्न मिलाएँ');
        const resetBtn = h('button', { class: 'btn small', type: 'button' }, 'प्रगति मिटाएँ');
        const printBtn = h('button', { class: 'btn small', type: 'button' }, 'प्रिंट');
        const score = h('span', { class: 'score' });
        [search, lbl, shuffleBtn, resetBtn, printBtn, score].forEach(x => tool.appendChild(x));
        main.appendChild(tool);
        const list = h('div');
        main.appendChild(list);
        const pager = h('div', { class: 'pager' });
        main.appendChild(pager);
        let session = { r: 0, w: 0 };

        function upScore() {
          const pr = progressOf([ch]);
          score.innerHTML = `इस बार: <span class="good">${hi(session.r)} सही</span> · <span class="bad">${hi(session.w)} गलत</span> · कुल हल ${hi(pr.done)}/${hi(ch.questions.length)}`;
        }
        function draw() {
          const term = search.value.trim().toLowerCase();
          let items = ch.questions.map((q, i) => ({ q, i }));
          if (state.order) items = state.order.map(i => items[i]);
          if (term) items = items.filter(({ q }) => (q.q + ' ' + q.o.join(' ') + ' ' + (q.e || '')).toLowerCase().includes(term));
          const pages = Math.max(1, Math.ceil(items.length / PER));
          page = Math.min(Math.max(1, page), pages);
          list.innerHTML = '';
          const prog = getProg(ch.id);
          items.slice((page - 1) * PER, page * PER).forEach(({ q, i }, k) => {
            list.appendChild(renderQ(q, (page - 1) * PER + k + 1, {
              showAnswer: show.checked, prev: prog[i],
              onAnswer: ok => { setProg(ch.id, i, ok); ok ? session.r++ : session.w++; upScore(); }
            }));
          });
          if (!items.length) list.innerHTML = '<p class="empty">कोई प्रश्न नहीं मिला।</p>';
          pager.innerHTML = '';
          if (pages > 1) {
            for (let p = 1; p <= pages; p++) {
              const b = h('button', { class: 'btn small' + (p === page ? ' primary' : ''), type: 'button' }, hi(p));
              b.addEventListener('click', () => { page = p; draw(); list.scrollIntoView({ block: 'start' }); });
              pager.appendChild(b);
            }
          }
          upScore();
        }
        search.addEventListener('input', () => { page = 1; draw(); });
        show.addEventListener('change', () => { store.set('showAns', show.checked); draw(); });
        shuffleBtn.addEventListener('click', () => { state.order = freshR().shuffle(ch.questions.map((_, i) => i)); page = 1; draw(); });
        resetBtn.addEventListener('click', () => { if (confirm('इस अध्याय की प्रगति मिटाएँ?')) { store.set('p:' + ch.id, {}); session = { r: 0, w: 0 }; draw(); } });
        printBtn.addEventListener('click', () => { show.checked = true; page = 1; PER = 100000; draw(); window.print(); PER = 25; draw(); });
        draw();
      }

      function showGen() {
        main.innerHTML = '';
        main.appendChild(h('h1', {}, 'अनंत अभ्यास'));
        main.appendChild(h('p', { class: 'lead' }, 'ये प्रश्न हर बार कम्प्यूटर द्वारा नए अंकों से बनते हैं और उत्तर गणना से जाँचे जाते हैं — जितना चाहें अभ्यास करें।'));
        const tool = h('div', { class: 'toolbar' });
        const sel = h('select', { class: 'btn' });
        sel.appendChild(h('option', { value: '' }, 'सभी प्रकार मिश्रित'));
        gens.forEach((g, i) => sel.appendChild(h('option', { value: String(i) }, g.title)));
        sel.value = store.get('gen:' + sub.key, '');
        const more = h('button', { class: 'btn primary', type: 'button' }, 'नए 20 प्रश्न');
        const score = h('span', { class: 'score' });
        [sel, more, score].forEach(x => tool.appendChild(x));
        main.appendChild(tool);
        const list = h('div');
        main.appendChild(list);
        let r = 0, w = 0;
        const up = () => { score.innerHTML = `<span class="good">${hi(r)} सही</span> · <span class="bad">${hi(w)} गलत</span>`; };
        function batch() {
          list.innerHTML = '';
          store.set('gen:' + sub.key, sel.value);
          const R = freshR();
          for (let n = 1; n <= 20; n++) {
            const g = sel.value === '' ? R.pick(gens) : gens[+sel.value];
            let q;
            try { q = g.make(makeR(Math.floor(R.rnd() * 2 ** 31))); } catch (e) { continue; }
            list.appendChild(renderQ(q, n, { tag: g.title, onAnswer: ok => { ok ? r++ : w++; up(); } }));
          }
          up();
        }
        sel.addEventListener('change', batch);
        more.addEventListener('click', () => { batch(); window.scrollTo(0, 0); });
        batch();
      }

      function showWrong() {
        main.innerHTML = '';
        main.appendChild(h('h1', {}, 'मेरे गलत प्रश्न'));
        main.appendChild(h('p', { class: 'lead' }, 'जिन प्रश्नों का आपका पिछला उत्तर गलत था। सही करने पर प्रश्न इस सूची से हट जाएगा।'));
        let n = 0;
        chs.forEach(ch => {
          const p = getProg(ch.id);
          ch.questions.forEach((q, i) => {
            if (p[i] === 0) main.appendChild(renderQ(q, ++n, { tag: ch.title, onAnswer: ok => setProg(ch.id, i, ok) }));
          });
        });
        if (!n) main.appendChild(h('p', { class: 'empty' }, 'अभी कोई गलत प्रश्न नहीं — बढ़िया! अध्यायों से और प्रश्न हल करें।'));
      }

      window.addEventListener('hashchange', route);
      route();
    });
  }

  /* ---------- मुख पृष्ठ ---------- */
  function initIndex() {
    initTheme();
    const grid = $('#books');
    const subs = window.MANIFEST.subjects;
    const paths = subs.flatMap(subjectPaths);
    loadScripts(paths, () => {
      let all = 0;
      grid.innerHTML = '';
      subs.forEach(sub => {
        const chs = chaptersOf(sub);
        const pr = progressOf(chs);
        const gens = (BOOK.gens[sub.key] || []).length;
        all += pr.total;
        const a = h('a', { class: 'card book-card', href: `book.html?s=${sub.key}` });
        a.innerHTML = `<span class="part">${sub.part} · ${sub.mockLabel || `परीक्षा में ${hi(sub.mockQ)} प्रश्न`}</span><span class="name">${sub.title}</span>
          <span class="stats">${hi(chs.length)} अध्याय · ${hi(pr.total)} प्रश्न${gens ? ` · ${hi(gens)} प्रकार के असीमित प्रश्न` : ''}</span>
          <div class="bar"><span style="width:${pr.total ? (pr.done / pr.total * 100).toFixed(1) : 0}%"></span></div>
          <span class="stats">हल किए ${hi(pr.done)} · सही ${hi(pr.right)}</span>`;
        grid.appendChild(a);
      });
      const t = $('#total-q');
      if (t) t.textContent = hi(all);
      const hist = store.get('mocks', []);
      const mh = $('#mock-history');
      if (mh && hist.length) {
        mh.innerHTML = '<h3>पिछले मॉक टेस्ट</h3>' + hist.slice(-8).reverse().map(m =>
          `<div class="result-row"><span>${new Date(m.at).toLocaleString('hi-IN')}</span><span>${m.score} / ${m.max}</span><span>${Math.round(m.score / m.max * 100)}%</span></div>`).join('');
      }
    });
  }

  /* ---------- मॉक टेस्ट ---------- */
  function initMock() {
    initTheme();
    const subs = window.MANIFEST.subjects;
    const main = $('#main');
    const startBtn = $('#start');
    loadScripts(subs.flatMap(subjectPaths), () => {
      startBtn.disabled = false;
      startBtn.textContent = 'टेस्ट शुरू करें';
    });
    startBtn.addEventListener('click', () => {
      const minutes = +$('#mins').value;
      const neg = +$('#neg').value;
      $('#setup').style.display = 'none';
      run(minutes, neg);
    });

    function run(minutes, neg) {
      const R = freshR();
      const paper = [];
      subs.forEach(sub => {
        const pool = [];
        chaptersOf(sub).forEach(ch => ch.questions.forEach(q => pool.push({ q, from: ch.title })));
        const gens = BOOK.gens[sub.key] || [];
        const picked = R.shuffle(pool);
        for (let i = 0; i < sub.mockQ; i++) {
          const useGen = gens.length && (i % 2 === 1 || i >= picked.length);
          if (useGen) {
            const g = R.pick(gens);
            try { paper.push({ sub, q: g.make(makeR(Math.floor(R.rnd() * 2 ** 31))), from: g.title }); continue; } catch (e) { /* fall back */ }
          }
          if (picked.length) paper.push({ sub, q: picked.pop().q, from: '' });
        }
      });
      const answers = new Array(paper.length).fill(null);
      main.innerHTML = '';
      const bar = h('div', { class: 'toolbar card', style: 'position:sticky;top:56px;z-index:10' });
      const timer = h('span', { class: 'timer' });
      const done = h('span', { class: 'score' });
      const submit = h('button', { class: 'btn primary', type: 'button' }, 'जमा करें');
      [timer, done, submit].forEach(x => bar.appendChild(x));
      main.appendChild(bar);
      const cards = [];
      let lastSub = null, n = 0;
      paper.forEach((item, i) => {
        if (item.sub !== lastSub) { main.appendChild(h('h2', {}, `${item.sub.part}: ${item.sub.title}`)); lastSub = item.sub; }
        const card = renderQ(item.q, ++n, { mode: 'exam', onAnswer: choice => { answers[i] = choice; upDone(); } });
        cards.push(card);
        main.appendChild(card);
      });
      const upDone = () => { done.textContent = `उत्तर दिए: ${hi(answers.filter(a => a !== null).length)} / ${hi(paper.length)}`; };
      upDone();
      const end = Date.now() + minutes * 60000;
      const tick = setInterval(() => {
        const left = Math.max(0, end - Date.now());
        const m = Math.floor(left / 60000), s = Math.floor(left / 1000) % 60;
        timer.textContent = `शेष समय ${m}:${String(s).padStart(2, '0')}`;
        if (!left) finish();
      }, 500);
      submit.addEventListener('click', () => { if (confirm('टेस्ट जमा करें?')) finish(); });

      function finish() {
        clearInterval(tick);
        const per = {};
        let score = 0;
        paper.forEach((item, i) => {
          const k = item.sub.key;
          per[k] = per[k] || { sub: item.sub, r: 0, w: 0, s: 0 };
          const a = answers[i];
          if (a === null) per[k].s++;
          else if (a === item.q.a) { per[k].r++; score += 1; }
          else { per[k].w++; score -= neg; }
          cards[i]._reveal(a === null ? -1 : a);
        });
        score = Math.round(score * 100) / 100;
        const hist = store.get('mocks', []);
        hist.push({ at: Date.now(), score, max: paper.length });
        store.set('mocks', hist.slice(-50));
        bar.remove();
        const res = h('div', { class: 'card' });
        res.innerHTML = `<h1>परिणाम: ${score} / ${paper.length}</h1>` +
          Object.values(per).map(p => `<div class="result-row"><span>${p.sub.part}: ${p.sub.title}</span><span style="color:var(--good)">${hi(p.r)} सही</span><span style="color:var(--bad)">${hi(p.w)} गलत · ${hi(p.s)} छोड़े</span></div>`).join('') +
          `<p>नीचे हर प्रश्न का सही उत्तर और व्याख्या दी गई है। <a href="mock.html">नया मॉक टेस्ट</a> · <a href="index.html">मुख पृष्ठ</a></p>`;
        main.prepend(res);
        window.scrollTo(0, 0);
      }
    }
  }


  /* ---------- पूरी पुस्तक (प्रिंट / PDF) ---------- */
  function initPrint() {
    const params = new URLSearchParams(location.search);
    const sub = window.MANIFEST.subjects.find(s => s.key === params.get('s')) || window.MANIFEST.subjects[0];
    document.title = sub.title + ' — सहायक ग्रेड-3 तैयारी पुस्तक';
    const main = $('#main');
    loadScripts(subjectPaths(sub), () => {
      const chs = chaptersOf(sub);
      const total = chs.reduce((n, c) => n + c.questions.length, 0);
      let html = `<section class="cover"><p class="part">${window.MANIFEST.exam}</p><h1>${sub.part}: ${sub.title}</h1>
        <p>${hi(chs.length)} अध्याय · ${hi(total)} प्रश्न उत्तर व व्याख्या सहित</p><p>तैयारी किट 2026-27</p></section>
        <section class="toc"><h2>विषय-सूची</h2><ol>${chs.map(c => `<li>${c.title} <span>(${hi(c.questions.length)} प्रश्न)</span></li>`).join('')}</ol></section>`;
      chs.forEach((ch, ci) => {
        html += `<section class="chapter"><h2>अध्याय ${hi(ci + 1)}: ${ch.title}</h2><div class="notes">${ch.notes}</div>`;
        if (ch.extra) html += `<div class="notes extra-box">${ch.extra}</div>`;
        html += `<h3 class="qs-head">प्रश्न अभ्यास</h3><ol class="pq">` + ch.questions.map(q =>
          `<li><div class="qtext">${q.q}</div><div class="po">${q.o.map((o, i) => `<span>${KEYS[i]} ${o}</span>`).join('')}</div></li>`).join('') + '</ol>';
        html += `<h3 class="qs-head">उत्तर व व्याख्या</h3><ol class="ans">` + ch.questions.map(q =>
          `<li><b>${KEYS[q.a]} ${q.o[q.a]}</b>${q.e ? ' — ' + q.e : ''}</li>`).join('') + '</ol></section>';
      });
      main.innerHTML = html;
      document.body.dataset.ready = '1';
    });
  }

  window.CGV = { initBook, initIndex, initMock, initPrint, makeR };
})();
