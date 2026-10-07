#!/usr/bin/env node
/* Checks data files: node tools/validate.cjs data/gs/gs-01.js [more files...]   (no args = all files) */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
let files = process.argv.slice(2);
if (!files.length) {
  files = [];
  for (const d of fs.readdirSync(path.join(root, 'data'))) {
    for (const f of fs.readdirSync(path.join(root, 'data', d))) if (f.endsWith('.js')) files.push(path.join('data', d, f));
  }
}

let errors = 0, total = 0;
const seenGlobal = new Map();
const norm = s => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().toLowerCase();

function makeR(seed) {
  let s = seed >>> 0;
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

for (const file of files) {
  const fp = path.resolve(root, file);
  const rel = path.relative(root, fp);
  const errs = [], warns = [];
  const chapters = [], gens = [];
  const sandbox = { window: {}, BOOK: { add: c => chapters.push(c), addGenerator: g => gens.push(g) }, console };
  sandbox.window.BOOK = sandbox.BOOK;
  try {
    vm.runInNewContext(fs.readFileSync(fp, 'utf8'), sandbox, { filename: rel, timeout: 5000 });
  } catch (e) {
    console.log(`✗ ${rel}: फ़ाइल नहीं चली — ${e.message}`);
    errors++;
    continue;
  }
  const base = path.basename(fp, '.js');
  if (!chapters.length && !gens.length) errs.push('BOOK.add / BOOK.addGenerator नहीं मिला');

  for (const ch of chapters) {
    for (const k of ['subject', 'id', 'title', 'notes', 'questions']) if (ch[k] === undefined) errs.push(`अध्याय में "${k}" नहीं है`);
    if (ch.id !== base) errs.push(`id "${ch.id}" फ़ाइल नाम "${base}" से अलग है`);
    if (ch.subject !== path.basename(path.dirname(fp))) errs.push(`subject "${ch.subject}" फ़ोल्डर से अलग है`);
    if (typeof ch.notes === 'string' && ch.notes.length < 1500) warns.push(`नोट्स छोटे हैं (${ch.notes.length} अक्षर)`);
    const qs = Array.isArray(ch.questions) ? ch.questions : [];
    const seen = new Set();
    const aCount = [0, 0, 0, 0];
    qs.forEach((q, i) => {
      const n = `प्रश्न ${i + 1}`;
      if (!q || typeof q.q !== 'string' || !q.q.trim()) return errs.push(`${n}: q खाली`);
      if (!Array.isArray(q.o) || q.o.length !== 4) return errs.push(`${n}: ठीक 4 विकल्प चाहिए`);
      if (q.o.some(o => typeof o !== 'string' || !o.trim())) errs.push(`${n}: कोई विकल्प खाली/स्ट्रिंग नहीं`);
      if (new Set(q.o.map(o => String(o).replace(/\s+/g, ' ').trim().toLowerCase())).size !== 4) errs.push(`${n}: विकल्प दोहराए गए — ${JSON.stringify(q.o)}`);
      if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) errs.push(`${n}: a 0-3 होना चाहिए`);
      else aCount[q.a]++;
      if (typeof q.e !== 'string' || q.e.trim().length < 5) warns.push(`${n}: व्याख्या (e) नहीं/बहुत छोटी`);
      const key = norm(q.q) + '|' + q.o.map(norm).sort().join('|');
      if (seen.has(key)) errs.push(`${n}: दोहराया गया प्रश्न — ${q.q.slice(0, 60)}`);
      seen.add(key);
      const g = seenGlobal.get(key);
      if (g && g !== rel) warns.push(`${n}: ${g} में भी यही प्रश्न`);
      else seenGlobal.set(key, rel);
    });
    if (qs.length) {
      const max = Math.max(...aCount) / qs.length;
      if (max > 0.4) warns.push(`उत्तर-स्थिति असंतुलित ${JSON.stringify(aCount)} — सही उत्तर A/B/C/D में बराबर बाँटें`);
    }
    total += qs.length;
    console.log(`${errs.length ? '✗' : '✓'} ${rel}: "${ch.title}" — ${qs.length} प्रश्न, नोट्स ${String(ch.notes || '').length + String(ch.extra || '').length} अक्षर, उत्तर-वितरण ${JSON.stringify(aCount)}`);
  }

  for (const g of gens) {
    if (!g.id || !g.title || typeof g.make !== 'function') { errs.push(`जनरेटर में id/title/make नहीं`); continue; }
    let bad = 0;
    const uniq = new Set();
    for (let i = 1; i <= 400; i++) {
      try {
        const q = g.make(makeR(i * 7919));
        if (!q || typeof q.q !== 'string' || !Array.isArray(q.o) || q.o.length !== 4 || new Set(q.o.map(String)).size !== 4 ||
            !Number.isInteger(q.a) || q.a < 0 || q.a > 3 || typeof q.e !== 'string') { if (bad++ < 3) errs.push(`जनरेटर ${g.id} (seed ${i}): गलत आकार — ${JSON.stringify(q).slice(0, 200)}`); }
        else uniq.add(q.q + q.o.join());
      } catch (e) { if (bad++ < 3) errs.push(`जनरेटर ${g.id} (seed ${i}): त्रुटि — ${e.message}`); }
    }
    console.log(`${bad ? '✗' : '✓'} ${rel}: जनरेटर "${g.title}" — 400 में ${uniq.size} अलग प्रश्न`);
  }

  for (const e of errs.slice(0, 40)) console.log('    त्रुटि: ' + e);
  if (errs.length > 40) console.log(`    ...और ${errs.length - 40} त्रुटियाँ`);
  for (const w of warns.slice(0, 15)) console.log('    चेतावनी: ' + w);
  if (warns.length > 15) console.log(`    ...और ${warns.length - 15} चेतावनियाँ`);
  errors += errs.length;
}
console.log(`\nकुल प्रश्न: ${total} | त्रुटियाँ: ${errors}`);
process.exit(errors ? 1 : 0);
