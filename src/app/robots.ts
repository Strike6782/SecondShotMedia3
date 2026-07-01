import type { MetadataRoute } from "next";
import { branches } from "@/lib/branches";
import { getCities } from "@/lib/cities";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
