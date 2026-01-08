import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evenementen Fotograaf Utrecht | Second Shot Media",
  description: "Dé evenementen fotograaf van Utrecht. Actief in Jaarbeurs, TivoliVredenburg en lokale events.",
};

export default async function UtrechtPage() {
  const images = await getImagesFromDirectory("events");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Event Fotograaf Utrecht"
        subtitle="Gevestigd in de regio, thuis in Utrecht. Korte lijntjes, snelle levering."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold">Lokaal expert in Utrecht</h2>
              <p className="text-lg text-muted-foreground">
                Als Utrechts mediabedrijf ken ik de locaties en de stad.
                Of u nu een congres organiseert in de Jaarbeurs of een feest in de binnenstad.
              </p>
            </div>

            <Gallery images={images} />
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
