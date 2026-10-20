"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
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
  onImageClick?: (src: string) => void;
}) {
  const isPriority = index < 3;
  const isClickable = !linkTarget && Boolean(onImageClick);

  const imageContent = (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width ?? 600}
      height={image.height ?? 400}
      priority={isPriority}
      className={cn(
        "w-full transition-opacity duration-300 group-hover:opacity-90",
        layout === "grid" ? "h-full object-cover aspect-[3/2]" : "h-auto"
      )}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );

  const imageWrapper = (
    <div className="relative group h-full">
      {imageContent}
    </div>
  );

  return (
    <div
      className={cn(
        "overflow-hidden bg-muted",
        layout === "masonry" ? "break-inside-avoid inline-block w-full" : "h-full"
      )}
    >
      {linkTarget ? (
        <Link href={linkTarget} prefetch={false} className="block h-full cursor-pointer">
          {imageWrapper}
        </Link>
      ) : isClickable ? (
        <button
          type="button"
          onClick={() => onImageClick?.(image.src)}
          className="block h-full w-full cursor-zoom-in text-left"
          aria-label={`Vergroot ${image.alt}`}
        >
          {imageWrapper}
        </button>
      ) : (
        imageWrapper
      )}
    </div>
  );
}

export function Gallery({ images, className, layout = "masonry", linkTarget }: GalleryProps) {
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);

  // Use server-provided order so thumbnails and lightbox always refer to the same image.
  const displayImages = images;

  const selectedIndex = useMemo(() => {
    if (!selectedSrc) return null;
    const index = displayImages.findIndex((image) => image.src === selectedSrc);
    return index === -1 ? null : index;
  }, [displayImages, selectedSrc]);

  if (!displayImages || displayImages.length === 0) {
    return (
      <div className="flex h-40 w-full items-center justify-center rounded-lg border border-dashed text-muted-foreground">
        <p>Geen afbeeldingen gevonden in deze galerij.</p>
      </div>
    );
  }

  const masonryClasses = "columns-1 gap-3 sm:columns-2 lg:columns-3 [&>*]:mb-3";
  const gridClasses = "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3";

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
            onImageClick={linkTarget ? undefined : setSelectedSrc}
          />
        ))}
      </div>

      {!linkTarget && (
        <GalleryLightbox
          images={displayImages}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedSrc(null)}
          onNavigate={(index) => setSelectedSrc(displayImages[index]?.src ?? null)}
        />
      )}
    </>
  );
}
