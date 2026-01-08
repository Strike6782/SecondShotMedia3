"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Video {
  id: string; // YouTube/Vimeo ID or URL
  title: string;
  subtitle?: string;
  type?: "youtube" | "vimeo"; // simple naive support
}

interface VideoGridProps {
  videos: Video[];
  className?: string;
}

export function VideoGrid({ videos, className }: VideoGridProps) {
  if (!videos || videos.length === 0) {
    return null;
  }

  const getEmbedUrl = (video: Video) => {
    // Basic heuristics, can be expanded
    if (video.type === "vimeo") {
      return `https://player.vimeo.com/video/${video.id}`;
    }
    // Default to YouTube
    return `https://www.youtube-nocookie.com/embed/${video.id}`;
  };

  return (
    <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", className)}>
      {videos.map((video, index) => (
        <motion.div
          key={video.id + index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative flex flex-col space-y-1"
        >
          <div className="mb-2 relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-lg hover:shadow-2xl transition-all">
            <iframe
              src={getEmbedUrl(video)}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
          <h3 className="text-lg font-semibold leading-tight text-foreground/90 transition-colors">
            {video.title}
          </h3>
          {video.subtitle && (
            <p className="text-sm text-muted-foreground">{video.subtitle}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
