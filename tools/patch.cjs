#!/usr/bin/env node
/*
 * Updates questions in a chapter file: node tools/patch.cjs data/math/math-07.js patch.json
 * patch.json = { "5": { "e": "नई व्याख्या" }, "9": { "a": 2 }, "14": { "delete": true } }
 * Keys are 1-based question numbers (as printed by tools/dump.cjs). Allowed fields: q, o, a, e, delete.
 * The file is rewritten in a normalized format (notes/extra as JSON strings, one question per line).
 */
'use strict';
const fs = require('fs'), vm = require('vm');
const [file, patchFile] = process.argv.slice(2);
if (!file || !patchFile) { console.error('usage: node tools/patch.cjs <chapter.js> <patch.json>'); process.exit(2); }
const chs = [];
const B = { add: c => chs.push(c), addGenerator() { throw new Error('generator files are not supported'); } };
vm.runInNewContext(fs.readFileSync(file, 'utf8'), { BOOK: B, window: { BOOK: B } });
if (chs.length !== 1) throw new Error('expected exactly one BOOK.add in ' + file);
const ch = chs[0];
const patch = JSON.parse(fs.readFileSync(patchFile, 'utf8'));
let changed = 0;
const del = new Set();
for (const [k, v] of Object.entries(patch)) {
  const i = Number(k) - 1;
  const q = ch.questions[i];
  if (!q) throw new Error('no question #' + k);
  for (const f of Object.keys(v)) if (!['q', 'o', 'a', 'e', 'delete'].includes(f)) throw new Error(`#${k}: unknown field ${f}`);
  if (v.delete) { del.add(i); changed++; continue; }
  for (const f of ['q', 'o', 'a', 'e']) if (v[f] !== undefined) q[f] = v[f];
  changed++;
}
ch.questions = ch.questions.filter((_, i) => !del.has(i));
const keys = Object.keys(ch).filter(k => k !== 'questions');
let out = 'BOOK.add({\n';
for (const k of keys) out += `  ${k}: ${JSON.stringify(ch[k])},\n`;
out += '  questions: [\n' + ch.questions.map(q => '    ' + JSON.stringify({ q: q.q, o: q.o, a: q.a, e: q.e })).join(',\n') + '\n  ]\n});\n';
fs.writeFileSync(file, out);
console.log(`${file}: ${changed} प्रश्न बदले${del.size ? `, ${del.size} हटाए` : ''}; अब ${ch.questions.length} प्रश्न`);
