import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin workspace root so builds don't pick up unrelated lockfiles outside this repo.
  turbopack: {
    root: path.join(__dirname),
  },
  // Gallery images are pre-optimized locally (scripts/optimize-gallery.mjs).
  // Vercel Hobby image optimization returns 402 once monthly limits are exceeded,
  // so serve static files directly instead of routing through /_next/image.
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    // Leisure, gala's and nightlife are no longer offered; old URLs point to the closest event page.
    return [
      { source: "/zakelijke-evenementen/", destination: "/congressen/", permanent: true },
      { source: "/evenementen/", destination: "/festivals/", permanent: true },
      { source: "/leisure/", destination: "/", permanent: true },
      { source: "/gala-en-feest/", destination: "/corporate-events/", permanent: true },
      { source: "/social-content-leisure/", destination: "/", permanent: true },
      { source: "/videografie/fpv-dronevliegen/", destination: "/werkwijze/#fpv-drone", permanent: true },
      { source: "/festival-fotografie/", destination: "/festivals/", permanent: true },
      { source: "/clubfotografie/", destination: "/festivals/", permanent: true },
      { source: "/evenementen-fotograaf/", destination: "/festivals/", permanent: true },
      { source: "/evenementen-videograaf/", destination: "/festivals/", permanent: true },
      { source: "/videografie/", destination: "/festivals/", permanent: true },
      { source: "/videografie/evenementen/", destination: "/festivals/", permanent: true },
      { source: "/gala-fotografie/", destination: "/corporate-events/", permanent: true },
      { source: "/contact/", destination: "/over-en-contact/", permanent: true },
      { source: "/attractieparken/", destination: "/", permanent: true },
      { source: "/studentenverenigingen/", destination: "/", permanent: true },
      { source: "/beursfotograaf/", destination: "/beurzen/", permanent: true },
      { source: "/congresfotograaf/", destination: "/congressen/", permanent: true },
    ];
  },
};

export default nextConfig;
