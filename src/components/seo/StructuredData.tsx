import Script from "next/script";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/Photographer",
    "name": "Second Shot Media",
    "image": "https://secondshotmedia.nl/logo.png", // Placeholder
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Ivan Balkenende"
    },
    "description": "Professionele evenementen fotograaf en videograaf in Amersfoort en Utrecht.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amersfoort",
      "addressRegion": "Utrecht",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.1561", // Amersfoort approx
      "longitude": "5.3878"
    },
    "url": "https://secondshotmedia.nl",
    "telephone": "+31600000000", // Needs actual number if available, optional
    "email": "ivan@secondshotmedia.nl",
    "areaServed": ["Utrecht", "Amersfoort", "Midden Nederland"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "23:00"
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
