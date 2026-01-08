import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zakelijke Evenementen Fotograaf & Videograaf",
  description: "Professionele vastlegging van congressen, beurzen en bedrijfsevenementen. Kwaliteit voor uw zakelijke communicatie.",
};

export default async function CorporatePage() {
  const images = await getImagesFromDirectory("corporate");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Zakelijke Evenementen"
        subtitle="Professionele fotografie en videografie voor congressen, beurzen en bedrijfsfeesten."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Uw business event in beeld</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                Voor zakelijke evenementen is een representatieve uitstraling cruciaal.
                Mijn beelden zijn geschikt voor persberichten, interne communicatie en marketingmateriaal.
                Discreet, professioneel en kwalitatief hoogwaardig.
              </p>
            </div>

            <div className="mt-8">
              <Gallery images={images} />
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <ServiceSidebar className="lg:sticky lg:top-24" />
          </div>
        </div>
      </section>
    </div>
  );
}
