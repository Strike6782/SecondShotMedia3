import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, GraduationCap, Music2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/gallery/Gallery";
import { VideoGrid } from "@/components/gallery/VideoGrid";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { branches } from "@/lib/branches";
import { getImagesFromDirectory } from "@/lib/gallery";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { homeContent } from "@/lib/page-content";
import { getLeisureReels } from "@/lib/reels";
import { AGENCY_DEFINITION } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Fotografie en videografie Content Agency | Utrecht",
  description:
    "Second Shot Media: content agency voor fotografie en videografie. Leisure, events, gala's en zakelijke evenementen. 220+ events, één aanspreekpunt voor foto en video.",
  path: "/",
});

const isHorizontal = (img: { width: number; height: number }) => img.width / img.height > 1.2;

// Icons per specialization on the homepage.
const branchIcons: Record<string, ReactNode> = {
  leisure: <Sparkles className="h-10 w-10 mb-4 text-primary" />,
  "zakelijke-evenementen": <Building2 className="h-10 w-10 mb-4 text-primary" />,
  evenementen: <Music2 className="h-10 w-10 mb-4 text-primary" />,
  "gala-en-feest": <GraduationCap className="h-10 w-10 mb-4 text-primary" />,
};

const portfolioMap: Record<string, { label: string; dirs: string[]; href: string }> = {
  leisure: { label: "Leisure", dirs: ["theme-parks"], href: "/leisure/" },
  "zakelijke-evenementen": { label: "Zakelijke evenementen", dirs: ["corporate"], href: "/zakelijke-evenementen/" },
  evenementen: { label: "Events", dirs: ["events", "club"], href: "/evenementen/" },
  "gala-en-feest": { label: "Gala's en feesten", dirs: ["students"], href: "/gala-en-feest/" },
};

