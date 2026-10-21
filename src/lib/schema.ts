import type { BranchConfig } from "@/lib/branches";
import { branches } from "@/lib/branches";
import { getCities } from "@/lib/cities";
import type { BreadcrumbItem, FaqItem } from "@/lib/types";
import {
  AGENCY_DEFINITION,
  BTW_ID,
  BUSINESS_CITY,
  BUSINESS_COUNTRY,
  BUSINESS_GEO,
  BUSINESS_POSTAL_CODE,
  BUSINESS_STREET,
  CONTACT_EMAIL,
  CONTACT_INSTAGRAM,
  CONTACT_LINKEDIN,
  FOUNDING_YEAR,
  KVK,
  SITE_LOGO,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/#ivan-balkenende`;
export const SERVICES_ID = `${SITE_URL}/#services`;

const KNOWS_ABOUT = [
  "Eventfotografie",
  "Eventvideografie",
  "Beursfotografie",
  "Congresfotografie",
  "Bedrijfsfeesten",
  "Festivalfotografie",
  "Aftermovies",
  "FPV-drone",
  "Social media content",
  "Pretparken",
];

function serviceNode(branch: BranchConfig) {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}${branch.href}#service`,
    name: branch.title,
    alternateName: branch.seoTitle,
    description: branch.seoDescription,
    serviceType: "Fotografie en videografie",
    url: `${SITE_URL}${branch.href}`,
    image: `${SITE_URL}${branch.heroImage}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Nederland" },
  };
}

// Global Organization + WebSite + Person + Service catalog for layout JSON-LD.
export function buildGlobalSchemaGraph() {
  const cityAreas = getCities().map((city) => ({ "@type": "City", name: city.name }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/og/home.jpg`,
        logo: SITE_LOGO,
        description: AGENCY_DEFINITION,
        slogan: SITE_TAGLINE,
        foundingDate: FOUNDING_YEAR,
        founder: { "@id": PERSON_ID },
        email: CONTACT_EMAIL,
        vatID: BTW_ID,
        identifier: { "@type": "PropertyValue", propertyID: "KvK", value: KVK },
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
        areaServed: [{ "@type": "Country", name: "Nederland" }, ...cityAreas],
        knowsAbout: KNOWS_ABOUT,
        sameAs: [CONTACT_INSTAGRAM, CONTACT_LINKEDIN],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          "@id": SERVICES_ID,
          name: "Diensten Second Shot Media",
          itemListElement: branches.map((branch) => ({
            "@type": "Offer",
            itemOffered: { "@id": `${SITE_URL}${branch.href}#service` },
          })),
        },
      },
      ...branches.map(serviceNode),
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: AGENCY_DEFINITION,
        publisher: { "@id": ORG_ID },
        inLanguage: "nl-NL",
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "Ivan Balkenende",
        jobTitle: "Oprichter",
        description:
          "Oprichter van Second Shot Media. Fotograaf en videograaf met ervaring op meer dan 220 events, van stadsfeesten tot internationale events met 50.000 bezoekers.",
        image: `${SITE_URL}/images/ivan-portret.jpg`,
        worksFor: { "@id": ORG_ID },
        url: `${SITE_URL}/over-en-contact/`,
        knowsAbout: KNOWS_ABOUT,
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

// Combines page-level breadcrumb, FAQ and optional extra nodes.
export function buildPageSchemaGraph({
  breadcrumbs,
  faqs,
  extra = [],
}: {
  breadcrumbs: BreadcrumbItem[];
  faqs?: FaqItem[];
  extra?: Record<string, unknown>[];
}) {
  const graph: Record<string, unknown>[] = [buildBreadcrumbSchema(breadcrumbs), ...extra];
  if (faqs && faqs.length > 0) {
    graph.push(buildFaqSchema(faqs));
  }
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
