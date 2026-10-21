import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Builds consistent page metadata with canonical URL and Open Graph defaults.
export function buildPageMetadata({
  title,
  description,
  path,
  image = "/og/home.jpg",
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  /** 1200x630 share image under public/. */
  image?: string;
  /** Use the title as-is, without the "| Second Shot Media" suffix. */
  absoluteTitle?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const imageUrl = `${SITE_URL}${image}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "nl_NL",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
