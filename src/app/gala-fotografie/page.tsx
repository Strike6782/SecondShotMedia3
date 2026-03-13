import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gala Fotografie | Evenementen Fotograaf",
  description:
    "Stijlvolle gala fotografie voor studentenverenigingen en zakelijke events. Focus op sfeer, details en elegante portretten.",
};

export default async function GalaPhotographyPage() {
  const images = await getImagesFromDirectory("students");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Gala Fotografie"
        subtitle="Elegante beelden van gala's en formele events, perfect voor almanak, socials en herinneringen."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Stijlvolle beelden van uw gala</h2>
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                Tijdens een gala draait alles om uitstraling: pakken, jurken, aankleding en een volle dansvloer.
                Met gala fotografie leg ik deze elementen vast op een manier die zowel chic als spontaan is.
              </p>
              <p>
                Van entreefoto&apos;s en groepsportretten tot sfeerbeelden op de dansvloer: ik zorg voor een
                complete reportage waar uw leden of collega&apos;s nog lang met plezier op terugkijken.
              </p>
            </div>

            <div className="mt-8">
              <Gallery images={images} />
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

