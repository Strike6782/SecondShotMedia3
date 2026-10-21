import type { FaqItem } from "@/lib/types";

// Copy for the homepage, werkwijze, over/contact, werken-bij and city pages.
// Portfolio video's en foto's staan in content/portfolio.json.

/** One step on a timeline (event day, werkwijze, pretparken). */
export type DayStep = {
  when: string;
  title: string;
  text: string;
};

export const eventDay: DayStep[] = [
  {
    when: "Vooraf",
    title: "Briefing",
    text: "Programma, belangrijkste momenten en wie wat vastlegt staan vast.",
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
  },
  {
    when: "Binnen 24 uur",
    title: "Volledig album",
    text: "Bewerkt, in hoge resolutie en webformaat, via een deelbare link.",
  },
  {
    when: "In overleg",
    title: "Video",
    text: "Aftermovie, recap of highlights. De oplevertermijn stemmen wij per project met u af.",
  },
];

/** Full process for the werkwijze page. */
export const workflow: DayStep[] = [
  {
    when: "Vooraf",
    title: "Aanvraag en voorstel",
    text: "U stuurt datum, locatie, tijden en wat u met de beelden wilt. Ivan neemt persoonlijk contact met u op, kijkt met u mee wat u nodig heeft en stuurt een offerte op maat.",
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
  },
  {
    when: "Binnen 24 uur",
    title: "Volledig album",
    text: "Alle foto's bewerkt in één stijl, in hoge resolutie en webformaat, in een album dat u kunt delen.",
  },
  {
    when: "In overleg",
    title: "Video",
    text: "Aftermovie, recap of highlights, liggend en verticaal. De oplevertermijn stemmen wij per project met u af. Inclusief één revisieronde en gelicenseerde muziek.",
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
    text: "Vloeiende vluchten door een beurshal, over een festivalterrein, door een attractie of in één shot door uw locatie. Wij bespreken vooraf wat volgens de regels en op uw locatie mogelijk is.",
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
        "Zakelijke events zoals beurzen en congressen, bedrijfsfeesten en gala's, festivals en publieksevenementen, en pretparken en dagattracties. Steeds met foto, video of allebei.",
    },
    {
      question: "Hoe snel ontvang ik de foto's?",
      answer:
        "Een eerste selectie ontvangt u dezelfde dag. Het volledige, bewerkte album volgt binnen 24 uur.",
    },
    {
      question: "Wat kost het?",
      answer:
        "Dat verschilt per evenement. Neem contact op met Ivan voor een offerte op maat. Wij kijken graag met u mee wat u nodig heeft.",
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
        "Mail naar ivan@secondshotmedia.nl met datum, locatie, tijden en wat u met de beelden wilt. Ivan neemt dan persoonlijk contact met u op.",
    },
    {
      question: "Wie zijn de fotografen en videografen?",
      answer:
        "Een vaste poule van freelance fotografen, videografen en editors. Iedereen werkt volgens dezelfde briefing en stijl.",
    },
    {
      question: "Kan ik ook met jullie samenwerken?",
      answer:
        "Wij zoeken op dit moment een video-editor die werkt in DaVinci Resolve. Kijk op de pagina Werken bij. Voor fotografen en videografen is het team compleet.",
    },
  ] satisfies FaqItem[],
};

export const werkenBijContent = {
  definition:
    "Second Shot Media werkt per opdracht samen met freelance fotografen, videografen en editors door heel Nederland. Er zijn geen vaste fulltime functies.",
  faqs: [
    {
      question: "Zoeken jullie op dit moment nieuwe creators?",
      answer:
        "Wij zoeken een video-editor die werkt in DaVinci Resolve. Voor fotografen en videografen is ons team op dit moment compleet.",
    },
    {
      question: "Hoe reageer ik op de vacature voor video-editor?",
      answer:
        "Mail naar ivan@secondshotmedia.nl met een link naar je portfolio, bij voorkeur met aftermovies of shortform content die je zelf hebt gemonteerd.",
    },
    {
      question: "Zijn dit vaste banen?",
      answer: "Nee. Wij werken projectmatig samen met freelancers, niet in loondienst.",
    },
  ] satisfies FaqItem[],
};

export function getCityDefinition(cityName: string): string {
  return `Fotografie en video voor zakelijke events, bedrijfsfeesten, festivals en pretparken in ${cityName}. Second Shot Media is gevestigd in Utrecht en werkt door heel Nederland.`;
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
        "Mail ivan@secondshotmedia.nl met datum, locatie, tijden en wat u met de beelden wilt. Wij kijken graag met u mee wat u nodig heeft.",
    },
  ];
}
