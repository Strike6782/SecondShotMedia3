"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface LightboxImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface GalleryLightboxProps {
  images: LightboxImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryLightbox({
  images,
  selectedIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = selectedIndex !== null;
  const currentImage = isOpen ? images[selectedIndex] : null;
  const hasMultiple = images.length > 1;

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return;
    onNavigate(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  }, [images.length, onNavigate, selectedIndex]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return;
    onNavigate(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  }, [images.length, onNavigate, selectedIndex]);

  // Keyboard navigation and body scroll lock while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft" && hasMultiple) {
        goToPrevious();
      } else if (event.key === "ArrowRight" && hasMultiple) {
        goToNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious, hasMultiple, isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Sluiten"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous image */}
          {hasMultiple && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 md:left-4"
              aria-label="Vorige foto"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}

          {/* Enlarged image */}
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={currentImage.width ?? 1920}
              height={currentImage.height ?? 1280}
              className="max-h-[90vh] w-auto max-w-[90vw] object-contain"
              sizes="90vw"
              priority
            />
          </motion.div>

          {/* Next image */}
          {hasMultiple && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToNext();
              }}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 md:right-4"
              aria-label="Volgende foto"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}

          {/* Image counter */}
          {hasMultiple && selectedIndex !== null && (
            <p
              className={cn(
                "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white"
              )}
            >
              {selectedIndex + 1} / {images.length}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
