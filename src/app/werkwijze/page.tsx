import Image from "next/image";
import { Hero } from "@/components/layout/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { EventDay } from "@/components/sections/EventDay";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { addOns, workflow } from "@/lib/page-content";
import type { FaqItem } from "@/lib/types";

export const metadata = buildPageMetadata({
  title: "Werkwijze",
  description:
    "Van aanvraag tot levering: één aanspreekpunt, een briefing voor het hele team, een eerste selectie dezelfde dag en het volledige album binnen 24 uur. Met FPV-drone als optie.",
  path: "/werkwijze/",
});

const faqs: FaqItem[] = [
  {
    question: "Hoe komt de prijs tot stand?",
    answer:
      "Op basis van de duur, het aantal fotografen en videografen en wat u met de beelden wilt. U ontvangt één all-in prijs, zonder verborgen kosten.",
  },
  {
    question: "Wat als het programma op de dag verandert?",
    answer:
      "Dat gebeurt bijna altijd. Omdat het team de briefing kent en Ivan op de dag zelf uw aanspreekpunt is, schuiven wij mee zonder dat er momenten verloren gaan.",
  },
  {
    question: "Mag ik de beelden overal gebruiken?",
    answer:
      "In het voorstel leggen wij vast waar u de beelden voor mag gebruiken, zodat daar achteraf geen vragen over zijn.",
  },
  {
    question: "Hoeveel revisierondes zitten er in een video?",
    answer: "Eén revisieronde is inbegrepen. Extra rondes zijn mogelijk tegen het editingtarief.",
  },
];

export default function WerkwijzePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Werkwijze", href: "/werkwijze/" },
  ];
  const [drone, ...otherAddOns] = addOns;

  return (
    <div className="flex flex-col">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={faqs} />

      <Hero
        title="Van aanvraag tot album, met één aanspreekpunt"
        subtitle="U regelt een event. Wij zorgen dat de beelden op tijd, in één stijl en zonder gedoe bij u terechtkomen."
        image="/gallery/corporate/Nico-Campus-2026---Second-Shot-Media-97.jpg"
        imageAlt="Lege congreszaal vlak voor de start van het programma"
      />

      <section className="container max-w-screen-2xl py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="display text-5xl sm:text-6xl md:sticky md:top-28">Stap voor stap</h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <EventDay steps={workflow} layout="column" />
          </div>
        </div>
      </section>

      <section id="uitbreidingen" className="scroll-mt-16 bg-muted py-20 md:py-28">
        <div className="container max-w-screen-2xl">
          <h2 className="display mb-14 max-w-3xl text-5xl sm:text-6xl">Uitbreidingen</h2>

          <div id={drone.id} className="grid scroll-mt-24 gap-10 md:grid-cols-12 md:items-center">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink md:col-span-5">
              <Image
                src="/images/fpv-drone.jpg"
                alt="Ivan met FPV-bril en drone"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4 md:col-span-6 md:col-start-7">
              <h3 className="display text-4xl sm:text-5xl">{drone.title}</h3>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{drone.text}</p>
            </div>
          </div>

          <ul className="mt-20 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {otherAddOns.map((item) => (
              <li key={item.id} id={item.id} className="border-t border-foreground/20 py-6">
                <h3 className="heading text-2xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container max-w-screen-2xl py-20 md:py-28">
        <FaqSection items={faqs} />
      </div>

      <CtaBand showWorkflowLink={false} />
    </div>
  );
}
