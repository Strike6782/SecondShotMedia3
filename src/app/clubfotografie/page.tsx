import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Club & Nightlife Fotograaf",
  description: "De beste party pics en sfeerbeelden voor uw clubnacht of festival in Midden-Nederland. Energie, licht en actie perfect vastgelegd.",
};

export default async function ClubPage() {
  const images = await getImagesFromDirectory("club");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Club & Nightlife"
        subtitle="Leg de energie van de nacht vast. Scherpe, levendige beelden, zelfs in uitdagende lichtomstandigheden."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                Het nachtleven staat nooit stil. Van intieme clubavonden tot massale festivals: ik zorg voor beelden die de gezelligheid van het moment vangen.
                Mijn focus ligt op de leukste emoties pakken en het vastleggen van de pure energie van de nacht.
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
