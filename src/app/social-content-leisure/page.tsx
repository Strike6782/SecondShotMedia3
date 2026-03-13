import { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";

export const metadata: Metadata = {
  title: "Social Content & Reels voor Leisure Bestemmingen | Second Shot Media",
  description:
    "Structurele social content en reels voor attractieparken en leisure bestemmingen. 1 opnamedag per kwartaal, wij regelen strategie, productie en plaatsing.",
};

const reels = [
  {
    title: "Halloween-beleving reel",
    description: "Voorbeeldreel voor een halloween-event met focus op beleving en storytelling.",
    url: "https://www.instagram.com/", // vervang met echte link
  },
  {
    title: "Dagje in het park",
    description: "Korte dagreel met attracties, horeca en sfeerbeelden.",
    url: "https://www.tiktok.com/", // vervang met echte link
  },
];

export default function SocialContentLeisurePage() {
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
                {/* 
                  Als je straks logobestanden hebt (bijv. in /public/logos),
                  kun je bovenstaande blokken eenvoudig vervangen door <Image />-componenten, bijv.:

                  <Image src="/logos/avonturenpark-hellendoorn.svg" alt="Avonturenpark Hellendoorn" width={120} height={120} />
                */}
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
              <h2 className="text-3xl font-bold">Voorbeelden van reels</h2>
              <p className="text-muted-foreground">
                Hieronder een aantal voorbeelden van reels. Deze kunnen gelinkt worden naar TikTok, Instagram of
                YouTube Shorts.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {reels.map((reel) => (
                  <a
                    key={reel.title}
                    href={reel.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl border bg-card hover:bg-accent/50 transition-colors p-4 flex flex-col gap-3"
                  >
                    <div className="aspect-[9/16] w-full rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
                      Reel placeholder
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {reel.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{reel.description}</p>
                    </div>
                  </a>
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

