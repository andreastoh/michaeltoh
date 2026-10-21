// Converts JPG/PNG images to web-friendly WebP files and deletes the originals.
// Usage: node scripts/optimize-images.mjs <file-or-folder> [...]
// Run it on new photos before adding them to the site, then update the
// import in the code to point at the new .webp file.
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const MAX_EDGE = 2400; // longest side for gallery photos, in pixels
const MAX_LOGO_EDGE = 480; // client logos are shown small
const QUALITY = 82;

async function collect(target) {
  const stat = await fs.stat(target);
  if (stat.isFile()) return [target];
  const entries = await fs.readdir(target, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((e) => collect(path.join(target, e.name)))
  );
  return files.flat();
}

async function optimize(file) {
  if (!/\.(png|jpe?g)$/i.test(file)) return null;
  const isLogo = file.split(path.sep).includes('clients');
  const maxEdge = isLogo ? MAX_LOGO_EDGE : MAX_EDGE;
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp');

  const before = (await fs.stat(file)).size;
  await sharp(file)
    .rotate() // respect camera orientation
    .resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(out);
  const after = (await fs.stat(out)).size;
  await fs.unlink(file);
  console.log(`${file} → ${path.basename(out)}  ${(before / 1e6).toFixed(2)}MB → ${(after / 1e6).toFixed(2)}MB`);
  return [before, after];
}

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.error('Usage: node scripts/optimize-images.mjs <file-or-folder> [...]');
  process.exit(1);
}

let totalBefore = 0;
let totalAfter = 0;
for (const target of targets) {
  for (const file of await collect(target)) {
    const result = await optimize(file);
    if (result) {
      totalBefore += result[0];
      totalAfter += result[1];
    }
  }
}
console.log(`Total: ${(totalBefore / 1e6).toFixed(1)}MB → ${(totalAfter / 1e6).toFixed(1)}MB`);
