#!/usr/bin/env node
/* Prints a chapter's questions as plain text for review: node tools/dump.cjs data/gs/gs-01.js [from] [to] */
'use strict';
const fs = require('fs'), vm = require('vm');
const [file, from = 1, to = 1e9] = process.argv.slice(2);
const chs = [];
const B = { add: c => chs.push(c), addGenerator() {} };
vm.runInNewContext(fs.readFileSync(file, 'utf8'), { BOOK: B, window: { BOOK: B } });
const strip = s => String(s).replace(/<svg[\s\S]*?<\/svg>/g, '[चित्र]').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
for (const ch of chs) ch.questions.forEach((q, i) => {
  if (i + 1 < +from || i + 1 > +to) return;
  console.log(`#${i + 1} ${strip(q.q)}\n   ${q.o.map((o, k) => (k === q.a ? '*' : ' ') + 'ABCD'[k] + ') ' + strip(o)).join(' | ')}\n   e: ${strip(q.e)}`);
});
