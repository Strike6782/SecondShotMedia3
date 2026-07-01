import Script from "next/script";
import { buildGlobalSchemaGraph } from "@/lib/schema";

// Global Organization, WebSite, Person and Service catalog JSON-LD in root layout.
export function StructuredData() {
  const schema = buildGlobalSchemaGraph();

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
