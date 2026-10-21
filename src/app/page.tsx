import Image from "next/image";
import Link from "next/link";
import { VideoGrid } from "@/components/gallery/VideoGrid";
import { Hero } from "@/components/layout/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { EventDay } from "@/components/sections/EventDay";
import { HomePortfolio, type PortfolioPhoto } from "@/components/sections/HomePortfolio";
import { TeamSection } from "@/components/sections/TeamSection";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { branches } from "@/lib/branches";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { eventDay, homeContent } from "@/lib/page-content";
import { getGalleryImagesForBranch } from "@/lib/gallery";
import { getFeaturedYoutubeVideos } from "@/lib/portfolio";

export const metadata = buildPageMetadata({
  title: "Second Shot Media | Eventfotograaf en videograaf in Utrecht",
  description:
    "Foto en video voor zakelijke events, bedrijfsfeesten, festivals en pretparken. Eerste selectie dezelfde dag, album binnen 24 uur. Utrecht en heel Nederland.",
  path: "/",
  absoluteTitle: true,
});

export default async function Home() {
  const portfolioGroups: PortfolioPhoto[][] = await Promise.all(
    branches.map(async (branch) =>
      (await getGalleryImagesForBranch(branch.slug)).map((img) => ({
        ...img,
        category: branch.title,
        href: branch.href,
      }))
    )
  );

  const featuredVideos = getFeaturedYoutubeVideos();
  const breadcrumbs = [{ name: "Home", href: "/" }];

  return (
    <div className="flex flex-col">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={homeContent.faqs} />

      <Hero
        size="home"
        title={"Foto en video van uw event.\nNog dezelfde dag opgeleverd."}
        subtitle="Second Shot Media maakt foto en video voor zakelijke events, bedrijfsfeesten, festivals en pretparken. Gevestigd in Utrecht, actief in heel Nederland."
        image="/gallery/corporate/Cybersec---Second-Shot-Media-7.jpg"
        imageAlt="Spreker op het podium van een beurs voor een vol publiek"
        secondary={{ label: "Bekijk ons werk", href: "#events" }}
      />

      {/* The event day: the promise, shown as a timeline */}
      <section className="container max-w-screen-2xl py-20 md:py-28" aria-labelledby="dag-heading">
        <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="dag-heading" className="display text-5xl sm:text-6xl md:col-span-6">
            Uw eventdag, en wanneer u wat ontvangt
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8">
            Na afloop wilt u zo snel mogelijk laten zien hoe uw event was: aan deelnemers, partners en iedereen die
            er niet bij was. Daarom ontvangt u de sterkste beelden nog dezelfde dag, en het volledige album binnen 24
            uur.
          </p>
        </div>
        <EventDay steps={eventDay} />
      </section>

      {/* Event types */}
      <section id="events" className="scroll-mt-16 bg-muted py-20 md:py-28" aria-labelledby="events-heading">
        <div className="container max-w-screen-2xl">
          <h2 id="events-heading" className="display mb-14 max-w-3xl text-5xl sm:text-6xl">
            Waar wij voor werken
          </h2>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {branches.map((branch) => (
              <Link key={branch.slug} href={branch.href} prefetch={false} className="group block">
                <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                  <Image
                    src={branch.heroImage}
                    alt={branch.heroImageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-opacity duration-300 group-hover:opacity-85"
                  />
                </div>
                <h3 className="heading mt-5 text-3xl sm:text-4xl group-hover:underline group-hover:decoration-primary group-hover:decoration-2 group-hover:underline-offset-8">
                  {branch.title}
                </h3>
                <p className="mt-2 max-w-lg text-lg text-muted-foreground">{branch.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-screen-2xl pt-20 md:pt-28" aria-labelledby="portfolio-heading">
        <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="portfolio-heading" className="display text-5xl sm:text-6xl md:col-span-6">
            Uit ons portfolio
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8">
            Een greep uit ons werk. Klik op een foto voor meer van die categorie.
          </p>
        </div>
        <HomePortfolio groups={portfolioGroups} />
      </section>

      <TeamSection />

      {featuredVideos.length > 0 && (
        <section className="bg-muted py-20 md:py-28" aria-labelledby="video-heading">
          <div className="container max-w-screen-2xl">
            <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
              <h2 id="video-heading" className="display text-5xl sm:text-6xl md:col-span-6">
                Video
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8">
                Aftermovies, recaps en highlights, liggend en verticaal. Desgewenst met FPV-dronebeelden.
              </p>
            </div>
            <VideoGrid videos={featuredVideos} />
          </div>
        </section>
      )}

      <div className="container max-w-screen-2xl py-20 md:py-28">
        <FaqSection items={homeContent.faqs} />
      </div>

      <CtaBand />
    </div>
  );
}
