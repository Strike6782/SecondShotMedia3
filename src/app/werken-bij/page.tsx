import { Hero } from "@/components/layout/Hero";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { werkenBijContent } from "@/lib/page-content";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Vacature video-editor (DaVinci Resolve)",
  description:
    "Second Shot Media zoekt een freelance video-editor die werkt in DaVinci Resolve, voor aftermovies van zakelijke events en festivals en shortform content.",
  path: "/werken-bij/",
});

const tasks = [
  "Aftermovies monteren van zakelijke events",
  "Aftermovies monteren van festivals",
  "Shortform content voor Instagram Reels, TikTok en YouTube Shorts",
];

const asks = [
  "Je werkt in DaVinci Resolve",
  "Een portfolio met aftermovies of shortform content die je zelf hebt gemonteerd",
  "Gevoel voor ritme, muziek en verhaal",
  "Je werkt volgens een briefing en haalt afgesproken deadlines",
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
        title="Wij zoeken een video-editor"
        subtitle="Werk je in DaVinci Resolve en monteer je graag aftermovies en shortform content? Dan zoeken we jou."
        showCta={false}
      />

      <section className="container max-w-screen-2xl py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="display text-5xl sm:text-6xl md:col-span-5">Freelance video-editor</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            <p>
              Als editor bij Second Shot Media monteer je het beeld dat onze videografen op events schieten. Je werkt
              per opdracht, met Ivan Balkenende als vast aanspreekpunt en een duidelijke briefing per project.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="heading mb-4 text-3xl">Wat je doet</h2>
            <ul>
              {tasks.map((item) => (
                <li key={item} className="border-t border-border py-3 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="heading mb-4 text-3xl">Wat wij vragen</h2>
            <ul>
              {asks.map((item) => (
                <li key={item} className="border-t border-border py-3 text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 space-y-5">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Stuur een link naar je portfolio naar {CONTACT_EMAIL}. Voor fotografen en videografen is ons team op dit
            moment compleet.
          </p>
          <Button size="lg" asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>Reageer op de vacature</a>
          </Button>
        </div>
      </section>

      <div className="container max-w-screen-2xl pb-20 md:pb-28">
        <FaqSection items={werkenBijContent.faqs} />
      </div>
    </div>
  );
}
