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
    // Old URLs point to the closest current category.
    return [
      { source: "/evenementen/", destination: "/festivals/", permanent: true },
      { source: "/leisure/", destination: "/pretparken/", permanent: true },
      { source: "/gala-en-feest/", destination: "/bedrijfsfeesten-en-galas/", permanent: true },
      { source: "/beurzen/", destination: "/zakelijke-evenementen/", permanent: true },
      { source: "/congressen/", destination: "/zakelijke-evenementen/", permanent: true },
      { source: "/corporate-events/", destination: "/bedrijfsfeesten-en-galas/", permanent: true },
      { source: "/social-content-leisure/", destination: "/pretparken/", permanent: true },
      { source: "/attractieparken/", destination: "/pretparken/", permanent: true },
      { source: "/videografie/fpv-dronevliegen/", destination: "/werkwijze/#fpv-drone", permanent: true },
      { source: "/festival-fotografie/", destination: "/festivals/", permanent: true },
      { source: "/clubfotografie/", destination: "/festivals/", permanent: true },
      { source: "/evenementen-fotograaf/", destination: "/festivals/", permanent: true },
      { source: "/evenementen-videograaf/", destination: "/festivals/", permanent: true },
      { source: "/videografie/", destination: "/festivals/", permanent: true },
      { source: "/videografie/evenementen/", destination: "/festivals/", permanent: true },
      { source: "/gala-fotografie/", destination: "/bedrijfsfeesten-en-galas/", permanent: true },
      { source: "/contact/", destination: "/over-en-contact/", permanent: true },
      { source: "/studentenverenigingen/", destination: "/", permanent: true },
      { source: "/beursfotograaf/", destination: "/zakelijke-evenementen/", permanent: true },
      { source: "/congresfotograaf/", destination: "/zakelijke-evenementen/", permanent: true },
    ];
  },
};

export default nextConfig;
