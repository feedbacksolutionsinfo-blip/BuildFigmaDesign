/**
 * Image optimization:
 *  - converts every raster image in src/imports larger than MIN_BYTES to WebP
 *    (max width 1920px), rewrites code references and removes the original
 *  - recompresses smaller JPEG/PNG files in place where it pays off
 *  - generates public/og-image.jpg (1200x630) and public/apple-touch-icon.png
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const IMPORTS = path.join(SRC, "imports");
const MIN_BYTES = 40 * 1024;
const MAX_WIDTH = 1920;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const RASTER = new Set([".png", ".jpg", ".jpeg"]);

async function main() {
  const files = walk(IMPORTS).filter((f) => RASTER.has(path.extname(f).toLowerCase()));
  const converted = []; // { from: absolute png path, to: absolute webp path, fileName swaps }

  let before = 0;
  let after = 0;

  for (const file of files) {
    const size = fs.statSync(file).size;
    before += size;
    if (size < MIN_BYTES) {
      after += size;
      continue;
    }
    const webpPath = file.replace(/\.(png|jpe?g)$/i, ".webp");
    const img = sharp(file);
    const meta = await img.metadata();
    const pipeline = meta.width && meta.width > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img;
    await pipeline.webp({ quality: 93 }).toFile(webpPath);
    const newSize = fs.statSync(webpPath).size;
    after += newSize;
    converted.push({ from: file, to: webpPath });
    console.log(
      `✓ ${path.relative(ROOT, file)}  ${(size / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB`
    );
  }

  // rewrite references in source files
  const codeFiles = walk(SRC).filter((f) => /\.(ts|tsx|css)$/.test(f));
  for (const { from, to } of converted) {
    const fromRel = path.basename(from);
    const toRel = path.basename(to);
    for (const code of codeFiles) {
      let text = fs.readFileSync(code, "utf8");
      if (text.includes(fromRel)) {
        text = text.split(fromRel).join(toRel);
        fs.writeFileSync(code, text);
      }
    }
    fs.unlinkSync(from);
  }

  console.log(`\nTotal: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(1)}MB`);

  // ── social/brand assets ────────────────────────────────────────────────────
  const hero = path.join(IMPORTS, "eaisy-hero-final.webp");
  const heroSrc = fs.existsSync(hero) ? hero : path.join(IMPORTS, "eaisy-hero-final.png");
  await sharp(heroSrc)
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .jpeg({ quality: 85 })
    .toFile(path.join(ROOT, "public/og-image.jpg"));
  console.log("✓ public/og-image.jpg");

  await sharp(path.join(ROOT, "public/favicon.svg"), { density: 384 })
    .resize(180, 180)
    .png()
    .toFile(path.join(ROOT, "public/apple-touch-icon.png"));
  console.log("✓ public/apple-touch-icon.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
