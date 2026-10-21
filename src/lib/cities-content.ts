// City-specific content for SEO landing pages (local proof and unique copy).
export type CityContent = {
  slug: string;
  highlight: string;
  localProof?: string;
  /** Well-known event venues in the city, mentioned as examples (not as past clients). */
  venues?: string[];
};

export const cityContentMap: Record<string, CityContent> = {
  utrecht: {
    slug: "utrecht",
    highlight: "Onze thuisbasis. Beurzen in de Jaarbeurs, congressen en bedrijfsfeesten in de stad.",
    localProof:
      "Vanuit Utrecht werken wij voor beurzen in de Jaarbeurs, congressen en bedrijfsfeesten in de stad. Kort op de bal, ook bij vroege opbouw.",
    venues: ["de Jaarbeurs", "TivoliVredenburg", "het Beatrix Theater"],
  },
  amsterdam: {
    slug: "amsterdam",
    highlight: "Congressen, bedrijfsfeesten en festivals, onder andere tijdens ADE.",
    localProof: "In Amsterdam werkten wij onder andere tijdens ADE.",
    venues: ["RAI Amsterdam", "de Beurs van Berlage", "de Ziggo Dome"],
  },
  rotterdam: {
    slug: "rotterdam",
    highlight: "Congressen, beurzen en bedrijfsfeesten in Rotterdam en de regio.",
    localProof: "Voor events in Rotterdam zijn wij vanuit Utrecht snel ter plaatse, ook voor vroege starts.",
    venues: ["Rotterdam Ahoy", "De Doelen", "de SS Rotterdam"],
  },
  "den-haag": {
    slug: "den-haag",
    highlight: "Congressen, conferenties en bedrijfsfeesten in Den Haag.",
    localProof: "Voor congressen en conferenties in Den Haag leveren wij sprekersfoto's en recapvideo's.",
    venues: ["het World Forum", "het Kurhaus"],
  },
  amersfoort: {
    slug: "amersfoort",
    highlight: "Festivals, publieksevenementen en bedrijfsfeesten in Amersfoort en omgeving.",
    localProof: "Op een kwartier van onze basis in Utrecht.",
    venues: ["De Flint", "de Prodentfabriek"],
  },
  vlaardingen: {
    slug: "vlaardingen",
    highlight: "Publieksevenementen en Halloween Vlaardingen, in de regio Rotterdam.",
    localProof: "Wij werken al jaren voor evenementen in Vlaardingen, zoals Halloween Vlaardingen.",
  },
  nijmegen: {
    slug: "nijmegen",
    highlight: "Congressen, bedrijfsfeesten en festivals in Nijmegen en Gelderland.",
    venues: ["De Vereeniging", "het Goffertpark"],
  },
  arnhem: {
    slug: "arnhem",
    highlight: "Festivals, bedrijfsfeesten en congressen in Arnhem en Gelderland.",
    venues: ["het GelreDome", "Musis"],
  },
  haarlem: {
    slug: "haarlem",
    highlight: "Bedrijfsfeesten en zakelijke bijeenkomsten in Haarlem en Noord-Holland.",
    venues: ["de Philharmonie Haarlem"],
  },
  leiden: {
    slug: "leiden",
    highlight: "Congressen, wetenschappelijke conferenties en bedrijfsfeesten in Leiden.",
    venues: ["de Stadsgehoorzaal"],
  },
  almere: {
    slug: "almere",
    highlight: "Beurzen, bedrijfsfeesten en publieksevenementen in Almere en Flevoland.",
  },
  ede: {
    slug: "ede",
    highlight: "Congressen en bedrijfsfeesten in Ede en de Veluwe.",
  },
  apeldoorn: {
    slug: "apeldoorn",
    highlight: "Bedrijfsfeesten en congressen in Apeldoorn en Oost-Nederland.",
    venues: ["Orpheus"],
  },
  zwolle: {
    slug: "zwolle",
    highlight: "Festivals, beurzen en bedrijfsfeesten in Zwolle en Overijssel.",
    venues: ["de IJsselhallen"],
  },
  hilversum: {
    slug: "hilversum",
    highlight: "Bedrijfsfeesten en mediabijeenkomsten in Hilversum en het Gooi.",
    venues: ["het Media Park"],
  },
};

export function getCityContent(slug: string): CityContent | undefined {
  return cityContentMap[slug];
}
