import type { BranchLogo, BranchTestimonial, FaqItem } from "@/lib/types";

// Event types: marketing copy, SEO and page images.
// Portfolio media (video's, foto-albums) staat in content/portfolio.json.
//
// Testimonials: voeg per eventtype echte quotes toe zodra een klant toestemming geeft, bijvoorbeeld:
//   testimonials: [{ quote: "…", author: "Naam", role: "Functie, Organisatie" }]
// De sectie verschijnt automatisch zodra er minimaal één testimonial staat.
export type BranchConfig = {
  slug: string;
  href: string;
  title: string;
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  /** One sentence for overview cards (home, footer, city pages). */
  summary: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  introTitle: string;
  introParagraphs: string[];
  deliverables: string[];
  faqs: FaqItem[];
  logos?: BranchLogo[];
  testimonials?: BranchTestimonial[];
};

export const branches: BranchConfig[] = [
  {
    slug: "beurzen",
    href: "/beurzen/",
    title: "Beurzen en expo's",
    navLabel: "Beurzen",
    seoTitle: "Beursfotograaf en beursvideo",
    seoDescription:
      "Beursfotografie en -video voor organisatoren en exposanten. Eerste selectie aan het eind van elke beursdag, volledig album binnen 24 uur. Vanuit Utrecht, door heel Nederland.",
    summary: "Standbezoek, presentaties en de drukte op de vloer, voor organisator en exposanten.",
    heroTitle: "Beursfotografie en -video",
    heroSubtitle:
      "Standbezoek, gesprekken, presentaties en de drukte op de vloer. Uw marketingteam heeft de eerste beelden nog tijdens de beurs.",
    heroImage: "/gallery/corporate/Cybersec---Second-Shot-Media-5.jpg",
    heroImageAlt: "Beursvloer met stand en bezoekers tijdens Cybersec",
    introTitle: "Een beurs duurt een paar dagen. De beelden gebruikt u het hele jaar.",
    introParagraphs: [
      "In het beursverslag, op LinkedIn, in de nieuwsbrief en bij het werven van exposanten voor de volgende editie. Daarom leggen wij niet alleen de drukte vast, maar ook de gesprekken, de standbouw en de details waar uw exposanten trots op zijn.",
      "Bij grote hallen verdelen wij de fotografen vooraf per hal of programmaonderdeel. Zo wordt niets dubbel geschoten en niets gemist. Wij werken onder andere in de Jaarbeurs in Utrecht en op beurslocaties door heel Nederland.",
    ],
    deliverables: [
      "Eerste selectie aan het eind van elke beursdag",
      "Volledig album binnen 24 uur na de laatste dag",
      "Mappen per hal of stand, zodat exposanten hun eigen beelden vinden",
      "Sfeerfilm van de beurs en korte verticale video's voor social media",
      "Presentaties, panels en prijsuitreikingen op de beursvloer",
      "FPV-drone door de hal, waar de locatie het toestaat",
    ],
    faqs: [
      {
        question: "Kunnen er meerdere fotografen tegelijk werken?",
        answer:
          "Ja. Bij grote beurzen zetten wij meerdere fotografen en videografen in. Vooraf spreken wij af wie welke hal of welk programmaonderdeel vastlegt, en iedereen werkt in dezelfde stijl.",
      },
      {
        question: "Kunnen exposanten de foto's ook gebruiken?",
        answer:
          "Ja, als u dat wilt. In het voorstel leggen wij vast wie de beelden mag gebruiken. Op verzoek leveren wij mappen per stand, zodat exposanten hun eigen foto's snel vinden.",
      },
      {
        question: "Wanneer zijn de eerste foto's beschikbaar?",
        answer:
          "Aan het eind van elke beursdag ontvangt u een eerste selectie. Het volledige album volgt binnen 24 uur na de laatste beursdag.",
      },
      {
        question: "Hoe ver vooruit moet ik boeken?",
        answer:
          "Het voorjaar en najaar zijn drukke beursperiodes. Neem daarom zo vroeg mogelijk contact op. Kleinere opdrachten kunnen vaak ook op korte termijn.",
      },
    ],
  },
  {
    slug: "congressen",
    href: "/congressen/",
    title: "Congressen en conferenties",
    navLabel: "Congressen",
    seoTitle: "Congresfotograaf en conferentievideo",
    seoDescription:
      "Fotografie en video voor congressen en conferenties: sprekers, zalen, workshops en netwerkmomenten. Eerste selectie dezelfde dag, volledig album binnen 24 uur.",
    summary: "Sprekers, zalen en netwerkmomenten, op tijd voor uw persbericht en LinkedIn.",
    heroTitle: "Congres- en conferentiefotografie",
    heroSubtitle:
      "Sprekers, zalen, workshops en netwerkmomenten. Rustig vastgelegd, zodat u nog dezelfde dag kunt communiceren.",
    heroImage: "/gallery/corporate/Cybersec---Second-Shot-Media-6.jpg",
    heroImageAlt: "Spreker op het podium voor een volle zaal tijdens een congres",
    introTitle: "Uw sprekers, uw sponsors en uw deelnemers willen allemaal hun eigen beeld.",
    introParagraphs: [
      "Sprekers vragen om een goede foto van hun presentatie, sponsors willen zichtbaar zijn en uw communicatieteam wil tijdens het congres al posten. Wij stemmen vooraf het programma met u af en bepalen per onderdeel wat belangrijk is.",
      "Tijdens presentaties werken wij zonder flits en vanaf afgesproken posities. Bij meerdere zalen tegelijk zetten wij per zaal een fotograaf in, met één aanspreekpunt voor u.",
    ],
    deliverables: [
      "Sprekers op het podium en tijdens vragenrondes",
      "Zaal, workshops, netwerkpauzes en sponsors",
      "Eerste selectie dezelfde dag voor social media en persbericht",
      "Volledig album binnen 24 uur",
      "Recapvideo en korte sprekershighlights",
      "Interviews met sprekers of deelnemers op locatie",
    ],
    faqs: [
      {
        question: "Storen jullie tijdens presentaties?",
        answer:
          "Nee. Wij werken zonder flits, kennen het programma en spreken vooraf vaste posities af. Sprekers en publiek merken weinig van ons.",
      },
      {
        question: "Kunnen jullie meerdere zalen tegelijk vastleggen?",
        answer:
          "Ja. Wij zetten per zaal een fotograaf of videograaf in. U houdt één aanspreekpunt en ontvangt alles in één album.",
      },
      {
        question: "Maken jullie ook interviews of sprekershighlights?",
        answer:
          "Ja. Wij filmen korte interviews met sprekers of deelnemers en monteren highlights die u op LinkedIn of uw website kunt gebruiken.",
      },
      {
        question: "Kunnen de foto's direct in een persbericht?",
        answer:
          "Ja. De eerste selectie ontvangt u dezelfde dag, geschikt voor persbericht, nieuwsbrief en social media.",
      },
    ],
  },
  {
    slug: "corporate-events",
    href: "/corporate-events/",
    title: "Corporate events",
    navLabel: "Corporate events",
    seoTitle: "Fotografie en video voor corporate events",
    seoDescription:
      "Fotografie en video voor personeelsfeesten, jubilea, awards en productlanceringen. Spontane beelden voor employer branding en interne communicatie.",
    summary: "Jubilea, awards, personeelsfeesten en lanceringen, voor intern gebruik en employer branding.",
    heroTitle: "Fotografie en video voor corporate events",
    heroSubtitle:
      "Personeelsfeesten, jubilea, awards en productlanceringen. Beelden die laten zien hoe het is om bij uw organisatie te werken.",
    heroImage: "/gallery/corporate/Nico-Campus-2026---Second-Shot-Media-157.jpg",
    heroImageAlt: "Gasten in gesprek tijdens een netwerkborrel",
    introTitle: "Geen rij geposeerde groepsfoto's, maar hoe de avond echt was.",
    introParagraphs: [
      "Wij bewegen tussen de gasten en leggen de momenten vast die mensen later terugzoeken: de speech, de uitreiking, de volle dansvloer en de gesprekken aan de bar. Groepsfoto's maken wij natuurlijk ook, als u dat wilt.",
      "Vooraf bespreken wij uw huisstijl en waar de beelden voor zijn: intranet, LinkedIn, een vacaturecampagne of de uitnodiging voor volgend jaar.",
    ],
    deliverables: [
      "Sfeer, aankleding, gasten en programmaonderdelen",
      "Speeches, uitreikingen en optredens",
      "Eerste selectie dezelfde dag",
      "Volledig album binnen 24 uur via een deelbare link",
      "Aftermovie voor intranet, LinkedIn of de volgende editie",
      "FPV-drone voor een opening of rondgang door de locatie",
    ],
    faqs: [
      {
        question: "Wat als collega's niet op de foto willen?",
        answer:
          "Dat respecteren wij. Wie niet op de foto wil, kan dat aangeven bij de fotograaf. Foto's verwijderen wij achteraf op verzoek.",
      },
      {
        question: "Houden jullie rekening met onze huisstijl?",
        answer:
          "Ja. Stuur ons vooraf uw huisstijl en eventueel voorbeeldbeelden. Wij stemmen de kleurbewerking en de selectie daarop af.",
      },
      {
        question: "Werken jullie ook bij weinig licht?",
        answer:
          "Ja. Avondprogramma's, diners en feesten in donkere zalen zijn voor ons gewoon werk. Wij werken waar mogelijk zonder flits.",
      },
      {
        question: "Kunnen wij de foto's intern delen?",
        answer:
          "Ja. U ontvangt een deelbare link waarmee collega's de foto's kunnen bekijken en downloaden.",
      },
    ],
  },
  {
    slug: "festivals",
    href: "/festivals/",
    title: "Festivals en publieksevenementen",
    navLabel: "Festivals",
    seoTitle: "Festivalfotograaf en aftermovie",
    seoDescription:
      "Fotografie, aftermovies en FPV-dronebeelden voor festivals, stadsevenementen en grote internationale events. Ervaring met events tot 50.000 bezoekers.",
    summary: "Podium, publiek en sfeer, van stadsfeest tot internationaal event met 50.000 bezoekers.",
    heroTitle: "Festival- en eventfotografie",
    heroSubtitle:
      "Podium, publiek en de momenten ertussen. Voor festivals, stadsevenementen en grote internationale events.",
    heroImage: "/gallery/events/Koningsdag-Hof---Second-Shot-Media-20250425-3.jpg",
    heroImageAlt: "Overzicht van een vol plein tijdens Koningsdag",
    introTitle: "De energie van een festival houdt u alleen vast als de beelden snel online staan.",
    introParagraphs: [
      "Daarom ontvangt u aan het eind van elke festivaldag een eerste selectie. Zo kunt u posten terwijl bezoekers nog napraten, en de voorverkoop voor de volgende editie starten met beelden van deze.",
      "Wij werkten op events tot 50.000 bezoekers, van Koningsdag en Bevrijdingsdag tot de World Scout Jamboree in Zuid-Korea. Bij meerdere podia werken onze fotografen met vaste stijlafspraken, zodat het geheel als één verhaal oogt.",
    ],
    deliverables: [
      "Eerste selectie aan het eind van elke festivaldag",
      "Volledig album binnen 24 uur na de laatste dag",
      "Podium, publiek en sfeer, ook bij weinig licht",
      "Aftermovie en korte reels voor Instagram en TikTok",
      "Aparte mappen voor artiesten en sponsors",
      "FPV-drone over terrein en podia, waar regels en locatie het toestaan",
    ],
    faqs: [
      {
        question: "Doen jullie ook meerdaagse festivals?",
        answer:
          "Ja. U ontvangt na elke dag een eerste selectie en binnen 24 uur na de laatste dag het volledige album.",
      },
      {
        question: "Kunnen artiesten hun eigen foto's krijgen?",
        answer:
          "Ja. Op verzoek leveren wij aparte mappen per artiest of per sponsor, zodat iedereen zijn eigen beelden snel kan delen.",
      },
      {
        question: "Kunnen jullie FPV-dronebeelden maken?",
        answer:
          "Ja. FPV-dronebeelden geven een aftermovie een vlucht die met een gewone camera niet lukt. Wij bespreken vooraf wat op uw locatie en volgens de regels mogelijk is.",
      },
      {
        question: "Hoe groot zijn de events waar jullie werken?",
        answer:
          "Van stadsfeesten tot internationale events met tienduizenden bezoekers. Ivan werkte onder andere op de World Scout Jamboree in Zuid-Korea.",
      },
    ],
  },
];

export function getBranchBySlug(slug: string): BranchConfig | undefined {
  return branches.find((b) => b.slug === slug);
}
