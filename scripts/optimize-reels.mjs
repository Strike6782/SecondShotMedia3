import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ffmpegStatic from "ffmpeg-static";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const incomingRoot = path.join(projectRoot, "reels-incoming");
const portfolioPath = path.join(projectRoot, "content", "portfolio.json");
const outputVideoDir = path.join(projectRoot, "public", "reels");
const publishedManifestPath = path.join(projectRoot, "content", "leisure-reels.json");

// Web-friendly vertical reel limits (9:16).
const MAX_WIDTH = 1080;
const MAX_HEIGHT = 1920;
const VIDEO_CRF = 28;
const AUDIO_BITRATE = "128k";

const SOURCE_EXTENSIONS = new Set([".mp4", ".mov", ".m4v", ".webm"]);

/**
 * Runs ffmpeg with the bundled binary and returns a promise.
 */
function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    if (!ffmpegStatic) {
      reject(new Error("ffmpeg binary not found. Reinstall ffmpeg-static."));
      return;
    }

    const process = spawn(ffmpegStatic, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stderr = "";

    process.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    process.on("error", reject);
    process.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`ffmpeg exited with code ${code}\n${stderr}`));
    });
  });
}

/**
 * Builds a safe output filename from the source reel name.
 */
function toOutputFileName(sourceFileName) {
  const parsed = path.parse(sourceFileName);
  const safeBase = parsed.name
    .normalize("NFKD")
    .replace(/[^\w.\- ]+/g, "")
    .trim()
    .replace(/\s+/g, "-");

  return `${safeBase || "reel"}.mp4`;
}

/**
 * Removes all video files from the public reels folder.
 */
function clearOutputDirectory() {
  if (!fs.existsSync(outputVideoDir)) {
    fs.mkdirSync(outputVideoDir, { recursive: true });
    return 0;
  }

  const removed = fs
    .readdirSync(outputVideoDir)
    .filter((fileName) => SOURCE_EXTENSIONS.has(path.extname(fileName).toLowerCase()));

  for (const fileName of removed) {
    fs.unlinkSync(path.join(outputVideoDir, fileName));
  }

  return removed.length;
}

/**
 * Compresses one source reel for web playback.
 */
async function optimizeReel(sourcePath, outputPath) {
  await runFfmpeg([
    "-y",
    "-i",
    sourcePath,
    "-map",
    "0:v:0",
    "-map",
    "0:a:0?",
    "-vf",
    `scale=${MAX_WIDTH}:${MAX_HEIGHT}:force_original_aspect_ratio=decrease`,
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    String(VIDEO_CRF),
    "-c:a",
    "aac",
    "-b:a",
    AUDIO_BITRATE,
    "-movflags",
    "+faststart",
    outputPath,
  ]);
}

/**
 * Reads reel entries from the central portfolio manifest.
 */
function readPortfolioReels() {
  if (!fs.existsSync(portfolioPath)) {
    throw new Error(`Portfolio manifest niet gevonden: ${portfolioPath}`);
  }

  const portfolio = JSON.parse(fs.readFileSync(portfolioPath, "utf8"));
  const reels = portfolio.reels;

  if (!Array.isArray(reels) || reels.length === 0) {
    throw new Error("portfolio.json moet een niet-lege 'reels' array bevatten.");
  }

  return reels;
}

async function main() {
  console.log("Optimizing leisure reels from content/portfolio.json ...\n");

  const manifest = readPortfolioReels();
  const removedCount = clearOutputDirectory();

  const published = [];
  let totalInputBytes = 0;
  let totalOutputBytes = 0;

  for (const entry of manifest) {
    const { file, title, note } = entry;

    if (!file) {
      throw new Error("Elk reel-item in portfolio.json moet een 'file' hebben.");
    }

    if (!title?.trim()) {
      throw new Error(`Vul een titel in voor: ${file}`);
    }

    const sourcePath = path.join(incomingRoot, file);
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Bronbestand niet gevonden: ${sourcePath}`);
    }

    const outputFileName = toOutputFileName(file);
    const outputPath = path.join(outputVideoDir, outputFileName);

    const inputStats = fs.statSync(sourcePath);
    totalInputBytes += inputStats.size;

    await optimizeReel(sourcePath, outputPath);

    const outputStats = fs.statSync(outputPath);
    totalOutputBytes += outputStats.size;

    published.push({
      title,
      videoSrc: `/reels/${outputFileName}`,
      ...(note?.trim() ? { note: note.trim() } : {}),
    });

    console.log(
      `${title}: ${(inputStats.size / (1024 * 1024)).toFixed(2)} MB -> ` +
        `${(outputStats.size / (1024 * 1024)).toFixed(2)} MB`
    );
  }

  fs.mkdirSync(path.dirname(publishedManifestPath), { recursive: true });
  fs.writeFileSync(publishedManifestPath, `${JSON.stringify(published, null, 2)}\n`, "utf8");

  console.log(
    `\n${published.length} reel(s) geoptimaliseerd ` +
      `(${(totalInputBytes / (1024 * 1024)).toFixed(2)} MB -> ` +
      `${(totalOutputBytes / (1024 * 1024)).toFixed(2)} MB, ` +
      `${removedCount} oude bestand(en) verwijderd).`
  );
  console.log(`Manifest bijgewerkt: content/leisure-reels.json`);
  console.log("\nKlaar. Start npm run dev en controleer /social-content-leisure/.");
}

main().catch((error) => {
  console.error("Reel optimization failed:", error.message || error);
  process.exitCode = 1;
});
