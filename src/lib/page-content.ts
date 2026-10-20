import type { FaqItem } from "@/lib/types";

// Copy for the homepage, werkwijze, over/contact, werken-bij and city pages.
// Portfolio video's en foto's staan in content/portfolio.json.

/** How an event day runs, from request to delivery. `delivered` marks the moment the client receives content. */
export type DayStep = {
  when: string;
  title: string;
  text: string;
  delivered?: boolean;
};

export const eventDay: DayStep[] = [
  {
    when: "Vooraf",
    title: "Briefing",
    text: "Programma, belangrijkste momenten en wie wat vastlegt staan vast.",
  },
  {
    when: "Voor de start",
    title: "Team op locatie",
    text: "Laatste afstemming met u, zodat programmawijzigingen geen gaten geven.",
  },
  {
    when: "Tijdens het event",
    title: "Foto en video",
    text: "Discreet, zonder flits waar mogelijk, in één afgesproken stijl.",
  },
  {
    when: "Dezelfde dag",
    title: "Eerste selectie",
    text: "De sterkste beelden, klaar voor social media en persbericht.",
    delivered: true,
  },
  {
    when: "Binnen 24 uur",
    title: "Volledig album",
    text: "Bewerkt, in hoge resolutie en webformaat, via een deelbare link.",
    delivered: true,
  },
];

/** Full process for the werkwijze page. */
export const workflow: DayStep[] = [
  {
    when: "Binnen één werkdag",
    title: "Aanvraag en voorstel",
    text: "U stuurt datum, locatie, tijden en wat u met de beelden wilt. Ivan reageert persoonlijk en stuurt een voorstel op maat met een all-in prijs.",
  },
  {
    when: "Weken vooraf",
    title: "Teamsamenstelling",
    text: "Op basis van het programma bepalen wij hoeveel fotografen en videografen nodig zijn en wie dat worden.",
  },
  {
    when: "Week vooraf",
    title: "Briefing",
    text: "Iedereen krijgt hetzelfde draaiboek: het programma, de momenten die er echt toe doen, sprekers en sponsors, en wie welke zaal of welk onderdeel vastlegt.",
  },
  {
    when: "Op de dag",
    title: "Opnames",
    text: "Het team is ruim voor de start op locatie en stemt nog één keer met u af. Ivan blijft uw aanspreekpunt, ook als hij zelf achter de camera staat.",
  },
  {
    when: "Dezelfde dag",
    title: "Eerste selectie",
    text: "Een selectie van de sterkste foto's, zodat u kunt posten terwijl het event nog loopt of net voorbij is.",
    delivered: true,
  },
  {
    when: "Binnen 24 uur",
    title: "Volledig album",
    text: "Alle foto's bewerkt in één stijl, in hoge resolutie en webformaat, in een album dat u kunt delen.",
    delivered: true,
  },
  {
    when: "In overleg",
    title: "Video",
    text: "Aftermovie, recap of highlights, liggend en verticaal. Inclusief één revisieronde en gelicenseerde muziek.",
  },
];

export type AddOn = {
  id: string;
  title: string;
  text: string;
};

export const addOns: AddOn[] = [
  {
    id: "fpv-drone",
    title: "FPV-drone",
    text: "Vloeiende vluchten door een beurshal, over een festivalterrein of in één shot door uw locatie. Wij bespreken vooraf wat volgens de regels en op uw locatie mogelijk is.",
  },
  {
    id: "extra-team",
    title: "Extra fotograaf of videograaf",
    text: "Voor meerdere zalen, podia of hallen tegelijk, of voor een meerdaags event.",
  },
  {
    id: "interviews",
    title: "Interviews en highlights",
    text: "Korte interviews met sprekers, exposanten of gasten, gemonteerd tot highlights voor LinkedIn en uw website.",
  },
  {
    id: "formaten",
    title: "Liggend en verticaal",
    text: "Elke video in de formaten die u nodig heeft: 16:9 voor website en scherm, 9:16 voor Reels, TikTok en Stories.",
  },
  {
    id: "mappen",
    title: "Mappen per stand, artiest of sponsor",
    text: "Iedereen vindt snel zijn eigen beelden, zodat ook uw partners over uw event posten.",
  },
  {
    id: "ondertiteling",
    title: "Ondertiteling",
    text: "Nederlandse of Engelse ondertiteling, zodat video's ook zonder geluid werken.",
  },
];

