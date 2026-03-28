import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Evenementen Fotograaf Midden-Nederland",
  description: "Professionele evenementenfotografie voor festivals, bedrijfsfeesten en evenementen in Midden-Nederland. Ivan Balkenende legt de sfeer en energie vast.",
};

export default async function EventPhotographyPage() {
  const directory = "events";
  const images = await getImagesFromDirectory(directory);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Evenementen Fotograaf"
        subtitle="Leg de energie, sfeer en hoogtepunten van uw evenement vast met professionele fotografie. Actief in heel Midden-Nederland."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">De sfeer van jouw event vastgelegd</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                <p>
                  Als fotograaf voor evenementen specialiseer ik me in het vastleggen van de unieke vibe van elk evenement.
                  Of het nu gaat om een grootschalig festival, een intiem bedrijfsfeest, of een bruisende clubavond;
                  ik zorg ervoor dat de beelden spreken.
                </p>
                <p>
                  Mijn stijl kenmerkt zich door dynamische beelden waarin actie en emotie centraal staan.
                  Geen statische plaatjes, maar foto&apos;s die je het gevoel geven dat je er (weer) bij bent.
                </p>
                <h3 className="text-xl font-semibold text-foreground mt-6">Waarom kiezen voor Second Shot Media?</h3>
                <ul className="list-disc pl-5 space-y-2 mt-4">
                  <li>Ervaring met grote en kleine evenementen.</li>
                  <li>Snelle levering van de foto&apos;s (binnen 48 uur).</li>
                  <li>Focus op sfeer, interactie en branding.</li>
                  <li>Flexibel en onzichtbaar aanwezig op de vloer.</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <Link
                href="/festival-fotografie/"
                className="group rounded-2xl border bg-background p-6 transition hover:border-primary/60 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">Festival fotografie</h3>
                <p className="text-muted-foreground mb-3">
                  Energieke festivalreportages met focus op publiek, artiesten en sfeer.
                </p>
                <span className="text-sm font-medium text-primary">Bekijk festival portfolio →</span>
              </Link>

              <Link
                href="/clubfotografie/"
                className="group rounded-2xl border bg-background p-6 transition hover:border-primary/60 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">Club & nightlife fotografie</h3>
                <p className="text-muted-foreground mb-3">
                  Donkere clubs, veel licht en beweging – perfect vastgelegd voor socials.
                </p>
                <span className="text-sm font-medium text-primary">Bekijk clubfoto&apos;s →</span>
              </Link>

              <Link
                href="/gala-fotografie/"
                className="group rounded-2xl border bg-background p-6 transition hover:border-primary/60 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">Gala fotografie</h3>
                <p className="text-muted-foreground mb-3">
                  Chique gala&apos;s en studentenfeesten met oog voor details en sfeer.
                </p>
                <span className="text-sm font-medium text-primary">Bekijk gala portfolio →</span>
              </Link>

              <Link
                href="/zakelijke-evenementen/"
                className="group rounded-2xl border bg-background p-6 transition hover:border-primary/60 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">Zakelijke evenementen</h3>
                <p className="text-muted-foreground mb-3">
                  Congressen, borrels en bedrijfsfeesten professioneel vastgelegd voor interne en externe communicatie.
                </p>
                <span className="text-sm font-medium text-primary">Bekijk zakelijke events →</span>
              </Link>

            </div>

            <div className="mt-4">
              <h2 className="text-3xl font-bold tracking-tight mb-8">Portfolio Highlights</h2>
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
