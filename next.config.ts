import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin workspace root so builds don't pick up unrelated lockfiles outside this repo.
  turbopack: {
    root: path.join(__dirname),
  },
  // Vercel Hobby image optimization returns 402 once monthly limits are exceeded, so instead
  // we pre-generate WebP variants at build time (scripts/build-image-variants.mjs) and point
  // next/image at them with a custom loader.
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [640, 1080, 1280, 1920],
    imageSizes: [256, 384],
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
