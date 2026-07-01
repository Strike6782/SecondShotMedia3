import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

// Builds consistent page metadata with canonical URL and Open Graph defaults.
export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "nl_NL",
      type: "website",
      images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [`${SITE_URL}/og-image.jpg`],
    },
  };
}
