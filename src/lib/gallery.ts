import fs from "fs";
import path from "path";

import sizeOf from "image-size";

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

  const images = fileNames
    .filter((fileName) => {
      const ext = path.extname(fileName).toLowerCase();
      return [".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(ext);
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

      // Create a readable alt text from filename: "festival-utrecht-2024.jpg" -> "Festival Utrecht 2024"
      const nameWithoutExt = path.parse(fileName).name;
      const alt = nameWithoutExt.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

      return {
        src: `/gallery/${directory}/${fileName}`,
        width,
        height,
        alt: alt,
      };
    });

  return images;
}
