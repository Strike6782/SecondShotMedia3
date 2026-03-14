import Link from "next/link";
import { Metadata } from "next";
import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { VideoGrid } from "@/components/gallery/VideoGrid";

export const metadata: Metadata = {
  title: "Videografie | Second Shot Media",
  description:
    "Professionele videografie voor evenementen, bedrijven en social media. Aftermovies, FPV dronebeelden en maatwerk videoproducties vanuit Midden-Nederland.",
};

export default async function VideographyPage() {
  const images = await getImagesFromDirectory("video-production");

  const videos = [
    { title: "World Scout Jamboree - Zuid Korea", subtitle: "Aftermovie", id: "5esMJo_vDig", type: "youtube" as const },
    { title: "Halloween Vlaardingen", subtitle: "Evenementen recap", id: "YEwFVZvs5fg", type: "youtube" as const },
    { title: "DJ JSPHN op ADE Amsterdam", subtitle: "Artiest & event video", id: "i6PQazSqF7Y", type: "youtube" as const },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Videografie"
        subtitle="Van krachtige aftermovies tot dynamische FPV dronebeelden – één aanspreekpunt voor al uw videoproducties."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Videografie die blijft hangen</h2>
              <div className="text-lg text-muted-foreground space-y-3">
                <p>
                  Video is de meest krachtige manier om uw verhaal te vertellen. Of het nu gaat om een bruisend festival,
                  een bedrijfsevent, een aftermovie voor uw vereniging of content voor social media: goede videografie
                  zorgt dat de beleving blijft hangen.
                </p>
                <p>
                  Ik help u met het volledig traject: van concept en planning tot opname op locatie en montage. Met
                  oog voor sfeer, ritme en storytelling maak ik video&apos;s die niet alleen mooi zijn, maar ook echt
                  werken voor uw doelgroep.
                </p>
                <p>
                  Binnen videografie bied ik verschillende diensten aan, zoals{" "}
                  <Link href="/videografie/evenementen" className="text-primary underline-offset-2 hover:underline">
                    evenementen videografie
                  </Link>
                  ,{" "}
                  <Link
                    href="/videografie/fpv-dronevliegen"
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    FPV dronevliegen
                  </Link>{" "}
                  en{" "}
                  <Link
                    href="/social-content-leisure"
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    social content voor leisure
                  </Link>
                  . Samen kijken we welke vorm het beste past bij uw evenement, merk of campagne.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <Link
                href="/videografie/evenementen"
                className="group rounded-2xl border bg-background p-6 transition hover:border-primary/60 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">Evenementen videografie</h3>
                <p className="text-muted-foreground mb-3">
                  Aftermovies, recaps en sfeervideo&apos;s van festivals, bedrijfsfeesten en congressen.
                </p>
                <span className="text-sm font-medium text-primary">Ontdek meer →</span>
              </Link>

              <Link
                href="/videografie/fpv-dronevliegen"
                className="group rounded-2xl border bg-background p-6 transition hover:border-primary/60 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">FPV dronevliegen</h3>
                <p className="text-muted-foreground mb-3">
                  Dynamische dronevluchten langs en dóór locaties voor unieke perspectieven.
                </p>
                <span className="text-sm font-medium text-primary">Bekijk mogelijkheden →</span>
              </Link>

              <Link
                href="/social-content-leisure"
                className="group rounded-2xl border bg-background p-6 transition hover:border-primary/60 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">Social content voor leisure</h3>
                <p className="text-muted-foreground mb-3">
                  Structurele foto- en videocontent voor attractieparken, leisure en entertainmentlocaties.
                </p>
                <span className="text-sm font-medium text-primary">Lees meer →</span>
              </Link>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight">Voorbeelden van videowerk</h2>
              <VideoGrid videos={videos} className="lg:grid-cols-3" />

              <div className="mt-12 space-y-4">
                <h3 className="text-2xl font-bold">Behind the Scenes</h3>
                <Gallery images={images} />
              </div>
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

