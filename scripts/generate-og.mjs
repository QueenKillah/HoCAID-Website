/**
 * Generates public/og-default.png (1200×630) from scratch using sharp.
 * Composites the HoCAID logo (white-bg removed) on a navy background.
 * Run with: node scripts/generate-og.mjs
 */

import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const WIDTH = 1200;
const HEIGHT = 630;

// ── 1. Navy base with radial sunrise glow ─────────────────────────────────
const baseSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0C2340"/>
  <radialGradient id="g" cx="50%" cy="100%" r="65%">
    <stop offset="0%" stop-color="#F97316" stop-opacity="0.35"/>
    <stop offset="100%" stop-color="#0C2340" stop-opacity="0"/>
  </radialGradient>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g)"/>
</svg>`);

const base = await sharp(baseSvg).png().toBuffer();

// ── 2. Gradient strip at bottom ────────────────────────────────────────────
const stripSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="14">
  <defs>
    <linearGradient id="s" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#F97316"/>
      <stop offset="100%" stop-color="#FBBF24"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="14" fill="url(#s)"/>
</svg>`);

const strip = await sharp(stripSvg).png().toBuffer();

// ── 3. Logo: load, resize, remove white background ─────────────────────────
const logoRaw = await sharp(join(publicDir, "logo-hd.png"))
  .resize(340, null, { fit: "inside" })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { data, info } = logoRaw;
const px = info.width * info.height;

// Flood-fill: pixels with R,G,B all > 240 → fully transparent
for (let i = 0; i < px; i++) {
  const o = i * 4;
  if (data[o] > 240 && data[o + 1] > 240 && data[o + 2] > 240) {
    data[o + 3] = 0;
  }
}

const logoTransparent = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).png().toBuffer();

// Centre logo in upper portion of image
const logoLeft = Math.round((WIDTH - info.width) / 2);
const logoTop = Math.round((HEIGHT * 0.12)); // 12% from top

// ── 4. Tagline text ────────────────────────────────────────────────────────
const tagY = logoTop + info.height + 36;

const taglineSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="100">
  <text x="${WIDTH / 2}" y="36"
    font-family="Georgia, serif" font-size="26" font-weight="400"
    fill="#FBBF24" text-anchor="middle" letter-spacing="5">AID. DEVELOP. TRANSFORM.</text>
  <text x="${WIDTH / 2}" y="76"
    font-family="Georgia, serif" font-size="18" font-weight="400"
    fill="rgba(255,255,255,0.6)" text-anchor="middle">Rising Together Towards a Better Tomorrow</text>
</svg>`);

const tagline = await sharp(taglineSvg).png().toBuffer();

// ── 5. Composite everything ────────────────────────────────────────────────
const pngPath = join(publicDir, "og-default.png");

await sharp(base)
  .composite([
    { input: logoTransparent, left: logoLeft, top: logoTop },
    { input: tagline, left: 0, top: tagY },
    { input: strip, left: 0, top: HEIGHT - 14 },
  ])
  .png()
  .toFile(pngPath);

// ── 6. Verify ──────────────────────────────────────────────────────────────
const { width, height } = await sharp(pngPath).metadata();

if (width !== WIDTH || height !== HEIGHT) {
  console.error(`Dimension mismatch: expected ${WIDTH}x${HEIGHT}, got ${width}x${height}`);
  process.exit(1);
}

console.log(`✅ og-default.png → ${width}×${height} px`);
