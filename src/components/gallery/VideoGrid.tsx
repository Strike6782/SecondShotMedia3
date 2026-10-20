"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import type { BranchVideo } from "@/lib/types";
import { cn } from "@/lib/utils";

interface VideoGridProps {
  videos: BranchVideo[];
  className?: string;
}

/** Returns the optional credit/context line shown under a video title. */
function getVideoNote(video: BranchVideo): string | undefined {
  return video.note ?? video.subtitle;
}

function getEmbedUrl(video: BranchVideo, autoplay: boolean) {
  if (video.type === "vimeo") {
    return `https://player.vimeo.com/video/${video.id}${autoplay ? "?autoplay=1" : ""}`;
  }
  return `https://www.youtube-nocookie.com/embed/${video.id}${autoplay ? "?autoplay=1" : ""}`;
}

// Shows a thumbnail first and loads the player only when someone presses play.
function VideoEmbed({ video }: { video: BranchVideo }) {
  const [playing, setPlaying] = useState(video.type === "vimeo");
  const [thumbFailed, setThumbFailed] = useState(false);

  if (playing) {
    return (
      <iframe
        src={getEmbedUrl(video, video.type !== "vimeo")}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group absolute inset-0 h-full w-full"
      aria-label={`Speel video af: ${video.title}`}
    >
      {!thumbFailed && (
        // eslint-disable-next-line @next/next/no-img-element -- external YouTube thumbnail
        <img
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          onError={() => setThumbFailed(true)}
          className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
        />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
          <Play className="ml-1 h-7 w-7 fill-current" />
        </span>
      </span>
    </button>
  );
}

export function VideoGrid({ videos, className }: VideoGridProps) {
  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2", className)}>
      {videos.map((video, index) => {
        const note = getVideoNote(video);
        return (
          <figure key={video.id + index} className="space-y-3">
            <div className="relative aspect-video w-full overflow-hidden bg-ink">
              <VideoEmbed video={video} />
            </div>
            <figcaption>
              <span className="font-semibold">{video.title}</span>
              {note && <span className="text-muted-foreground"> ({note.toLowerCase()})</span>}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
