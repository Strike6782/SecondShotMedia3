import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gala Fotografie Studentenvereniging | Evenementen Fotograaf",
  description:
    "Stijlvolle gala fotografie voor studentenverenigingen en zakelijke events. Focus op sfeer, details en elegante portretten.",
};

export default async function GalaPhotographyPage() {
  const images = await getImagesFromDirectory("students");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Gala Fotografie Studentenvereniging"
        subtitle="Elegante beelden van gala's en studentenverenigingen, perfect voor almanak, socials en herinneringen."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Stijlvolle beelden van jullie gala</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                <p>
                  Tijdens een gala draait alles om uitstraling: pakken, jurken, aankleding en een volle dansvloer.
                  Met gala fotografie leg ik deze elementen vast op een manier die zowel chic als spontaan is.
                </p>
                <p>
                  Van entreefoto&apos;s en groepsportretten tot sfeerbeelden op de dansvloer: ik zorg voor een
                  complete reportage waar alle leden nog lang met plezier op terugkijken.
                </p>
                <p>
                  Ik raad aan om 3 uur lang te fotograferen; de eerste anderhalf uur bij een photobooth,
                  de laatste anderhalf uur op de dansvloer. Zo heb je een complete coverage van jullie gala.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 items-center">
                <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                  <img
                    src="/logos/dsk.png"
                    alt="StudieverenigingDSK Utrecht"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                  <img
                    src="/logos/ufostam.png"
                    alt="Studentenscouting U.F.O.-Stam"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                  <img
                    src="/logos/usko.jpg"
                    alt="Utrechts Studenten Koor en Orkest"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                  <img
                    src="/logos/aberg.png"
                    alt="Middelbare school Amersfoortse Berg"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                  <img
                    src="/logos/vugs.webp"
                    alt="Studievereniging Vugs Utrecht"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                  <img
                    src="/logos/aegee.jpg"
                    alt="Studentenvereniging AEGEE Utrecht"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                  <img
                    src="/logos/ssn.png"
                    alt="Studenten Scouting Nederland"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
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

