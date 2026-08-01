import path from "path";

// Manual alt-text overrides for gallery images (SEO and accessibility).
const ALT_OVERRIDES: Record<string, string> = {
  "EP-1.jpg": "Attractiepark Efteling winterse sfeer",
  "phl-met-olaf-39.jpg": "Pretpark fotografie",
  "phl-met-olaf-47.jpg": "Pretpark fotografie",
  "De-Vaste-Clique-IB-1.jpg": "Club nightlife fotografie dansvloer",
  "De-Vaste-Clique-IB-2.jpg": "Nightlife event sfeerreportage",
  "De-Vaste-Clique-IB-3.jpg": "Club event publiek en sfeer",
  "De-Vaste-Clique-IB-5.jpg": "Nightlife fotografie dansvloer",
  "De-Vaste-Clique-IB-17.jpg": "Club night energie op de dansvloer",
  "De-Vaste-Clique-IB-22.jpg": "Nightlife event reportage",
  "De-Vaste-Clique-IB-55.jpg": "Club sfeerbeeld publiek",
  "De-Vaste-Clique-IB-81.jpg": "Nightlife fotografie low-light",
  "best-of-breda---Second-Shot-Media-8.jpg": "Festival reportage",
  "Efteling-Sneeuw---Second-Shot-Media-61.jpg": "Efteling winter attractie fotografie",
  "Efteling-Sneeuw---Second-Shot-Media-67.jpg": "Efteling winterse themabeleving",
  "Efteling-Sneeuw---Second-Shot-Media-57.jpg": "Attractiepark Efteling winter event",
  "Efteling-Sneeuw---Second-Shot-Media-26.jpg": "Efteling sfeerbeeld winter",
  "Efteling-Sneeuw---Second-Shot-Media-28.jpg": "Efteling attractie winter fotografie",
  "Efteling-Sneeuw---Second-Shot-Media-69.jpg": "Efteling winter reportage",
  "Thorpe-Park---Second-Shot-Media-3.jpg": "Thorpe Park attractiepark reportage",
  "Thorpe-Park---Second-Shot-Media-4.jpg": "Thorpe Park leisure fotografie",
  "Gala-Codex---Second-Shot-Media-14.jpg": "Gala Codex studentenvereniging reportage",
  "Gala-USKO---Second-Shot-Media-123.jpg": "Gala USKO Utrecht dansvloer",
  "Gala-USKO---Second-Shot-Media-69.jpg": "Gala USKO sfeerbeeld",
  "Gala-USKO---Second-Shot-Media-211.jpg": "Gala USKO fotografie",
  "Gala-Amersfoortse-Berg---Second-Shot-Media-66.jpg": "Gala Amersfoort reportage",
  "DSK-Gala-2026---Second-Shot-Media-2.jpg": "DSK Utrecht gala fotografie",
  "Nico-Campus-2026---Second-Shot-Media-140.jpg": "Zakelijk event Universiteit Utrecht",
  "Cybersec---Second-Shot-Media-6.jpg": "Cybersecurity congres reportage",
  "Koningsdag-Hof---Second-Shot-Media-20250426-20.jpg": "Koningsdag event fotografie",
  "Hof-bevrijdingsdag-2026---Second-Shot-Media-47.jpg": "Bevrijdingsdag festival reportage",
  "Hof-Dias-Latinos---Second-Shot-Media-20250704-37.jpg": "Latin festival sfeerreportage",
};

// Album-level context prefixes for generated alt text.
const ALBUM_CONTEXT: Record<string, string> = {
  events: "Eventfotografie",
  club: "Nightlife reportage",
  corporate: "Zakelijk event",
  students: "Gala reportage",
  "theme-parks": "Leisure attractiepark",
};

/**
 * Builds a descriptive alt text from filename, album folder, and optional overrides.
 */
export function buildGalleryAlt(fileName: string, directory: string): string {
  if (ALT_OVERRIDES[fileName]) {
    return ALT_OVERRIDES[fileName];
  }

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

  const context = ALBUM_CONTEXT[directory] ?? "Fotografie";
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
