import { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { Gallery } from "@/components/gallery/Gallery";
import { getImagesFromDirectory } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Social Content & Reels voor Leisure Bestemmingen | Second Shot Media",
  description:
    "Structurele social content en reels voor attractieparken en leisure bestemmingen. 1 opnamedag per kwartaal, wij regelen strategie, productie en plaatsing.",
};

const reels = [
  {
    title: "Halloween Vlaardingen",
    description: "Campagnevideo voor Halloween Vlaardingen.",
    url: "https://www.instagram.com/reel/DPDpMeeiIZA/",
    videoSrc: "/reels/halloween-vlaardingen.mp4",
  },
  {
    title: "Familiepark Drievliet",
    description: "Unieke beelden uit een achtbaan in Drievliet.",
    url: "https://www.instagram.com/reel/DVRG-QRil8f/",
    videoSrc: "/reels/drievliet-formule-x.mp4",
  },
  {
    title: "Studentenscouting U.F.O.-Stam",
    description: "Bij de verbouwing van hun nieuwe gebouw",
    url: "https://www.instagram.com/reel/DJZL0QqsGql/",
    videoSrc: "/reels/ufo-gebouw-update.mp4",
  },
];

export default async function SocialContentLeisurePage() {
  const themeParkImages = await getImagesFromDirectory("theme-parks");

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Social content voor leisure bestemmingen"
        subtitle="Consistente reels en shortform video waarmee jouw park het hele jaar zichtbaar blijft."
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Context + referenties */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Voor wie we dit al doen</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                <p>
                  Met Second Shot Media helpen we leisure bestemmingen om structureel zichtbaar te zijn op TikTok en
                  Instagram. Denk aan attractieparken, themabelevingen en seizoensevenementen.
                </p>
                <p>
                  Ik werk onder andere al voor partijen als Avonturenpark Hellendoorn, Familiepark Drievliet, Halloween
                  Vlaardingen, Halloween Rosmalen en Theme Park Science. Daarmee combineren we seizoenscampagnes met
                  doorlopende zichtbaarheid op social media.
                </p>
              </div>

              {/* Logo grid */}
              <div className="mt-6 space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 items-center">
                  <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                    <Image src="/logos/hellendoorn.png" alt="Avonturenpark Hellendoorn" width={120} height={120} />
                  </div>
                  <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                    <Image src="/logos/drievliet.png" alt="Familiepark Drievliet" width={120} height={120} />
                  </div>
                  <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                    <Image src="/logos/vlaardingen.webp" alt="Halloween Vlaardingen" width={120} height={120} />
                  </div>
                  <div className="mx-auto flex h-[132px] w-[132px] items-center justify-center rounded-xl border bg-muted/60 p-1">
                    <Image src="/logos/tps.jpg" alt="Theme Park Science" width={120} height={120} />
                  </div>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Klein, gespecialiseerd team</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                <p>
                  Social content voor leisure doe ik niet alleen, maar samen met een klein, gespecialiseerd team. Per
                  opdracht kijken we welke mensen nodig zijn: van cameraman en editor tot social media specialist.
                </p>
                <p>
                  Doordat het team bewust klein en overzichtelijk blijft, schakelen we snel, zijn de lijnen kort en
                  weten we precies wat er speelt in jouw park of beleving.
                </p>
              </div>
            </div>

            {/* Werkwijze */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Onze werkwijze: 1 opnamedag per kwartaal</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                <p>
                  Het uitgangspunt is simpel: <strong>één intensieve opnamedag per drie maanden</strong>, waarmee we
                  voldoende content maken voor een hele periode.
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Voorbereiding & concept</strong> – samen bepalen we thema&apos;s, formats en boodschap.
                    Wij werken dit uit in een draaiboek met shots en scenes.
                  </li>
                  <li>
                    <strong>Jullie verzorgen gezichten & mascottes</strong> – de leisure bestemming regelt
                    presentatoren, acteurs, medewerkers en eventuele mascottes die in beeld komen.
                  </li>
                  <li>
                    <strong>Opnamedag op locatie</strong> – wij nemen veel video's tegelijk in één dag op, efficiënt
                    ingepland zodat de operatie zo min mogelijk wordt belast.
                  </li>
                  <li>
                    <strong>Montage & optimalisatie</strong> – wij monteren de reels, voegen titels, muziek en hooks
                    toe en optimaliseren voor TikTok, Reels en eventueel YouTube Shorts.
                  </li>
                  <li>
                    <strong>Planning & plaatsing</strong> – in afstemming met jullie marketingteam plannen en posten wij
                    de content, zodat er een consistente stroom aan zichtbaarheid ontstaat.
                  </li>
                </ol>
              </div>
            </div>

            {/* Reels showcase */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Voorbeelden</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {reels.map((reel) => (
                  <div
                    key={reel.title}
                    className="group rounded-xl border bg-card hover:bg-accent/50 transition-colors p-4 flex flex-col gap-3"
                  >
                    <div className="aspect-[9/16] w-full overflow-hidden rounded-lg bg-muted">
                      <video
                        controls
                        playsInline
                        className="h-full w-full object-cover"
                        src={reel.videoSrc}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {reel.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{reel.description}</p>
                      <a
                        href={reel.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-flex text-xs text-primary hover:underline"
                      >
                        Bekijk op Instagram
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Andere content voor attractieparken */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Meer dan alleen social content</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                <p>
                  Naast shortform video en reels maken we ook andere content voor attractieparken en themabelevingen:
                  fotografie voor campagnes, sfeerbeelden op drukke dagen en langere video&apos;s.
                </p>
                <p>
                  Zo ontstaat een complete contentmix: van snelle social posts tot verdieping in langere formats.
                </p>
              </div>
            </div>

            {/* Theme Park Science video + galerij (onderaan) */}
            <div className="space-y-6 pt-8 border-t mt-8">
              <h2 className="text-2xl font-bold">Overig werk voor attractieparken en themabelevingen</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Theme Park Science - Opening nieuw pretpark
                </h3>
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-muted relative group border border-border">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/2PJ1USshijg?si=kRYv-yeUZ5HrOyhZ"
                    title="Theme Park Science - Opening nieuw pretpark"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Theme Park Science Trailer
                  <span className="text-sm font-normal text-muted-foreground">
                    {" "}
                    (edit door Second Shot Media, beelden extern)
                  </span>
                </h3>
                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-muted relative group border border-border">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/CJl2UsZ-_Tc?si=Ymmg5aLep7A_eC0d"
                    title="Theme Park Science Trailer"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Foto-impressie attractieparken</h3>
                <Gallery images={themeParkImages} />
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

