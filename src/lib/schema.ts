import { branches } from "@/lib/branches";
import type { BreadcrumbItem, FaqItem } from "@/lib/types";
import {
  BUSINESS_CITY,
  BUSINESS_COUNTRY,
  BUSINESS_GEO,
  BUSINESS_POSTAL_CODE,
  BUSINESS_STREET,
  CONTACT_EMAIL,
  CONTACT_INSTAGRAM,
  CONTACT_LINKEDIN,
  FOUNDING_YEAR,
  SITE_LOGO,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/#ivan-balkenende`;
export const SERVICES_ID = `${SITE_URL}/#services`;

// Global Organization + WebSite + Person + Service catalog for layout JSON-LD.
export function buildGlobalSchemaGraph() {
  const services = branches.map((branch) => ({
    "@type": "Service",
    name: `Fotografie en videografie voor ${branch.title.toLowerCase()}`,
    serviceType: "Fotografie en videografie",
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Nederland" },
    url: `${SITE_URL}${branch.href}`,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        image: SITE_LOGO,
        logo: SITE_LOGO,
        description:
          "Content agency voor fotografie en videografie, gevestigd in Utrecht, actief door heel Nederland.",
        foundingDate: FOUNDING_YEAR,
        founder: { "@type": "Person", "@id": PERSON_ID, name: "Ivan Balkenende" },
        email: CONTACT_EMAIL,
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS_STREET,
          postalCode: BUSINESS_POSTAL_CODE,
          addressLocality: BUSINESS_CITY,
          addressRegion: "Utrecht",
          addressCountry: BUSINESS_COUNTRY,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS_GEO.latitude,
          longitude: BUSINESS_GEO.longitude,
        },
        priceRange: "€€",
        areaServed: { "@type": "Country", name: "Nederland" },
        sameAs: [CONTACT_INSTAGRAM, CONTACT_LINKEDIN],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": SERVICES_ID,
          name: "Diensten Second Shot Media",
          itemListElement: services,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": ORG_ID },
        inLanguage: "nl-NL",
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Ivan Balkenende",
        jobTitle: "Oprichter",
        worksFor: { "@id": ORG_ID },
        url: `${SITE_URL}/over-en-contact/`,
        sameAs: [CONTACT_LINKEDIN],
      },
    ],
  };
}

// BreadcrumbList JSON-LD from page breadcrumbs.
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

// FAQPage JSON-LD matching visible FAQ HTML.
export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Combines page-level breadcrumb and FAQ schema nodes.
export function buildPageSchemaGraph({
  breadcrumbs,
  faqs,
}: {
  breadcrumbs: BreadcrumbItem[];
  faqs?: FaqItem[];
}) {
  const graph: Record<string, unknown>[] = [buildBreadcrumbSchema(breadcrumbs)];
  if (faqs && faqs.length > 0) {
    graph.push(buildFaqSchema(faqs));
  }
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
