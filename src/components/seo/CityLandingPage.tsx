import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/layout/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { EventDay } from "@/components/sections/EventDay";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { branches } from "@/lib/branches";
import { getCityContent } from "@/lib/cities-content";
import { getCityPath } from "@/lib/cities";
import { eventDay, getCityDefinition, getCityFaqs } from "@/lib/page-content";

type CityLandingPageProps = {
  cityName: string;
  citySlug: string;
};

// Shared template for city SEO landing pages with local proof content.
export async function CityLandingPage({ cityName, citySlug }: CityLandingPageProps) {
  const faqs = getCityFaqs(cityName);
  const localContent = getCityContent(citySlug);
  const path = getCityPath(citySlug);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Werkgebied", href: "/werkgebied/" },
    { name: cityName, href: path },
  ];

  return (
    <div className="flex flex-col">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={faqs} />

      <Hero title={`Eventfotograaf en videograaf in ${cityName}`} subtitle={getCityDefinition(cityName)} />

      <section className="container max-w-screen-2xl py-20 md:py-28">
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          {localContent?.highlight && <p className="heading text-3xl text-foreground">{localContent.highlight}</p>}
          {localContent?.localProof && <p>{localContent.localProof}</p>}
          <p>
            U krijgt één aanspreekpunt, een eerste selectie dezelfde dag en het volledige album binnen 24 uur. Ook
            in {cityName}.
          </p>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {branches.map((branch) => (
            <Link key={branch.slug} href={branch.href} prefetch={false} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <Image
                  src={branch.heroImage}
                  alt={branch.heroImageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-opacity group-hover:opacity-85"
                />
              </div>
              <h2 className="heading mt-4 text-2xl group-hover:underline group-hover:decoration-primary group-hover:underline-offset-8">
                {branch.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container max-w-screen-2xl">
          <h2 className="display mb-14 text-5xl sm:text-6xl">Zo verloopt de dag</h2>
          <EventDay steps={eventDay} />
        </div>
      </section>

      <div className="container max-w-screen-2xl py-20 md:py-28 space-y-10">
        <FaqSection items={faqs} />
        <p className="text-muted-foreground">
          <Link href="/werkgebied/" className="underline underline-offset-4">
            Alle steden in ons werkgebied
          </Link>
        </p>
      </div>

      <CtaBand title={`Uw event in ${cityName}?`} />
    </div>
  );
}
