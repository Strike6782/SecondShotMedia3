import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Camera, Video, Users, Building2, Music, Sparkles } from "lucide-react";
import { getImagesFromDirectory } from "@/lib/gallery";
import { Gallery } from "@/components/gallery/Gallery";

export const metadata: Metadata = {
  title: "Evenementen Fotograaf & Videograaf Midden-Nederland",
  description: "Evenementenfotografie, aftermovies en videografie voor festivals, clubs, gala's en bedrijven in Midden-Nederland. Second Shot Media.",
};

const isHorizontal = (img: { width: number; height: number }) => img.width / img.height > 1.2;

export default async function Home() {
  const eventImages = (await getImagesFromDirectory("events")).filter(isHorizontal).slice(0, 4);
  const corporateImages = (await getImagesFromDirectory("corporate")).filter(isHorizontal).slice(0, 4);
  const clubImages = (await getImagesFromDirectory("club")).filter(isHorizontal).slice(0, 4);
  const themeParkImages = (await getImagesFromDirectory("theme-parks")).filter(isHorizontal).slice(0, 4);
  const studentImages = (await getImagesFromDirectory("students")).filter(isHorizontal).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden bg-zinc-950 text-white px-4 py-16 text-center">
        {/* Background gradient/image placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-zinc-900 to-zinc-950 z-0" />

          <div className="relative z-10 max-w-4xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Second Shot <span className="text-primary">Media</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-300 sm:text-2xl font-light">
            Evenementen fotograaf en videograaf in Midden-Nederland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">Neem direct contact op</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-zinc-700 hover:bg-zinc-800 text-white"
              asChild
            >
              <Link href="/#mini-portfolio">Bekijk werk</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="container py-16 md:py-24 px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Evenementen fotograaf en videograaf in Midden-Nederland
            </h2>
            <div className="prose dark:prose-invert text-muted-foreground text-lg space-y-6">
              <p>
                Welkom bij Second Shot Media, opgericht door Ivan Balkenende.
                Ik ben gespecialiseerd in het vastleggen van de energie en sfeer van evenementen door heel Midden-Nederland.
              </p>
              <p>
                Of u nu op zoek bent naar een evenementen fotograaf voor uw festival of bedrijfsfeest,
                of een professionele aftermovie laat maken: ik lever beelden die impact maken.
                Mijn focus ligt op het vangen van spontane momenten, interactie en de unieke vibe van uw event.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-2xl">6+</span>
                <span className="text-sm text-muted-foreground">Jaar Ervaring</span>
              </div>
              <div className="w-px bg-border h-12" />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-2xl">220+</span>
                <span className="text-sm text-muted-foreground">Events</span>
              </div>
              <div className="w-px bg-border h-12" />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-2xl">9.000+</span>
                <span className="text-sm text-muted-foreground">Opgeleverde foto&apos;s</span>
              </div>
              <div className="w-px bg-border h-12" />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-2xl">150+</span>
                <span className="text-sm text-muted-foreground">Opgeleverde video&apos;s</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden bg-muted">
            <div className="absolute inset-0">
              <Image
                src="/images/Ivan-Secondshotmedia-event.jpg"
                alt="Ivan Balkenende - Second Shot Media"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted/30 py-16 md:py-24 px-4">
        <div className="container max-w-screen-xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Diensten</h2>
            <p className="text-muted-foreground text-lg">Alles wat u nodig heeft voor een visueel sterk evenement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Evenementen Fotograaf"
              description="Sfeer, details en overzichten. Professionele reportages van uw event."
              icon={<Camera className="h-10 w-10 mb-4 text-primary" />}
              href="/evenementen-fotograaf/"
            />
            <ServiceCard
              title="Evenementen Videograaf"
              description="Aftermovies, showreels en sfeerimpressies. Bewegend beeld dat raakt."
              icon={<Video className="h-10 w-10 mb-4 text-primary" />}
              href="/evenementen-videograaf/"
            />
            <ServiceCard
              title="Club & Nightlife"
              description="Specialist in low-light fotografie. De energie van de nacht in haarscherpe beelden."
              icon={<Music className="h-10 w-10 mb-4 text-primary" />}
              href="/clubfotografie/"
            />
            <ServiceCard
              title="Studentenverenigingen"
              description="Gala's, almanakfoto's en lustrumfeesten. Betaalbaar en professioneel."
              icon={<Users className="h-10 w-10 mb-4 text-primary" />}
              href="/studentenverenigingen/"
            />
            <ServiceCard
              title="Zakelijke Events"
              description="Congressen, beurzen en bedrijfsevenementen. Representatief en strak."
              icon={<Building2 className="h-10 w-10 mb-4 text-primary" />}
              href="/zakelijke-evenementen/"
            />
            <ServiceCard
              title="Social content voor Leisure bestemmingen"
              description="Breng de sfeer van jouw park of beleving naar je volgers op TikTok en Instagram."
              icon={<Sparkles className="h-10 w-10 mb-4 text-primary" />}
              href="/social-content-leisure/"
            />
          </div>
        </div>
      </section>

      {/* About Me Section - Image Left, Text Right */}
      <section className="container py-16 md:py-24 px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column (Left) */}
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden bg-muted order-last md:order-first">
            <div className="absolute inset-0">
              <Image
                src="/images/Ivan-Secondshotmedia-club.jpg"
                alt="Ivan Balkenende"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Column (Right) */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Het gezicht achter de camera
            </h2>
            <div className="prose dark:prose-invert text-muted-foreground text-lg space-y-6">
              <p>
                Hoi! Ik ben Ivan, evenementen fotograaf en videograaf uit Utrecht. Ik ben iemand met veel te veel hobbies. De meeste vallen af na enkele maanden, maar fotografie en videografie is iets
                wat is blijven hangen, en wat ik tegenwoordig mijn werk mag noemen. Over de jaren heen heb ik in meerdere mediateams van grote evenementen gezeten tot wel 50.000 bezoekers, en ben ik als
                freelancer in te huren. Ook heb ik een breed netwerk aan mede-fotografen en -videografen waar ik vaak mee samenwerk bij grotere projecten.
              </p>
              <p>
                Dit alles doe ik naast mijn studie informatica aan de Universiteit Utrecht, iets wat ideaal combineerbaar is met elkaar. Naast foto- en videografie doe ik ook nog websiteontwikkeling en social media management.
                Ik ben leergierig en wil van ieder project iets leren, wat ik weer kan toepassen in volgende klussen. Ik werk graag met je samen! Stuur me een mailtje of dm om te kijken wat de mogelijkheden zijn.
              </p>

            </div>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact/" prefetch={false}>Kennismaken?</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mini Portfolio Section */}
      <section
        id="mini-portfolio"
        className="container py-16 md:py-24 px-4 max-w-screen-2xl space-y-16"
      >
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Een selectie van recent werk
          </h2>
          <p className="text-muted-foreground text-lg">
            Kleine impressies per categorie. Op de dienstpagina&apos;s vindt u meer voorbeelden en
            informatie.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Evenementen</h3>
              <Button variant="ghost" asChild>
                <Link href="/evenementen-fotograaf/" prefetch={false}>
                  Bekijk meer &rarr;
                </Link>
              </Button>
            </div>
            <Gallery
              images={eventImages}
              layout="grid"
              className="md:grid-cols-4 lg:grid-cols-4"
              linkTarget="/evenementen-fotograaf/"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Zakelijke evenementen</h3>
              <Button variant="ghost" asChild>
                <Link href="/zakelijke-evenementen/" prefetch={false}>
                  Bekijk meer &rarr;
                </Link>
              </Button>
            </div>
            <Gallery
              images={corporateImages}
              layout="grid"
              className="md:grid-cols-4 lg:grid-cols-4"
              linkTarget="/zakelijke-evenementen/"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Club & nightlife</h3>
              <Button variant="ghost" asChild>
                <Link href="/clubfotografie/" prefetch={false}>
                  Bekijk meer &rarr;
                </Link>
              </Button>
            </div>
            <Gallery
              images={clubImages}
              layout="grid"
              className="md:grid-cols-4 lg:grid-cols-4"
              linkTarget="/clubfotografie/"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Attractieparken</h3>
              <Button variant="ghost" asChild>
                <Link href="/social-content-leisure/" prefetch={false}>
                  Bekijk meer &rarr;
                </Link>
              </Button>
            </div>
            <Gallery
              images={themeParkImages}
              layout="grid"
              className="md:grid-cols-4 lg:grid-cols-4"
              linkTarget="/social-content-leisure/"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Studenten & gala&apos;s</h3>
              <Button variant="ghost" asChild>
                <Link href="/studentenverenigingen/" prefetch={false}>
                  Bekijk meer &rarr;
                </Link>
              </Button>
            </div>
            <Gallery
              images={studentImages}
              layout="grid"
              className="md:grid-cols-4 lg:grid-cols-4"
              linkTarget="/studentenverenigingen/"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 container max-w-screen-md mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Klaar om uw event vast te leggen?</h2>
        <p className="text-muted-foreground text-lg">
          Bekijk mijn beschikbaarheid of vraag direct een vrijblijvende offerte aan.
          Ik reageer doorgaans binnen 24 uur.
        </p>
        <Button size="lg" className="w-full sm:w-auto px-12" asChild>
          <Link href="/contact/" prefetch={false}>Neem contact op</Link>
        </Button>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, icon, href }: { title: string; description: string; icon: React.ReactNode; href: string }) {
  return (
    <Link href={href} prefetch={false} className="group block h-full">
      <div className="relative h-full overflow-hidden rounded-2xl border bg-background p-8 transition-all hover:bg-muted/50 hover:shadow-lg">
        {icon}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          Bekijk meer <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
