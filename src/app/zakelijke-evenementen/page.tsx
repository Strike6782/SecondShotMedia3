import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zakelijke evenementen | Fotograaf en videograaf",
  description: "Professionele vastlegging van congressen, beurzen en bedrijfsevenementen. Kwaliteit voor uw zakelijke communicatie.",
};

export default async function CorporatePage() {
  const images = await getImagesFromDirectory("corporate");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Zakelijke Evenementen"
        subtitle="Professionele fotografie en videografie voor congressen, beurzen en bedrijfsfeesten."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Uw business event in beeld</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                Een zakelijk evenement is vaak méér dan een momentopname: het is een
                visitekaartje voor uw merk, uw mensen en uw boodschap. Of het nu gaat om
                een congres, beurs, netwerkborrel of bedrijfsviering, u wilt beelden die
                de energie in de zaal vangen én de professionaliteit uitstralen die bij
                uw organisatie past.
              </p>
              <p>
                Ik werk discreet tussen gasten en sprekers door, anticipeer op key
                moments en lever een consistente serie beelden die u direct kunt
                inzetten voor persberichten, interne communicatie, social media en
                marketingmateriaal. Snel schakelen, heldere afspraken en kwaliteit
                staan daarbij centraal.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">
                Wat u kunt verwachten
              </h3>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Reportagefotografie met oog voor sfeer, details en interactie</li>
                <li>
                  Sterke content voor LinkedIn, website, aftermovie of eventrecap
                </li>
                <li>
                  Efficiënte selectie en nabewerking in een herkenbare, professionele
                  stijl
                </li>
                <li>Levering van beelden in formaten passend bij uw kanalen</li>
              </ul>
            </div>

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
