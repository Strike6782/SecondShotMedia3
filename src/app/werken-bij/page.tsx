import Link from "next/link";
import { Hero } from "@/components/layout/Hero";
import { DefinitionBlock } from "@/components/seo/DefinitionBlock";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { Button } from "@/components/ui/button";
import { branches } from "@/lib/branches";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { werkenBijContent } from "@/lib/page-content";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Werken bij Second Shot Media | Freelance fotograaf en videograaf",
  description:
    "Freelance samenwerken als fotograaf of videograaf bij Second Shot Media. Projectmatig meewerken door heel Nederland. Gevestigd in Utrecht.",
  path: "/werken-bij/",
});

const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Samenwerking Second Shot Media")}`;

export default function WerkenBijPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Werken bij", href: "/werken-bij/" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={werkenBijContent.faqs} />

      <Hero
        title="Werken bij Second Shot Media"
        subtitle="Samenwerken als freelance fotograaf of videograaf. Projectmatig, door heel Nederland."
        ctaText="Meld je aan"
        ctaLink={mailtoLink}
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <DefinitionBlock text={werkenBijContent.definition} />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl space-y-16">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl font-bold">Over samenwerken</h2>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
            <p>
              Second Shot Media schakelt freelancers in voor opdrachten op het gebied van leisure, evenementen, zakelijke
              events en gala&apos;s. Ivan Balkenende is het vaste aanspreekpunt. Samenwerking verloopt per project; er
              zijn geen vaste fulltime functies.
            </p>
            <p>
              Wij helpen je om op het juiste kwaliteitsniveau te komen met training en feedback op je werk, zodat de
              output past bij de standaard van Second Shot Media.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Soorten opdrachten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {branches.map((branch) => (
              <div key={branch.slug} className="rounded-2xl border border-border/50 bg-muted/30 p-6">
                <h3 className="font-bold text-lg">{branch.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  {branch.slug === "leisure" && "Reels en shortform content op locatie"}
                  {branch.slug === "zakelijke-evenementen" && "Reportage en video voor zakelijke events"}
                  {branch.slug === "evenementen" && "Dynamische omgevingen, festivals en avondwerk"}
                  {branch.slug === "gala-en-feest" && "Feestreportage en studentenevents"}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Wat wij zoeken</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-lg">
              <li>Ervaring met eventfotografie en/of -videografie</li>
              <li>Eigen professionele apparatuur</li>
              <li>Betrouwbaar, punctueel en zelfstandig werken</li>
              <li>Portfolio dat energie en sfeer laat zien</li>
              <li>Inzetbaar door heel Nederland</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Wat wij bieden</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-lg">
              <li>Interessante opdrachten bij bekende leisure- en eventklanten</li>
              <li>Training en feedback om te groeien</li>
              <li>Duidelijke briefing en planning vooraf</li>
              <li>Samenwerking binnen een gevestigd netwerk van creators</li>
              <li>Marktconforme freelance vergoeding per project</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Hoe het werkt</h2>
          <ol className="list-decimal pl-5 space-y-3 text-muted-foreground text-lg max-w-2xl">
            <li>Meld je aan via e-mail met portfolio en specialisatie</li>
            <li>Kennismaking en portfolio review</li>
            <li>Uitnodiging bij een passende opdracht</li>
          </ol>
        </div>

        <div className="rounded-2xl border border-border/50 bg-muted/20 p-8 space-y-4 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold">Geen vaste vacatures</h2>
          <p className="text-muted-foreground">
            Wij bieden uitsluitend projectmatige freelance samenwerking. Er zijn geen fulltime functies in loondienst.
          </p>
          <Button size="lg" asChild>
            <a href={mailtoLink}>Stuur je aanmelding</a>
          </Button>
        </div>

        <FaqSection items={werkenBijContent.faqs} />

        <p className="text-center text-muted-foreground">
          Vragen?{" "}
          <Link href="/over-en-contact/" className="text-primary hover:underline">
            Neem contact op
          </Link>
        </p>
      </section>
    </div>
  );
}
