import fs from "fs";
import path from "path";

import sizeOf from "image-size";

import { buildGalleryAlt } from "@/lib/gallery-alt";
import { getGalleriesForBranch, type PortfolioGallery } from "@/lib/portfolio";
import { shuffleImages } from "@/lib/shuffle";

export interface ImageFile {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export async function getImagesFromDirectory(directory: string, altContext?: string): Promise<ImageFile[]> {
  const galleryDirectory = path.join(process.cwd(), "public", "gallery", directory);

  if (!fs.existsSync(galleryDirectory)) {
    console.warn(`Gallery directory not found: ${galleryDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(galleryDirectory);

  // Prefer WebP when both JPEG and WebP exist for the same image base name.
  const webpBases = new Set(
    fileNames
      .filter((fileName) => path.extname(fileName).toLowerCase() === ".webp")
      .map((fileName) => path.parse(fileName).name)
  );

  const images = fileNames
    .filter((fileName) => {
      const ext = path.extname(fileName).toLowerCase();
      if (![".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(ext)) {
        return false;
      }
      const base = path.parse(fileName).name;
      if (ext === ".jpg" || ext === ".jpeg") {
        return !webpBases.has(base);
      }
      return true;
    })
    .map((fileName) => {
      const fullPath = path.join(galleryDirectory, fileName);
      let width = 800;
      let height = 600;

      try {
        const buffer = fs.readFileSync(fullPath);
        const dimensions = sizeOf(buffer);
        if (dimensions.width && dimensions.height) {
          width = dimensions.width;
          height = dimensions.height;
        }
      } catch (err) {
        console.error(`Error reading image dimensions for ${fileName}:`, err);
      }

      const alt = buildGalleryAlt(fileName, altContext ?? directory);

      return {
        src: `/gallery/${directory}/${fileName}`,
        width,
        height,
        alt,
      };
    });

  return shuffleImages(images);
}

/** Loads one album: either a curated selection (in order) or the whole folder, shuffled. */
export async function getGalleryImages(gallery: PortfolioGallery): Promise<ImageFile[]> {
  const folder = gallery.folder ?? gallery.id;
  const images = await getImagesFromDirectory(folder, gallery.id);
  if (!gallery.include?.length) {
    return images;
  }
  const byName = new Map(images.map((img) => [path.basename(img.src), img]));
  return gallery.include.map((name) => byName.get(name)).filter((img): img is ImageFile => Boolean(img));
}

/** All photos for an event type page. */
export async function getGalleryImagesForBranch(branchSlug: string): Promise<ImageFile[]> {
  const albums = await Promise.all(getGalleriesForBranch(branchSlug).map(getGalleryImages));
  return albums.flat();
}
