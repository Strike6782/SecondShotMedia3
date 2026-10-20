import Link from "next/link";
import { Hero } from "@/components/layout/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { getCities, getCityPath } from "@/lib/cities";
import { getCityContent } from "@/lib/cities-content";
import { buildPageMetadata } from "@/lib/metadata-helpers";

export const metadata = buildPageMetadata({
  title: "Werkgebied",
  description:
    "Second Shot Media is gevestigd in Utrecht en legt events vast door heel Nederland: Amsterdam, Rotterdam, Den Haag en verder.",
  path: "/werkgebied/",
});

export default function WerkgebiedPage() {
  const cities = getCities();
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Werkgebied", href: "/werkgebied/" },
  ];

  return (
    <div className="flex flex-col">
      <PageStructuredData breadcrumbs={breadcrumbs} />

      <Hero
        title="Gevestigd in Utrecht, actief in heel Nederland"
        subtitle="Vanuit het midden van het land zijn wij snel op elke eventlocatie. Voor internationale events maken wij vooraf afspraken over reizen en verblijf."
      />

      <section className="container max-w-screen-2xl py-20 md:py-28">
        <ul className="grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => {
            const content = getCityContent(city.slug);
            return (
              <li key={city.slug} className="border-b border-border">
                <Link href={getCityPath(city.slug)} className="group block py-6 pr-6">
                  <h2 className="heading text-2xl group-hover:underline group-hover:decoration-primary group-hover:underline-offset-8">
                    {city.name}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {content?.highlight ?? `Eventfotografie en -video in ${city.name}`}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 text-lg text-muted-foreground">
          Staat uw stad er niet bij? Geen probleem, wij werken door heel Nederland.
        </p>
      </section>

      <CtaBand />
    </div>
  );
}
