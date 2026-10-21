import { buildGlobalSchemaGraph } from "@/lib/schema";
import { jsonLd } from "@/lib/json-ld";

// Global Organization, WebSite, Person and Service JSON-LD, rendered in the server HTML
// so crawlers that do not run JavaScript (including most AI crawlers) can read it.
export function StructuredData() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(buildGlobalSchemaGraph()) }} />
  );
}
