import { jsonLd } from "@/lib/json-ld";
import { buildPageSchemaGraph } from "@/lib/schema";
import type { BreadcrumbItem, FaqItem } from "@/lib/types";

// Page-level JSON-LD (breadcrumbs, FAQ, extras), rendered in the server HTML.
export function PageStructuredData({
  breadcrumbs,
  faqs,
  extra,
}: {
  breadcrumbs: BreadcrumbItem[];
  faqs?: FaqItem[];
  extra?: Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(buildPageSchemaGraph({ breadcrumbs, faqs, extra })) }}
    />
  );
}
