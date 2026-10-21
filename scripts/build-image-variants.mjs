// Generates responsive WebP variants of site photos into public/_img/ (gitignored).
// Runs before `next build` and `next dev`; the custom loader in src/lib/image-loader.ts points
// <Image> to these files, so we get responsive images without Vercel's paid image optimization.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const outRoot = path.join(publicDir, "_img");

// Keep in sync with WIDTHS in src/lib/image-loader.ts.
const WIDTHS = [640, 1080, 1280, 1920];
const SOURCE_DIRS = ["gallery", "images", "logos"];
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) yield full;
  }
}

let made = 0;
let skipped = 0;
for (const sub of SOURCE_DIRS) {
  for (const source of walk(path.join(publicDir, sub))) {
    const rel = path.relative(publicDir, source);
    const base = rel.slice(0, -path.extname(rel).length);
    const sourceTime = fs.statSync(source).mtimeMs;
    for (const width of WIDTHS) {
      const out = path.join(outRoot, `${base}-${width}w.webp`);
      if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= sourceTime) {
        skipped++;
        continue;
      }
      fs.mkdirSync(path.dirname(out), { recursive: true });
      await sharp(source)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: width <= 640 ? 72 : 76 })
        .toFile(out);
      made++;
    }
  }
}
console.log(`Image variants: ${made} generated, ${skipped} up to date.`);
