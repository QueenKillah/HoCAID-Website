import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const pdfPath = path.join(root, 'public', 'Hocaid_Programs actvities information for Website_Content.pdf');
const outputDir = path.join(root, 'public', 'images', 'activities');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const data = fs.readFileSync(pdfPath);

const STREAM = Buffer.from('stream');
const ENDSTREAM = Buffer.from('endstream');

let count = 0;
let pos = 0;

while (pos < data.length) {
  const si = data.indexOf(STREAM, pos);
  if (si === -1) break;

  // Skip 'stream' + line ending
  let start = si + STREAM.length;
  if (data[start] === 0x0D && data[start + 1] === 0x0A) start += 2;
  else if (data[start] === 0x0A) start += 1;

  const ei = data.indexOf(ENDSTREAM, start);
  if (ei === -1) break;

  // Trim trailing newline before endstream
  let end = ei;
  if (data[end - 1] === 0x0A) end--;
  if (data[end - 1] === 0x0D) end--;

  // JPEG magic: FF D8 FF
  if (data[start] === 0xFF && data[start + 1] === 0xD8 && data[start + 2] === 0xFF) {
    const img = data.slice(start, end);
    if (img.length > 10_000) {
      count++;
      const out = path.join(outputDir, `activity-${count}.jpg`);
      fs.writeFileSync(out, img);
      console.log(`[${count}] ${out}  (${(img.length / 1024).toFixed(0)} KB)`);
    }
  }

  pos = ei + ENDSTREAM.length;
}

console.log(`\nDone — ${count} images extracted to ${outputDir}`);
