// Client-only pricing copy: imported only from PricingHintSection so amounts
// are not rendered in the server HTML snapshot that archive crawlers often store.
export type PricingHint = {
  title: string;
  description: string;
};

const pricingHints: Record<string, PricingHint> = {
  "leisure": {
    title: "Structureel leisure pakket",
    description:
      "€895 per maand, met elke twee maanden een opnamedag. Inclusief voorbereiding, editten, en plaatsen op je social media kanalen. (ex btw).",
  },
  "zakelijke-evenementen": {
    title: "Zakelijke eventreportage",
    description: "Vanaf €640 ex btw voor een halve dag.",
  },
  "evenementen": {
    title: "Eventreportage",
    description: "Vanaf €560 ex btw voor een halve dag.",
  },
  "gala-en-feest": {
    title: "Gala en feesten",
    description:
      "Vanaf €110 ex btw per uur. Studenten combo pakket: 3 uur galafotografie voor 245 ex btw.",
  },
};

// Resolve branch slug to its pricing hint, if configured.
export function getPricingHint(branchSlug: string): PricingHint | undefined {
  return pricingHints[branchSlug];
}
