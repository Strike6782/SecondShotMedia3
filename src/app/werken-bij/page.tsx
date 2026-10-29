import { Hero } from "@/components/layout/Hero";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { werkenBijContent } from "@/lib/page-content";

export const metadata = buildPageMetadata({
  title: "Werken bij",
  description:
    "Second Shot Media werkt per opdracht met een vaste poule freelance fotografen, videografen en editors. Op dit moment zijn er geen openstaande vacatures.",
  path: "/werken-bij/",
});

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
        subtitle="Op dit moment zijn er geen openstaande vacatures."
        showCta={false}
      />

      <section className="container max-w-screen-2xl py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="display text-5xl sm:text-6xl md:col-span-5">Ons team is compleet</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            <p>
              Second Shot Media werkt per opdracht met een vaste poule freelance fotografen, videografen en editors.
              Op dit moment is dat team compleet en zoeken wij geen nieuwe mensen.
            </p>
            <p>Komt er een plek vrij, dan plaatsen wij de vacature op deze pagina.</p>
          </div>
        </div>
      </section>

      <div className="container max-w-screen-2xl pb-20 md:pb-28">
        <FaqSection items={werkenBijContent.faqs} />
      </div>
    </div>
  );
}
