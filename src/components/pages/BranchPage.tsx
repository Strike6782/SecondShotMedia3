import Image from "next/image";
import { Gallery } from "@/components/gallery/Gallery";
import { VideoGrid } from "@/components/gallery/VideoGrid";
import { Hero } from "@/components/layout/Hero";
import { ServiceSidebar } from "@/components/layout/ServiceSidebar";
import { ClientLogoGrid } from "@/components/seo/ClientLogoGrid";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { PricingHintSection } from "@/components/seo/PricingHintSection";
import { TestimonialsSection } from "@/components/seo/TestimonialsSection";
import type { BranchConfig } from "@/lib/branches";
import { getImagesFromDirectory } from "@/lib/gallery";
import { getLeisureReels } from "@/lib/reels";
import type { ImageFile } from "@/lib/gallery";

type BranchPageProps = {
  branch: BranchConfig;
};

// Reusable branch page template: hero, services, portfolio, FAQ.
export async function BranchPage({ branch }: BranchPageProps) {
  const galleryImages: ImageFile[] = [];
  for (const dir of branch.galleryDirs) {
    const images = await getImagesFromDirectory(dir);
    galleryImages.push(...images);
  }

  const reels = branch.showReels ? await getLeisureReels() : [];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: branch.title, href: branch.href },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={branch.faqs} />

      <Hero
        title={branch.heroTitle}
        subtitle={branch.heroSubtitle}
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
        showCta={false}
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">{branch.introTitle}</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                {branch.introParagraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>

            {/* Client logos */}
            {branch.logos && branch.logos.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Referenties</h3>
                <ClientLogoGrid logos={branch.logos} />
              </div>
            )}

            {/* Testimonials — only when real quotes are configured */}
            {branch.testimonials && branch.testimonials.length > 0 && (
              <TestimonialsSection items={branch.testimonials} />
            )}

            {/* Pricing indication — hydrated client-side to limit archive capture */}
            <PricingHintSection branchSlug={branch.slug} />

            {/* Anchor subsections (festivals, club, etc.) */}
            {branch.anchorSections?.map((section) => (
              <div key={section.id} id={section.id} className="space-y-4 scroll-mt-24">
                <h3 className="text-2xl font-bold">{section.title}</h3>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Photography */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{branch.photoTitle}</h3>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                {branch.photoParagraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>

            {/* Video */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{branch.videoTitle}</h3>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                {branch.videoParagraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>

            {/* Leisure reels showcase */}
            {branch.showReels && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Reels showcase</h3>
                {reels.length === 0 ? (
                  <p className="text-muted-foreground">Reels worden binnenkort toegevoegd.</p>
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    {reels.map((reel) => (
                      <div
                        key={reel.videoSrc}
                        className="rounded-xl border bg-card p-4 flex flex-col gap-3"
                      >
                        <div className="aspect-[9/16] w-full overflow-hidden rounded-lg bg-muted">
                          <video controls playsInline className="h-full w-full object-cover" src={reel.videoSrc} />
                        </div>
                        <h4 className="font-semibold">{reel.title}</h4>
                        {reel.note && (
                          <p className="text-sm text-muted-foreground">{reel.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* YouTube portfolio */}
            {branch.videos && branch.videos.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Video portfolio</h3>
                <VideoGrid videos={branch.videos} />
              </div>
            )}

            {/* FPV drone section (leisure) */}
            {branch.showFpvSection && (
              <div id="fpv-drone" className="space-y-4 scroll-mt-24 pt-8 border-t">
                <h3 className="text-2xl font-bold">FPV drone video</h3>
                <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                  <p>
                    Met FPV dronevluchten maken wij spectaculaire one-take tours door attractieparken en leisure
                    locaties. Ideaal voor promotionele video en social content.
                  </p>
                </div>
                <div className="aspect-video w-full rounded-xl overflow-hidden border">
                  <Image
                    src="/images/fpv-dronevliegen-ivan.jpg"
                    alt="FPV drone videografie Second Shot Media"
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Photo gallery */}
            {galleryImages.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Portfolio</h3>
                <Gallery images={galleryImages} />
              </div>
            )}

            {/* Why us */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{branch.whyTitle}</h3>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                {branch.whyParagraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>

            {/* Workflow */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Onze werkwijze</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground text-lg">
                {branch.workflowSteps.map((step) => (
                  <p key={step}>{step}</p>
                ))}
              </div>
            </div>

            <FaqSection items={branch.faqs} />
          </div>

          <div>
            <ServiceSidebar className="lg:sticky lg:top-24" />
          </div>
        </div>
      </section>
    </div>
  );
}
