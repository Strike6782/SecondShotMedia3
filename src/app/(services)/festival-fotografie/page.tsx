import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festival Fotograaf | Second Shot Media",
  description: "Professionele festivalfotografie. Sfeer, mainstage en publiek haarscherp vastgelegd.",
};

export default async function FestivalPage() {
  const images = await getImagesFromDirectory("festival");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Festival Fotografie"
        subtitle="De ultieme festivalervaring vastgelegd. Van intieme stages tot massale mainstages."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Crowd, Artists & Vibe</h2>
            <p className="text-muted-foreground text-lg">
              Festivals draaien om energie. Ik zorg dat die energie van het scherm spat.
              Perfect voor aftermovies, social media en promotie voor de volgende editie.
              Ik ben gewend om te werken in dynamische omgevingen, backstage en in de crowd.
            </p>

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
