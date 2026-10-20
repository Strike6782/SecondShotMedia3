import { Hero } from "@/components/layout/Hero";
import { EventDay } from "@/components/sections/EventDay";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { Button } from "@/components/ui/button";
import { branches } from "@/lib/branches";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import type { DayStep } from "@/lib/page-content";
import { werkenBijContent } from "@/lib/page-content";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Werken bij",
  description:
    "Freelance fotograaf, videograaf of editor bij Second Shot Media. Projectmatig werken op beurzen, congressen, corporate events en festivals door heel Nederland.",
  path: "/werken-bij/",
});

const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Samenwerking Second Shot Media")}`;

const steps: DayStep[] = [
  { when: "Stap 1", title: "Aanmelden", text: "Mail je portfolio, specialisatie, woonplaats en beschikbaarheid." },
  { when: "Stap 2", title: "Kennismaken", text: "We bespreken je werk en hoe wij werken." },
  { when: "Stap 3", title: "Eerste opdracht", text: "Je start naast een ervaren creator op een passende opdracht." },
];

export default function WerkenBijPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Werken bij", href: "/werken-bij/" },
  ];

  return (
    <div className="flex flex-col">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={werkenBijContent.faqs} />

      <Hero
        title="Werken bij Second Shot Media"
        subtitle="Fotograaf, videograaf of editor met oog voor events? Werk als creator mee op beurzen, congressen, corporate events en festivals."
        showCta={false}
      />

      <section className="container max-w-screen-2xl py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="display text-5xl sm:text-6xl md:col-span-5">Samenwerken per opdracht</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            <p>{werkenBijContent.definition}</p>
            <p>
              Ivan Balkenende is je vaste aanspreekpunt. Je krijgt voor elke opdracht een duidelijke briefing, en
              feedback op je werk zodat je groeit naar de standaard van Second Shot Media.
            </p>
            <p>Wij werken voor {branches.map((b) => b.title.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " en $1")}.</p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="heading mb-4 text-3xl">Wat wij zoeken</h2>
            <ul>
              {[
                "Ervaring met eventfotografie, -videografie of montage",
                "Eigen professionele apparatuur",
                "Betrouwbaar, punctueel en zelfstandig",
                "Bereid om in een vaste stijl en volgens briefing te werken",
                "Inzetbaar in Midden-Nederland en daarbuiten",
              ].map((item) => (
                <li key={item} className="border-t border-border py-3 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="heading mb-4 text-3xl">Wat wij bieden</h2>
            <ul>
              {[
                "Opdrachten op zakelijke events en festivals",
                "Training en feedback om te groeien",
                "Duidelijke briefing en planning vooraf",
                "Een vast netwerk van creators",
                "Een marktconforme vergoeding per opdracht",
              ].map((item) => (
                <li key={item} className="border-t border-border py-3 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container max-w-screen-2xl">
          <h2 className="display mb-14 text-5xl sm:text-6xl">Zo werkt het</h2>
          <EventDay steps={steps} />
          <div className="mt-14">
            <Button size="lg" asChild>
              <a href={mailtoLink}>Stuur je aanmelding</a>
            </Button>
          </div>
        </div>
      </section>

      <div className="container max-w-screen-2xl py-20 md:py-28">
        <FaqSection items={werkenBijContent.faqs} />
      </div>
    </div>
  );
}
