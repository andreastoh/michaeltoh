// Runs after `vite build`. Writes a ready-made HTML file for every page so that
// search engines (and visitors on slow phones) get real content straight away,
// plus sitemap.xml and a 404 page for GitHub Pages.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render, getAllPages, renderHeadTags, NOT_FOUND, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf-8');
if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> or <!--app-html--> placeholder');
}

function buildPage(meta, url) {
  return template
    .replace(/<title>[^<]*<\/title>/, '')
    .replace('<!--app-head-->', renderHeadTags(meta))
    .replace('<!--app-html-->', render(url));
}

// GitHub Pages serves "events.html" at "/events", so each page becomes <path>.html
function outputFile(pagePath) {
  if (pagePath === '/') return path.join(dist, 'index.html');
  return path.join(dist, `${pagePath.slice(1)}.html`);
}

const pages = getAllPages();
for (const meta of pages) {
  const file = outputFile(meta.path);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, buildPage(meta, meta.path));
  console.log(`prerendered ${meta.path} → ${path.relative(root, file)}`);
}

await fs.writeFile(path.join(dist, '404.html'), buildPage(NOT_FOUND, '/404'));
console.log('prerendered 404 page → dist/404.html');

const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Singapore' }).format(new Date());
const urls = pages
  .filter((p) => !p.noindex)
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
  )
  .join('\n');
await fs.writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`wrote dist/sitemap.xml (${pages.filter((p) => !p.noindex).length} pages)`);

await fs.rm(ssrDir, { recursive: true, force: true });
