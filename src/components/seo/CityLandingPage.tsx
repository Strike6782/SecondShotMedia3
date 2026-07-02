import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { DefinitionBlock } from "@/components/seo/DefinitionBlock";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { branches } from "@/lib/branches";
import { getImagesFromDirectory } from "@/lib/gallery";
import { getCityDefinition, getCityFaqs } from "@/lib/page-content";
import { getCityPath } from "@/lib/cities";

type CityLandingPageProps = {
  cityName: string;
  citySlug: string;
};

const isHorizontal = (img: { width: number; height: number }) => img.width / img.height > 1.2;

// Shared template for city SEO landing pages.
export async function CityLandingPage({ cityName, citySlug }: CityLandingPageProps) {
  const definition = getCityDefinition(cityName);
  const faqs = getCityFaqs(cityName);
  const path = getCityPath(citySlug);

  const eventImages = (await getImagesFromDirectory("events")).filter(isHorizontal).slice(0, 4);
  const corporateImages = (await getImagesFromDirectory("corporate")).filter(isHorizontal).slice(0, 4);
  const themeParkImages = (await getImagesFromDirectory("theme-parks")).filter(isHorizontal).slice(0, 4);
  const studentImages = (await getImagesFromDirectory("students")).filter(isHorizontal).slice(0, 4);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: `Fotografie en videografie in ${cityName}`, href: path },
  ];

  const gallerySections = [
    { title: `Evenementen in ${cityName}`, images: eventImages, href: "/evenementen/" },
    { title: "Zakelijke evenementen", images: corporateImages, href: "/zakelijke-evenementen/" },
    { title: "Leisure", images: themeParkImages, href: "/leisure/" },
    { title: "Gala's en feesten", images: studentImages, href: "/gala-en-feest/" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={faqs} />

      <Hero
        title={`Fotografie en videografie in ${cityName}`}
        subtitle={`Second Shot Media is gevestigd in Utrecht en actief in ${cityName} en door heel Nederland.`}
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <DefinitionBlock text={definition} />

      <section className="container py-12 px-4 max-w-screen-2xl space-y-16">
        <div className="prose prose-lg dark:prose-invert text-muted-foreground max-w-3xl">
          <p>
            Op zoek naar fotografie en videografie in {cityName}? Second Shot Media levert beide onder één dak voor
            leisure en events.
          </p>
        </div>

        {gallerySections.map((section) =>
          section.images.length > 0 ? (
            <div key={section.href}>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <Button variant="ghost" asChild>
                  <Link href={section.href}>Bekijk meer &rarr;</Link>
                </Button>
              </div>
              <Gallery
                images={section.images}
                layout="grid"
                className="md:grid-cols-4 lg:grid-cols-4"
                linkTarget={section.href}
              />
            </div>
          ) : null
        )}

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Onze specialisaties</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {branches.map((branch) => (
              <Link
                key={branch.slug}
                href={branch.href}
                className="rounded-xl border p-4 hover:border-primary/50 transition-colors"
              >
                <span className="font-semibold">{branch.title}</span>
                <span className="block text-sm text-muted-foreground mt-1">Fotografie en videografie</span>
              </Link>
            ))}
          </div>
        </div>

        <FaqSection items={faqs} />
      </section>
    </div>
  );
}
