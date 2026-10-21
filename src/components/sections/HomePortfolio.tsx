"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type PortfolioPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  category: string;
  href: string;
};

const COUNT = 6;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Takes photos from each category in turn, so every selection shows a mix.
function pickMixed(groups: PortfolioPhoto[][], count: number): PortfolioPhoto[] {
  const queues = groups.map((g) => [...g]);
  const picked: PortfolioPhoto[] = [];
  while (picked.length < count && queues.some((q) => q.length)) {
    for (const q of queues) {
      const next = q.shift();
      if (next && picked.length < count) picked.push(next);
    }
  }
  return picked;
}

// A different mix of portfolio photos on every visit. The server renders a fixed first
// selection (for crawlers and no-JS visitors); the browser then picks a random one.
export function HomePortfolio({ groups }: { groups: PortfolioPhoto[][] }) {
  const [photos, setPhotos] = useState(() => pickMixed(groups, COUNT));

  useEffect(() => {
    // Randomising after hydration keeps the server and client markup identical on first render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhotos(shuffle(pickMixed(shuffle(groups.map((g) => shuffle(g))), COUNT)));
  }, [groups]);

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, i) => (
        <Link key={photo.src} href={photo.href} prefetch={false} className="group relative block overflow-hidden bg-ink">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            priority={i < 3}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="aspect-[3/2] h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-85"
          />
          <span className="absolute bottom-0 left-0 bg-ink/85 px-3 py-1.5 text-sm font-semibold text-ink-foreground">
            {photo.category}
          </span>
        </Link>
      ))}
    </div>
  );
}
