// City-specific content for SEO landing pages (local proof and unique copy).
export type CityContent = {
  slug: string;
  highlight: string;
  localProof?: string;
};

export const cityContentMap: Record<string, CityContent> = {
  utrecht: {
    slug: "utrecht",
    highlight: "Onze thuisbasis. Beurzen in de Jaarbeurs, congressen en corporate events in de stad.",
    localProof:
      "Vanuit Utrecht werken wij voor beurzen in de Jaarbeurs, congressen en corporate events in de stad. Kort op de bal, ook bij vroege opbouw.",
  },
  amsterdam: {
    slug: "amsterdam",
    highlight: "Congressen, corporate events en festivals, onder andere tijdens ADE.",
    localProof: "In Amsterdam werkten wij onder andere tijdens ADE.",
  },
  rotterdam: {
    slug: "rotterdam",
    highlight: "Congressen, beurzen en corporate events in Rotterdam en de regio.",
    localProof: "Voor events in Rotterdam zijn wij vanuit Utrecht snel ter plaatse, ook voor vroege starts.",
  },
  "den-haag": {
    slug: "den-haag",
    highlight: "Congressen, conferenties en corporate events in Den Haag.",
    localProof: "Voor congressen en conferenties in Den Haag leveren wij sprekersfoto's en recapvideo's.",
  },
  amersfoort: {
    slug: "amersfoort",
    highlight: "Festivals, publieksevenementen en corporate events in Amersfoort en omgeving.",
    localProof: "Op een kwartier van onze basis in Utrecht.",
  },
  vlaardingen: {
    slug: "vlaardingen",
    highlight: "Events en publieksevenementen in Vlaardingen en de regio Rotterdam.",
    localProof: "Wij werken al jaren voor evenementen in Vlaardingen, zoals Halloween Vlaardingen.",
  },
  nijmegen: {
    slug: "nijmegen",
    highlight: "Congressen, corporate events en festivals in Nijmegen en Gelderland.",
  },
  arnhem: {
    slug: "arnhem",
    highlight: "Festivals, corporate events en congressen in Arnhem en Gelderland.",
  },
  haarlem: {
    slug: "haarlem",
    highlight: "Corporate events en zakelijke bijeenkomsten in Haarlem en Noord-Holland.",
  },
  leiden: {
    slug: "leiden",
    highlight: "Congressen, wetenschappelijke conferenties en corporate events in Leiden.",
  },
  almere: {
    slug: "almere",
    highlight: "Beurzen, corporate events en publieksevenementen in Almere en Flevoland.",
  },
  ede: {
    slug: "ede",
    highlight: "Congressen en corporate events in Ede en de Veluwe.",
  },
  apeldoorn: {
    slug: "apeldoorn",
    highlight: "Corporate events en congressen in Apeldoorn en Oost-Nederland.",
  },
  zwolle: {
    slug: "zwolle",
    highlight: "Festivals, beurzen en corporate events in Zwolle en Overijssel.",
  },
  hilversum: {
    slug: "hilversum",
    highlight: "Corporate events en mediabijeenkomsten in Hilversum en het Gooi.",
  },
};

export function getCityContent(slug: string): CityContent | undefined {
  return cityContentMap[slug];
}
