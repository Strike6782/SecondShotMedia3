import fs from "fs";
import path from "path";

import type { BranchVideo } from "@/lib/types";

/** YouTube or Vimeo video entry in the central portfolio manifest. */
export type PortfolioYoutubeVideo = {
  id: string;
  title: string;
  type?: "youtube" | "vimeo";
  note?: string;
  branches: string[];
  featuredOnHomepage?: boolean;
};

/** Source reel entry: video file lives in reels-incoming/. */
export type PortfolioReelSource = {
  file: string;
  title: string;
  note?: string;
  branches: string[];
};

/** Photo album mapped to a folder under public/gallery/. */
export type PortfolioGallery = {
  id: string;
  albumContext: string;
  branches: string[];
  cityPage?: {
    title: string;
    href: string;
  };
};

/** Global portfolio settings for homepage and city pages. */
export type PortfolioSettings = {
  homepageFeaturedReelCount: number;
  homepageGalleryPerBranch: number;
  cityPageGalleryCount: number;
};

/** Central manifest for all portfolio media metadata. */
export type PortfolioData = {
  settings: PortfolioSettings;
  youtubeVideos: PortfolioYoutubeVideo[];
  reels: PortfolioReelSource[];
  galleries: PortfolioGallery[];
  photoAltOverrides: Record<string, string>;
};

const PORTFOLIO_PATH = path.join(process.cwd(), "content", "portfolio.json");

let cachedPortfolio: PortfolioData | null = null;

/** Loads the portfolio manifest from content/portfolio.json. */
export function getPortfolio(): PortfolioData {
  // In development, always re-read so portfolio.json edits show up without a server restart.
  if (cachedPortfolio && process.env.NODE_ENV === "production") {
    return cachedPortfolio;
  }

  if (!fs.existsSync(PORTFOLIO_PATH)) {
    throw new Error(`Portfolio manifest not found: ${PORTFOLIO_PATH}`);
  }

  const raw = fs.readFileSync(PORTFOLIO_PATH, "utf8");
  const parsed = JSON.parse(raw) as PortfolioData;

  if (!Array.isArray(parsed.youtubeVideos) || !Array.isArray(parsed.reels) || !Array.isArray(parsed.galleries)) {
    throw new Error("portfolio.json must contain youtubeVideos, reels, and galleries arrays.");
  }

  if (process.env.NODE_ENV === "production") {
    cachedPortfolio = parsed;
  }

  return parsed;
}

/** Maps a portfolio video entry to the shape used by VideoGrid. */
function toBranchVideo(video: PortfolioYoutubeVideo): BranchVideo {
  return {
    id: video.id,
    title: video.title,
    type: video.type,
    note: video.note,
  };
}

/** Returns YouTube/Vimeo videos assigned to a branch page. */
export function getYoutubeVideosForBranch(branchSlug: string): BranchVideo[] {
  return getPortfolio()
    .youtubeVideos.filter((video) => video.branches.includes(branchSlug))
    .map(toBranchVideo);
}

/** Returns curated YouTube/Vimeo videos for the homepage. */
export function getFeaturedYoutubeVideos(): BranchVideo[] {
  return getPortfolio()
    .youtubeVideos.filter((video) => video.featuredOnHomepage)
    .map(toBranchVideo);
}

/** Returns gallery folder ids for a branch page. */
export function getGalleryIdsForBranch(branchSlug: string): string[] {
  return getPortfolio()
    .galleries.filter((gallery) => gallery.branches.includes(branchSlug))
    .map((gallery) => gallery.id);
}

/** Returns gallery sections shown on city landing pages. */
export function getCityPageGalleries(cityName: string): Array<{
  id: string;
  title: string;
  href: string;
}> {
  return getPortfolio()
    .galleries.filter((gallery) => gallery.cityPage)
    .map((gallery) => ({
      id: gallery.id,
      title: gallery.cityPage!.title.replace("{city}", cityName),
      href: gallery.cityPage!.href,
    }));
}

/** Returns manual alt-text overrides for gallery images. */
export function getPhotoAltOverrides(): Record<string, string> {
  return getPortfolio().photoAltOverrides ?? {};
}

/** Returns album-level alt-text context prefixes keyed by gallery folder id. */
export function getAlbumContextMap(): Record<string, string> {
  return Object.fromEntries(
    getPortfolio().galleries.map((gallery) => [gallery.id, gallery.albumContext])
  );
}

/** Returns reel source entries for the optimize script. */
export function getReelSources(): PortfolioReelSource[] {
  return getPortfolio().reels;
}

/** Returns portfolio display settings. */
export function getPortfolioSettings(): PortfolioSettings {
  return getPortfolio().settings;
}
