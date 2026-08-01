import fs from "fs";
import path from "path";

// Province names in steden.txt, not actual cities.
const REGION_HEADERS = new Set([
  "Gelderland",
  "Noord-Holland",
  "Zuid-Holland",
  "Flevoland",
  "Overijssel",
  "Noord-Brabant",
]);

export type City = {
  slug: string;
  name: string;
};

const SLUG_OVERRIDES: Record<string, string> = {
  "s-hertogenbosch": "'s-Hertogenbosch",
  "den-haag": "Den Haag",
  "alphen-aan-den-rijn": "Alphen aan den Rijn",
  "capelle-aan-den-ijssel": "Capelle aan den IJssel",
  "bunschoten-spakenburg": "Bunschoten-Spakenburg",
  "driebergen-rijsenburg": "Driebergen-Rijsenburg",
  "wijk-bij-duurstede": "Wijk bij Duurstede",
};

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[''´`]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function formatCityName(slug: string): string {
  if (SLUG_OVERRIDES[slug]) return SLUG_OVERRIDES[slug];
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

// City list from steden.txt for static generation and sitemap.
export function getCities(): City[] {
  const filePath = path.join(process.cwd(), "steden.txt");
  if (!fs.existsSync(filePath)) {
    return getCitiesFromSeoFolders();
  }

  const lines = fs
    .readFileSync(filePath, "utf-8")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return lines
    .filter((line) => !REGION_HEADERS.has(line))
    .map((name) => ({ name, slug: toSlug(name) }))
    .sort((a, b) => a.name.localeCompare(b.name, "nl"));
}

function getCitiesFromSeoFolders(): City[] {
  const seoDir = path.join(process.cwd(), "src/app/(seo)");
  if (!fs.existsSync(seoDir)) return [];

  const prefix = "evenementen-fotograaf-videograaf-";
  const entries = fs.readdirSync(seoDir, { withFileTypes: true });

  return entries
    .filter((e) => e.isDirectory() && e.name.startsWith(prefix) && !e.name.includes("[stad]"))
    .map((e) => {
      const slug = e.name.slice(prefix.length);
      return { slug, name: formatCityName(slug) };
    })
    .sort((a, b) => a.name.localeCompare(b.name, "nl"));
}

export function getCityRoutePrefix(): string {
  return "evenementen-fotograaf-videograaf";
}

export function getCityPath(slug: string): string {
  return `/${getCityRoutePrefix()}-${slug}/`;
}
