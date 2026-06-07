"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { shuffleImages } from "@/lib/shuffle";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";

interface GalleryImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface GalleryProps {
  images: GalleryImageData[];
  className?: string;
  layout?: "masonry" | "grid";
  linkTarget?: string;
}

function GalleryImage({
  image,
  index,
  layout,
  linkTarget,
  onImageClick,
}: {
  image: GalleryImageData;
  index: number;
  layout: "masonry" | "grid";
  linkTarget?: string;
  onImageClick?: (index: number) => void;
}) {
  const isPriority = index < 10;
  const isClickable = !linkTarget && Boolean(onImageClick);

  const imageContent = (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width ?? 600}
      height={image.height ?? 400}
      priority={isPriority}
      className={cn(
        "w-full transition-transform duration-500 group-hover:scale-105",
        layout === "grid" ? "h-full object-cover aspect-[3/2]" : "h-auto"
      )}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );

  const imageWrapper = (
    <div className="relative group h-full">
      {imageContent}
      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{
        duration: 0.4,
        delay: (index % 4) * 0.1,
      }}
      className={cn(
        "overflow-hidden rounded-lg shadow-md transition-shadow hover:shadow-xl",
        layout === "masonry" ? "mb-4 break-inside-avoid inline-block w-full" : "h-full"
      )}
    >
      {linkTarget ? (
        <Link href={linkTarget} prefetch={false} className="block h-full cursor-pointer">
          {imageWrapper}
        </Link>
      ) : isClickable ? (
        <button
          type="button"
          onClick={() => onImageClick?.(index)}
          className="block h-full w-full cursor-zoom-in text-left"
          aria-label={`Vergroot ${image.alt}`}
        >
          {imageWrapper}
        </button>
      ) : (
        imageWrapper
      )}
    </motion.div>
  );
}

export function Gallery({ images, className, layout = "masonry", linkTarget }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Shuffle once per mount so gallery order varies between page visits.
  const displayImages = useMemo(() => shuffleImages(images), [images]);

  if (!displayImages || displayImages.length === 0) {
    return (
      <div className="flex h-40 w-full items-center justify-center rounded-lg border border-dashed text-muted-foreground">
        <p>Geen afbeeldingen gevonden in deze galerij.</p>
      </div>
    );
  }

  const masonryClasses = "columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-3 space-y-4";
  const gridClasses = "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";

  return (
    <>
      <div className={cn(layout === "grid" ? gridClasses : masonryClasses, className)}>
        {displayImages.map((image, index) => (
          <GalleryImage
            key={image.src}
            image={image}
            index={index}
            layout={layout}
            linkTarget={linkTarget}
            onImageClick={linkTarget ? undefined : setSelectedIndex}
          />
        ))}
      </div>

      {!linkTarget && (
        <GalleryLightbox
          images={displayImages}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      )}
    </>
  );
}
