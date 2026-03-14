import { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { VideoGrid } from "@/components/gallery/VideoGrid";

export const metadata: Metadata = {
  title: "FPV Dronevliegen | Dynamische Dronevideo's",
  description:
    "FPV dronevideo's voor evenementen, bedrijfsvideo's en social media. Dynamische vluchten dóór locaties voor unieke, meeslepende beelden.",
};

export default function FPVDronePage() {
  const videos = [
    {
      title: "FPV tour Dordrecht",
      subtitle: "Voorbeeld van een vloeiende one-take FPV vlucht.",
      id: "PWRd1PbO86A",
      type: "youtube" as const,
    },
    {
      title: "FPV tour Hellevoetsluis",
      subtitle: "FPV vlucht door Hellevoetsluis.",
      id: "s8qOhfOVmJs",
      type: "youtube" as const,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="FPV Dronevliegen"
        subtitle="Spectaculaire, dynamische dronevluchten langs en dóór locaties voor video&apos;s die eruit springen."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Wat is FPV dronevliegen?</h2>
                <div className="text-lg text-muted-foreground space-y-3">
                  <p>
                    Met FPV (First Person View) dronevliegen creëer ik soepele, dynamische shots waarbij de kijker het
                    gevoel krijgt zelf mee te vliegen. In plaats van alleen &quot;van boven&quot; te filmen, vlieg ik
                    langs, tussen en dóór objecten en ruimtes heen.
                  </p>
                  <p>
                    Dit levert unieke perspectieven op voor aftermovies, bedrijfsvideo&apos;s, sportevents, festivals,
                    horecazaken, showrooms en meer. Denk aan een vloeiende vlucht door jouw gebouw om te laten zien hoe 
                    mooi het van binnen is, allemaal in één doorlopend shot.
                  </p>
                  <p>
                    Uiteraard werk ik altijd volgens de geldende wet- en regelgeving, heb ik een europees vliegbewijs,
                    en kijk ik vooraf mee naar wat er veilig en haalbaar is binnen uw locatie en event.
                  </p>
                </div>
              </div>

              <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden border bg-muted/40">
                <Image
                  src="/images/fpv-dronevliegen-ivan.jpg"
                  alt="Ivan van Second Shot Media met drone in de hand"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Voorbeelden FPV dronevideo&apos;s</h2>
              <VideoGrid videos={videos} className="lg:grid-cols-2" />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Wat is er allemaal mogelijk?</h2>
              <div className="text-lg text-muted-foreground space-y-3">
                <p>
                  FPV dronevliegen is in te zetten als losse dienst of als onderdeel van een complete videoproductie.
                  Bijvoorbeeld in combinatie met reguliere camerashots en audio-opnames, zodat u één krachtige video
                  ontvangt waarin alles samenkomt.
                </p>
                <p>Mogelijkheden zijn onder andere:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>One-take rondvlucht door uw evenementlocatie of bedrijfspand</li>
                  <li>Combinatie van FPV shots met aftermovie van uw evenement</li>
                  <li>Social media edits in verticale formaten (Instagram Reels, TikTok, YouTube Shorts)</li>
                  <li>Highlight video&apos;s van specifieke onderdelen van uw event of bedrijf</li>
                </ul>
                <p>
                  Samen bespreken we uw wensen en kijken we hoe FPV dronebeelden het beste ingezet kunnen worden binnen
                  uw project of campagne.
                </p>
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

