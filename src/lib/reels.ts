import fs from "fs";
import path from "path";

import { shuffleImages } from "@/lib/shuffle";

export interface LeisureReel {
  title: string;
  videoSrc: string;
}

/**
 * Loads published leisure reels from the generated manifest.
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

  return shuffleImages(
    parsed.filter((reel) => reel.title && reel.videoSrc)
  );
}
