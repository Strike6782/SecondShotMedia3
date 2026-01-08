import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evenementen Fotograaf Amersfoort | Second Shot Media",
  description: "Professionele evenementenfotografie in Amersfoort. Ivan Balkenende, uw lokale fotograaf voor bedrijfsfeesten en events.",
};

export default async function AmersfoortPage() {
  const images = await getImagesFromDirectory("events");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Event Fotograaf Amersfoort"
        subtitle="De fotograaf voor uw evenement in de Keistad. Lokaal, betrokken en professioneel."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold">Thuiswedstrijd in Amersfoort</h2>
              <p className="text-lg text-muted-foreground">
                Als Amersfoorter ken ik de stad op mijn duimpje. Van De Rijtuigenloods tot Flint en de lokale horeca.
                Korte reistijd, snelle schakels.
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
