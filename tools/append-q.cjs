#!/usr/bin/env node
/* Appends a batch of questions to a chapter: node tools/append-q.cjs data/ca/ca-01.js batch.js
   batch.js holds one JS array literal: [ { q: '...', o: ['','','',''], a: 0, e: '...' }, ... ]
   Malformed items and questions already in the chapter are skipped (and reported). */
'use strict';
const fs = require('fs'), vm = require('vm');
const [file, batchFile] = process.argv.slice(2);
if (!file || !batchFile) { console.log('उपयोग: node tools/append-q.cjs <अध्याय.js> <batch.js>'); process.exit(1); }

const src = fs.readFileSync(file, 'utf8');
const chs = [];
const B = { add: c => chs.push(c), addGenerator() {} };
vm.runInNewContext(src, { BOOK: B, window: { BOOK: B } });
if (chs.length !== 1) { console.log('✗ अध्याय फ़ाइल में ठीक एक BOOK.add चाहिए'); process.exit(1); }

let batch;
try { batch = vm.runInNewContext('(' + fs.readFileSync(batchFile, 'utf8').trim().replace(/;\s*$/, '') + ')', {}); }
catch (e) { console.log('✗ batch फ़ाइल नहीं चली — ' + e.message); process.exit(1); }
if (!Array.isArray(batch)) { console.log('✗ batch एक array होना चाहिए'); process.exit(1); }

const norm = s => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
const seen = new Set(chs[0].questions.map(q => norm(q.q) + '|' + q.o.map(norm).sort().join('|')));
const good = [], bad = [];
batch.forEach((q, i) => {
  const ok = q && typeof q.q === 'string' && q.q.trim() && Array.isArray(q.o) && q.o.length === 4 &&
    q.o.every(o => typeof o === 'string' && o.trim()) && new Set(q.o.map(norm)).size === 4 &&
    Number.isInteger(q.a) && q.a >= 0 && q.a <= 3 && typeof q.e === 'string' && q.e.trim().length >= 5;
  if (!ok) return bad.push(`#${i + 1} गलत आकार: ${JSON.stringify(q).slice(0, 120)}`);
  const key = norm(q.q) + '|' + q.o.map(norm).sort().join('|');
  if (seen.has(key)) return bad.push(`#${i + 1} पहले से मौजूद: ${q.q.slice(0, 60)}`);
  seen.add(key);
  good.push({ q: q.q, o: q.o, a: q.a, e: q.e });
});

const m = src.match(/\]\s*\}\s*\)\s*;?\s*$/);
if (!m) { console.log('✗ फ़ाइल के अंत में "]\\n});" नहीं मिला — questions अंतिम key होनी चाहिए'); process.exit(1); }
const head = src.slice(0, m.index).replace(/\s*$/, '');
const needComma = !/[\[,]$/.test(head);
const body = good.map(q => '    ' + JSON.stringify(q)).join(',\n');
if (good.length) fs.writeFileSync(file, head + (needComma ? ',' : '') + '\n' + body + '\n  ]\n});\n');
console.log(`✓ ${good.length} प्रश्न जोड़े (अब कुल ${chs[0].questions.length + good.length})` + (bad.length ? `, ${bad.length} छोड़े:` : ''));
bad.slice(0, 20).forEach(b => console.log('   ' + b));
