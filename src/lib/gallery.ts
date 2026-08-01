import fs from "fs";
import path from "path";

import sizeOf from "image-size";

import { buildGalleryAlt } from "@/lib/gallery-alt";
import { shuffleImages } from "@/lib/shuffle";

export interface ImageFile {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export async function getImagesFromDirectory(directory: string): Promise<ImageFile[]> {
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

      const alt = buildGalleryAlt(fileName, directory);

      return {
        src: `/gallery/${directory}/${fileName}`,
        width,
        height,
        alt,
      };
    });

  return shuffleImages(images);
}
