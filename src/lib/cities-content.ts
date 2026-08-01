// City-specific content for SEO landing pages (local proof and unique copy).
export type CityContent = {
  slug: string;
  highlight: string;
  localProof?: string;
};

export const cityContentMap: Record<string, CityContent> = {
  utrecht: {
    slug: "utrecht",
    highlight:
      "Vanuit Utrecht werken wij voor studentenverenigingen (DSK, USKO, Vugs), zakelijke events en festivals in de regio.",
    localProof: "Onder andere gala's van USKO en DSK, events in de stad en corporate opdrachten voor de het Muntgebouw",
  },
  amsterdam: {
    slug: "amsterdam",
    highlight:
      "In Amsterdam filmen en fotograferen wij festivals, club nights en grote events — onder andere tijdens ADE.",
    localProof: "Ervaring met ADE Amsterdam, nightlife en festivalreportages in de metropool.",
  },
  rotterdam: {
    slug: "rotterdam",
    highlight:
      "Voor events en zakelijke bijeenkomsten in Rotterdam leveren wij fotografie en videografie met snelle oplevering.",
    localProof: "Reportages voor events en corporate opdrachten in Rotterdam en de Randstad.",
  },
  "den-haag": {
    slug: "den-haag",
    highlight:
      "In Den Haag en de regio leveren wij reportage en video voor congressen, feesten en leisure events.",
    localProof: "Zakelijke reportages en eventfotografie in de Haagse regio.",
  },
  amersfoort: {
    slug: "amersfoort",
    highlight:
      "In Amersfoort en de regio Utrecht-Amersfoort fotograferen wij gala's en studentenfeesten, maar ook voor corporate events en congressen.",
    localProof: "Gala-reportages in Amersfoort en de regio, onder andere voor studentenverenigingen, maar ook voor corporate events en congressen.",
  },
  vlaardingen: {
    slug: "vlaardingen",
    highlight:
      "Vlaardingen is een vaste locatie voor ons: wij produceren jaarlijks content voor Halloween Vlaardingen.",
    localProof: "Jaarlijkse fotografie en videografie voor Halloween Vlaardingen, inclusief aftermovies.",
  },
  nijmegen: {
    slug: "nijmegen",
    highlight:
      "Voor events en studentenfeesten in Nijmegen en Gelderland leveren wij foto en video onder één dak.",
    localProof: "Eventreportages en gala's in Nijmegen en oostelijke regio.",
  },
  arnhem: {
    slug: "arnhem",
    highlight:
      "In Arnhem en Gelderland werken wij voor festivals, corporate events en leisure locaties.",
    localProof: "Eventfotografie en videografie in Arnhem en de Gelderse regio.",
  },
  haarlem: {
    slug: "haarlem",
    highlight:
      "Voor events en zakelijke bijeenkomsten in Haarlem en Noord-Holland leveren wij professionele reportage.",
    localProof: "Corporate en eventopdrachten in Haarlem en de regio.",
  },
  leiden: {
    slug: "leiden",
    highlight:
      "In Leiden fotograferen en filmen wij gala's, studentenfeesten en zakelijke events.",
    localProof: "Gala's en studentenverenigingen in Leiden en de Randstad.",
  },
  almere: {
    slug: "almere",
    highlight:
      "Voor events in Almere en Flevoland leveren wij dynamische fotografie en aftermovies.",
    localProof: "Eventreportages in Almere en de Flevoland regio.",
  },
  ede: {
    slug: "ede",
    highlight:
      "In Ede en de Veluwe-regio werken wij voor leisure en events, nabij attractieparken in Overijssel.",
    localProof: "Leisure content en events in de regio Ede-Gelderland.",
  },
  apeldoorn: {
    slug: "apeldoorn",
    highlight:
      "Apeldoorn en de regio zijn onderdeel van ons werkgebied voor leisure en events in Gelderland.",
    localProof: "Events en leisure opdrachten in Apeldoorn en oost-Nederland.",
  },
  zwolle: {
    slug: "zwolle",
    highlight:
      "Voor festivals en events in Zwolle en Overijssel leveren wij fotografie en videografie.",
    localProof: "Eventreportages in Zwolle en Overijssel, nabij onze leisure klanten in de regio.",
  },
  hilversum: {
    slug: "hilversum",
    highlight:
      "In Hilversum en de Gooi-regio werken wij voor corporate events en media-gerelateerde bijeenkomsten.",
    localProof: "Zakelijke reportages en events in Hilversum en de regio.",
  },
};

export function getCityContent(slug: string): CityContent | undefined {
  return cityContentMap[slug];
}