export const homeContent = {
  faqs: [
    {
      question: "Voor welke events werken jullie?",
      answer:
        "Beurzen, congressen en conferenties, corporate events zoals jubilea en awards, en festivals en publieksevenementen. Steeds met foto, video of allebei.",
    },
    {
      question: "Hoe snel ontvang ik de foto's?",
      answer:
        "Een eerste selectie ontvangt u dezelfde dag. Het volledige, bewerkte album volgt binnen 24 uur. Bij meerdaagse events krijgt u na elke dag een selectie.",
    },
    {
      question: "Wat kost het?",
      answer:
        "Dat hangt af van de duur, het aantal mensen en wat u met de beelden wilt. U ontvangt binnen één werkdag een voorstel op maat met een all-in prijs, zonder verborgen kosten.",
    },
    {
      question: "Werken jullie in heel Nederland?",
      answer:
        "Ja. Wij zijn gevestigd in Utrecht en werken door heel Nederland. Voor internationale events maken wij vooraf afspraken over reizen en verblijf.",
    },
    {
      question: "Met wie heb ik contact?",
      answer:
        "Met Ivan Balkenende, de oprichter. Hij maakt het voorstel, brieft het team en is op de dag zelf uw aanspreekpunt.",
    },
  ] satisfies FaqItem[],
};

export const overContactContent = {
  definition:
    "Ivan Balkenende richtte Second Shot Media op en is uw vaste aanspreekpunt. Samen met een vaste poule fotografen, videografen en editors legt hij events vast door heel Nederland.",
  faqs: [
    {
      question: "Waar is Second Shot Media gevestigd?",
      answer: "In Utrecht. Wij werken door heel Nederland en op aanvraag ook internationaal.",
    },
    {
      question: "Hoe vraag ik een voorstel aan?",
      answer:
        "Mail naar ivan@secondshotmedia.nl met datum, locatie, tijden en wat u met de beelden wilt. U krijgt binnen één werkdag een reactie.",
    },
    {
      question: "Wie zijn de fotografen en videografen?",
      answer:
        "Een vaste poule van freelance fotografen, videografen en editors. Iedereen werkt volgens dezelfde briefing en stijl, en Ivan controleert de beelden voor levering.",
    },
    {
      question: "Kan ik ook met jullie samenwerken als fotograaf of videograaf?",
      answer: "Ja. Kijk op de pagina Werken bij wat wij zoeken en hoe u zich aanmeldt.",
    },
  ] satisfies FaqItem[],
};

export const werkenBijContent = {
  definition:
    "Second Shot Media werkt per opdracht samen met freelance fotografen, videografen en editors door heel Nederland. Er zijn geen vaste fulltime functies.",
  faqs: [
    {
      question: "Zijn dit vaste banen?",
      answer: "Nee. Wij werken projectmatig samen met freelancers, niet in loondienst.",
    },
    {
      question: "Waar moet ik wonen?",
      answer:
        "Wij werken door heel Nederland, met de meeste opdrachten in Midden-Nederland. Reisbereidheid is belangrijk.",
    },
    {
      question: "Wat hebben jullie nodig?",
      answer:
        "Een sterk portfolio met eventwerk, eigen professionele apparatuur en de bereidheid om in een vaste stijl en volgens een briefing te werken.",
    },
    {
      question: "Hoe meld ik me aan?",
      answer:
        "Stuur een e-mail naar ivan@secondshotmedia.nl met onderwerp 'Samenwerking Second Shot Media'. Vermeld uw portfolio, specialisatie (foto, video of montage), woonplaats en beschikbaarheid.",
    },
  ] satisfies FaqItem[],
};

export function getCityDefinition(cityName: string): string {
  return `Fotografie en video voor beurzen, congressen, corporate events en festivals in ${cityName}. Second Shot Media is gevestigd in Utrecht en werkt door heel Nederland.`;
}

export function getCityFaqs(cityName: string): FaqItem[] {
  return [
    {
      question: `Werkt Second Shot Media in ${cityName}?`,
      answer: `Ja. Wij leggen events vast in ${cityName} en door heel Nederland, vanuit onze basis in Utrecht.`,
    },
    {
      question: "Hoe snel ontvang ik de foto's?",
      answer: "Een eerste selectie dezelfde dag, het volledige album binnen 24 uur.",
    },
    {
      question: "Hoe vraag ik een voorstel aan?",
      answer:
        "Mail ivan@secondshotmedia.nl met datum, locatie, tijden en wat u met de beelden wilt. U krijgt binnen één werkdag een reactie.",
    },
  ];
}
