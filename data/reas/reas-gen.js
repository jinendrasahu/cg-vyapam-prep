(function () {
  // ---------- सहायक फ़ंक्शन (केवल इस फ़ाइल के भीतर) ----------
  var ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var VAR = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
  var MAAH = ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
  var DISHA = ['उत्तर', 'पूर्व', 'दक्षिण', 'पश्चिम'];
  var DV = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  var WORDS = ['BOOK', 'PEN', 'CHAIR', 'TABLE', 'HOUSE', 'APPLE', 'MANGO', 'RIVER', 'WATER', 'LIGHT', 'PAPER', 'HORSE', 'TIGER', 'PLANT', 'CLOUD', 'SMILE', 'BRAIN', 'QUEEN', 'KING', 'GOLD', 'SCHOOL', 'FRIEND', 'GARDEN', 'MOTHER', 'TRAIN', 'LEMON', 'PILOT', 'NURSE', 'STONE', 'DREAM'];

  function pos(ch) { return ABC.indexOf(ch) + 1; }
  function letter(p) { return ABC.charAt((((p - 1) % 26) + 26) % 26); }
  function shiftWord(w, k) { var s = ''; for (var i = 0; i < w.length; i++) s += letter(pos(w[i]) + k); return s; }
  function rev(w) { return w.split('').reverse().join(''); }
  function sgn(k) { return k >= 0 ? '+' + k : '−' + (-k); }
  function minus(n) { return n < 0 ? '−' + (-n) : String(n); }
  function isPrime(n) { if (n < 2) return false; for (var i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; }
  function isSq(n) { var r = Math.round(Math.sqrt(n)); return r * r === n; }
  function isCube(n) { var r = Math.round(Math.cbrt(n)); return r * r * r === n; }
  function leap(y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; }
  function mdays(y, m) { return [31, leap(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1]; }
  // तीन अलग गलत विकल्प — सही उत्तर के बराबर कभी नहीं
  function wrongs(ans, cands, fb) {
    var out = [], seen = {}; seen[String(ans)] = 1;
    for (var i = 0; i < cands.length && out.length < 3; i++) {
      var s = String(cands[i]);
      if (s === '' || s === 'NaN' || s === 'undefined' || seen[s]) continue;
      seen[s] = 1; out.push(s);
    }
    var k = 1;
    while (out.length < 3 && k < 500) { var t = String(fb(k++)); if (!seen[t]) { seen[t] = 1; out.push(t); } }
    return out;
  }
  function numFb(ans) { return function (k) { return ans + (k % 2 ? k : -k) * (1 + (k >> 2)); }; }
  function pack(R, ans, cands, fb, q, e) {
    var A = String(ans);
    var r = R.mcq(A, wrongs(A, cands, fb || numFb(Number(ans))));
    return { q: q, o: r.o, a: r.a, e: e };
  }
  // FORMAT.md शैली की चरणबद्ध व्याख्या: SOL([चरण...], उत्तर, शॉर्टकट?, ध्यान दें?)
  function SOL(steps, ans, sc, note) {
    var s = '<b>हल:</b><br>' + steps.map(function (t, i) { return 'चरण ' + (i + 1) + ': ' + t; }).join('<br>') + '<br>अतः उत्तर = <b>' + ans + '</b>';
    if (sc) s += '<br><b>शॉर्टकट:</b> ' + sc;
    if (note) s += '<br><b>ध्यान दें:</b> ' + note;
    return s;
  }
  // पैटर्न-पंक्ति: 2 →(+3) 5 →(+5) 10
  function chain(t, lab) { var s = String(t[0]); for (var i = 1; i < t.length; i++) s += ' →(' + lab(t[i - 1], t[i], i - 1) + ') ' + t[i]; return s; }
  function dsgn(a, b) { return sgn(b - a); }
  function pm(k) { return k ? (k > 0 ? ' + ' + k : ' − ' + (-k)) : ''; }

  // 1. अंकगणितीय श्रेणी
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-series-ap', title: 'संख्या श्रेणी — अंकगणितीय (समान अंतर)',
    make: function (R) {
      var a = R.int(2, 60), d = R.pick([-9, -7, -6, -5, -4, -3, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]);
      if (d < 0) a += 60;
      var t = []; for (var i = 0; i < 5; i++) t.push(a + i * d);
      var ans = a + 5 * d;
      return pack(R, ans, [ans + 1, ans - 1, ans + d, ans - d, ans + 2], null,
        t.join(', ') + ', ? — अगला पद ज्ञात कीजिए।',
        SOL(['क्रमागत पदों का अंतर निकालें: ' + chain(t, dsgn) + '।', 'अंतर हर बार ' + sgn(d) + ' (स्थिर) है — यह अंकगणितीय श्रेणी है।',
          'अगला पद = ' + t[4] + pm(d) + ' = ' + ans + '।'], ans,
          'n-वाँ पद = a + (n − 1)d; छठा पद = ' + a + ' + 5 × ' + (d < 0 ? '(' + minus(d) + ')' : d) + ' = ' + ans + '।'));
    }
  });

  // 2. गुणोत्तर श्रेणी (×r या ×r + c)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-series-gp', title: 'संख्या श्रेणी — गुणोत्तर / ×r ± c',
    make: function (R) {
      var r = R.int(2, 4), c = R.pick([0, 0, 1, -1, 2, -2]), a = R.int(2, 7);
      var t = [a]; for (var i = 1; i < 5; i++) t.push(t[i - 1] * r + c);
      var ans = t[4] * r + c;
      var rule = '×' + r + (c ? ' ' + (c > 0 ? '+ ' + c : '− ' + (-c)) : '');
      return pack(R, ans, [ans + r, ans - r, t[4] * r, t[4] * (r + 1), ans + 2 * r + 1], null,
        t.join(', ') + ', ? — अगला पद क्या होगा?',
        SOL(['अंतर तेज़ी से बढ़ रहे हैं, अतः गुणा जाँचें: ' + chain(t, function () { return rule; }) + '।',
          'जाँच: ' + t[0] + ' × ' + r + pm(c) + ' = ' + t[1] + ', ' + t[1] + ' × ' + r + pm(c) + ' = ' + t[2] + ' ✓',
          'अगला पद = ' + t[4] + ' × ' + r + pm(c) + ' = ' + (t[4] * r) + pm(c) + (c ? ' = ' + ans : '') + '।'], ans,
          '', c ? 'केवल ×' + r + ' करने पर ' + (t[4] * r) + ' गलत आता है — ' + pm(c).trim() + ' भी करें।' : ''));
    }
  });

  // 3. वर्ग / घन ± k श्रेणी
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-series-power', title: 'संख्या श्रेणी — वर्ग/घन ± k',
    make: function (R) {
      var p = R.pick([2, 2, 3]), k = R.int(-3, 3), n0 = R.int(1, p === 2 ? 12 : 6);
      var f = function (n) { return Math.pow(n, p) + k; };
      var t = []; for (var i = 0; i < 5; i++) t.push(f(n0 + i));
      var n = n0 + 5, ans = f(n);
      var nm = p === 2 ? 'वर्ग' : 'घन', sup = p === 2 ? '²' : '³';
      return pack(R, ans, [ans + 1, ans - 1, Math.pow(n, p) - k, f(n + 1), ans + 2], null,
        t.join(', ') + ', ? — अगला पद ज्ञात कीजिए।',
        SOL(['पदों को निकटतम पूर्ण ' + nm + ' से तुलना करें: ' + t.map(function (v, i) { return v + ' = ' + (n0 + i) + sup + pm(k); }).join(', ') + '।',
          'नियम: पद = n' + sup + pm(k) + ', जहाँ n = ' + n0 + ', ' + (n0 + 1) + ', ' + (n0 + 2) + ', … क्रमागत है।',
          'अगला n = ' + n + ': ' + n + sup + pm(k) + ' = ' + Math.pow(n, p) + pm(k) + (k ? ' = ' + ans : '') + '।'], ans,
          'पूर्ण ' + nm + ' याद रखें — ' + (p === 2 ? '1 से 30 तक के वर्ग' : '1 से 15 तक के घन') + ' कंठस्थ हों तो ऐसे प्रश्न तुरंत हल होते हैं।'));
    }
  });

  // 4. दो-अंतराल (एकांतर) श्रेणी
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-series-alt', title: 'संख्या श्रेणी — एकांतर (दो श्रेणियाँ मिली हुई)',
    make: function (R) {
      var a = R.int(1, 20), da = R.pick([2, 3, 4, 5, 7]), b = R.int(20, 60), db = R.pick([-3, -2, 5, 6, 10]);
      var t = []; for (var i = 0; i < 7; i++) t.push(i % 2 === 0 ? a + (i / 2) * da : b + ((i - 1) / 2) * db);
      var ans = b + 3 * db; // 8वाँ पद (सम स्थान)
      return pack(R, ans, [a + 4 * da, ans + 1, ans - db, ans + db, t[6] + da], null,
        t.join(', ') + ', ? — अगला पद ज्ञात कीजिए।',
        SOL(['क्रमागत पदों में कोई एक नियम नहीं दिखता, अतः एकांतर (1, 3, 5… और 2, 4, 6…) पद अलग करें।',
          'विषम स्थान (1, 3, 5, 7): ' + chain([t[0], t[2], t[4], t[6]], dsgn) + '।',
          'सम स्थान (2, 4, 6): ' + chain([t[1], t[3], t[5]], dsgn) + '।',
          '? आठवाँ पद है, अर्थात् सम स्थान का: ' + t[5] + pm(db) + ' = ' + ans + '।'], ans,
          '', t[6] + da !== ans ? 'विषम-स्थान श्रेणी का अगला पद (' + (t[6] + da) + ') लेना गलत है — ? सम स्थान पर है।' : '? किस स्थान (सम/विषम) पर है, यह पहले देखें।'));
    }
  });

  // 5. अंतर-श्रेणी (अंतर स्वयं समांतर)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-series-diff', title: 'संख्या श्रेणी — बढ़ता अंतर',
    make: function (R) {
      var x = R.int(1, 30), d0 = R.int(1, 6), c = R.int(1, 5);
      var t = [x], ds = [];
      for (var i = 0; i < 5; i++) { ds.push(d0 + i * c); t.push(t[i] + ds[i]); }
      var ans = t[5];
      var shown = t.slice(0, 5);
      return pack(R, ans, [ans + c, ans - c, ans + 1, shown[4] + ds[3], ans + 2 * c], null,
        shown.join(', ') + ', ? — अगला पद ज्ञात कीजिए।',
        SOL(['क्रमागत अंतर निकालें: ' + chain(shown, dsgn) + '।',
          'अंतर ' + ds.slice(0, 4).join(', ') + ' स्वयं हर बार +' + c + ' बढ़ रहे हैं (दूसरे स्तर का अंतर स्थिर)।',
          'अगला अंतर = ' + ds[3] + ' + ' + c + ' = ' + ds[4] + '; अगला पद = ' + shown[4] + ' + ' + ds[4] + ' = ' + ans + '।'], ans,
          '', 'पिछला अंतर (' + ds[3] + ') दोहराने पर ' + (shown[4] + ds[3]) + ' गलत आता है।'));
    }
  });

  // 6. अक्षर श्रेणी (skip pattern)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-letter-series', title: 'अक्षर श्रेणी — समान छलांग',
    make: function (R) {
      var k = R.pick([1, 2, 3, 4, 5, -1, -2, -3, -4]);
      var p = k > 0 ? R.int(1, 26 - 4 * k) : R.int(1 - 4 * k, 26);
      var t = []; for (var i = 0; i < 4; i++) t.push(letter(p + i * k));
      var ap = p + 4 * k, ans = letter(ap);
      var c = [ap + 1, ap - 1, ap + k, ap - k, ap + 2].filter(function (x) { return x >= 1 && x <= 26; }).map(letter);
      return pack(R, ans, c, function (j) { return letter(ap + 2 + j); },
        t.join(', ') + ', ? — अगला अक्षर ज्ञात कीजिए।',
        SOL(['अक्षरों के स्थान-मान लिखें (A = 1 … Z = 26): ' + t.map(function (x) { return x + ' = ' + pos(x); }).join(', ') + '।',
          'पैटर्न: ' + chain(t.map(pos), dsgn) + ' — हर बार ' + sgn(k) + '।',
          'अगला स्थान = ' + (ap - k) + pm(k) + ' = ' + ap + ' = ' + ans + '।'], ans,
          'EJOTY (E = 5, J = 10, O = 15, T = 20, Y = 25) से स्थान-मान जल्दी निकालें।'));
    }
  });

  // 7. अक्षर स्थान मान (A = 1)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-letter-position', title: 'अक्षर स्थान मान (A = 1 … Z = 26)',
    make: function (R) {
      var type = R.int(0, 2), p = R.int(1, 26), L = letter(p);
      if (type === 0) {
        return pack(R, p, [p + 1, p - 1, 27 - p, p + 2].filter(function (x) { return x >= 1 && x <= 26; }), function (j) { return ((p + 2 + j) % 26) + 1; },
          'अंग्रेज़ी वर्णमाला में अक्षर ' + L + ' का स्थान (बाएँ से) क्या है?',
          SOL(['संदर्भ-बिंदु EJOTY याद रखें: E = 5, J = 10, O = 15, T = 20, Y = 25।',
            (function (ref) { return 'निकटतम संदर्भ अक्षर ' + letter(ref) + ' = ' + ref + (p === ref ? ' — ' + L + ' स्वयं संदर्भ अक्षर है।' : '; ' + letter(ref) + ' से ' + L + ' तक ' + sgn(p - ref) + ' स्थान: ' + ref + pm(p - ref) + ' = ' + p + '।'); })(Math.max(5, Math.min(25, Math.round(p / 5) * 5))),
            L + ' = ' + p + '।'], p, '', 'दाएँ से स्थान (27 − ' + p + ' = ' + (27 - p) + ') पूछा नहीं गया है।'));
      }
      if (type === 1) {
        return pack(R, letter(27 - p), [letter(28 - p), letter(26 - p), L], function (j) { return letter(27 - p + 2 + j); },
          'अंग्रेज़ी वर्णमाला में दाएँ (Z) से ' + p + 'वाँ अक्षर कौन-सा है?',
          SOL(['नियम: दाएँ से n-वाँ अक्षर = बाएँ से (27 − n)-वाँ अक्षर (क्योंकि दोनों स्थानों का योग 27 होता है)।',
            'बाएँ से स्थान = 27 − ' + p + ' = ' + (27 - p) + '।', (27 - p) + 'वाँ अक्षर = ' + letter(27 - p) + '।'], letter(27 - p),
            '', 'बाएँ से ' + p + 'वाँ अक्षर ' + L + ' लेना आम गलती है।'));
      }
      var n = R.int(1, 26), diff = R.int(1, 10);
      var toRight = n + diff <= 26;
      var target = toRight ? n + diff : n - diff; // n > 16 होने पर n − diff ≥ 7
      var dir = toRight ? 'दाईं' : 'बाईं';
      var ans = letter(target);
      return pack(R, ans, [letter(target + 1), letter(target - 1), letter(dir === 'दाईं' ? n - diff : n + diff)], function (j) { return letter(target + 2 + j); },
        'अंग्रेज़ी वर्णमाला में बाएँ से ' + n + 'वें अक्षर के ' + dir + ' ओर ' + diff + 'वाँ अक्षर कौन-सा है?',
        SOL(['बाएँ से ' + n + 'वाँ अक्षर = ' + letter(n) + ' (स्थान ' + n + ')।',
          dir + ' ओर जाने पर स्थान ' + (dir === 'दाईं' ? 'बढ़ता' : 'घटता') + ' है: ' + n + (dir === 'दाईं' ? ' + ' : ' − ') + diff + ' = ' + target + '।',
          target + 'वाँ अक्षर = ' + ans + '।'], ans,
          '', 'उलटी दिशा में गिनने पर ' + letter(dir === 'दाईं' ? n - diff : n + diff) + ' गलत आता है।'));
    }
  });

  // 8. विपरीत अक्षर (A ↔ Z)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-opposite-letter', title: 'विपरीत अक्षर (A ↔ Z, योग 27)',
    make: function (R) {
      if (R.rnd() < 0.5) {
        var p = R.int(1, 26), L = letter(p), ans = letter(27 - p);
        return pack(R, ans, [letter(28 - p), letter(26 - p), letter(p + 13), L], function (j) { return letter(27 - p + 3 + j); },
          'अंग्रेज़ी वर्णमाला में अक्षर ' + L + ' का विपरीत अक्षर कौन-सा है?',
          SOL(['विपरीत अक्षरों (A↔Z, B↔Y, …) के स्थानों का योग सदा 27 होता है।', L + ' का स्थान = ' + p + '।', 'विपरीत का स्थान = 27 − ' + p + ' = ' + (27 - p) + ' = ' + ans + '।'], ans,
            'जोड़ियाँ याद रखें: AZ, BY, CX, DW, EV, FU, GT, HS, IR, JQ, KP, LO, MN।'));
      }
      var w = R.pick(WORDS), out = '';
      for (var i = 0; i < w.length; i++) out += letter(27 - pos(w[i]));
      return pack(R, out, [rev(out), shiftWord(out, 1), shiftWord(out, -1), shiftWord(w, 13)], function (j) { return shiftWord(out, j + 1); },
        'यदि प्रत्येक अक्षर को उसके विपरीत अक्षर (A↔Z, B↔Y …) से बदला जाए, तो ' + w + ' को कैसे लिखेंगे?',
        SOL(['विपरीत अक्षर का स्थान = 27 − अक्षर का स्थान।',
          w.split('').map(function (ch) { return ch + '(' + pos(ch) + ') → 27 − ' + pos(ch) + ' = ' + (27 - pos(ch)) + ' → ' + letter(27 - pos(ch)); }).join('; ') + '।',
          'अक्षरों का क्रम वही रखें: ' + out + '।'], out,
          'जोड़ियाँ याद रखें: AZ, BY, CX, DW, EV, FU, GT, HS, IR, JQ, KP, LO, MN।', 'कूट को उलटे क्रम (' + rev(out) + ') में न लिखें।'));
    }
  });

  // 9. कोडिंग — k अक्षर खिसकाव
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-coding-shift', title: 'कोडिंग-डिकोडिंग — अक्षर खिसकाव',
    make: function (R) {
      var k = R.pick([1, 2, 3, 4, -1, -2, -3]);
      var w1 = R.pick(WORDS), w2 = R.pick(WORDS);
      while (w2 === w1) w2 = R.pick(WORDS);
      var c1 = shiftWord(w1, k), ans = shiftWord(w2, k);
      if (R.rnd() < 0.3) {
        // डिकोडिंग
        return pack(R, w2, [shiftWord(ans, k), shiftWord(w2, 1), shiftWord(w2, -1), rev(w2)], function (j) { return shiftWord(w2, j + 1); },
          'किसी कूट भाषा में ' + w1 + ' को ' + c1 + ' लिखा जाता है। उसी भाषा में ' + ans + ' किस शब्द का कूट है?',
          SOL(['नियम खोजें: ' + w1.split('').map(function (ch, i) { return ch + '(' + pos(ch) + ') → ' + c1[i] + '(' + pos(c1[i]) + ')'; }).join(', ') + ' — प्रत्येक अक्षर ' + sgn(k) + '।',
            'डिकोड के लिए उलटी क्रिया (' + sgn(-k) + ') करें: ' + ans.split('').map(function (ch, i) { return ch + ' → ' + w2[i]; }).join(', ') + '।',
            'मूल शब्द = ' + w2 + '।'], w2,
            '', 'कूट पर फिर से ' + sgn(k) + ' लगाने पर ' + shiftWord(ans, k) + ' गलत आता है — डिकोडिंग में दिशा उलटती है।'));
      }
      return pack(R, ans, [shiftWord(w2, k + 1), shiftWord(w2, k - 1 === 0 ? k + 2 : k - 1), shiftWord(w2, -k), rev(ans)], function (j) { return shiftWord(w2, k + 2 + j); },
        'किसी कूट भाषा में ' + w1 + ' को ' + c1 + ' लिखा जाता है। उसी भाषा में ' + w2 + ' को कैसे लिखेंगे?',
        SOL(['नियम खोजें: ' + w1.split('').map(function (ch, i) { return ch + '(' + pos(ch) + ') → ' + c1[i] + '(' + pos(c1[i]) + ')'; }).join(', ') + ' — प्रत्येक अक्षर ' + sgn(k) + '।',
          'यही नियम ' + w2 + ' पर: ' + w2.split('').map(function (ch, i) { return ch + ' → ' + ans[i]; }).join(', ') + '।',
          'कूट = ' + ans + '।'], ans,
          '', 'Z के बाद फिर A आता है (और A से पहले Z) — वर्णमाला को चक्र मानें।'));
    }
  });

  // 10. रिवर्स कोडिंग (उलटा क्रम, साथ में खिसकाव)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-coding-reverse', title: 'कोडिंग — उलटा क्रम (रिवर्स) ± खिसकाव',
    make: function (R) {
      var k = R.pick([0, 0, 1, 1, -1, 2]);
      var w1 = R.pick(WORDS), w2 = R.pick(WORDS);
      while (w2 === w1) w2 = R.pick(WORDS);
      var c1 = rev(shiftWord(w1, k)), ans = rev(shiftWord(w2, k));
      var rule = k === 0 ? 'शब्द को उलटे क्रम में लिखा गया है' : 'पहले शब्द उलटा, फिर प्रत्येक अक्षर ' + sgn(k);
      return pack(R, ans, [shiftWord(w2, k), rev(shiftWord(w2, k + 1)), rev(shiftWord(w2, k - 1)), rev(w2), shiftWord(w2, k + 1)], function (j) { return rev(shiftWord(w2, k + 2 + j)); },
        'यदि ' + w1 + ' को ' + c1 + ' लिखा जाता है, तो ' + w2 + ' को कैसे लिखेंगे?',
        SOL(['नियम खोजें: ' + w1 + ' को उलटा लिखने पर ' + rev(w1) + (k ? '; फिर प्रत्येक अक्षर ' + sgn(k) + ': ' + rev(w1) + ' → ' + c1 : ' — यही दिया गया कूट है') + '। (नियम: ' + rule + ')',
          w2 + ' को उलटा लिखें: ' + rev(w2) + '।',
          k ? 'प्रत्येक अक्षर ' + sgn(k) + ': ' + rev(w2).split('').map(function (ch, i) { return ch + ' → ' + ans[i]; }).join(', ') + ' ⇒ ' + ans + '।' : 'कोई खिसकाव नहीं, अतः कूट = ' + ans + '।'], ans,
          '', k ? 'केवल उलटना (' + rev(w2) + ') या केवल खिसकाना (' + shiftWord(w2, k) + ') अधूरा नियम है।' : ''));
    }
  });

  // 11. संख्या सादृश्यता
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-num-analogy', title: 'संख्या सादृश्यता (n : n² + k, n³ + k, n(n+1))',
    make: function (R) {
      var type = R.int(0, 2), k = R.int(-3, 4);
      var f, desc;
      if (type === 0) { f = function (n) { return n * n + k; }; desc = 'n²' + (k ? (k > 0 ? ' + ' + k : ' − ' + (-k)) : ''); }
      else if (type === 1) { f = function (n) { return n * n * n + k; }; desc = 'n³' + (k ? (k > 0 ? ' + ' + k : ' − ' + (-k)) : ''); }
      else { f = function (n) { return n * (n + 1); }; desc = 'n × (n + 1)'; }
      var hi = type === 1 ? 10 : 25;
      var a = R.int(2, hi), b = R.int(2, hi);
      while (b === a) b = R.int(2, hi);
      var ans = f(b);
      return pack(R, ans, [ans + 1, ans - 1, b * b, b * b * b, ans + b, ans - 2], null,
        a + ' : ' + f(a) + ' :: ' + b + ' : ?',
        SOL(['पहले युग्म में संबंध खोजें: ' + a + ' → ' + f(a) + '। ' + (type === 2 ? a + ' × ' + (a + 1) + ' = ' + f(a) : a + (type === 0 ? '²' : '³') + pm(k) + ' = ' + (type === 0 ? a * a : a * a * a) + pm(k) + (k ? ' = ' + f(a) : '')) + ' ✓',
          'नियम: n → ' + desc + '।',
          'यही नियम ' + b + ' पर: ' + (type === 2 ? b + ' × ' + (b + 1) : b + (type === 0 ? '²' : '³') + pm(k) + (k ? ' = ' + (type === 0 ? b * b : b * b * b) + pm(k) : '')) + ' = ' + ans + '।'], ans,
          '', type < 2 && k ? 'केवल ' + (type === 0 ? 'वर्ग' : 'घन') + ' (' + (type === 0 ? b * b : b * b * b) + ') लेना अधूरा है — ' + pm(k).trim() + ' भी करें।' : ''));
    }
  });

  // 12. विषम संख्या पहचानना
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-odd-number', title: 'विषम संख्या पहचानना (अभाज्य/वर्ग/घन/गुणज)',
    make: function (R) {
      var type = R.int(0, 3), group = [], odd, why;
      if (type === 0) {
        var primes = []; for (var i = 11; i < 100; i++) if (isPrime(i)) primes.push(i);
        group = R.shuffle(primes).slice(0, 3);
        odd = R.pick([21, 27, 33, 39, 49, 51, 57, 63, 69, 77, 81, 87, 91, 93, 95, 99]);
        var fct = 0; for (var j = 2; j < odd; j++) if (odd % j === 0) { fct = j; break; }
        why = group.join(', ') + ' अभाज्य हैं; ' + odd + ' = ' + fct + ' × ' + (odd / fct) + ' भाज्य है।';
      } else if (type === 1) {
        var ns = R.shuffle([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]).slice(0, 4);
        group = ns.slice(0, 3).map(function (n) { return n * n; });
        odd = ns[3] * ns[3] + R.pick([-2, -1, 1, 2, 3]);
        why = group.map(function (g) { return g + ' = ' + Math.round(Math.sqrt(g)) + '²'; }).join(', ') + ' पूर्ण वर्ग हैं; ' + odd + ' पूर्ण वर्ग नहीं।';
      } else if (type === 2) {
        var cs = R.shuffle([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).slice(0, 4);
        group = cs.slice(0, 3).map(function (n) { return n * n * n; });
        odd = cs[3] * cs[3] * cs[3] + R.pick([-2, -1, 1, 2, 4]);
        why = group.map(function (g) { return g + ' = ' + Math.round(Math.cbrt(g)) + '³'; }).join(', ') + ' पूर्ण घन हैं; ' + odd + ' पूर्ण घन नहीं।';
      } else {
        var m = R.int(6, 13), ms = R.shuffle([3, 4, 5, 6, 7, 8, 9, 10, 11]).slice(0, 4);
        group = ms.slice(0, 3).map(function (n) { return n * m; });
        odd = ms[3] * m + R.int(1, m - 1);
        why = group.join(', ') + ' संख्या ' + m + ' के गुणज हैं; ' + odd + ' ÷ ' + m + ' पर शेष ' + (odd % m) + ' बचता है।';
      }
      var all = R.shuffle(group.concat([odd]));
      var prop = ['अभाज्य संख्या', 'पूर्ण वर्ग', 'पूर्ण घन', m + ' का गुणज'][type];
      return pack(R, odd, group, null, 'विषम संख्या चुनिए — ' + all.join(', '),
        SOL(['हर संख्या की विशेषता जाँचें (अभाज्य? पूर्ण वर्ग? पूर्ण घन? किसी संख्या का गुणज?)।', why,
          'तीन संख्याएँ "' + prop + '" समूह की हैं, केवल ' + odd + ' नहीं — अतः यही विषम है।'], odd));
    }
  });

  // 13. दिशा एवं दूरी
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-direction', title: 'दिशा एवं दूरी (पाइथागोरस त्रिक)',
    make: function (R) {
      var tr = R.pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25], [12, 16, 20], [15, 20, 25]]);
      if (R.rnd() < 0.5) tr = [tr[1], tr[0], tr[2]];
      var a = tr[0], b = tr[1], c = tr[2];
      var unit = R.pick(['km', 'm']);
      var d0 = R.int(0, 3), right = R.rnd() < 0.5, t = R.pick([0, 0, 2, 3, 5]);
      var d1 = (d0 + (right ? 1 : 3)) % 4, d2 = (d0 + 2) % 4;
      var L1 = a + t;
      var x = DV[d0][0] * L1 + DV[d1][0] * b + DV[d2][0] * t;
      var y = DV[d0][1] * L1 + DV[d1][1] * b + DV[d2][1] * t;
      var dirName = function (X, Y) { return (Y > 0 ? 'उत्तर' : 'दक्षिण') + '-' + (X > 0 ? 'पूर्व' : 'पश्चिम'); };
      var turn = right ? 'दाएँ' : 'बाएँ';
      var q = 'एक व्यक्ति ' + DISHA[d0] + ' की ओर ' + L1 + ' ' + unit + ' चलता है, फिर ' + turn + ' मुड़कर ' + b + ' ' + unit + ' चलता है' +
        (t ? ', फिर पुनः ' + turn + ' मुड़कर ' + t + ' ' + unit + ' चलता है' : '') + '। अब वह प्रारंभिक बिंदु से कितनी दूर और किस दिशा में है?';
      var ans = c + ' ' + unit + ', ' + dirName(x, y);
      var mv = function (d, L) { return DISHA[d] + ' ' + L + ' ' + unit + ' (' + (DV[d][0] ? 'x ' + (DV[d][0] > 0 ? '+' : '−') + L : 'y ' + (DV[d][1] > 0 ? '+' : '−') + L) + ')'; };
      var e = SOL(['मूल बिंदु (0, 0) से शुरू; पूर्व = +x, उत्तर = +y मानें।',
        'पहली चाल: ' + mv(d0, L1) + '।',
        turn + ' मुड़ने पर ' + DISHA[d0] + ' → ' + DISHA[d1] + '; दूसरी चाल: ' + mv(d1, b) + '।' + (t ? '<br>फिर ' + turn + ' मुड़ने पर ' + DISHA[d1] + ' → ' + DISHA[d2] + '; तीसरी चाल: ' + mv(d2, t) + ' — यह पहली चाल के ' + t + ' ' + unit + ' को काट देती है।' : ''),
        'अंतिम बिंदु = (' + minus(x) + ', ' + minus(y) + ')।',
        'दूरी = √(' + (x < 0 ? '(' + minus(x) + ')' : x) + '² + ' + (y < 0 ? '(' + minus(y) + ')' : y) + '²) = √(' + (x * x) + ' + ' + (y * y) + ') = √' + (c * c) + ' = ' + c + ' ' + unit + '।',
        'दिशा: x ' + (x > 0 ? 'धनात्मक (पूर्व)' : 'ऋणात्मक (पश्चिम)') + ', y ' + (y > 0 ? 'धनात्मक (उत्तर)' : 'ऋणात्मक (दक्षिण)') + ' ⇒ ' + dirName(x, y) + '।'], ans,
        'पाइथागोरस त्रिक (' + a + ', ' + b + ', ' + c + ') पहचानें — वर्गमूल निकालने की ज़रूरत नहीं।',
        'कुल चली दूरी (' + (L1 + b + t) + ') विस्थापन नहीं है; दिशा प्रारंभिक बिंदु के सापेक्ष बताई जाती है।');
      return pack(R, ans, [c + ' ' + unit + ', ' + dirName(-x, -y), (L1 + b + t) + ' ' + unit + ', ' + dirName(x, y), c + ' ' + unit + ', ' + dirName(-x, y), c + ' ' + unit + ', ' + dirName(x, -y)],
        function (j) { return (c + j) + ' ' + unit + ', ' + dirName(x, y); }, q, e);
    }
  });

  // 14. घड़ी — सुइयों के बीच कोण
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-clock-angle', title: 'घड़ी — सुइयों के बीच का कोण',
    make: function (R) {
      var h = R.int(1, 12), m = R.int(0, 59);
      var raw = Math.abs(30 * h - 5.5 * m), ang = raw > 180 ? 360 - raw : raw;
      var fmt = function (v) { return String(v) + '°'; };
      var alt1 = Math.abs(30 * h - 6 * m); alt1 = alt1 > 180 ? 360 - alt1 : alt1;
      var alt2 = Math.abs(30 * h - 5 * m); alt2 = alt2 > 180 ? 360 - alt2 : alt2;
      var cands = [fmt(alt1), fmt(alt2), fmt(360 - ang), fmt(ang + 30), fmt(Math.abs(ang - 30))];
      var mm = (m < 10 ? '0' : '') + m;
      var e = SOL(['सूत्र: θ = |30H − 5.5M| (मिनट की सुई 6°/मिनट, घंटे की सुई 0.5°/मिनट चलती है; अंतर 5.5°/मिनट)।',
        'H = ' + h + ', M = ' + m + ': |30 × ' + h + ' − 5.5 × ' + m + '| = |' + (30 * h) + ' − ' + (5.5 * m) + '| = ' + raw + '°।',
        raw > 180 ? 'यह 180° से अधिक है, अतः छोटा कोण = 360° − ' + raw + '° = ' + ang + '°।' : 'यह 180° से कम है, अतः यही छोटा कोण है।'], fmt(ang),
        'मिनट की सुई = 6 × ' + m + ' = ' + (6 * m) + '°, घंटे की सुई = 30 × ' + (h % 12) + ' + ' + m + '/2 = ' + (30 * (h % 12) + m / 2) + '° (12 बजे से); दोनों का अंतर लें।',
        'घंटे की सुई का खिसकना (M/2) भूलने पर ' + fmt(alt1) + ' जैसा गलत उत्तर आता है।');
      return pack(R, fmt(ang), cands, function (j) { return fmt(ang + 5 * j + 2.5); },
        h + ':' + mm + ' बजे घड़ी की घंटे और मिनट की सुइयों के बीच का छोटा कोण कितना है?', e);
    }
  });

  // 15. कैलेंडर — तारीख़ का दिन
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-calendar', title: 'कैलेंडर — किसी तारीख़ का दिन (विषम दिन विधि)',
    make: function (R) {
      var y = R.int(1901, 2099), m = R.int(1, 12), d = R.int(1, mdays(y, m));
      var Y = y - 1, Y4 = Y % 400, cen = Math.floor(Y4 / 100), yrs = Y4 % 100, lp = Math.floor(yrs / 4);
      var cOdd = [0, 5, 3, 1][cen];
      var before = 0; for (var i = 1; i < m; i++) before += mdays(y, i);
      var dayNo = before + d;
      var total = cOdd + yrs + lp + dayNo, w = total % 7;
      var check = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
      if (check !== w) w = check; // सुरक्षा: JS Date (UTC) से पुष्टि
      var ans = VAR[w];
      var mParts = []; for (var i3 = 1; i3 < m; i3++) mParts.push(mdays(y, i3) + ' (' + MAAH[i3 - 1] + ')');
      var e = SOL(['विषम दिन विधि: ' + d + ' ' + MAAH[m - 1] + ' ' + y + ' से पहले के पूरे ' + (y - 1) + ' वर्ष + इस वर्ष के दिन गिनें। (400 वर्ष = 0, 100 = 5, 200 = 3, 300 = 1 विषम दिन)',
        (y - 1) + ' वर्ष = ' + (Y - Y4) + ' वर्ष (0 विषम दिन)' + (cen ? ' + ' + (cen * 100) + ' वर्ष (' + cOdd + ' विषम दिन)' : '') + ' + ' + yrs + ' वर्ष।',
        yrs + ' वर्षों में ' + lp + ' लीप वर्ष और ' + (yrs - lp) + ' साधारण ⇒ विषम दिन = ' + lp + ' × 2 + ' + (yrs - lp) + ' × 1 = ' + (yrs + lp) + '।',
        y + ' में ' + d + ' ' + MAAH[m - 1] + ' तक दिन = ' + (mParts.length ? mParts.join(' + ') + ' + ' + d : d) + ' = ' + dayNo + (leap(y) && m > 2 ? ' (' + y + ' लीप वर्ष — फ़रवरी 29)' : '') + '।',
        'कुल = ' + cOdd + ' + ' + (yrs + lp) + ' + ' + dayNo + ' = ' + total + '; ' + total + ' ÷ 7 का शेष = ' + (total % 7) + '।',
        'शेष ' + (total % 7) + ' ⇒ ' + ans + ' (0 = रविवार, 1 = सोमवार, 2 = मंगलवार, 3 = बुधवार, 4 = गुरुवार, 5 = शुक्रवार, 6 = शनिवार)।'], ans,
        'बड़ी संख्याओं को पहले ही 7 से भाग देकर शेष रखें — गणना छोटी रहती है।', 'जिस वर्ष की तारीख़ है, उसे पूरे वर्षों में न गिनें — केवल ' + (y - 1) + ' तक के वर्ष पूरे हैं।');
      return pack(R, ans, [VAR[(w + 1) % 7], VAR[(w + 6) % 7], VAR[(w + 2) % 7], VAR[(w + 5) % 7]], function (j) { return VAR[(w + 3 + j) % 7]; },
        d + ' ' + MAAH[m - 1] + ' ' + y + ' को सप्ताह का कौन-सा दिन था/होगा?', e);
    }
  });

  // 16. क्रम एवं रैंकिंग
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-ranking', title: 'क्रम एवं रैंकिंग',
    make: function (R) {
      var type = R.int(0, 2);
      if (type === 0) {
        var p = R.int(3, 40), q = R.int(3, 40), ans = p + q - 1;
        return pack(R, ans, [p + q, p + q - 2, p + q + 1], null,
          'एक पंक्ति में राहुल बाएँ से ' + p + 'वें और दाएँ से ' + q + 'वें स्थान पर है। पंक्ति में कुल कितने व्यक्ति हैं?',
          SOL(['राहुल के बाईं ओर ' + (p - 1) + ' व्यक्ति और दाईं ओर ' + (q - 1) + ' व्यक्ति हैं।', 'कुल = ' + (p - 1) + ' + ' + (q - 1) + ' + 1 (राहुल स्वयं) = ' + ans + '।'], ans,
            'कुल = बाएँ से स्थान + दाएँ से स्थान − 1 = ' + p + ' + ' + q + ' − 1 = ' + ans + '।', 'केवल ' + p + ' + ' + q + ' = ' + (p + q) + ' लेने पर राहुल दो बार गिना जाता है।'));
      }
      if (type === 1) {
        var N = R.int(20, 70), l = R.int(2, N - 1), r = N - l + 1;
        return pack(R, r, [N - l, N - l + 2, l], null,
          N + ' छात्रों की कक्षा में सीमा का स्थान ऊपर से ' + l + 'वाँ है। नीचे से उसका स्थान क्या है?',
          SOL(['सीमा से ऊपर ' + (l - 1) + ' छात्र हैं; अतः उससे नीचे = ' + N + ' − ' + (l - 1) + ' − 1 = ' + (N - l) + ' छात्र।', 'नीचे से स्थान = नीचे वाले छात्र + 1 = ' + (N - l) + ' + 1 = ' + r + '।'], r,
            'नीचे से स्थान = कुल − ऊपर से स्थान + 1 = ' + N + ' − ' + l + ' + 1 = ' + r + '।', '+1 भूलने पर ' + (N - l) + ' गलत आता है।'));
      }
      var T = R.int(25, 60), a = R.int(3, 12), bR = R.int(3, 12), bL = T - bR + 1;
      var bet = bL - a - 1;
      return pack(R, bet, [bet + 1, bet - 1, bet + 2, T - a - bR], null,
        T + ' व्यक्तियों की पंक्ति में A बाएँ से ' + a + 'वाँ और B दाएँ से ' + bR + 'वाँ है। A और B के बीच कितने व्यक्ति हैं?',
        SOL(['B का स्थान बाएँ से निकालें: ' + T + ' − ' + bR + ' + 1 = ' + bL + 'वाँ।', 'A बाएँ से ' + a + 'वाँ, B बाएँ से ' + bL + 'वाँ — A, B के बाईं ओर है।',
          'बीच में व्यक्ति = ' + bL + ' − ' + a + ' − 1 = ' + bet + '।'], bet,
          'बीच के व्यक्ति = कुल − (A का बाएँ से स्थान + B का दाएँ से स्थान) = ' + T + ' − (' + a + ' + ' + bR + ') = ' + bet + '।', 'दोनों स्थानों का अंतर (' + (bL - a) + ') लेने पर एक व्यक्ति अधिक गिना जाता है।'));
    }
  });

  // 17. चिह्न प्रतिस्थापन (BODMAS)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-symbol-sub', title: 'चिह्न प्रतिस्थापन — BODMAS',
    make: function (R) {
      var OPS = ['+', '−', '×', '÷'];
      // वास्तविक व्यंजक: 4 संक्रियाएँ, 5 संख्याएँ — पूर्णांक परिणाम मिलने तक प्रयास
      function evalTok(nums, ops) {
        var vals = [nums[0]], os = [];
        for (var i = 0; i < ops.length; i++) {
          var o = ops[i], n = nums[i + 1];
          if (o === '×') vals[vals.length - 1] *= n;
          else if (o === '÷') { var top = vals[vals.length - 1]; if (top % n !== 0) return null; vals[vals.length - 1] = top / n; }
          else { os.push(o); vals.push(n); }
        }
        var res = vals[0];
        for (var j = 0; j < os.length; j++) res = os[j] === '+' ? res + vals[j + 1] : res - vals[j + 1];
        return res;
      }
      var nums, ops, val = null, tries = 0;
      while (val === null || val < 0) {
        ops = R.shuffle(OPS);
        nums = [R.int(2, 30), R.int(2, 12), R.int(2, 12), R.int(2, 12), R.int(2, 12)];
        var di = ops.indexOf('÷');
        if (di === 0 || ops[di - 1] === '+' || ops[di - 1] === '−') nums[di] = nums[di + 1] * R.int(1, 9);
        else nums[di - 1] = nums[di + 1] * R.int(1, 4); // × से पहले वाली संख्या समायोजित
        val = evalTok(nums, ops);
        if (++tries > 200) { ops = ['×', '÷', '+', '−']; nums = [6, 4, 3, 5, 2]; val = evalTok(nums, ops); }
      }
      // मानचित्र: दिखाया गया चिह्न → वास्तविक अर्थ (कोई चिह्न अपने ही अर्थ में नहीं)
      var perm;
      do { perm = R.shuffle(OPS); } while (perm.some(function (p, i) { return p === OPS[i]; }));
      var meaning = {}, shownFor = {};
      OPS.forEach(function (s, i) { meaning[s] = perm[i]; shownFor[perm[i]] = s; });
      var disp = String(nums[0]), real = String(nums[0]);
      for (var i = 0; i < 4; i++) { disp += ' ' + shownFor[ops[i]] + ' ' + nums[i + 1]; real += ' ' + ops[i] + ' ' + nums[i + 1]; }
      var lit = evalTok(nums, OPS.map(function () { return ''; }).map(function (_, i) { return shownFor[ops[i]]; }));
      var cands = [lit === null ? '' : lit, val + 1, val - 1, val + nums[4], val + 2];
      return pack(R, val, cands, null,
        'यदि ' + OPS.map(function (s) { return '"' + s + '" का अर्थ "' + meaning[s] + '"'; }).join(', ') + ' हो, तो ' + disp + ' = ?',
        (function () {
          // BODMAS के हर कदम के बाद का व्यंजक
          var N = nums.slice(), O = ops.slice(), seq = [];
          var show = function () { var s = minus(N[0]); for (var z = 0; z < O.length; z++) s += ' ' + O[z] + ' ' + N[z + 1]; return s; };
          var i4;
          while ((i4 = O.findIndex(function (o) { return o === '×' || o === '÷'; })) >= 0) {
            var v = O[i4] === '×' ? N[i4] * N[i4 + 1] : N[i4] / N[i4 + 1];
            var what = N[i4] + ' ' + O[i4] + ' ' + N[i4 + 1] + ' = ' + v;
            N.splice(i4, 2, v); O.splice(i4, 1); seq.push(what + ' ⇒ ' + show());
          }
          while (O.length) {
            var v2 = O[0] === '+' ? N[0] + N[1] : N[0] - N[1];
            var what2 = minus(N[0]) + ' ' + O[0] + ' ' + N[1] + ' = ' + minus(v2);
            N.splice(0, 2, v2); O.splice(0, 1); seq.push(what2 + (O.length ? ' ⇒ ' + show() : ''));
          }
          return SOL(['चिह्नों के अर्थ लगाएँ: ' + OPS.map(function (s) { return s + ' → ' + meaning[s]; }).join(', ') + '।',
            'वास्तविक व्यंजक: ' + disp + ' ⇒ ' + real + '।',
            'BODMAS: पहले ÷ और × (बाएँ से दाएँ), फिर + और − (बाएँ से दाएँ):<br>' + seq.join('<br>')], val,
            '', 'दिए गए चिह्नों से सीधे हल करना या बाएँ से दाएँ बिना BODMAS हल करना गलत है।');
        })());
    }
  });

  // 18. आयु आधारित
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-age', title: 'आयु आधारित तर्क',
    make: function (R) {
      var r = R.int(2, 4), b = R.int(4, 15), t = R.int(2, 10);
      var aP = r * b, diff = aP - b, A = aP + t, B = b + t;
      var askA = R.rnd() < 0.5;
      var ans = askA ? A : B;
      return pack(R, ans, askA ? [aP, A + t, B, A + 1] : [b, B + t, A, B + 1], null,
        t + ' वर्ष पहले राम की आयु श्याम की आयु की ' + r + ' गुनी थी। आज राम, श्याम से ' + diff + ' वर्ष बड़ा है। ' + (askA ? 'राम' : 'श्याम') + ' की वर्तमान आयु कितनी है?',
        SOL(['आयु का अंतर कभी नहीं बदलता — ' + t + ' वर्ष पहले भी राम, श्याम से ' + diff + ' वर्ष बड़ा था।',
          'माना तब श्याम = x; राम = ' + r + 'x ⇒ अंतर = ' + r + 'x − x = ' + (r - 1 === 1 ? 'x' : (r - 1) + 'x') + ' = ' + diff + ' ⇒ x = ' + b + '।',
          t + ' वर्ष पहले: श्याम = ' + b + ', राम = ' + r + ' × ' + b + ' = ' + aP + '।',
          'आज (' + t + ' वर्ष जोड़ें): राम = ' + aP + ' + ' + t + ' = ' + A + ', श्याम = ' + b + ' + ' + t + ' = ' + B + '।'], ans + (askA ? ' (राम)' : ' (श्याम)'),
          '', t + ' वर्ष पहले की आयु (' + (askA ? aP : b) + ') वर्तमान आयु नहीं है — ' + t + ' जोड़ना न भूलें।'));
    }
  });

  // 19. शब्द का अक्षर-मान योग
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-word-sum', title: 'कोडिंग — अक्षरों के स्थान मानों का योग',
    make: function (R) {
      var w1 = R.pick(WORDS), w2 = R.pick(WORDS);
      while (w2 === w1) w2 = R.pick(WORDS);
      var sum = function (w) { var s = 0; for (var i = 0; i < w.length; i++) s += pos(w[i]); return s; };
      var ans = sum(w2);
      return pack(R, ans, [ans + 1, ans - 1, ans + w2.length, ans - 2, ans + 3], null,
        'यदि किसी कूट में ' + w1 + ' = ' + sum(w1) + ' है, तो उसी कूट में ' + w2 + ' = ?',
        SOL(['स्थान-मान लिखें (A = 1 … Z = 26): ' + w1 + ' → ' + w1.split('').map(function (c) { return c + '(' + pos(c) + ')'; }).join(' ') + '।',
          'योग = ' + w1.split('').map(pos).join(' + ') + ' = ' + sum(w1) + ' — यही दिया गया कूट है; अतः नियम: कूट = अक्षरों के स्थान-मानों का योग।',
          w2 + ' → ' + w2.split('').map(function (c) { return c + '(' + pos(c) + ')'; }).join(' ') + '; योग = ' + w2.split('').map(pos).join(' + ') + ' = ' + ans + '।'], ans,
          'EJOTY (E = 5, J = 10, O = 15, T = 20, Y = 25) से स्थान-मान जल्दी निकालें।'));
    }
  });

  // ================= दूसरा दौर: नए जनरेटर =================
  function ordA(n) { return ({ 1: 'पहला', 2: 'दूसरा', 3: 'तीसरा', 4: 'चौथा', 6: 'छठा' })[n] || n + 'वाँ'; }
  function ordO(n) { return ({ 1: 'पहले', 2: 'दूसरे', 3: 'तीसरे', 4: 'चौथे', 6: 'छठे' })[n] || n + 'वें'; }

  // 20. रक्त संबंध — वास्तविक वंश-वृक्ष से बनी कड़ी
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-blood-chain', title: 'रक्त संबंध — संबंधों की कड़ी',
    make: function (R) {
      // तीन पीढ़ियों का वृक्ष: दादा-दादी → 3 संतान (प्रत्येक विवाहित) → प्रत्येक की 2 संतान
      function build() {
        var P = [];
        function add(sex, f, m) { var o = { id: P.length, sex: sex, f: f, m: m, sp: null }; P.push(o); return o; }
        var g1 = add('m', null, null), g2 = add('f', null, null); g1.sp = g2.id; g2.sp = g1.id;
        for (var i = 0; i < 3; i++) {
          var c = add(R.rnd() < 0.5 ? 'm' : 'f', g1.id, g2.id);
          var s = add(c.sex === 'm' ? 'f' : 'm', null, null); c.sp = s.id; s.sp = c.id;
          var fa = c.sex === 'm' ? c : s, mo = c.sex === 'm' ? s : c;
          for (var j = 0; j < 2; j++) add(R.rnd() < 0.5 ? 'm' : 'f', fa.id, mo.id);
        }
        return P;
      }
      var P = build();
      function par(x) { var r = []; if (x.f !== null) r.push(P[x.f]); if (x.m !== null) r.push(P[x.m]); return r; }
      function kids(x) { return P.filter(function (k) { return k.f === x.id || k.m === x.id; }); }
      function sibs(x) { return x.f === null ? [] : P.filter(function (k) { return k.id !== x.id && k.f === x.f; }); }
      function has(arr, x) { return arr.some(function (k) { return k.id === x.id; }); }
      function M(x, a, b) { return x.sex === 'm' ? a : b; }
      // X का Y से संबंध (नियत शब्दावली)
      function rel(X, Y) {
        if (Y.sp === X.id) return M(X, 'पति', 'पत्नी');
        if (has(par(Y), X)) return M(X, 'पिता', 'माता');
        if (has(par(X), Y)) return M(X, 'पुत्र', 'पुत्री');
        if (has(sibs(Y), X)) return M(X, 'भाई', 'बहन');
        var i, p, s, k;
        var py = par(Y);
        for (i = 0; i < py.length; i++) {
          p = py[i];
          if (has(par(p), X)) return p.sex === 'm' ? M(X, 'दादा', 'दादी') : M(X, 'नाना', 'नानी');
          if (has(sibs(p), X)) return p.sex === 'm' ? M(X, 'चाचा', 'बुआ') : M(X, 'मामा', 'मौसी');
          var ps = sibs(p);
          for (var j = 0; j < ps.length; j++) {
            s = ps[j];
            if (s.sp === X.id) return p.sex === 'm' ? (s.sex === 'm' ? 'चाची' : 'फूफा') : (s.sex === 'm' ? 'मामी' : 'मौसा');
            if (has(kids(s), X)) {
              var pre = p.sex === 'm' ? (s.sex === 'm' ? 'चचेर' : 'फुफेर') : (s.sex === 'm' ? 'ममेर' : 'मौसेर');
              return X.sex === 'm' ? pre + 'ा भाई' : pre + 'ी बहन';
            }
          }
        }
        var ky = kids(Y);
        for (i = 0; i < ky.length; i++) {
          k = ky[i];
          if (has(kids(k), X)) return k.sex === 'm' ? M(X, 'पौत्र', 'पौत्री') : M(X, 'नाती', 'नातिन');
          if (k.sp === X.id) return M(X, 'दामाद', 'बहू');
        }
        var sy = sibs(Y);
        for (i = 0; i < sy.length; i++) {
          s = sy[i];
          if (has(kids(s), X)) return s.sex === 'm' ? M(X, 'भतीजा', 'भतीजी') : M(X, 'भांजा', 'भांजी');
          if (s.sp === X.id) return M(X, 'जीजा', 'भाभी');
        }
        if (Y.sp !== null && has(par(P[Y.sp]), X)) return M(X, 'ससुर', 'सास');
        return null;
      }
      // पथ में प्रयुक्त मूल संबंध (केवल पिता/माता/पुत्र/पुत्री/भाई/बहन/पति/पत्नी)
      var BASIC = { 'पति': 1, 'पत्नी': 1, 'पिता': 1, 'माता': 1, 'पुत्र': 1, 'पुत्री': 1, 'भाई': 1, 'बहन': 1 };
      function nbrs(x) { var r = par(x).concat(kids(x), sibs(x)); if (x.sp !== null) r.push(P[x.sp]); return r; }
      var path, ans, tries = 0;
      do {
        var len = R.int(2, 3), cur = P[R.int(0, P.length - 1)];
        path = [cur];
        var ok = true;
        for (var st = 0; st < len; st++) {
          var nb = nbrs(cur).filter(function (n) { return !path.some(function (q) { return q.id === n.id; }); });
          if (!nb.length) { ok = false; break; }
          cur = R.pick(nb); path.push(cur);
        }
        ans = null;
        if (ok) {
          // हर बीच का व्यक्ति पिछले से जुड़ा नहीं होना चाहिए (छोटा रास्ता नहीं) — पहले/अंतिम सीधे संबंधित न हों
          ans = rel(path[0], path[path.length - 1]);
          if (ans && BASIC[ans] && path.length === 4 && R.rnd() < 0.7) ans = null; // लंबी कड़ी में रोचक उत्तर को वरीयता
          for (var t = 1; ans && t < path.length; t++) if (rel(path[0], path[t]) === null) ans = null;
        }
      } while (!ans && ++tries < 500);
      var names = R.shuffle(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K', 'M', 'P', 'Q', 'R', 'S', 'T']).slice(0, path.length);
      var X = path[0];
      var MALE = ['पिता', 'पुत्र', 'भाई', 'पति', 'दादा', 'नाना', 'पौत्र', 'नाती', 'चाचा', 'मामा', 'फूफा', 'मौसा', 'भतीजा', 'भांजा', 'ससुर', 'दामाद', 'जीजा', 'चचेरा भाई', 'ममेरा भाई', 'फुफेरा भाई', 'मौसेरा भाई'];
      var FEMALE = ['माता', 'पुत्री', 'बहन', 'पत्नी', 'दादी', 'नानी', 'पौत्री', 'नातिन', 'बुआ', 'मौसी', 'चाची', 'मामी', 'भतीजी', 'भांजी', 'सास', 'बहू', 'भाभी', 'चचेरी बहन', 'ममेरी बहन', 'फुफेरी बहन', 'मौसेरी बहन'];
      var stm = [], steps = [];
      var FEM = { 'माता': 1, 'पुत्री': 1, 'बहन': 1, 'पत्नी': 1 };
      for (var i = 0; i < path.length - 1; i++) {
        var r1 = rel(path[i], path[i + 1]);
        stm.push(names[i] + ', ' + names[i + 1] + ' ' + (FEM[r1] ? 'की' : 'का') + ' ' + r1 + ' है');
      }
      for (var i2 = 1; i2 < path.length - 1; i2++) {
        var r2 = rel(path[0], path[i2 + 1]);
        steps.push(names[0] + ', ' + names[i2 + 1] + ' ' + (FEMALE.indexOf(r2) >= 0 ? 'की' : 'का') + ' ' + r2);
      }
      var pool = R.shuffle(X.sex === 'm' ? MALE : FEMALE);
      var GEN = { 'दादा': 2, 'दादी': 2, 'नाना': 2, 'नानी': 2, 'पिता': 1, 'माता': 1, 'चाचा': 1, 'बुआ': 1, 'मामा': 1, 'मौसी': 1, 'चाची': 1, 'फूफा': 1, 'मामी': 1, 'मौसा': 1, 'ससुर': 1, 'सास': 1,
        'पुत्र': -1, 'पुत्री': -1, 'भतीजा': -1, 'भतीजी': -1, 'भांजा': -1, 'भांजी': -1, 'दामाद': -1, 'बहू': -1, 'पौत्र': -2, 'पौत्री': -2, 'नाती': -2, 'नातिन': -2 };
      var gl = [0];   // path[0] के सापेक्ष हर व्यक्ति की पीढ़ी (+ = ऊपर)
      for (var g3 = 1; g3 < path.length; g3++) gl.push(-(GEN[rel(path[0], path[g3])] || 0));
      var genTxt = path.map(function (p, i) { return names[i] + ' (' + (gl[i] === 0 ? 'पीढ़ी 0' : 'पीढ़ी ' + (gl[i] > 0 ? '+' : '−') + Math.abs(gl[i])) + ', ' + (p.sex === 'm' ? 'पुरुष' : 'स्त्री') + ')'; }).join(', ');
      var e = SOL(['कथनों को क्रम से लिखें: ' + stm.join('; ') + '।',
        'लिंग पहचानें (पिता/पुत्र/भाई/पति = पुरुष; माता/पुत्री/बहन/पत्नी = स्त्री) और ' + names[0] + ' को पीढ़ी 0 मानकर पीढ़ी-क्रम लिखें (+ = ऊपर की पीढ़ी): ' + genTxt + '।',
        'कड़ियाँ जोड़ें: ' + steps.join(' ⇒ ') + '।',
        names[0] + ' ' + (X.sex === 'm' ? 'पुरुष' : 'स्त्री') + ' है और ' + names[path.length - 1] + ' से ' + (gl[path.length - 1] === 0 ? 'उसी पीढ़ी में' : Math.abs(gl[path.length - 1]) + ' पीढ़ी ' + (gl[path.length - 1] > 0 ? 'नीचे' : 'ऊपर')) + ' है ⇒ संबंध = ' + ans + '।'], ans,
        'छोटा वंश-वृक्ष बनाएँ: पुरुष के लिए +, स्त्री के लिए −, पति-पत्नी के लिए =, और पीढ़ियाँ ऊपर-नीचे।', 'संबंध "' + names[0] + ' का ' + names[path.length - 1] + ' से" पूछा है — दिशा उलटने पर उत्तर बदल जाता है।');
      return pack(R, ans, pool, null,
        stm.join('। ') + '। तो ' + names[0] + ' का ' + names[path.length - 1] + ' से क्या संबंध है?', e);
    }
  });

  // 21. बैठक व्यवस्था — 5 व्यक्ति एक पंक्ति में (उत्तरमुखी)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-seating-linear', title: 'बैठक व्यवस्था — एक पंक्ति में 5 व्यक्ति',
    make: function (R) {
      var NM = R.shuffle(['अमन', 'बबीता', 'चेतन', 'दीपा', 'ईशा', 'फ़राज़', 'गीता', 'हरीश', 'इंदु', 'जया', 'कमल', 'लता', 'मोहन', 'नीरज', 'ओम']).slice(0, 5);
      var arr = R.shuffle(NM); // बाएँ → दाएँ
      function perms(a) { if (a.length <= 1) return [a]; var r = []; a.forEach(function (x, i) { perms(a.slice(0, i).concat(a.slice(i + 1))).forEach(function (p) { r.push([x].concat(p)); }); }); return r; }
      var ALL = perms(NM);
      var ORD = ['पहले', 'दूसरे', 'तीसरे', 'चौथे', 'पाँचवें'];
      // संभावित सत्य शर्तें
      function cands() {
        var c = [], i, j;
        for (i = 0; i < 5; i++) {
          var x = arr[i];
          if (i === 0) c.push({ t: x + ' बाएँ छोर पर है', f: (function (x) { return function (p) { return p[0] === x; }; })(x) });
          if (i === 4) c.push({ t: x + ' दाएँ छोर पर है', f: (function (x) { return function (p) { return p[4] === x; }; })(x) });
          if (i > 0 && i < 4) c.push({ t: x + ' किसी भी छोर पर नहीं है', f: (function (x) { return function (p) { return p[0] !== x && p[4] !== x; }; })(x) });
          for (j = 0; j < 5; j++) if (j !== i) {
            var y = arr[j];
            if (j === i + 1) c.push({ t: x + ' के ठीक दाएँ ' + y + ' है', f: (function (x, y) { return function (p) { return p.indexOf(y) === p.indexOf(x) + 1; }; })(x, y) });
            if (j === i + 2) c.push({ t: x + ' और ' + y + ' के बीच ठीक एक व्यक्ति है तथा ' + x + ', ' + y + ' के बाईं ओर है', f: (function (x, y) { return function (p) { return p.indexOf(y) === p.indexOf(x) + 2; }; })(x, y) });
            if (j > i + 1 && i < j) c.push({ t: x + ', ' + y + ' के बाईं ओर (कहीं भी) है', f: (function (x, y) { return function (p) { return p.indexOf(x) < p.indexOf(y); }; })(x, y) });
            if (Math.abs(i - j) > 1 && i < j) c.push({ t: x + ' और ' + y + ' पास-पास नहीं बैठे हैं', f: (function (x, y) { return function (p) { return Math.abs(p.indexOf(x) - p.indexOf(y)) > 1; }; })(x, y) });
          }
        }
        return c;
      }
      var pool = R.shuffle(cands()), used = [], live = ALL;
      // प्रश्न: पहले तय करें, फिर तब तक शर्तें जोड़ें जब तक उत्तर अद्वितीय न हो
      var qt = R.int(0, 3), target = R.pick(arr), ti = arr.indexOf(target);
      if (qt === 2 && ti === 4) qt = 3;
      if (qt === 3 && ti === 0) qt = 2;
      function askOf(p) {
        if (qt === 0) return p[2];
        if (qt === 1) return R0 ? p[0] : p[4];
        var k = p.indexOf(target);
        return qt === 2 ? p[k + 1] : p[k - 1];
      }
      var R0 = R.rnd() < 0.5;
      var ansv = askOf(arr);
      function uniq(lv) { var s = {}; lv.forEach(function (p) { s[String(askOf(p))] = 1; }); return Object.keys(s).length === 1; }
      for (var k = 0; k < pool.length && !uniq(live); k++) {
        var nl = live.filter(pool[k].f);
        if (nl.length < live.length) { used.push(pool[k]); live = nl; }
      }
      // अनावश्यक शर्तें हटाएँ (क्रम से)
      for (var d = used.length - 1; d >= 0 && used.length > 2; d--) {
        var trial = used.slice(0, d).concat(used.slice(d + 1));
        var lv = ALL.filter(function (p) { return trial.every(function (c) { return c.f(p); }); });
        if (uniq(lv)) used = trial;
      }
      live = ALL.filter(function (p) { return used.every(function (c) { return c.f(p); }); });
      var qtext = qt === 0 ? 'बीच (मध्य) में कौन बैठा है?' : qt === 1 ? (R0 ? 'बाएँ छोर पर कौन बैठा है?' : 'दाएँ छोर पर कौन बैठा है?') : qt === 2 ? target + ' के ठीक दाएँ कौन बैठा है?' : target + ' के ठीक बाएँ कौन बैठा है?';
      var others = NM.filter(function (n) { return n !== ansv && n !== (qt >= 2 ? target : ''); });
      var arrs = live.map(function (p) { return p.join(' – '); });
      var fixedFirst = used.map(function (c, i) { return { c: c, i: i, w: /छोर पर है|ठीक/.test(c.t) ? 0 : 1 }; }).sort(function (x, y) { return x.w - y.w || x.i - y.i; });
      var cnt = ALL.length, cum = [], stepTxt = [];
      fixedFirst.forEach(function (o) { cum.push(o.c); var n2 = ALL.filter(function (p) { return cum.every(function (c) { return c.f(p); }); }).length; stepTxt.push('शर्त ' + (o.i + 1) + ' (' + o.c.t + ') ⇒ ' + n2 + ' संभव क्रम बचे'); cnt = n2; });
      var e = SOL(['पाँच स्थान बनाएँ: 1 – 2 – 3 – 4 – 5 (बाएँ → दाएँ; सभी उत्तरमुखी हैं, अतः उनका दायाँ = हमारा दायाँ)। पहले निश्चित शर्तें (छोर/ठीक बगल) लगाएँ, फिर बाकी।',
        stepTxt.join('<br>'),
        'सभी शर्तें एक साथ लगाने पर व्यवस्था (बाएँ → दाएँ): ' + arrs.join(' अथवा ') + (arrs.length > 1 ? ' — हर व्यवस्था में पूछा गया उत्तर एक ही है' : '') + '।',
        'प्रश्न: ' + qtext + ' ⇒ ' + ansv + '।'], ansv,
        '', 'एक भी शर्त छोड़ने पर एक से अधिक व्यवस्थाएँ बनती हैं — उत्तर से पहले हर शर्त की जाँच करें।');
      return pack(R, ansv, R.shuffle(others), null,
        'पाँच व्यक्ति ' + R.shuffle(NM).join(', ') + ' एक पंक्ति में उत्तर की ओर मुख करके बैठे हैं।<br>' + used.map(function (c, i) { return (i + 1) + '. ' + c.t + '।'; }).join('<br>') + '<br>' + qtext, e);
    }
  });

  // 22. वर्णमाला — दो अक्षरों का मध्य अक्षर / स्थान-आधारित गणना
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-letter-mid', title: 'वर्णमाला — मध्य अक्षर एवं स्थान गणना',
    make: function (R) {
      var type = R.int(0, 2);
      if (type === 0) {
        var a = R.int(1, 20), b = a + 2 * R.int(2, Math.floor((26 - a) / 2));
        var m = (a + b) / 2, ans = letter(m);
        return pack(R, ans, [letter(m + 1), letter(m - 1), letter(27 - m), letter(m + 2)].filter(function (x) { return x !== ans; }), function (j) { return letter(m + 2 + j); },
          'अंग्रेज़ी वर्णमाला में ' + letter(a) + ' और ' + letter(b) + ' के ठीक मध्य में कौन-सा अक्षर है?',
          SOL(['स्थान-मान: ' + letter(a) + ' = ' + a + ', ' + letter(b) + ' = ' + b + '।', 'मध्य स्थान = (' + a + ' + ' + b + ') ÷ 2 = ' + (a + b) + ' ÷ 2 = ' + m + '।',
            m + 'वाँ अक्षर = ' + ans + ' (जाँच: दोनों ओर ' + (m - a - 1) + '-' + (m - a - 1) + ' अक्षर)।'], ans,
            '', 'अंतर का आधा (' + ((b - a) / 2) + ') जोड़ना है, स्थान का आधा नहीं।'));
      }
      if (type === 1) {
        var n = R.int(5, 22), k = R.int(2, 8), toLeft = R.rnd() < 0.5;
        var p1 = 27 - n, t = toLeft ? p1 - k : p1 + k;
        if (t < 1 || t > 26) { toLeft = !toLeft; t = toLeft ? p1 - k : p1 + k; }
        var ans1 = letter(t);
        return pack(R, ans1, [letter(toLeft ? p1 + k : p1 - k), letter(t + 1), letter(t - 1), letter(n)], function (j) { return letter(t + 2 + j); },
          'अंग्रेज़ी वर्णमाला में दाएँ से ' + ordO(n) + ' अक्षर के ' + (toLeft ? 'बाएँ' : 'दाएँ') + ' ' + ordA(k) + ' अक्षर कौन-सा है?',
          SOL(['दाएँ से ' + ordA(n) + ' अक्षर = बाएँ से (27 − ' + n + ') = ' + ordA(p1) + ' = ' + letter(p1) + '।',
            'उसके ' + (toLeft ? 'बाएँ जाने पर स्थान घटता' : 'दाएँ जाने पर स्थान बढ़ता') + ' है: ' + p1 + (toLeft ? ' − ' : ' + ') + k + ' = ' + t + '।',
            t + 'वाँ अक्षर = ' + ans1 + '।'], ans1,
            'एक ही दिशा में बदलें: "दाएँ से ' + n + 'वें के ' + (toLeft ? 'बाएँ' : 'दाएँ') + ' ' + k + '" = दाएँ से ' + (toLeft ? n + k : n - k) + 'वाँ = बाएँ से ' + (27 - (toLeft ? n + k : n - k)) + 'वाँ।',
            'उलटी दिशा में गिनने पर ' + letter(toLeft ? p1 + k : p1 - k) + ' गलत आता है।'));
      }
      // उलटी वर्णमाला
      var n2 = R.int(3, 24), ans2 = letter(27 - n2);
      var rv = R.rnd() < 0.5;
      if (rv) {
        return pack(R, ans2, [letter(n2), letter(28 - n2), letter(26 - n2), letter(27 - n2 + 2)], function (j) { return letter(27 - n2 + 3 + j); },
          'यदि अंग्रेज़ी वर्णमाला को उलटे क्रम (Z से A) में लिखा जाए, तो बाएँ से ' + ordA(n2) + ' अक्षर कौन-सा होगा?',
          SOL(['उलटे क्रम (Z → A) में बाएँ से ' + ordA(n2) + ' = सीधे क्रम (A → Z) में दाएँ से ' + ordA(n2) + '।',
            'सीधे क्रम में बाएँ से स्थान = 27 − ' + n2 + ' = ' + (27 - n2) + '।', (27 - n2) + 'वाँ अक्षर = ' + ans2 + '।'], ans2,
            '', 'सीधे क्रम का ' + ordA(n2) + ' अक्षर (' + letter(n2) + ') लेना गलत है।'));
      }
      var w = R.pick(['MOTHER', 'GARDEN', 'FRIEND', 'PLANET', 'SCHOOL', 'NUMBER', 'MARKET', 'WINTER', 'FOREST', 'BRIDGE', 'CAMERA', 'DOCTOR']);
      var cnt = 0, pairs = [], pidx = [];
      for (var i = 0; i < w.length; i++) for (var j2 = i + 1; j2 < w.length; j2++) if (Math.abs(pos(w[j2]) - pos(w[i])) === j2 - i) { cnt++; pairs.push(w[i] + w[j2]); pidx.push([i, j2]); }
      return pack(R, cnt, [cnt + 1, cnt + 2, cnt - 1, cnt + 3].filter(function (x) { return x >= 0; }), null,
        'शब्द ' + w + ' में ऐसे कितने अक्षर-युग्म हैं जिनके बीच शब्द में उतने ही अक्षर हैं जितने वर्णमाला में (आगे या पीछे किसी भी दिशा में)?',
        SOL(['शब्द के हर अक्षर का स्थान-मान लिखें: ' + w.split('').map(function (c) { return c + '(' + pos(c) + ')'; }).join(' ') + '।',
          'हर अक्षर-युग्म के लिए जाँचें: वर्णमाला में अंतर (स्थान-मानों का अंतर) = शब्द में उनकी दूरी? (आगे या पीछे दोनों दिशा)',
          'ऐसे युग्म: ' + (pairs.length ? pairs.map(function (pr, z) { var i5 = pidx[z][0], j5 = pidx[z][1]; return pr + ' (|' + pos(pr[1]) + ' − ' + pos(pr[0]) + '| = ' + Math.abs(pos(pr[1]) - pos(pr[0])) + ' = दूरी ' + (j5 - i5) + ')'; }).join(', ') : 'कोई नहीं') + '।',
          'कुल युग्म = ' + cnt + '।'], cnt,
          'पहले पास-पास के अक्षर (दूरी 1) जाँचें, फिर दूरी 2, 3 … — कोई युग्म छूटेगा नहीं।'));
    }
  });

  // 23. शब्दकोश क्रम
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-dictionary', title: 'शब्दों को शब्दकोश (वर्णानुक्रम) में व्यवस्थित करना',
    make: function (R) {
      var SETS = [
        ['PRESENT', 'PRESIDENT', 'PRESS', 'PREVENT', 'PRESERVE', 'PRETEND'],
        ['CANDLE', 'CANDID', 'CANDY', 'CANAL', 'CANCEL', 'CANOPY'],
        ['MOTHER', 'MOTION', 'MOTIVE', 'MOTOR', 'MOTTO', 'MOTEL'],
        ['STRING', 'STRONG', 'STRIKE', 'STRIDE', 'STREAM', 'STRESS'],
        ['BRAIN', 'BRANCH', 'BRAND', 'BRAVE', 'BRASS', 'BREAD'],
        ['GRACE', 'GRADE', 'GRAIN', 'GRAND', 'GRAPH', 'GRASS'],
        ['PLANT', 'PLANE', 'PLANET', 'PLAIN', 'PLACE', 'PLATE'],
        ['ORDER', 'ORDINARY', 'ORGAN', 'ORIGIN', 'ORBIT', 'ORANGE'],
        ['TRACE', 'TRACK', 'TRADE', 'TRAIN', 'TRAIT', 'TRAMP'],
        ['ELEMENT', 'ELEPHANT', 'ELEVEN', 'ELECTION', 'ELEGANT', 'ELEVATE'],
        ['COMMON', 'COMMAND', 'COMMENT', 'COMMIT', 'COMMUNITY', 'COMMERCE'],
        ['WEATHER', 'WEALTH', 'WEAPON', 'WEAVE', 'WEAKEN', 'WEARY']
      ];
      var set = R.pick(SETS), ws = R.shuffle(set).slice(0, 5);
      var sorted = ws.slice().sort();
      var idx = sorted.map(function (w) { return ws.indexOf(w) + 1; });
      var type = R.rnd() < 0.5;
      var list = ws.map(function (w, i) { return (i + 1) + '. ' + w; }).join('<br>');
      var cp = function (x, y) { var i6 = 0; while (i6 < x.length && x[i6] === y[i6]) i6++; return i6; };
      var cmpTxt = [];
      for (var s6 = 0; s6 + 1 < sorted.length; s6++) {
        var u = sorted[s6], v6 = sorted[s6 + 1], c6 = cp(u, v6);
        cmpTxt.push(c6 >= u.length ? u + ' < ' + v6 + ' (' + u + ' पूरा ' + v6 + ' का आरंभिक भाग है, छोटा पहले)' : u + ' < ' + v6 + ' (' + (c6 + 1) + 'वाँ अक्षर: ' + u[c6] + ' < ' + v6[c6] + ')');
      }
      var eSteps = ['सभी शब्दों के आरंभिक अक्षर (' + ws[0].slice(0, Math.min.apply(null, ws.slice(1).map(function (w) { return cp(ws[0], w); })) || 1) + '…) समान हैं, अतः अक्षर-दर-अक्षर तुलना करें — पहला भिन्न अक्षर निर्णायक है।',
        'क्रमागत तुलना: ' + cmpTxt.join('; ') + '।',
        'शब्दकोश क्रम: ' + sorted.map(function (w) { return w + '(' + (ws.indexOf(w) + 1) + ')'; }).join(' → ') + ' ⇒ क्रम ' + idx.join(', ') + '।'];
      var eNote = 'पहले भिन्न अक्षर के बाद के अक्षर क्रम तय नहीं करते; शब्द की लंबाई भी नहीं।';
      if (type) {
        var A = idx.join(', ');
        var w1 = idx.slice(); var t = w1[0]; w1[0] = w1[1]; w1[1] = t;
        var w2 = idx.slice(); t = w2[2]; w2[2] = w2[3]; w2[3] = t;
        var w3 = idx.slice(); t = w3[3]; w3[3] = w3[4]; w3[4] = t;
        var w4 = idx.slice().reverse();
        return pack(R, A, [w1.join(', '), w2.join(', '), w3.join(', '), w4.join(', ')], function (j) { return R.shuffle(idx).join(', '); },
          'निम्नलिखित शब्दों को अंग्रेज़ी शब्दकोश के क्रम में व्यवस्थित कीजिए —<br>' + list, SOL(eSteps, A, '', eNote));
      }
      var k = R.int(1, 5), ans = sorted[k - 1];
      return pack(R, ans, R.shuffle(ws.filter(function (w) { return w !== ans; })), null,
        'निम्नलिखित शब्दों को अंग्रेज़ी शब्दकोश के क्रम में लगाने पर कौन-सा शब्द ' + ['पहले', 'दूसरे', 'तीसरे', 'चौथे', 'पाँचवें'][k - 1] + ' स्थान पर आएगा?<br>' + list,
        SOL(eSteps.concat([['पहले', 'दूसरे', 'तीसरे', 'चौथे', 'पाँचवें'][k - 1] + ' स्थान पर = ' + ans + '।']), ans, '', eNote));
    }
  });

  // 24. संख्या संक्रिया कोडिंग (a ★ b)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-op-coding', title: 'संख्या संक्रिया कोडिंग — a ★ b का नियम पहचानें',
    make: function (R) {
      var OPS = [
        { n: 'a² + b²', f: function (a, b) { return a * a + b * b; }, s: function (a, b) { return a + '² + ' + b + '² = ' + (a * a) + ' + ' + (b * b); } },
        { n: '(a + b)²', f: function (a, b) { return (a + b) * (a + b); }, s: function (a, b) { return '(' + a + ' + ' + b + ')² = ' + (a + b) + '²'; } },
        { n: '(a − b)²', f: function (a, b) { return (a - b) * (a - b); }, s: function (a, b) { return '(' + a + ' − ' + b + ')² = ' + minus(a - b) + '²'; } },
        { n: 'a² − b²', f: function (a, b) { return a * a - b * b; }, s: function (a, b) { return a + '² − ' + b + '² = ' + (a * a) + ' − ' + (b * b); } },
        { n: 'a × b + a + b', f: function (a, b) { return a * b + a + b; }, s: function (a, b) { return a + '×' + b + ' + ' + a + ' + ' + b + ' = ' + (a * b) + ' + ' + (a + b); } },
        { n: 'a × b − (a + b)', f: function (a, b) { return a * b - a - b; }, s: function (a, b) { return a + '×' + b + ' − (' + a + ' + ' + b + ') = ' + (a * b) + ' − ' + (a + b); } },
        { n: '2a + 3b', f: function (a, b) { return 2 * a + 3 * b; }, s: function (a, b) { return '2×' + a + ' + 3×' + b + ' = ' + (2 * a) + ' + ' + (3 * b); } },
        { n: 'a² + b', f: function (a, b) { return a * a + b; }, s: function (a, b) { return a + '² + ' + b + ' = ' + (a * a) + ' + ' + b; } },
        { n: 'a × b × 2', f: function (a, b) { return 2 * a * b; }, s: function (a, b) { return a + ' × ' + b + ' × 2'; } },
        { n: 'a³ − b', f: function (a, b) { return a * a * a - b; }, s: function (a, b) { return a + '³ − ' + b + ' = ' + (a * a * a) + ' − ' + b; } },
        { n: '(a + b) × (a − b) + 1', f: function (a, b) { return (a + b) * (a - b) + 1; }, s: function (a, b) { return '(' + (a + b) + ') × (' + (a - b) + ') + 1'; } }
      ];
      // अद्वितीयता: A·aⁱ ± B·bʲ + C·ab + k जैसे सभी सरल नियम जो दोनों उदाहरणों पर ठीक बैठें, प्रश्न पर भी वही उत्तर दें
      function uniqueRule(op, ex) {
        var want = op.f(ex[3][0], ex[3][1]);
        function fitAll(g) { return [0, 1, 2].every(function (t) { return g(ex[t][0], ex[t][1]) === op.f(ex[t][0], ex[t][1]); }); }
        for (var A = 0; A <= 4; A++) for (var B = -4; B <= 4; B++) for (var ea = 1; ea <= 3; ea++) for (var eb = 1; eb <= 3; eb++) for (var C = -2; C <= 3; C++) for (var k = -8; k <= 8; k++) {
          var g = function (a, b) { return A * Math.pow(a, ea) + B * Math.pow(b, eb) + C * a * b + k; };
          if (fitAll(g) && g(ex[3][0], ex[3][1]) !== want) return false;
        }
        for (var i = 0; i < OPS.length; i++) { var o = OPS[i]; if (o !== op && fitAll(o.f) && o.f(ex[3][0], ex[3][1]) !== want) return false; }
        return true;
      }
      var op, ex, tries = 0;
      do {
        op = R.pick(OPS);
        ex = [];
        var seenEx = {}, bad = false;
        for (var i = 0; i < 4; i++) { var a = R.int(3, 9), b = R.int(1, a - 1); if (seenEx[a + ',' + b]) bad = true; seenEx[a + ',' + b] = 1; ex.push([a, b]); }
        // पहले दो उदाहरण किसी अन्य नियम से मेल न खाएँ
        var neg = ex.some(function (x) { return op.f(x[0], x[1]) < 0; });
        var amb = !bad && !neg && !uniqueRule(op, ex);
      } while ((bad || amb || neg) && ++tries < 300);
      var sym = R.pick(['★', '#', '@', '$', '⊕']);
      var q3 = ex[3], ans = op.f(q3[0], q3[1]);
      var others = OPS.filter(function (o) { return o !== op; }).map(function (o) { return o.f(q3[0], q3[1]); });
      return pack(R, ans, R.shuffle(others).concat([ans + 1, ans - 1, ans + 2]), null,
        'यदि ' + [0, 1, 2].map(function (t) { return ex[t][0] + ' ' + sym + ' ' + ex[t][1] + ' = ' + op.f(ex[t][0], ex[t][1]); }).join(', ') + ' है, तो ' + q3[0] + ' ' + sym + ' ' + q3[1] + ' = ?',
        SOL(['पहले उदाहरण (' + ex[0][0] + ' ' + sym + ' ' + ex[0][1] + ' = ' + op.f(ex[0][0], ex[0][1]) + ') पर सामान्य नियम आज़माएँ — जोड़, गुणा, वर्ग, घन आदि।',
          'नियम मिलता है: a ' + sym + ' b = ' + op.n + '।',
          'तीनों उदाहरणों पर जाँच: ' + [0, 1, 2].map(function (t) { return op.s(ex[t][0], ex[t][1]) + ' = ' + op.f(ex[t][0], ex[t][1]) + ' ✓'; }).join('; ') + '।',
          'प्रश्न पर लागू करें: ' + q3[0] + ' ' + sym + ' ' + q3[1] + ' = ' + op.s(q3[0], q3[1]) + ' = ' + ans + '।'], ans,
          '', 'नियम केवल पहले उदाहरण पर नहीं, तीनों पर सही बैठना चाहिए।'));
    }
  });

  // 25. लुप्त संख्या — त्रिभुज पैटर्न (कोनों की संख्याएँ → केंद्र)
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-missing-triangle', title: 'लुप्त संख्या — त्रिभुज/आकृति पैटर्न',
    make: function (R) {
      var FS = [
        { n: 'a + b + c', f: function (a, b, c) { return a + b + c; } },
        { n: '(a + b) × c', f: function (a, b, c) { return (a + b) * c; } },
        { n: 'a × b − c', f: function (a, b, c) { return a * b - c; } },
        { n: 'a × b + c', f: function (a, b, c) { return a * b + c; } },
        { n: 'a × b × c', f: function (a, b, c) { return a * b * c; } },
        { n: '(a + b + c) × 2', f: function (a, b, c) { return 2 * (a + b + c); } },
        { n: 'a² + b + c', f: function (a, b, c) { return a * a + b + c; } },
        { n: '(a + b) − c', f: function (a, b, c) { return a + b - c; } },
        { n: 'a + b × c', f: function (a, b, c) { return a + b * c; } },
        { n: '(a + c) × b', f: function (a, b, c) { return (a + c) * b; } }
      ];
      // अद्वितीयता: तीनों संख्याओं के किसी भी क्रम पर दो संक्रियाओं (+, −, ×) से बने सभी नियम जाँचें
      var BIN = [function (x, y) { return x + y; }, function (x, y) { return x - y; }, function (x, y) { return x * y; }];
      var PER = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
      function triUnique(fn, T) {
        var want = fn.f.apply(null, T[2]);
        var fam = FS.map(function (g) { return function (t) { return g.f(t[0], t[1], t[2]); }; });
        PER.forEach(function (p) { BIN.forEach(function (o1) { BIN.forEach(function (o2) {
          fam.push(function (t) { return o2(o1(t[p[0]], t[p[1]]), t[p[2]]); });
          fam.push(function (t) { return o1(t[p[0]], o2(t[p[1]], t[p[2]])); });
          [1, 2, 3].forEach(function (m) { [-2, -1, 1, 2].forEach(function (k) { fam.push(function (t) { return m * o2(o1(t[p[0]], t[p[1]]), t[p[2]]) + k; }); }); });
        }); }); });
        PER.forEach(function (p) { fam.push(function (t) { return t[p[0]] * t[p[0]] + t[p[1]] + t[p[2]]; }, function (t) { return t[p[0]] * t[p[0]] - t[p[1]] * t[p[2]]; }, function (t) { return t[p[0]] * t[p[0]] + t[p[1]] * t[p[2]]; }); });
        for (var i = 0; i < fam.length; i++) {
          var h = fam[i];
          if (h(T[0]) === fn.f.apply(null, T[0]) && h(T[1]) === fn.f.apply(null, T[1]) && h(T[2]) !== want) return false;
        }
        return true;
      }
      var fn, T, tries = 0, amb;
      do {
        fn = R.pick(FS); T = [];
        for (var i = 0; i < 3; i++) T.push([R.int(2, 9), R.int(2, 9), R.int(1, 8)]);
        amb = !triUnique(fn, T);
        var neg = T.some(function (t) { return fn.f.apply(null, t) < 0; }) || T[0].join() === T[1].join() || T[1].join() === T[2].join() || T[0].join() === T[2].join();
      } while ((amb || neg) && ++tries < 300);
      var ans = fn.f.apply(null, T[2]);
      var show = T.map(function (t, i) { return 'त्रिभुज ' + (i + 1) + ': ऊपर ' + t[0] + ', बाएँ ' + t[1] + ', दाएँ ' + t[2] + ' → केंद्र ' + (i === 2 ? '?' : fn.f.apply(null, t)); });
      var others = FS.filter(function (g) { return g !== fn; }).map(function (g) { return g.f.apply(null, T[2]); }).filter(function (v) { return v >= 0; });
      return pack(R, ans, R.shuffle(others).concat([ans + 1, ans - 2]), null,
        'तीन त्रिभुजों के कोनों पर संख्याएँ हैं और केंद्र की संख्या एक ही नियम से बनती है —<br>' + show.join('<br>') + '<br>लुप्त संख्या (?) ज्ञात कीजिए।',
        (function () {
          var sub = function (t) { return fn.n.replace(/a/g, String(t[0])).replace(/b/g, String(t[1])).replace(/c/g, String(t[2])); };
          return SOL(['ऊपर = a, बाएँ = b, दाएँ = c मानें और पहले त्रिभुज पर सामान्य नियम आज़माएँ।',
            'नियम: केंद्र = ' + fn.n + '।',
            'जाँच — त्रिभुज 1: ' + sub(T[0]) + ' = ' + fn.f.apply(null, T[0]) + ' ✓; त्रिभुज 2: ' + sub(T[1]) + ' = ' + fn.f.apply(null, T[1]) + ' ✓',
            'त्रिभुज 3 (a = ' + T[2][0] + ', b = ' + T[2][1] + ', c = ' + T[2][2] + '): ' + sub(T[2]) + ' = ' + ans + '।'], ans,
            '', 'नियम दोनों पूर्ण त्रिभुजों पर सही बैठना चाहिए; केवल एक पर जाँचकर उत्तर न दें।');
        })());
    }
  });

  // 26. घड़ी — दर्पण प्रतिबिंब समय
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-clock-mirror', title: 'घड़ी — दर्पण प्रतिबिंब का समय',
    make: function (R) {
      var h = R.int(1, 12), m = R.pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, R.int(1, 59), R.int(1, 59)]);
      function fmt(mins) { mins = ((mins % 720) + 720) % 720; var H = Math.floor(mins / 60), Mi = mins % 60; if (H === 0) H = 12; return H + ':' + (Mi < 10 ? '0' : '') + Mi; }
      var t = (h % 12) * 60 + m, img = 720 - t, ans = fmt(img);
      var naive = fmt((12 - h) * 60 + (60 - m) % 60); // उधार भूलने की आम गलती
      var real = R.rnd() < 0.5;
      var H0 = h % 12, mm2 = function (v) { return (v < 10 ? '0' : '') + v; };
      var e = SOL([(real ? 'दर्पण-समय' : 'वास्तविक समय') + ' = 12:00 − ' + (real ? 'वास्तविक समय' : 'दर्पण-समय') + ' (दोनों का योग सदा 12:00 होता है)।' + (h === 12 ? ' ' + fmt(t) + ' को 0:' + mm2(m) + ' मानें।' : ''),
        m === 0 ? '12:00 − ' + H0 + ':00 = ' + (12 - H0) + ':00।'
          : 'मिनट घटाने के लिए 12:00 को 11:60 लिखें: 11:60 − ' + H0 + ':' + mm2(m) + ' = ' + (11 - H0) + ':' + mm2(60 - m) + '।',
        (m !== 0 && H0 === 11 ? '0 घंटे को 12 लिखें: ' : '') + 'उत्तर = ' + ans + '। जाँच: ' + fmt(t) + ' + ' + ans + ' = 12:00 ✓'], ans,
        'घंटे: 11 − H, मिनट: 60 − M (मिनट 0 हों तो घंटे 12 − H)।',
        m !== 0 && naive !== ans ? 'उधार (11:60) लिए बिना सीधे 12 − ' + H0 + ' और 60 − ' + m + ' करने पर ' + naive + ' जैसा गलत उत्तर आता है।' : '');
      return pack(R, ans, [naive, fmt(img + 60), fmt(img - 60), fmt(t), fmt(img + 30), fmt(1080 - t)], function (j) { return fmt(img + 5 * j + 120); },
        real ? 'घड़ी में ' + fmt(t) + ' बजे हैं। दर्पण में घड़ी का प्रतिबिंब कौन-सा समय दिखाएगा?'
             : 'दर्पण में देखने पर घड़ी ' + fmt(t) + ' का समय दिखा रही है। वास्तविक समय क्या है?',
        e);
    }
  });

  // 27. कैलेंडर — n दिन बाद/पहले का दिन
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-day-after', title: 'कैलेंडर — n दिन बाद/पहले का दिन',
    make: function (R) {
      var type = R.int(0, 2), d0 = R.int(0, 6);
      if (type === 0) {
        var n = R.int(8, 400), after = R.rnd() < 0.6;
        var w = after ? (d0 + n) % 7 : ((d0 - n) % 7 + 7) % 7, ans = VAR[w];
        return pack(R, ans, [VAR[(w + 1) % 7], VAR[(w + 6) % 7], VAR[after ? ((d0 - n) % 7 + 7) % 7 : (d0 + n) % 7], VAR[(w + 2) % 7]], function (j) { return VAR[(w + 3 + j) % 7]; },
          'यदि आज ' + VAR[d0] + ' है, तो ' + n + ' दिन ' + (after ? 'बाद' : 'पहले') + ' सप्ताह का कौन-सा दिन होगा/था?',
          SOL(['हर 7 दिन बाद वही वार लौटता है, अतः केवल शेष (विषम दिन) देखें।', n + ' ÷ 7 = ' + Math.floor(n / 7) + ' सप्ताह, शेष ' + (n % 7) + '।',
            VAR[d0] + ' से ' + (n % 7) + ' दिन ' + (after ? 'आगे' : 'पीछे') + ' गिनें' + (n % 7 ? ': ' + (function () { var s7 = [VAR[d0]]; for (var z = 1; z <= n % 7; z++) s7.push(VAR[((d0 + (after ? z : -z)) % 7 + 7) % 7]); return s7.join(' → '); })() : ' (शेष 0 ⇒ वही दिन)') + '।'], ans,
            '', n % 7 === 0 ? '' : (after ? 'पीछे' : 'आगे') + ' गिनने पर ' + VAR[after ? ((d0 - n) % 7 + 7) % 7 : (d0 + n) % 7] + ' गलत आता है — "' + (after ? 'बाद' : 'पहले') + '" पर ध्यान दें।'));
      }
      if (type === 1) {
        var m = R.int(0, 11), dd = R.int(1, 12), y = R.int(2001, 2030), last = mdays(y, m + 1);
        var d2 = dd + R.int(6, last - dd - 1);
        if (d2 > last) d2 = last;
        if (d2 - dd === 0) d2 = dd + 1;
        var diff = d2 - dd, w1 = (d0 + diff) % 7, ans1 = VAR[w1];
        return pack(R, ans1, [VAR[(w1 + 1) % 7], VAR[(w1 + 6) % 7], VAR[(d0 + diff + 1) % 7 === w1 ? (w1 + 3) % 7 : (d0 + diff + 1) % 7], VAR[(w1 + 2) % 7]], function (j) { return VAR[(w1 + 3 + j) % 7]; },
          'किसी महीने की ' + dd + ' तारीख़ को ' + VAR[d0] + ' है। उसी महीने की ' + d2 + ' तारीख़ को कौन-सा दिन होगा?',
          SOL(['दोनों तारीख़ों का अंतर = ' + d2 + ' − ' + dd + ' = ' + diff + ' दिन।', diff + ' ÷ 7 = ' + Math.floor(diff / 7) + ' सप्ताह, शेष ' + (diff % 7) + ' विषम दिन।',
            VAR[d0] + ' + ' + (diff % 7) + ' दिन = ' + ans1 + '।'], ans1,
            'एक ही महीने में 7, 14, 21, 28 दिन बाद वही वार आता है: ' + dd + ', ' + [dd + 7, dd + 14, dd + 21].filter(function (x) { return x <= 31; }).join(', ') + ' तारीख़ = ' + VAR[d0] + '।',
            'अंतर में ' + dd + ' और ' + d2 + ' दोनों को गिनकर (' + (diff + 1) + ') 1 दिन अधिक न जोड़ें।'));
      }
      // अगली/पिछली तारीख़ — महीनों के पार
      var Y = R.int(2001, 2040), M1 = R.int(1, 10), D1 = R.int(1, mdays(Y, M1));
      var M2 = M1 + R.int(1, 2), D2 = R.int(1, mdays(Y, M2));
      var dw = new Date(Date.UTC(Y, M1 - 1, D1)).getUTCDay();
      var days = Math.round((Date.UTC(Y, M2 - 1, D2) - Date.UTC(Y, M1 - 1, D1)) / 86400000);
      var w2 = (dw + days) % 7, ans2 = VAR[w2];
      var parts = [], cur = mdays(Y, M1) - D1;
      parts.push(MAAH[M1 - 1] + ' के शेष ' + cur);
      for (var mm = M1 + 1; mm < M2; mm++) { parts.push(MAAH[mm - 1] + ' के ' + mdays(Y, mm)); }
      parts.push(MAAH[M2 - 1] + ' के ' + D2);
      return pack(R, ans2, [VAR[(w2 + 1) % 7], VAR[(w2 + 6) % 7], VAR[(w2 + 2) % 7], VAR[(w2 + 5) % 7]], function (j) { return VAR[(w2 + 3 + j) % 7]; },
        D1 + ' ' + MAAH[M1 - 1] + ' ' + Y + ' को ' + VAR[dw] + ' था/है। ' + D2 + ' ' + MAAH[M2 - 1] + ' ' + Y + ' को कौन-सा दिन होगा?',
        SOL(['दी गई तारीख़ के बाद के दिन गिनें: ' + parts.join(' + ') + ' = ' + days + ' दिन' + (leap(Y) && M1 <= 2 && M2 > 2 ? ' (' + Y + ' लीप वर्ष — फ़रवरी 29 दिन)' : '') + '।',
          days + ' ÷ 7 = ' + Math.floor(days / 7) + ' सप्ताह, शेष ' + (days % 7) + ' विषम दिन।',
          VAR[dw] + ' + ' + (days % 7) + ' दिन = ' + ans2 + '।'], ans2,
          'महीनों के विषम दिन: 31 दिन = 3, 30 दिन = 2, 28 दिन = 0, 29 दिन = 1 — पूरे दिन जोड़ने के बजाय ये जोड़ें।', 'पहले महीने के केवल शेष दिन (' + cur + ') गिनें, पूरे महीने के नहीं।'));
    }
  });

  // 28. अक्षर-संख्या मिश्रित श्रेणी
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-alnum-series', title: 'श्रेणी — अक्षर-संख्या मिश्रित',
    make: function (R) {
      var k = R.pick([1, 2, 3, 4, -1, -2, -3]), p = k > 0 ? R.int(1, 26 - 4 * k) : R.int(1 - 4 * k, 26);
      var typ = R.int(0, 2), n0 = R.int(1, 9), d = R.int(2, 7), r = R.pick([2, 3]);
      function num(i) { return typ === 0 ? n0 + i * d : typ === 1 ? n0 * Math.pow(r, i) : (n0 + i) * (n0 + i); }
      var t = []; for (var i = 0; i < 4; i++) t.push(letter(p + i * k) + num(i));
      var L = letter(p + 4 * k), N = num(4), ans = L + N;
      var rule = typ === 0 ? 'संख्या हर बार +' + d : typ === 1 ? 'संख्या हर बार ×' + r : 'संख्याएँ क्रमागत वर्ग (' + n0 + '², ' + (n0 + 1) + '², …)';
      var Nalt = typ === 0 ? N + d : typ === 1 ? N + num(3) : N + 1;
      return pack(R, ans, [letter(p + 4 * k + 1) + N, L + Nalt, letter(p + 4 * k - 1) + N, letter(p + 5 * k) + N, L + (N - 1)], function (j) { return L + (N + 2 + j); },
        t.join(', ') + ', ? — अगला पद ज्ञात कीजिए।',
        SOL(['हर पद के अक्षर और संख्या को अलग-अलग देखें।',
          'अक्षर: ' + chain(t.map(function (x) { return x.replace(/[0-9]+/, ''); }), function (x, y) { return sgn(pos(y) - pos(x)); }) + ' (स्थान ' + t.map(function (x) { return pos(x[0]); }).join(', ') + ') ⇒ अगला ' + letter(p + 3 * k) + pm(k) + ' = ' + L + '।',
          'संख्या: ' + chain([0, 1, 2, 3].map(num), function (x, y) { return typ === 0 ? '+' + d : typ === 1 ? '×' + r : '+' + (y - x); }) + ' — ' + rule + ' ⇒ अगली = ' + N + '।',
          'अगला पद = ' + L + ' + ' + N + ' = ' + ans + '।'], ans));
    }
  });

  // 29. घनों की गिनती — रंगा हुआ घन काटना
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-cube-paint', title: 'घन — रंगे घन को छोटे घनों में काटना',
    make: function (R) {
      var n = R.int(3, 8), ask = R.int(0, 4);
      var c3 = 8, c2 = 12 * (n - 2), c1 = 6 * (n - 2) * (n - 2), c0 = Math.pow(n - 2, 3);
      var vals = [c3, c2, c1, c0, c1 + c2 + c3];
      var lab = ['ठीक तीन फलक रंगे', 'ठीक दो फलक रंगे', 'ठीक एक फलक रंगा', 'कोई भी फलक नहीं रंगा', 'कम से कम एक फलक रंगा'];
      var why = ['तीन फलक केवल कोनों के घनों पर — हर घन में 8 कोने, सदैव 8', 'दो फलक किनारों (कोने छोड़कर) पर — 12 किनारे × (n − 2) = 12 × ' + (n - 2) + ' = ' + c2,
        'एक फलक प्रत्येक फलक के भीतरी भाग में — 6 × (n − 2)² = 6 × ' + ((n - 2) * (n - 2)) + ' = ' + c1, 'कोई फलक नहीं — भीतरी घन (n − 2)³ = ' + (n - 2) + '³ = ' + c0,
        'कम से कम एक = कुल − बिना रंगे = ' + n + '³ − ' + (n - 2) + '³ = ' + (n * n * n) + ' − ' + c0 + ' = ' + (c1 + c2 + c3)];
      var ans = vals[ask];
      return pack(R, ans, [vals[(ask + 1) % 5], vals[(ask + 2) % 5], vals[(ask + 3) % 5], n * n * n, 6 * n * n, 12 * n, Math.pow(n - 1, 3)], null,
        'एक घन के सभी छह फलकों को लाल रंग से रंगकर उसे ' + (n * n * n) + ' समान छोटे घनों में काटा गया (' + n + ' × ' + n + ' × ' + n + ')। कितने छोटे घनों में ' + lab[ask] + ' है/हैं?',
        SOL(['n = ' + n + ' (हर किनारे पर ' + n + ' छोटे घन), कुल ' + n + '³ = ' + (n * n * n) + ' घन।', why[ask] + '।',
          'जाँच: 8 + ' + c2 + ' + ' + c1 + ' + ' + c0 + ' = ' + (c3 + c2 + c1 + c0) + ' = ' + n + '³ ✓'], ans,
          'तीन फलक = 8, दो फलक = 12(n − 2), एक फलक = 6(n − 2)², शून्य = (n − 2)³।'));
    }
  });

  // 30. शब्द से वर्णमाला क्रम/स्थान — अक्षरों को वर्णानुक्रम में लगाकर
  BOOK.addGenerator({
    subject: 'reas', id: 'gen-word-letter-rearrange', title: 'शब्द के अक्षरों को वर्णानुक्रम में लगाना',
    make: function (R) {
      var W = ['MOTHER', 'GARDEN', 'FRIEND', 'PLANET', 'NUMBER', 'MARKET', 'WINTER', 'FOREST', 'BRIDGE', 'CAMERA', 'DOCTOR', 'PENCIL', 'SILVER', 'TEMPLE', 'CASTLE', 'FLOWER', 'JUNGLE', 'MONKEY', 'PUZZLE', 'ROCKET', 'STABLE', 'WONDER', 'HOLIDAY', 'KITCHEN', 'TRIANGLE'];
      var w = R.pick(W), srt = w.split('').sort();
      var n = w.length, k = R.int(1, n), fromLeft = R.rnd() < 0.5;
      var idx = fromLeft ? k - 1 : n - k, ans = srt[idx];
      var uniqLetters = srt.filter(function (c, i) { return srt.indexOf(c) === i && c !== ans; });
      var near = [srt[idx + 1], srt[idx - 1], w[idx], w[n - 1 - idx]].filter(function (c) { return c && c !== ans; });
      return pack(R, ans, near.concat(R.shuffle(uniqLetters)), null,
        'शब्द ' + w + ' के अक्षरों को अंग्रेज़ी वर्णमाला के क्रम में व्यवस्थित करने पर ' + (fromLeft ? 'बाएँ' : 'दाएँ') + ' से ' + ordA(k) + ' अक्षर कौन-सा होगा?',
        SOL(['शब्द के अक्षरों के स्थान-मान: ' + w.split('').map(function (c) { return c + '(' + pos(c) + ')'; }).join(' ') + '।',
          'स्थान-मान के बढ़ते क्रम में लगाएँ: ' + srt.join(' ') + '।',
          (fromLeft ? 'बाएँ' : 'दाएँ') + ' से ' + ordA(k) + ' अक्षर' + (fromLeft ? '' : ' (= बाएँ से ' + ordA(n - k + 1) + ')') + ' = ' + ans + '।'], ans,
          '', (fromLeft ? w[k - 1] : w[n - k]) === ans ? '' : 'मूल शब्द ' + w + ' में ' + (fromLeft ? 'बाएँ' : 'दाएँ') + ' से ' + ordA(k) + ' अक्षर (' + (fromLeft ? w[k - 1] : w[n - k]) + ') नहीं — पहले अक्षरों को क्रम में लगाएँ।'));
    }
  });
})();
