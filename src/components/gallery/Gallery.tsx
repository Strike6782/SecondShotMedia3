"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: { src: string; alt: string }[];
  className?: string;
  layout?: "masonry" | "grid";
  linkTarget?: string;
}

export function Gallery({ images, className, layout = "masonry", linkTarget }: GalleryProps) {
  if (!images || images.length === 0) {
    return (
      <div className="flex h-40 w-full items-center justify-center rounded-lg border border-dashed text-muted-foreground">
        <p>Geen afbeeldingen gevonden in deze galerij.</p>
      </div>
    );
  }

  // Masonry default classes
  const masonryClasses = "columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-3 space-y-4";
  // Grid default classes
  const gridClasses = "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";

  return (
    <div className={cn(layout === "grid" ? gridClasses : masonryClasses, className)}>
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className={cn(
            "overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl",
            layout === "masonry" ? "mb-4 break-inside-avoid inline-block w-full" : "h-full"
          )}
        >
          {linkTarget ? (
            <Link href={linkTarget} prefetch={false} className="block h-full cursor-pointer">
              <div className="relative group h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className={cn(
                    "w-full transition-transform duration-500 group-hover:scale-105",
                    layout === "grid" ? "h-full object-cover aspect-[3/2]" : "h-auto"
                  )}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              </div>
            </Link>
          ) : (
            <div className="relative group h-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className={cn(
                  "w-full transition-transform duration-500 group-hover:scale-105",
                  layout === "grid" ? "h-full object-cover aspect-[3/2]" : "h-auto"
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
            </div>
          )}

        </motion.div>
      ))}
    </div>
  );
}
