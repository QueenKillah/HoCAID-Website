// Generates all favicon sizes from public/images/Logo_image_without_bg.png
import sharp from "sharp";
import { writeFileSync } from "fs";
import { resolve } from "path";

const input = resolve("public/images/Logo_image_without_bg.png");

// Wrap a PNG buffer inside a minimal ICO container (PNG-in-ICO, supported by all modern browsers)
function pngToIco(pngBuf) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(1, 4); // image count: 1

  const dir = Buffer.alloc(16);
  dir.writeUInt8(32, 0);                    // width
  dir.writeUInt8(32, 1);                    // height
  dir.writeUInt8(0, 2);                     // color count (0 = no palette)
  dir.writeUInt8(0, 3);                     // reserved
  dir.writeUInt16LE(1, 4);                  // planes
  dir.writeUInt16LE(32, 6);                 // bits per pixel
  dir.writeUInt32LE(pngBuf.length, 8);      // image data size
  dir.writeUInt32LE(22, 12);               // offset to data (6 + 16)

  return Buffer.concat([header, dir, pngBuf]);
}

// Trim transparent border first, then all sizes branch from this buffer
const trimmedBuf = await sharp(input).trim().png().toBuffer();

// ── Browser favicons (transparent bg — browser tab chrome shows through) ──────
const buf16 = await sharp(trimmedBuf)
  .resize(16, 16, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
writeFileSync(resolve("public/favicon-16x16.png"), buf16);
console.log("✓ favicon-16x16.png");

const buf32 = await sharp(trimmedBuf)
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();
writeFileSync(resolve("public/favicon-32x32.png"), buf32);
console.log("✓ favicon-32x32.png");

writeFileSync(resolve("public/favicon.ico"), pngToIco(buf32));
console.log("✓ favicon.ico");

// ── Home screen icons (cream #FEF9F0 background — logo visible on all devices) ─
const cream = { r: 254, g: 249, b: 240, alpha: 1 };

const buf180 = await sharp(trimmedBuf)
  .resize(148, 148, { fit: "contain", background: cream })
  .flatten({ background: cream })
  .extend({ top: 16, bottom: 16, left: 16, right: 16, background: cream })
  .png()
  .toBuffer();
writeFileSync(resolve("public/apple-touch-icon.png"), buf180);
console.log("✓ apple-touch-icon.png");

const buf192 = await sharp(trimmedBuf)
  .resize(160, 160, { fit: "contain", background: cream })
  .flatten({ background: cream })
  .extend({ top: 16, bottom: 16, left: 16, right: 16, background: cream })
  .png()
  .toBuffer();
writeFileSync(resolve("public/favicon-192x192.png"), buf192);
console.log("✓ favicon-192x192.png");

console.log("\nAll favicons generated.");
