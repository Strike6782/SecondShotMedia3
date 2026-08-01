import path from "path";

import { getAlbumContextMap, getPhotoAltOverrides } from "@/lib/portfolio";

/**
 * Builds a descriptive alt text from filename, album folder, and optional overrides.
 */
export function buildGalleryAlt(fileName: string, directory: string): string {
  const altOverrides = getPhotoAltOverrides();
  if (altOverrides[fileName]) {
    return altOverrides[fileName];
  }

  const albumContext = getAlbumContextMap();
  const nameWithoutExt = path.parse(fileName).name;
  const cleaned = nameWithoutExt
    .replace(/---Second-Shot-Media/gi, "")
    .replace(/Second-Shot-Media/gi, "")
    .replace(/-{2,}/g, " ")
    .replace(/[-_]/g, " ")
    .replace(/\s+\d{6,}/g, "")
    .replace(/\s+\d+$/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const context = albumContext[directory] ?? "Fotografie";
  const descriptive = cleaned
    .split(" ")
    .filter((word) => word.length > 1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  if (!descriptive || descriptive.length < 4) {
    return `${context} Second Shot Media`;
  }

  return `${context}: ${descriptive}`;
}
