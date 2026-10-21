import { CityLandingPage } from "@/components/seo/CityLandingPage";
import { getCities, getCityPath, getCityRoutePrefix } from "@/lib/cities";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const prefix = `${getCityRoutePrefix()}-`;

export async function generateStaticParams() {
  return getCities().map((city) => ({
    slug: `${getCityRoutePrefix()}-${city.slug}`,
  }));
}

function parseCitySlug(fullSlug: string): string | null {
  if (!fullSlug.startsWith(prefix)) return null;
  return fullSlug.slice(prefix.length);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const citySlug = parseCitySlug(slug);
  const cities = getCities();
  const city = cities.find((c) => c.slug === citySlug);
  const cityName = city?.name ?? citySlug ?? slug;

  return buildPageMetadata({
    title: `Eventfotograaf en videograaf in ${cityName}`,
    description: `Foto en video voor zakelijke events, bedrijfsfeesten, festivals en pretparken in ${cityName}. Eerste selectie dezelfde dag, album binnen 24 uur. Gevestigd in Utrecht.`,
    path: getCityPath(citySlug ?? slug),
  });
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const citySlug = parseCitySlug(slug);
  if (!citySlug) notFound();

  const city = getCities().find((c) => c.slug === citySlug);
  if (!city) notFound();

  return <CityLandingPage cityName={city.name} citySlug={city.slug} />;
}
