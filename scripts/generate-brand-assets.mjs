import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Rebuild raster fallbacks from the hand-traced signature SVG.
const root = new URL('../public/', import.meta.url);
const mark = await readFile(new URL('signature-mark.svg', root), 'utf8');
const svg = Buffer.from(mark.replace('<path', '<rect width="64" height="64" rx="8" fill="#141413"/><path'));
await writeFile(new URL('favicon.svg', root), svg);
const raster = size => sharp(svg, { density: 576 }).resize(size, size).png().toBuffer();
await writeFile(new URL('favicon.png', root), await raster(32));
await writeFile(new URL('apple-touch-icon.png', root), await raster(180));

// ICO directory containing PNG images at native favicon sizes.
const sizes = [16, 32, 48, 64];
const images = await Promise.all(sizes.map(raster));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(new URL('favicon.ico', root), Buffer.concat([header, ...images]));
const socialPath = new URL('images/social-preview.svg', root);
const path = mark.slice(mark.indexOf('<path'), mark.indexOf('</svg>'));
const social = (await readFile(socialPath, 'utf8'))
  .replace(/<g transform="translate\(76 72\) scale\(2\)">[\s\S]*?<\/g>/, `<g transform="translate(76 72) scale(2)">${path}</g>`);
await writeFile(socialPath, social);
await sharp(Buffer.from(social))
  .png().toFile(new URL('images/social-preview.png', root).pathname);
