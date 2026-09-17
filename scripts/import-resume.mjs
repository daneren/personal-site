#!/usr/bin/env node
/**
 * Resume import pipeline (MVP stub → curated MD).
 *
 * Usage:
 *   RESUME_PDF=./content/source/resume-202607.pdf npm run import:resume
 *
 * Does NOT hardcode machine absolute paths. Put the PDF under content/source/
 * (or pass RESUME_PDF). Chinese extraction from this PDF may be garbled;
 * always review src/content/resume/main.md against the PDF.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const pdfPath = path.resolve(
  process.env.RESUME_PDF || path.join(root, 'content/source/resume-202607.pdf'),
);
const outPath = path.join(root, 'src/content/resume/main.md');
const mirrorPath = path.join(root, 'content/resume/resume.md');

if (!fs.existsSync(pdfPath)) {
  console.error(`PDF not found: ${pdfPath}`);
  console.error('Copy your resume PDF to content/source/ or set RESUME_PDF=...');
  process.exit(1);
}

let text = '';
try {
  const require = createRequire(import.meta.url);
  // optional: pypdf via python is more reliable on this machine — try python first
} catch {}

import { spawnSync } from 'node:child_process';
const py = spawnSync(
  'python3',
  [
    '-c',
    `
from pypdf import PdfReader
import sys
r = PdfReader(sys.argv[1])
print("\\n".join((p.extract_text() or "") for p in r.pages))
`,
    pdfPath,
  ],
  { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 },
);

if (py.status !== 0) {
  console.warn('python pypdf extract failed; keeping existing curated MD.');
  console.warn(py.stderr || py.stdout);
  process.exit(0);
}

text = py.stdout || '';
const extractDump = path.join(root, 'content/resume/_last_extract.txt');
fs.mkdirSync(path.dirname(extractDump), { recursive: true });
fs.writeFileSync(extractDump, text, 'utf8');

const note = `---
title: daner resume
---

<!--
Auto-import note (${new Date().toISOString().slice(0, 10)}):
Raw extract dumped to content/resume/_last_extract.txt
This PDF's CJK encoding often garbles; do NOT overwrite curated body blindly.
Contact / papers from extract when readable; keep human-curated sections.
Source: ${path.relative(root, pdfPath)}
-->

`;

// If curated file exists, only refresh the dump + prepend note if missing marker
if (fs.existsSync(outPath)) {
  console.log('Extract saved:', path.relative(root, extractDump));
  console.log('Curated MD kept:', path.relative(root, outPath));
  console.log('Review extract vs PDF, then edit main.md manually.');
  process.exit(0);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, note + '# daner\n\n_(paste curated content)_\n', 'utf8');
fs.copyFileSync(outPath, mirrorPath);
console.log('Wrote skeleton', outPath);
