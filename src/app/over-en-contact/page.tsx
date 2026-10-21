import Link from "next/link";
import { Hero } from "@/components/layout/Hero";
import { TeamSection } from "@/components/sections/TeamSection";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { overContactContent } from "@/lib/page-content";
import { CONTACT_EMAIL, CONTACT_INSTAGRAM, CONTACT_LINKEDIN, KVK, OFFERTE_MAILTO } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Over ons en contact",
  description:
    "Maak kennis met Ivan Balkenende en het team van Second Shot Media. Gevestigd in Utrecht, actief door heel Nederland. Vraag een voorstel aan voor uw event.",
  path: "/over-en-contact/",
  image: "/og/over-ons.jpg",
});

export default function OverEnContactPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Over ons en contact", href: "/over-en-contact/" },
  ];

  return (
    <div className="flex flex-col">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={overContactContent.faqs} />

      <Hero title="Ivan Balkenende en team" subtitle={overContactContent.definition} showCta={false} />

      <TeamSection showMoreLink={false} />

      <section className="bg-muted py-20 md:py-28">
        <div className="container max-w-screen-2xl grid gap-10 md:grid-cols-12">
          <h2 className="display text-5xl sm:text-6xl md:col-span-5">Waarom Second Shot</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            <p>
              Op een event gebeurt alles één keer. De speech, de prijsuitreiking, de volle zaal: er is geen tweede
              take. Wij zorgen dat die momenten toch een tweede leven krijgen, in uw verslag, op LinkedIn en in de
              aankondiging van de volgende editie.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="container max-w-screen-2xl scroll-mt-16 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="space-y-6 md:col-span-7">
            <h2 className="display text-5xl sm:text-6xl">Contact</h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Stuur datum, locatie, tijden en waar u de beelden voor wilt gebruiken. Ivan neemt persoonlijk contact met u op.
            </p>
            <a
              href={OFFERTE_MAILTO}
              className="heading inline-block break-all text-3xl underline decoration-primary decoration-2 underline-offset-8 hover:decoration-4 sm:text-4xl"
            >
              {CONTACT_EMAIL}
            </a>
            <div>
              <Button size="lg" asChild>
                <a href={OFFERTE_MAILTO}>Voorstel aanvragen</a>
              </Button>
            </div>
          </div>
          <dl className="space-y-5 border-t border-border pt-6 md:col-span-4 md:col-start-9 md:border-t-0 md:border-l md:pl-8 md:pt-0">
            <div>
              <dt className="text-sm text-muted-foreground">Gevestigd in</dt>
              <dd className="text-lg">Utrecht</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Werkgebied</dt>
              <dd className="text-lg">
                Heel Nederland, en op aanvraag internationaal.{" "}
                <Link href="/werkgebied/" className="underline underline-offset-4">
                  Bekijk werkgebied
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Online</dt>
              <dd className="text-lg">
                <a href={CONTACT_LINKEDIN} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  LinkedIn
                </a>
                {" en "}
                <a href={CONTACT_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Instagram
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">KvK</dt>
              <dd className="text-lg">{KVK}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Fotograaf of videograaf?</dt>
              <dd className="text-lg">
                <Link href="/werken-bij/" className="underline underline-offset-4">
                  Werken bij Second Shot Media
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="container max-w-screen-2xl pb-20 md:pb-28">
        <FaqSection items={overContactContent.faqs} />
      </div>
    </div>
  );
}
