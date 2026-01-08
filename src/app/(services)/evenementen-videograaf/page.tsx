import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evenementen Videograaf | Aftermovies & Sfeervideo's",
  description: "Professionele aftermovies en evenementenregistratie in Utrecht en Amersfoort. Laat uw festival, feest of congres vastleggen door Second Shot Media.",
};

export default async function EventVideographyPage() {
  const images = await getImagesFromDirectory("video-production");

  // Placeholder clips
  const videos = [
    { title: "Showreel 2025", id: "PLACEHOLDER_1" },
    { title: "Festival Aftermovie X", id: "PLACEHOLDER_2" },
    { title: "Club Event Y", id: "PLACEHOLDER_3" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Evenementen Videograaf"
        subtitle="Aftermovies die de sfeer perfect vangen. Van festivals tot zakelijke congressen."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Aftermovies & Videografie</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                <p>
                  Video brengt uw evenement echt tot leven. Met een aftermovie herleven uw bezoekers de hoogtepunten en overtuigt u twijfelaars voor de volgende editie.
                  Ik maak dynamische edits, ritmisch gemonteerd op de muziek, die de kijker direct pakken.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Portfolio Videos</h2>
              <div className="grid grid-cols-1 gap-8">
                {videos.map((video, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-xl font-semibold">{video.title}</h3>
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-black relative group">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-zinc-900 group-hover:bg-zinc-800 transition-colors cursor-pointer">
                        [YouTube Embed: {video.title}]
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Behind the Scenes & Stills</h3>
                <Gallery images={images} />
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
