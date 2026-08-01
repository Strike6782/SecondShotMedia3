import type { FaqItem } from "@/lib/types";

// Homepage, over/contact, and werken-bij content (non-branch pages).
export const homeContent = {
  faqs: [
    {
      question: "Wat is Second Shot Media?",
      answer:
        "Second Shot Media is een content agency voor fotografie en videografie in Utrecht. Wij leveren beide diensten onder één dak voor leisure en events door heel Nederland.",
    },
    {
      question: "Leveren jullie zowel fotografie als videografie?",
      answer:
        "Ja, dat is ons kernaanbod. Wij combineren fotografie en videografie zodat u één aanspreekpunt heeft voor al uw beeldmateriaal.",
    },
    {
      question: "Waar zijn jullie actief?",
      answer: "Wij werken aan opdrachten door heel Nederland. Ons team is gevestigd in Utrecht.",
    },
    {
      question: "In welke branches zijn jullie gespecialiseerd?",
      answer:
        "Onze focus ligt op leisure en events, steeds met fotografie én videografie. Daarnaast werken wij ook voor zakelijke evenementen en gala's.",
    },
    {
      question: "Wie is de oprichter?",
      answer:
        "Second Shot Media is opgericht door Ivan Balkenende, met ruime ervaring op events tot 50.000 bezoekers.",
    },
  ] satisfies FaqItem[],
};

export const overContactContent = {
  definition:
    "Second Shot Media is een content agency opgericht door Ivan Balkenende. Vanuit Utrecht leveren wij fotografie en videografie voor leisure en events door heel Nederland.",
  faqs: [
    {
      question: "Waar is Second Shot Media gevestigd?",
      answer: "Wij zijn gevestigd in Utrecht, Nederland.",
    },
    {
      question: "Hoe neem ik contact op?",
      answer:
        "Via het contactformulier op deze pagina of per e-mail op ivan@secondshotmedia.nl. Wij reageren doorgaans binnen één werkdag.",
    },
    {
      question: "Wie is Ivan Balkenende?",
      answer:
        "Ivan Balkenende is de oprichter van Second Shot Media. Hij heeft ervaring met events tot 50.000 bezoekers en is het hoofdaanspreekpunt voor alle opdrachten.",
    },
    {
      question: "Schakelen jullie externe fotografen in?",
      answer:
        "Ja, voor opdrachten werken wij met een poule van freelance fotografen en videografen. Zie onze pagina Werken bij voor meer informatie.",
    },
  ] satisfies FaqItem[],
};

export const werkenBijContent = {
  definition:
    "Second Shot Media werkt projectmatig samen met freelance fotografen en videografen door heel Nederland. Er zijn geen vaste fulltime functies; samenwerking verloopt per opdracht.",
  faqs: [
    {
      question: "Zijn dit vaste banen?",
      answer: "Nee. Wij bieden projectmatige freelance samenwerking, geen vaste dienstbetrekking.",
    },
    {
      question: "Waar moet ik wonen?",
      answer: "Wij zoeken freelancers die inzetbaar zijn door heel Nederland. Reisbereidheid is belangrijk.",
    },
    {
      question: "Wat hebben jullie nodig?",
      answer:
        "Een sterk portfolio, eigen professionele apparatuur en ervaring met eventfotografie of -videografie.",
    },
    {
      question: "Hoe meld ik me aan?",
      answer:
        "Stuur een e-mail naar ivan@secondshotmedia.nl met onderwerp 'Samenwerking Second Shot Media'. Vermeld uw portfolio, specialisatie (foto/video), woonplaats en beschikbaarheid.",
    },
  ] satisfies FaqItem[],
};

export function getCityDefinition(cityName: string): string {
  return `Second Shot Media is een content agency in Utrecht en actief in ${cityName} en door heel Nederland voor fotografie en videografie op leisure en events.`;
}

export function getCityFaqs(cityName: string): FaqItem[] {
  return [
    {
      question: `Doet Second Shot Media fotografie en videografie in ${cityName}?`,
      answer: `Ja. Wij leveren fotografie en videografie voor opdrachten in ${cityName} en door heel Nederland.`,
    },
    {
      question: "Waar is Second Shot Media gevestigd?",
      answer: `Second Shot Media is gevestigd in Utrecht en werkt ook in ${cityName}.`,
    },
    {
      question: "Hoe vraag ik een offerte aan?",
      answer: "Neem contact op via het formulier op over-en-contact of via ivan@secondshotmedia.nl voor beschikbaarheid en een offerte op maat.",
    },
  ];
}
