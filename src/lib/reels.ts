import fs from "fs";
import path from "path";

export interface LeisureReel {
  title: string;
  videoSrc: string;
  /** Optional credit or context, e.g. "Alleen montage" or "Alleen camerawerk". */
  note?: string;
}

/**
 * Loads published leisure reels from the generated manifest.
 * Order matches content/portfolio.json (via npm run reels:optimize).
 */
export async function getLeisureReels(): Promise<LeisureReel[]> {
  const manifestPath = path.join(process.cwd(), "content", "leisure-reels.json");

  if (!fs.existsSync(manifestPath)) {
    console.warn(`Leisure reels manifest not found: ${manifestPath}`);
    return [];
  }

  const raw = fs.readFileSync(manifestPath, "utf8");
  const parsed = JSON.parse(raw) as LeisureReel[];

  if (!Array.isArray(parsed)) {
    console.warn("leisure-reels.json must contain an array.");
    return [];
  }

  return parsed.filter((reel) => reel.title && reel.videoSrc);
}
