import type {
  BranchLogo,
  BranchPricingHint,
  BranchTestimonial,
  BranchVideo,
  FaqItem,
} from "@/lib/types";

// Branch configuration: content, SEO, galleries, and branch-specific options.
export type BranchConfig = {
  slug: string;
  href: string;
  title: string;
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  definition: string;
  introTitle: string;
  introParagraphs: string[];
  photoTitle: string;
  photoParagraphs: string[];
  videoTitle: string;
  videoParagraphs: string[];
  whyTitle: string;
  whyParagraphs: string[];
  workflowSteps: string[];
  galleryDirs: string[];
  faqs: FaqItem[];
  logos?: BranchLogo[];
  videos?: BranchVideo[];
  testimonials?: BranchTestimonial[];
  pricingHint?: BranchPricingHint;
  showReels?: boolean;
  showFpvSection?: boolean;
  anchorSections?: { id: string; title: string; paragraphs: string[] }[];
};

export const branches: BranchConfig[] = [
  {
    slug: "leisure",
    href: "/leisure/",
    title: "Leisure",
    navLabel: "Leisure",
    seoTitle: "Fotografie en videografie voor leisure",
    seoDescription:
      "Fotografie en videografie voor leisure en attractieparken. Shortform content voor TikTok en Reels. Content agency in Utrecht, actief door heel Nederland.",
    heroTitle: "Fotografie en videografie voor leisure",
    heroSubtitle:
      "Shortform content, reels en reportage voor attractieparken en leisure bestemmingen.",
    definition:
      "Second Shot Media levert fotografie en videografie voor leisure, waaronder attractieparken en themabelevingen. Wij maken shortform content voor TikTok, Instagram Reels en YouTube Shorts.",
    introTitle: "Structurele zichtbaarheid op social media",
    introParagraphs: [
      "Met Second Shot Media helpen wij leisure bestemmingen structureel zichtbaar te worden op TikTok en Instagram. Denk aan attractieparken, themabelevingen en seizoensevenementen.",
      "Wij werken onder andere voor Avonturenpark Hellendoorn, Familiepark Drievliet, Halloween Vlaardingen, Halloween Rosmalen en Theme Park Science. Het resultaat: een constante stroom reels die past bij uw park en uw doelgroep bereikt.",
    ],
    photoTitle: "Fotografie voor leisure",
    photoParagraphs: [
      "Naast video leveren wij fotografie voor campagnes, sfeerbeelden op drukke dagen en promotioneel materiaal. Zo ontstaat een complete contentmix voor uw leisure bestemming.",
    ],
    videoTitle: "Shortform video en reels",
    videoParagraphs: [
      "Ons uitgangspunt: één intensieve opnamedag per twee maanden, waarmee wij voldoende reels maken voor een hele periode. Wij monteren en optimaliseren voor TikTok, Reels en YouTube Shorts, en stemmen af met uw marketingteam.",
    ],
    whyTitle: "Waarom Second Shot Media voor leisure",
    whyParagraphs: [
      "Wij combineren fotografie én videografie onder één dak. Ons team is gespecialiseerd in leisure en shortform content, met korte lijnen en een bewezen track record bij grote parken.",
    ],
    workflowSteps: [
      "Voorbereiding & concept: thema's, formats en draaiboek",
      "Opnamedag: efficiënte productie op locatie",
      "Montage & optimalisatie: reels voor social kanalen",
      "Planning & plaatsing: consistente zichtbaarheid",
    ],
    galleryDirs: ["theme-parks"],
    showReels: true,
    showFpvSection: true,
    pricingHint: {
      title: "Structureel leisure pakket",
      description:
        "Indicatief vanaf €1.250 per opnamedag (één dag per twee maanden inclusief montage van reels). Exacte prijs hangt af van locatie, scope en gewenste output.",
    },
    testimonials: [
      {
        quote:
          "De reels passen echt bij ons park en worden consistent opgeleverd. Wij zien direct meer bereik op TikTok en Instagram.",
        author: "Marketingteam",
        role: "Attractiepark in Overijssel",
      },
    ],
    videos: [
      { title: "Theme Park Science Trailer", id: "CJl2UsZ-_Tc", type: "youtube" },
      { title: "Theme Park Science - Opening nieuw pretpark", id: "2PJ1USshijg", type: "youtube" },
    ],
    logos: [
      { src: "/logos/hellendoorn.png", alt: "Avonturenpark Hellendoorn" },
      { src: "/logos/drievliet.png", alt: "Familiepark Drievliet" },
      { src: "/logos/vlaardingen.webp", alt: "Halloween Vlaardingen" },
      { src: "/logos/tps.jpeg", alt: "Theme Park Science" },
    ],
    faqs: [
      {
        question: "Leveren jullie zowel fotografie als videografie voor leisure?",
        answer:
          "Ja. Second Shot Media levert fotografie én videografie voor leisure, waaronder attractieparken en themabelevingen.",
      },
      {
        question: "Maken jullie content voor TikTok en Instagram Reels?",
        answer: "Ja, shortform content voor TikTok, Instagram Reels en YouTube Shorts is een kernspecialisatie.",
      },
      {
        question: "Voor welke leisure klanten werken jullie?",
        answer:
          "Onder andere Avonturenpark Hellendoorn, Familiepark Drievliet, Halloween Vlaardingen, Halloween Rosmalen en Theme Park Science.",
      },
      {
        question: "Hoe werkt structurele social content?",
        answer:
          "Wij werken met één opnamedag per twee maanden, waarmee wij een batch reels en shortform content opleveren.",
      },
      {
        question: "Bieden jullie ook FPV drone video aan?",
        answer: "Ja, FPV drone tours zijn beschikbaar als aanvullende dienst voor leisure en attractieparken.",
      },
    ],
  },
  {
    slug: "zakelijke-evenementen",
    href: "/zakelijke-evenementen/",
    title: "Zakelijke evenementen",
    navLabel: "Zakelijke evenementen",
    seoTitle: "Fotografie en videografie voor zakelijke evenementen",
    seoDescription:
      "Fotografie en videografie voor congressen, beurzen en bedrijfsfeesten. LinkedIn- en PR-ready beelden. Content agency in Utrecht, actief door heel Nederland.",
    heroTitle: "Fotografie en videografie voor zakelijke evenementen",
    heroSubtitle:
      "Professionele reportage en video voor congressen, beurzen en bedrijfsfeesten. Discreet, professioneel en direct inzetbaar.",
    definition:
      "Second Shot Media levert fotografie en videografie voor zakelijke evenementen zoals congressen, beurzen en bedrijfsfeesten. Wij leveren beelden geschikt voor LinkedIn, pers en interne communicatie.",
    introTitle: "Uw business event in beeld",
    introParagraphs: [
      "Een zakelijk evenement is vaak méér dan een momentopname: het is een visitekaartje voor uw merk, uw mensen en uw boodschap. Of het nu gaat om een congres, beurs, netwerkborrel of bedrijfsviering, u wilt beelden die de energie vangen én professionaliteit uitstralen.",
      "Wij werken discreet tussen gasten en sprekers door en zorgen dat u dezelfde dag of de dag erna beelden heeft voor persberichten, LinkedIn en interne communicatie.",
    ],
    photoTitle: "Zakelijke eventfotografie",
    photoParagraphs: [
      "Reportagefotografie met oog voor sfeer, details en interactie. Efficiënte selectie en nabewerking in een professionele stijl, geleverd in formaten passend bij uw kanalen.",
    ],
    videoTitle: "Video voor zakelijke evenementen",
    videoParagraphs: [
      "Aftermovies, eventrecaps en korte video's voor social media. Wij stemmen formaat en montage af op uw kanalen, van YouTube tot LinkedIn.",
    ],
    whyTitle: "Waarom Second Shot Media",
    whyParagraphs: [
      "Foto en video onder één aanspreekpunt. Snel schakelen, heldere afspraken en kwaliteit die past bij uw merk.",
    ],
    workflowSteps: [
      "Intake en briefing: doelen, programma en gewenste output",
      "Opname op locatie: discreet en professioneel",
      "Nabewerking: selectie, kleur en montage",
      "Oplevering: bestanden klaar voor uw kanalen",
    ],
    galleryDirs: ["corporate"],
    pricingHint: {
      title: "Zakelijke eventreportage",
      description:
        "Indicatief vanaf €550 voor een halve dag fotografie of videografie. Volledige dag en combipakketten op maat — vraag een offerte voor uw event.",
    },
    testimonials: [
      {
        quote:
          "Professionele beelden die we direct konden gebruiken voor LinkedIn en ons persbericht. Soepele samenwerking en snelle oplevering.",
        author: "Eventmanager",
        role: "Universiteit Utrecht",
      },
    ],
    faqs: [
      {
        question: "Welke zakelijke events dekken jullie?",
        answer: "Congressen, beurzen, netwerkborrels, bedrijfsfeesten en productlanceringen.",
      },
      {
        question: "Leveren jullie foto én video?",
        answer: "Ja, wij leveren fotografie én videografie voor zakelijke evenementen.",
      },
      {
        question: "Zijn de beelden geschikt voor LinkedIn en pers?",
        answer: "Ja, wij leveren professionele reportagebeelden die direct inzetbaar zijn voor PR en social media.",
      },
      {
        question: "Werken jullie door heel Nederland?",
        answer: "Ja, wij zijn gevestigd in Utrecht en werken aan opdrachten door heel Nederland.",
      },
    ],
  },
  {
    slug: "evenementen",
    href: "/evenementen/",
    title: "Evenementen",
    navLabel: "Evenementen",
    seoTitle: "Fotografie en videografie voor evenementen en festivals",
    seoDescription:
      "Fotografie en videografie voor festivals, muziekevenementen en nightlife. Aftermovies en sfeerreportages. Content agency in Utrecht, actief door heel Nederland.",
    heroTitle: "Fotografie en videografie voor evenementen",
    heroSubtitle:
      "Festivals, muziekevenementen en nightlife. Dynamische foto's en aftermovies die de energie vastleggen.",
    definition:
      "Second Shot Media levert fotografie en videografie voor evenementen, festivals en nightlife. Denk aan sfeerreportages, podiumfotografie en aftermovies.",
    introTitle: "Events die tot leven komen",
    introParagraphs: [
      "Van festivals tot clubnights: wij vangen de energie, sfeer en spontane momenten. Wij leveren fotografie én videografie, van reportage tot aftermovie.",
      "Foto's worden doorgaans binnen 48 uur opgeleverd — ideaal om de buzz van uw event op social media te houden terwijl het nog hot is.",
    ],
    photoTitle: "Eventfotografie",
    photoParagraphs: [
      "Dynamische reportage met focus op publiek, podium en sfeer. Ook ervaring met low-light omgevingen bij club en nightlife.",
    ],
    videoTitle: "Aftermovies en eventvideo",
    videoParagraphs: [
      "Dynamische edits, ritmisch gemonteerd op de muziek. Van liggende aftermovies voor YouTube tot verticale shortform voor Reels en TikTok.",
    ],
    whyTitle: "Waarom Second Shot Media voor evenementen",
    whyParagraphs: [
      "Foto en video onder één aanspreekpunt. Ervaring op events tot 50.000 bezoekers. Snelle oplevering en energieke beelden.",
    ],
    workflowSteps: [
      "Briefing: type event, gewenste output en planning",
      "Opname: reportage en/of video op locatie",
      "Nabewerking: selectie, kleurcorrectie en montage",
      "Oplevering: foto's binnen 48 uur, video volgens afspraak",
    ],
    galleryDirs: ["events", "club"],
    pricingHint: {
      title: "Eventreportage",
      description:
        "Indicatief vanaf €475 voor een halve dag fotografie op uw festival of feest. Aftermovies en combipakketten op maat — vraag een offerte.",
    },
    testimonials: [
      {
        quote:
          "De foto's waren binnen 48 uur online en de aftermovie gaf precies de sfeer van ons festival. Onze bezoekers deelden het massaal.",
        author: "Organisatie",
        role: "Festival in de Randstad",
      },
    ],
    anchorSections: [
      {
        id: "festivals",
        title: "Festivals",
        paragraphs: [
          "Podium, publiek en sfeer. Beelden die de beleving van je festival overbrengen en geschikt zijn voor social media en aftermovies.",
        ],
      },
      {
        id: "club-nightlife",
        title: "Club & nightlife",
        paragraphs: [
          "Low-light fotografie en video met focus op energie en sfeer op de dansvloer.",
        ],
      },
    ],
    videos: [
      { title: "World Scout Jamboree - Zuid Korea", id: "5esMJo_vDig", type: "youtube" },
      { title: "Halloween Vlaardingen", id: "YEwFVZvs5fg", type: "youtube" },
      { title: "Halloween Rosmalen", id: "TpxAfFtekbw", type: "youtube" },
      { title: "DJ JSPHN op ADE Amsterdam", id: "i6PQazSqF7Y", type: "youtube" },
      { title: "Rythm Roulette - Verjaardagsfestival", id: "edf_QUweTEw", type: "youtube" },
      { title: "World Scout Moot", id: "39ALWRfNXAk", type: "youtube" },
    ],
    faqs: [
      {
        question: "Fotograferen en filmen jullie festivals?",
        answer: "Ja, wij leveren fotografie én videografie voor festivals en muziekevenementen.",
      },
      {
        question: "Doen jullie ook club en nightlife?",
        answer: "Ja, wij hebben ervaring met low-light fotografie en video in club- en nightlife-omgevingen.",
      },
      {
        question: "Leveren jullie aftermovies?",
        answer: "Ja, wij maken aftermovies en recap video's voor festivals en evenementen.",
      },
      {
        question: "Hoe snel zijn foto's beschikbaar?",
        answer: "Wij leveren eventfoto's doorgaans binnen 48 uur na het evenement.",
      },
    ],
  },
  {
    slug: "gala-en-feest",
    href: "/gala-en-feest/",
    title: "Gala's en feesten",
    navLabel: "Gala's en feesten",
    seoTitle: "Fotografie en videografie voor gala's en feesten",
    seoDescription:
      "Fotografie en videografie voor gala's, feesten en studentenverenigingen. Content agency in Utrecht, actief door heel Nederland.",
    heroTitle: "Fotografie en videografie voor gala's en feesten",
    heroSubtitle:
      "Elegante reportage en video voor gala's, studentenverenigingen en feesten. Van photobooth tot dansvloer.",
    definition:
      "Second Shot Media levert fotografie en videografie voor gala's, feesten en studentenverenigingen. Wij leggen de sfeer op de dansvloer en bij de photobooth vast.",
    introTitle: "Stijlvolle beelden van jullie gala",
    introParagraphs: [
      "Tijdens een gala draait alles om uitstraling: pakken, jurken, aankleding en een volle dansvloer. Wij leggen deze elementen vast op een manier die zowel chic als spontaan is, in foto of video.",
      "Wij raden voor fotografie 3 uur coverage aan: de eerste anderhalf uur bij een photobooth, de laatste anderhalf uur op de dansvloer. Het resultaat: almanak-klare beelden en content voor je socials.",
    ],
    photoTitle: "Galafotografie",
    photoParagraphs: [
      "Van entreefoto's en groepsportretten tot sfeerbeelden op de dansvloer: een complete reportage voor almanak, socials en herinneringen.",
    ],
    videoTitle: "Gala- en feestvideo",
    videoParagraphs: [
      "Aftermovies en sfeervideo's van je gala of feest, geschikt voor social media en interne communicatie van je vereniging.",
    ],
    whyTitle: "Waarom Second Shot Media voor gala's",
    whyParagraphs: [
      "Ervaring met studentenverenigingen en gala's door heel Nederland. Foto én video onder één aanspreekpunt.",
    ],
    workflowSteps: [
      "Afstemming: planning photobooth en dansvloer",
      "Opname: reportage en video op locatie",
      "Nabewerking: selectie en montage",
      "Oplevering: beelden voor socials en archief",
    ],
    galleryDirs: ["students"],
    pricingHint: {
      title: "Gala fotografie pakket",
      description:
        "Indicatief vanaf €450 voor 3 uur coverage (1,5 uur photobooth + 1,5 uur dansvloer). Video en combipakketten op maat.",
    },
    testimonials: [
      {
        quote:
          "Onze almanak en socials zagen er top door. De fotograaf wist precies waar hij moest zijn op de dansvloer.",
        author: "Bestuur",
        role: "Studievereniging DSK Utrecht",
      },
    ],
    logos: [
      { src: "/logos/dsk.png", alt: "Studievereniging DSK Utrecht" },
      { src: "/logos/ufostam.png", alt: "Studentenscouting U.F.O.-Stam" },
      { src: "/logos/usko.jpg", alt: "Utrechts Studenten Koor en Orkest" },
      { src: "/logos/vugs.webp", alt: "Vugs Utrecht" },
      { src: "/logos/aegee.jpg", alt: "AEGEE Utrecht" },
      { src: "/logos/ssn.png", alt: "Studenten Scouting Nederland" },
    ],
    videos: [
      { title: "Gala Studentenvereniging", id: "Z5kD0EZ3_-s", type: "youtube" },
      { title: "Gala Studentenvereniging", id: "ozqoEutIqKQ", type: "youtube" },
      { title: "Introductievideo Studentenvereniging", id: "Vc3ixtqtDFs", type: "youtube" },
    ],
    faqs: [
      {
        question: "Fotograferen jullie gala's van studentenverenigingen?",
        answer: "Ja, gala's en feesten van studentenverenigingen zijn een specialisatie van Second Shot Media.",
      },
      {
        question: "Leveren jullie ook video op gala's?",
        answer: "Ja, wij leveren fotografie én videografie voor gala's en feesten.",
      },
      {
        question: "Wat is een aanbevolen pakket?",
        answer:
          "Wij raden 3 uur coverage aan: anderhalf uur bij de photobooth en anderhalf uur op de dansvloer.",
      },
      {
        question: "Welke verenigingen hebben jullie al gedaan?",
        answer:
          "Onder andere DSK Utrecht, U.F.O.-Stam, USKO, Vugs Utrecht, AEGEE Utrecht en Studenten Scouting Nederland.",
      },
    ],
  },
];

export function getBranchBySlug(slug: string): BranchConfig | undefined {
  return branches.find((b) => b.slug === slug);
}
