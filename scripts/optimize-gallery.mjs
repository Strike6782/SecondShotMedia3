import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

// Album folders that map 1:1 from gallery-incoming to public/gallery.
const ALBUMS = [
  "events",
  "club",
  "corporate",
  "students",
  "theme-parks",
];

// Source extensions sharp can read for gallery imports.
const SOURCE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".tif",
  ".tiff",
  ".heic",
  ".heif",
]);

// Output settings tuned for web gallery use.
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;

const incomingRoot = path.join(projectRoot, "gallery-incoming");
const publicGalleryRoot = path.join(projectRoot, "public", "gallery");

/**
 * Returns true when the file looks like an importable source image.
 */
function isSourceImage(fileName) {
  return SOURCE_EXTENSIONS.has(path.extname(fileName).toLowerCase());
}

/**
 * Removes every file in a gallery album directory.
 */
function clearAlbumDirectory(albumDir) {
  if (!fs.existsSync(albumDir)) {
    fs.mkdirSync(albumDir, { recursive: true });
    return 0;
  }

  const existingFiles = fs.readdirSync(albumDir);
  for (const fileName of existingFiles) {
    fs.unlinkSync(path.join(albumDir, fileName));
  }

  return existingFiles.length;
}

/**
 * Builds a safe JPEG output name while preserving ordering prefixes.
 */
function toOutputFileName(sourceFileName) {
  const parsed = path.parse(sourceFileName);
  const safeBase = parsed.name
    .normalize("NFKD")
    .replace(/[^\w.\- ]+/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return `${safeBase || "image"}.jpg`;
}

/**
 * Resizes one source image and writes an optimized JPEG to the public album.
 */
async function optimizeImage(sourcePath, outputPath) {
  await sharp(sourcePath)
    .rotate()
    .resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    })
    .jpeg({
      quality: JPEG_QUALITY,
      mozjpeg: true,
    })
    .toFile(outputPath);
}

/**
 * Processes one album: replace public files with optimized copies from incoming.
 */
async function processAlbum(album) {
  const incomingDir = path.join(incomingRoot, album);
  const outputDir = path.join(publicGalleryRoot, album);

  if (!fs.existsSync(incomingDir)) {
    return null;
  }

  const sourceFiles = fs
    .readdirSync(incomingDir)
    .filter(isSourceImage)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

  if (sourceFiles.length === 0) {
    return null;
  }

  const removedCount = clearAlbumDirectory(outputDir);
  let totalInputBytes = 0;
  let totalOutputBytes = 0;

  for (const sourceFileName of sourceFiles) {
    const sourcePath = path.join(incomingDir, sourceFileName);
    const outputFileName = toOutputFileName(sourceFileName);
    const outputPath = path.join(outputDir, outputFileName);

    const inputStats = fs.statSync(sourcePath);
    totalInputBytes += inputStats.size;

    await optimizeImage(sourcePath, outputPath);

    totalOutputBytes += fs.statSync(outputPath).size;
  }

  return {
    album,
    sourceCount: sourceFiles.length,
    removedCount,
    inputMB: totalInputBytes / (1024 * 1024),
    outputMB: totalOutputBytes / (1024 * 1024),
  };
}

async function main() {
  console.log("Optimizing gallery images from gallery-incoming/ ...\n");

  const results = [];

  for (const album of ALBUMS) {
    const result = await processAlbum(album);
    if (result) {
      results.push(result);
    }
  }

  if (results.length === 0) {
    console.log("Geen bronfoto's gevonden in gallery-incoming/<album>/.");
    console.log("Kopieer je selectie naar de juiste submap en voer dit script opnieuw uit.");
    process.exitCode = 1;
    return;
  }

  for (const result of results) {
    console.log(
      `${result.album}: ${result.sourceCount} foto('s) geoptimaliseerd ` +
        `(${result.inputMB.toFixed(2)} MB -> ${result.outputMB.toFixed(2)} MB, ` +
        `${result.removedCount} oude bestand(en) verwijderd)`
    );
  }

  console.log("\nKlaar. Start npm run dev om de galerijen op de site te controleren.");
}

main().catch((error) => {
  console.error("Gallery optimization failed:", error);
  process.exitCode = 1;
});
