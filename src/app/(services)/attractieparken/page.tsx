import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attractiepark & Kermis Fotografie | Second Shot Media",
  description: "Sfeervolle fotografie van attractieparken, kermissen en evenementen. Kleurrijk, dynamisch en vol energie.",
};

export default async function ThemeParksPage() {
  const images = await getImagesFromDirectory("theme-parks");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Attractieparken"
        subtitle="De magie van pretparken en kermissen vastgelegd."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold">Emotie & Actie</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-6">
                <p>
                  Fotografie in attractieparken en kermissen vraagt om een speciaal oog. De mix van snelheid, details, en de emoties van bezoekers maakt het een unieke discipline waar niet veel fotografen in actief zijn.
                  Ik leg de sfeer vast voor promotionele doeleinden, persberichten of social media.
                </p>
                <p>
                  Daarnaast ben ik als videograaf ook actief voor het YouTube kanaal Theme Park Science, een groot kanaal wat wetenschappelijke thema&apos;s uitlegt aan een breed publiek aan de hand van pretparkattracties.
                  Afgelopen jaar zijn we hiermee in de top 25 geëindigd van de Televizier Awards beste online serie.
                </p>
              </div>
            </div>

            <Gallery images={images} />

            {/* Video Placeholder */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Theme Park Science - Opening nieuw pretpark </h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-muted relative group border border-border">
                {
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/2PJ1USshijg?si=kRYv-yeUZ5HrOyhZ"
                    title="Attractiepark Video"
                    allowFullScreen
                  />
                }
              </div>
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
