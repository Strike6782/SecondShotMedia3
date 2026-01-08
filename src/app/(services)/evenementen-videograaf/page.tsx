import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { VideoGrid } from "@/components/gallery/VideoGrid";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evenementen Videograaf | Aftermovies & Sfeervideo's",
  description: "Professionele aftermovies en evenementenregistratie in Utrecht en Amersfoort. Laat uw festival, feest of congres vastleggen door Second Shot Media.",
};

export default async function EventVideographyPage() {
  const images = await getImagesFromDirectory("video-production");

  // Example videos - Replace generic IDs with real ones when available
  // You need to find actual YouTube video IDs for your channel
  const videos = [
    { title: "World Scout Jamboree - Zuid Korea", subtitle: "", id: "5esMJo_vDig", type: "youtube" as const },
    { title: "Halloween Vlaardingen", subtitle: "", id: "YEwFVZvs5fg", type: "youtube" as const },
    { title: "Gala Studentenvereniging", subtitle: "", id: "Z5kD0EZ3_-s", type: "youtube" as const },
    { title: "Landelijke Scouting Zeilwedstrijden", subtitle: "", id: "85ZkRtoERnM", type: "youtube" as const },
    { title: "World Scout Moot", subtitle: "", id: "39ALWRfNXAk", type: "youtube" as const },
    { title: "Halloween Rosmalen", subtitle: "", id: "TpxAfFtekbw", type: "youtube" as const },
    { title: "Introductievideo Studentenvereniging", subtitle: "", id: "Vc3ixtqtDFs", type: "youtube" as const },
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
              <h2 className="text-3xl font-bold tracking-tight">Portfolio Highlights</h2>
              <VideoGrid videos={videos} className="lg:grid-cols-2" />

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Behind the Scenes</h3>
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
