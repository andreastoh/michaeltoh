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

// Lists every indexable page, plus the images on it so Google Images can find
// photos that only appear after a visitor clicks through a gallery.
const xmlEscape = (v) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const indexable = pages.filter((p) => !p.noindex);
const urls = indexable
  .map((p) => {
    const images = [...new Set(p.images ?? [])]
      .map((src) => `    <image:image>\n      <image:loc>${xmlEscape(src)}</image:loc>\n    </image:image>`)
      .join('\n');
    return `  <url>\n    <loc>${SITE_URL}${p.path}</loc>${images ? `\n${images}` : ''}\n  </url>`;
  })
  .join('\n');
await fs.writeFile(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`
);
console.log(`wrote dist/sitemap.xml (${indexable.length} pages)`);

await fs.rm(ssrDir, { recursive: true, force: true });
