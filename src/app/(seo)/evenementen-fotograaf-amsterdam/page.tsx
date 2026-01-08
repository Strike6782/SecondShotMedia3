import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evenementen Fotograaf Amsterdam | Second Shot Media",
  description: "Op zoek naar een evenementen fotograaf in Amsterdam? Professionele fotografie voor congressen, bedrijfsfeesten en festivals in de hoofdstad.",
};

export default async function AmsterdamPage() {
  const images = await getImagesFromDirectory("events");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Event Fotograaf Amsterdam"
        subtitle="Professionele evenementenfotografie in Amsterdam. Voor zakelijke events, beurzen (RAI) en congressen."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold">Uw fotograaf in Amsterdam</h2>
              <p className="text-lg text-muted-foreground">
                Second Shot Media is regelmatig actief in Amsterdam voor diverse opdrachtgevers.
                Van grote beurzen in de RAI tot intieme netwerkborrels aan de gracht.
                Geen reiskosten verrassingen, gewoon scherpe tarieven en topkwaliteit.
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
