import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return findHtmlFiles(path);
    return path.endsWith('.html') ? [path] : [];
  }));

  return files.flat();
}

function minifyHtml(source) {
  return source
    .replace(/<!--[^]*?-->/g, '')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const files = await findHtmlFiles('dist');

await Promise.all(files.map(async (file) => {
  const source = await readFile(file, 'utf8');
  await writeFile(file, minifyHtml(source));
}));
