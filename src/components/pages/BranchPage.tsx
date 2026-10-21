import { Gallery } from "@/components/gallery/Gallery";
import { VideoGrid } from "@/components/gallery/VideoGrid";
import { Hero } from "@/components/layout/Hero";
import { CtaBand } from "@/components/sections/CtaBand";
import { EventDay } from "@/components/sections/EventDay";
import { ClientLogoGrid } from "@/components/seo/ClientLogoGrid";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { TestimonialsSection } from "@/components/seo/TestimonialsSection";
import type { BranchConfig } from "@/lib/branches";
import { getGalleryImagesForBranch } from "@/lib/gallery";
import { eventDay } from "@/lib/page-content";
import { getYoutubeVideosForBranch } from "@/lib/portfolio";
import { getLeisureReels } from "@/lib/reels";
import { SITE_URL } from "@/lib/site";

type BranchPageProps = {
  branch: BranchConfig;
};

// Event type page: what you get, recent work, how the day runs, questions.
export async function BranchPage({ branch }: BranchPageProps) {
  const galleryImages = await getGalleryImagesForBranch(branch.slug);
  // Show every photo; pick the column count that leaves no half-empty last row where possible.
  const columns = galleryImages.length % 3 === 0 ? 3 : galleryImages.length % 2 === 0 ? 2 : 3;
  const videos = getYoutubeVideosForBranch(branch.slug);
  const reels = branch.showReels ? await getLeisureReels() : [];
  const timeline = branch.process ?? { title: "Zo verloopt de dag", steps: eventDay };
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: branch.title, href: branch.href },
  ];

  return (
    <div className="flex flex-col">
      <PageStructuredData
        breadcrumbs={breadcrumbs}
        faqs={branch.faqs}
        extra={[
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}${branch.href}#webpage`,
            url: `${SITE_URL}${branch.href}`,
            name: branch.seoTitle,
            description: branch.seoDescription,
            inLanguage: "nl-NL",
            about: { "@id": `${SITE_URL}${branch.href}#service` },
            primaryImageOfPage: `${SITE_URL}${branch.heroImage}`,
          },
        ]}
      />

      <Hero
        title={branch.heroTitle}
        subtitle={branch.heroSubtitle}
        image={branch.heroImage}
        imageAlt={branch.heroImageAlt}
        secondary={{ label: "Zo werken wij", href: "/werkwijze/" }}
      />

      <section className="container max-w-screen-2xl py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="display text-4xl sm:text-5xl md:col-span-5">{branch.introTitle}</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
            {branch.introParagraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-12">
          <h2 className="heading text-3xl md:col-span-5">Wat u ontvangt</h2>
          <ul className="grid gap-x-10 sm:grid-cols-2 md:col-span-7">
            {branch.deliverables.map((item) => (
              <li key={item} className="border-t border-border py-4 text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {branch.logos && branch.logos.length > 0 && (
          <div className="mt-20 space-y-6">
            <h2 className="heading text-3xl">Opdrachtgevers</h2>
            <ClientLogoGrid logos={branch.logos} />
          </div>
        )}

        {branch.testimonials && branch.testimonials.length > 0 && (
          <div className="mt-20">
            <TestimonialsSection items={branch.testimonials} />
          </div>
        )}
      </section>

      {galleryImages.length > 0 && (
        <section className="bg-muted py-20 md:py-28" aria-labelledby="werk-heading">
          <div className="container max-w-screen-2xl">
            <h2 id="werk-heading" className="display mb-12 text-5xl sm:text-6xl">
              Recent werk
            </h2>
            <Gallery
              images={galleryImages}
              layout="grid"
              className={columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}
            />
            {reels.length > 0 && (
              <div className="mt-20">
                <h3 className="heading mb-8 text-3xl">Reels</h3>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {reels.map((reel) => (
                    <figure key={reel.videoSrc} className="space-y-2">
                      <div className="aspect-[9/16] overflow-hidden bg-ink">
                        <video
                          controls
                          playsInline
                          preload="metadata"
                          className="h-full w-full object-cover"
                          src={`${reel.videoSrc}#t=0.1`}
                        />
                      </div>
                      <figcaption className="text-sm font-semibold">{reel.title}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
            {videos.length > 0 && (
              <div className="mt-20">
                <h3 className="heading mb-8 text-3xl">Video</h3>
                <VideoGrid videos={videos} />
              </div>
            )}
          </div>
        </section>
      )}

      <section className="container max-w-screen-2xl py-20 md:py-28" aria-labelledby="dag-heading">
        <h2 id="dag-heading" className="display mb-14 max-w-3xl text-5xl sm:text-6xl">
          {timeline.title}
        </h2>
        <EventDay steps={timeline.steps} />
      </section>

      <div className="container max-w-screen-2xl pb-20 md:pb-28">
        <FaqSection items={branch.faqs} />
      </div>

      <CtaBand />
    </div>
  );
}