export default async function Home() {
  // Load a handful of leisure reels for the homepage video section.
  const featuredReels = (await getLeisureReels()).slice(0, 4);

  const portfolioSections = await Promise.all(
    branches.map(async (branch) => {
      const config = portfolioMap[branch.slug];
      const images = (
        await Promise.all(config.dirs.map((d) => getImagesFromDirectory(d)))
      )
        .flat()
        .filter(isHorizontal)
        .slice(0, 4);
      return { branch, images, ...config };
    })
  );

  const breadcrumbs = [{ name: "Home", href: "/" }];

  return (
    <div className="flex flex-col min-h-screen">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={homeContent.faqs} />

      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden bg-zinc-950 text-white px-4 py-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/40 via-zinc-900 to-zinc-950 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent z-0" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Second Shot <span className="text-primary">Media</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-zinc-300 sm:text-2xl font-light">
            {AGENCY_DEFINITION}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/over-en-contact/">Neem direct contact op</Link>
            </Button>
            <Button size="lg" variant="outlineOnDark" className="text-lg px-8" asChild>
              <Link href="/#video-portfolio">Bekijk werk</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-24 px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Fotografie en videografie onder één dak
            </h2>
            <div className="prose dark:prose-invert text-muted-foreground text-lg space-y-6">
              <p>
                Welkom bij Second Shot Media. Wij zijn een content agency voor fotografie en videografie
                voor leisure en events door heel Nederland. We werken met een vaste poule van getrainde en ervaren
                fotografen en videografen en kunnen dus op elk moment op een event aanwezig zijn.
              </p>
              <p>
                Of het nu gaat om reels voor een attractiepark, een aftermovie van uw festival of reportage van een
                bedrijfsfeest: wij vangen energie en sfeer vast met één aanspreekpunt voor al uw beeldmateriaal.
              </p>
              <p>
                De oprichter van Second Shot Media is Ivan Balkenende. Hij is al 6 jaar actief in de fotografie en
                videografie en heeft op vele evenementen zijn diensten geleverd. Wat klein begon is uitgegroeid
                tot een volwaardig team met foto- en videografen, designers en content creators.
              </p>
              <p className="text-foreground font-medium italic">
                Elk bijzonder moment verdient een tweede kans om te schitteren. Dat is waar onze naam voor staat.
              </p>
              <p>
                Wij zijn actief in de leisure branche, zakelijke evenementen, muziekevenementen en feesten
                door heel Nederland.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Stat value="6+" label="Jaar actief" />
              <Stat value="220+" label="Events" />
              <Stat value="9.300+" label="Opgeleverde foto's" />
              <Stat value="180+" label="Opgeleverde video's" />
            </div>
            <p className="text-sm text-muted-foreground">
              Wil je meewerken als freelancer? Bekijk{" "}
              <Link href="/werken-bij/" className="text-primary hover:underline">
                Werken Bij
              </Link>
            </p>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden bg-muted">
            <Image
              src="/images/Ivan-Secondshotmedia-event.jpg"
              alt="Ivan Balkenende fotografeert een event voor Second Shot Media"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24 px-4">
        <div className="container max-w-screen-xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Onze specialisaties</h2>
            <p className="text-muted-foreground text-lg">
              Vier branches, steeds met fotografie én videografie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branches.map((branch) => (
              <ServiceCard
                key={branch.slug}
                title={branch.title}
                description={branch.seoDescription.slice(0, 120) + "…"}
                icon={branchIcons[branch.slug]}
                href={branch.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20 px-4 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-center mb-10">Onze werkwijze</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Intake</h3>
            <p className="text-muted-foreground">Wij bespreken uw doelen, planning en gewenste output.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Opname</h3>
            <p className="text-muted-foreground">Foto en video op locatie, waar in Nederland dan ook.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Oplevering</h3>
            <p className="text-muted-foreground">Nabewerking en levering in de formaten die u nodig heeft.</p>
          </div>
        </div>
      </section>

      <section id="video-portfolio" className="bg-muted/30 py-16 md:py-24 px-4">
        <div className="container max-w-screen-2xl space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Video werk</h2>
            <p className="text-muted-foreground text-lg">
              Aftermovies, reportages en shortform reels uit ons portfolio.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Aftermovies &amp; reportages</h3>
            <VideoGrid videos={homeContent.featuredVideos} />
          </div>

          {featuredReels.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Shortform reels</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredReels.map((reel) => (
                  <div
                    key={reel.videoSrc}
                    className="rounded-xl border bg-card p-4 flex flex-col gap-3"
                  >
                    <div className="aspect-[9/16] w-full overflow-hidden rounded-lg bg-muted">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                        src={reel.videoSrc}
                      />
                    </div>
                    <h4 className="font-semibold text-sm leading-tight">{reel.title}</h4>
                    {reel.note && (
                      <p className="text-sm text-muted-foreground">{reel.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="mini-portfolio" className="container py-16 md:py-24 px-4 max-w-screen-2xl space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Een selectie van recent werk</h2>
          <p className="text-muted-foreground text-lg">Foto-impressies per specialisatie.</p>
        </div>
        <div className="space-y-12">
          {portfolioSections.map(({ label, href, images }) => (
            <div key={href}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">{label}</h3>
                <Button variant="ghost" asChild>
                  <Link href={href} prefetch={false}>
                    Bekijk meer &rarr;
                  </Link>
                </Button>
              </div>
              {images.length > 0 && (
                <Gallery images={images} layout="grid" className="md:grid-cols-4 lg:grid-cols-4" linkTarget={href} />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16 px-4 max-w-screen-xl">
        <FaqSection items={homeContent.faqs} />
      </section>

      <section className="py-24 px-4 container max-w-screen-md mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">Klaar om uw project vast te leggen?</h2>
        <p className="text-muted-foreground text-lg">Vraag een vrijblijvende offerte aan.</p>
        <Button size="lg" className="w-full sm:w-auto px-12" asChild>
          <Link href="/over-en-contact/" prefetch={false}>
            Neem contact op
          </Link>
        </Button>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-bold text-2xl">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
}) {
  return (
    <Link href={href} prefetch={false} className="group block h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-background p-8 transition-all hover:bg-muted/50 hover:shadow-lg">
        {icon}
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm flex-1">{description}</p>
        <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
          Bekijk meer <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
