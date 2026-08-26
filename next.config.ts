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
    return [
      { source: "/social-content-leisure/", destination: "/leisure/", permanent: true },
      { source: "/videografie/fpv-dronevliegen/", destination: "/leisure/#fpv-drone", permanent: true },
      { source: "/festival-fotografie/", destination: "/evenementen/", permanent: true },
      { source: "/clubfotografie/", destination: "/evenementen/#club-nightlife", permanent: true },
      { source: "/evenementen-fotograaf/", destination: "/evenementen/", permanent: true },
      { source: "/evenementen-videograaf/", destination: "/evenementen/", permanent: true },
      { source: "/videografie/", destination: "/evenementen/", permanent: true },
      { source: "/videografie/evenementen/", destination: "/evenementen/", permanent: true },
      { source: "/gala-fotografie/", destination: "/gala-en-feest/", permanent: true },
      { source: "/contact/", destination: "/over-en-contact/", permanent: true },
      { source: "/attractieparken/", destination: "/leisure/", permanent: true },
      { source: "/studentenverenigingen/", destination: "/gala-en-feest/", permanent: true },
    ];
  },
};

export default nextConfig;
