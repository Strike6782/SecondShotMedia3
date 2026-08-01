import Link from "next/link";
import { Hero } from "@/components/layout/Hero";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { getCities, getCityPath } from "@/lib/cities";
import { getCityContent } from "@/lib/cities-content";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { AGENCY_DEFINITION } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Werkgebied",
  description:
    "Second Shot Media is een content agency in Utrecht en actief voor fotografie en videografie in Amsterdam, Rotterdam, Den Haag en door heel Nederland.",
  path: "/werkgebied/",
});

export default function WerkgebiedPage() {
  const cities = getCities();
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Werkgebied", href: "/werkgebied/" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageStructuredData breadcrumbs={breadcrumbs} />

      <Hero
        title="Ons werkgebied"
        subtitle={AGENCY_DEFINITION}
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
        showCta={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl space-y-12">
        <div className="prose prose-lg dark:prose-invert text-muted-foreground max-w-3xl space-y-4">
          <p>
            Second Shot Media werkt voor leisure, events, gala&apos;s en zakelijke evenementen door heel Nederland.
            Ons team is gevestigd in Utrecht; wij komen naar uw locatie waar in Nederland dan ook.
          </p>
          <p>
            Onderstaande steden zijn onderdeel van ons actieve werkgebied. Per stad vindt u meer informatie over
            onze fotografie en videografie in die regio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => {
            const content = getCityContent(city.slug);
            return (
              <Link
                key={city.slug}
                href={getCityPath(city.slug)}
                className="rounded-xl border border-border/50 bg-muted/20 p-5 hover:border-primary/50 transition-colors space-y-2"
              >
                <h2 className="font-bold text-lg">{city.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {content?.highlight ?? `Fotografie en videografie in ${city.name}`}
                </p>
              </Link>
            );
          })}
        </div>

        <p className="text-muted-foreground text-center">
          Uw stad staat er niet bij?{" "}
          <Link href="/over-en-contact/#contact" className="text-primary hover:underline">
            Neem contact op
          </Link>
          , wij werken door heel Nederland.
        </p>
      </section>
    </div>
  );
}
