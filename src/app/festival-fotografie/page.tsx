import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festival fotografie | Second Shot Media",
  description:
    "Professionele festival fotografie voor podia, publiek en sfeerbeelden. Ideaal voor socials, aftermovies en marketing.",
};

export default async function FestivalPhotographyPage() {
  const images = await getImagesFromDirectory("events");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Festival Fotografie"
        subtitle="Sfeervolle beelden van artiesten, publiek en het totale festivalgevoel."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">De energie van je festival vastgelegd</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                Festivals draaien om beleving: de lichtshow, de artiesten, de menigte en alle kleine momenten
                daartussen. Met festival fotografie leg ik die energie vast in beelden die direct inzetbaar zijn
                voor social media, aftermovies, pers en promotie.
              </p>
              <p>
                Ik beweeg me soepel over het terrein, houd rekening met productie en security, en zorg dat zowel
                bezoekers als crew zich op hun gemak voelen. Zo ontstaat een gevarieerde reportage met sfeer,
                details en krachtige podiumshots.
              </p>
            </div>

            <div className="mt-8">
              <Gallery images={images} />
            </div>
          </div>

          <div>
            <ServiceSidebar className="lg:sticky lg:top-24" />
          </div>
        </div>
      </section>
    </div>
  );
}

