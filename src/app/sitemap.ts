import type { MetadataRoute } from "next";
import { getCities, getCityPath } from "@/lib/cities";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "/",
    "/leisure/",
    "/zakelijke-evenementen/",
    "/evenementen/",
    "/gala-en-feest/",
    "/over-en-contact/",
    "/werken-bij/",
    "/algemene-voorwaarden/",
  ];

  const cityPages = getCities().map((city) => getCityPath(city.slug));

  const allPaths = [...staticPages, ...cityPages];

  return allPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("evenementen-fotograaf") ? 0.6 : 0.8,
  }));
}
