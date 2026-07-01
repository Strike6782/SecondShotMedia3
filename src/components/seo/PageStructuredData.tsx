import Script from "next/script";
import { buildPageSchemaGraph } from "@/lib/schema";
import type { BreadcrumbItem, FaqItem } from "@/lib/types";

// Page-level JSON-LD: breadcrumbs and optional FAQPage.
export function PageStructuredData({
  breadcrumbs,
  faqs,
}: {
  breadcrumbs: BreadcrumbItem[];
  faqs?: FaqItem[];
}) {
  const schema = buildPageSchemaGraph({ breadcrumbs, faqs });

  return (
    <Script
      id="page-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
