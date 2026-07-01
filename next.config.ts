import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
