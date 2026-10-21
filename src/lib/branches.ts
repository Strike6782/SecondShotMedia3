import type { DayStep } from "@/lib/page-content";
import type { BranchLogo, BranchTestimonial, FaqItem } from "@/lib/types";

// Categories: marketing copy, SEO and page images.
// Portfolio media (video's, foto-albums) staat in content/portfolio.json.
//
// Testimonials: voeg per categorie echte quotes toe zodra een klant toestemming geeft, bijvoorbeeld:
//   testimonials: [{ quote: "…", author: "Naam", role: "Functie, Organisatie" }]
// De sectie verschijnt automatisch zodra er minimaal één testimonial staat.
export type BranchConfig = {
  slug: string;
  href: string;
  title: string;
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  /** One sentence for overview cards (home, city pages). */
  summary: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  introTitle: string;
  introParagraphs: string[];
  deliverables: string[];
  faqs: FaqItem[];
  /** Replaces the standard event-day timeline when this category works differently. */
  process?: { title: string; steps: DayStep[] };
  /** Show the vertical reels from content/leisure-reels.json. */
  showReels?: boolean;
  logos?: BranchLogo[];
  testimonials?: BranchTestimonial[];
};

export const branches: BranchConfig[] = [
  {
    slug: "zakelijke-evenementen",
    href: "/zakelijke-evenementen/",
    title: "Zakelijke events",
    navLabel: "Zakelijk",
    seoTitle: "Fotograaf en videograaf voor beurzen en congressen",
    seoDescription:
      "Foto en video voor beurzen, congressen, conferenties en seminars. Sprekers, standbezoek en netwerkmomenten. Eerste selectie dezelfde dag, volledig album binnen 24 uur.",
    summary: "Beurzen, congressen en seminars. Sprekers, standbezoek en netwerkmomenten, op tijd voor uw persbericht.",
    heroTitle: "Foto en video voor zakelijke events",
    heroSubtitle:
      "Beurzen, congressen, conferenties en seminars. Rustig en zonder flits vastgelegd, met de eerste beelden nog dezelfde dag.",
    heroImage: "/gallery/corporate/Cybersec---Second-Shot-Media-6.jpg",
    heroImageAlt: "Spreker op het podium voor een volle zaal",
    introTitle: "Het event duurt een dag. De beelden gebruikt u het hele jaar.",
    introParagraphs: [
      "In het verslag, op LinkedIn, in de nieuwsbrief en bij het werven van sprekers, exposanten en sponsors voor de volgende editie. Daarom leggen wij niet alleen de volle zaal vast, maar ook de gesprekken, de stands en de details.",
      "Vooraf nemen wij het programma met u door en bepalen wij per onderdeel wat belangrijk is. Bij meerdere zalen of hallen tegelijk zetten wij per locatie een fotograaf in, met één aanspreekpunt voor u. Wij werken onder andere in de Jaarbeurs in Utrecht en op eventlocaties door heel Nederland.",
    ],
    deliverables: [
      "Sprekers op het podium en tijdens vragenrondes",
      "Standbezoek en gesprekken op de beursvloer",
      "Netwerkmomenten, workshops en sponsors",
      "Eerste selectie dezelfde dag, volledig album binnen 24 uur",
      "Recapvideo, sprekershighlights en interviews",
      "Mappen per zaal, hal of stand op verzoek",
    ],
    faqs: [
      {
        question: "Storen jullie tijdens presentaties?",
        answer:
          "Nee. Wij werken zonder flits, kennen het programma en spreken vooraf vaste posities af. Sprekers en publiek merken weinig van ons.",
      },
      {
        question: "Kunnen jullie meerdere zalen of hallen tegelijk vastleggen?",
        answer:
          "Ja. Wij zetten per zaal of hal een fotograaf of videograaf in. Iedereen werkt in dezelfde stijl, u houdt één aanspreekpunt en ontvangt alles in één album.",
      },
      {
        question: "Kunnen exposanten en sponsors de foto's ook gebruiken?",
        answer:
          "Ja, als u dat wilt. In het voorstel leggen wij vast wie de beelden mag gebruiken. Op verzoek leveren wij mappen per stand of sponsor.",
      },
      {
        question: "Hoe ver vooruit moet ik boeken?",
        answer:
          "Het voorjaar en najaar zijn drukke periodes voor beurzen en congressen. Neem daarom zo vroeg mogelijk contact op. Kleinere opdrachten kunnen vaak ook op korte termijn.",
      },
    ],
  },
  {
    slug: "bedrijfsfeesten-en-galas",
    href: "/bedrijfsfeesten-en-galas/",
    title: "Bedrijfsfeesten en gala's",
    navLabel: "Feesten en gala's",
    seoTitle: "Fotograaf voor bedrijfsfeesten en gala's",
    seoDescription:
      "Foto en video voor personeelsfeesten, jubilea, awards en galadiners. Spontane avondbeelden voor employer branding en interne communicatie.",
    summary: "Personeelsfeesten, jubilea, awards en galadiners. De avond zoals hij echt was.",
    heroTitle: "Foto en video voor bedrijfsfeesten en gala's",
    heroSubtitle:
      "Personeelsfeesten, jubilea, awards, galadiners en kerstfeesten. Beelden die laten zien hoe het is om bij uw organisatie te werken.",
    heroImage: "/gallery/students/Gala-USKO---Second-Shot-Media-123.jpg",
    heroImageAlt: "Volle zaal met gasten in avondkleding tijdens een gala",
    introTitle: "Geen rij geposeerde groepsfoto's, maar hoe de avond echt was.",
    introParagraphs: [
      "Wij bewegen tussen de gasten en leggen de momenten vast die mensen later terugzoeken: de ontvangst, de speech, de uitreiking, de volle dansvloer en de gesprekken aan de bar. Groepsfoto's maken wij natuurlijk ook, als u dat wilt.",
      "Vooraf bespreken wij uw huisstijl en waar de beelden voor zijn: intranet, LinkedIn, een vacaturecampagne of de uitnodiging voor volgend jaar. Avondwerk in donkere zalen is voor ons gewoon werk.",
    ],
    deliverables: [
      "Ontvangst, aankleding en de rode loper",
      "Speeches, uitreikingen en optredens",
      "De volle dansvloer en spontane momenten",
      "Groepsfoto's of een fotomoment op verzoek",
      "Eerste selectie dezelfde dag, album binnen 24 uur via een deelbare link",
      "Aftermovie voor intranet, LinkedIn of de volgende editie",
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
          "Ja. Diners, feesten en uitreikingen in donkere zalen zijn voor ons gewoon werk. Wij werken waar mogelijk zonder flits.",
      },
      {
        question: "Fotograferen jullie ook studentengala's?",
        answer: "Nee. Wij richten ons op feesten en gala's van bedrijven en organisaties.",
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
    heroTitle: "Foto en video voor festivals",
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
  {
    slug: "pretparken",
    href: "/pretparken/",
    title: "Pretparken en dagjes uit",
    navLabel: "Pretparken",
    seoTitle: "Content voor pretparken en dagattracties",
    seoDescription:
      "Foto, video en social content voor pretparken, dagattracties en seizoensevents. Reels voor TikTok en Instagram, campagnebeelden en FPV-dronevluchten.",
    summary: "Social content, campagnebeelden en FPV-dronevluchten voor parken, attracties en seizoensevents.",
    heroTitle: "Content voor pretparken en dagjes uit",
    heroSubtitle:
      "Reels, campagnebeelden en FPV-dronevluchten voor pretparken, dagattracties en seizoensevents zoals Halloween en winter.",
    heroImage: "/gallery/theme-parks/Thorpe-Park---Second-Shot-Media-3.jpg",
    heroImageAlt: "Bezoekers in een achtbaan in volle vaart",
    introTitle: "Een park dat het hele jaar zichtbaar is, verkoopt het hele jaar kaartjes.",
    introParagraphs: [
      "Wij helpen pretparken en dagattracties om structureel zichtbaar te zijn op TikTok en Instagram, met een vaste stroom reels die past bij uw park en uw bezoekers. Daarnaast maken wij campagnebeelden en content rond openingen en seizoensevents.",
      "Wij werkten onder andere voor Avonturenpark Hellendoorn, Familiepark Drievliet, Halloween Vlaardingen, Halloween Rosmalen en Theme Park Science.",
    ],
    deliverables: [
      "Reels en shortform video voor TikTok, Instagram en YouTube Shorts",
      "Vaste opnamedag om de twee maanden, met minimaal twee video's per week",
      "Plaatsing op uw kanalen, in overleg met uw marketingteam",
      "Campagne- en sfeerfotografie van park en attracties",
      "Content rond openingen van nieuwe attracties en seizoensevents",
      "FPV-dronevluchten door en over attracties",
    ],
    process: {
      title: "Zo werkt structurele content",
      steps: [
        {
          when: "Vooraf",
          title: "Contentplan",
          text: "Thema's, formats en seizoenen voor de komende periode, afgestemd met uw marketingteam.",
        },
        {
          when: "Om de twee maanden",
          title: "Opnamedag",
          text: "Eén intensieve dag in het park, waarop wij genoeg materiaal maken voor de hele periode.",
        },
        {
          when: "Na de opnamedag",
          title: "Montage",
          text: "Reels op maat voor TikTok, Instagram en YouTube Shorts, met ondertiteling.",
        },
        {
          when: "Elke week",
          title: "Twee video's online",
          text: "Wij plaatsen de video's op uw kanalen, zodat uw park zichtbaar blijft.",
          delivered: true,
        },
      ],
    },
    showReels: true,
    logos: [
      { src: "/logos/hellendoorn.png", alt: "Avonturenpark Hellendoorn" },
      { src: "/logos/drievliet.png", alt: "Familiepark Drievliet" },
      { src: "/logos/vlaardingen.webp", alt: "Halloween Vlaardingen" },
      { src: "/logos/tps.jpeg", alt: "Theme Park Science" },
    ],
    faqs: [
      {
        question: "Hoe werkt structurele social content?",
        answer:
          "Om de twee maanden plannen wij een opnamedag in uw park. Daarvan maken wij genoeg video's om minimaal twee keer per week te posten, en die plaatsen wij ook voor u.",
      },
      {
        question: "Kunnen jullie ook eenmalig iets maken?",
        answer:
          "Ja. Bijvoorbeeld voor de opening van een nieuwe attractie, een seizoensevent of een campagne. U ontvangt dan een voorstel op maat.",
      },
      {
        question: "Leveren jullie ook foto's?",
        answer: "Ja. Wij maken campagne- en sfeerfoto's van uw park en attracties, ook op drukke dagen en in de avond.",
      },
      {
        question: "Kunnen jullie FPV-dronevluchten maken door attracties?",
        answer:
          "Ja. Met FPV vliegen wij in één vloeiende shot door of over een attractie. Wij bespreken vooraf wat op uw locatie en volgens de regels mogelijk is.",
      },
    ],
  },
];

export function getBranchBySlug(slug: string): BranchConfig | undefined {
  return branches.find((b) => b.slug === slug);
}
