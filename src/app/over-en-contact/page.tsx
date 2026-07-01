import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/layout/Hero";
import { DefinitionBlock } from "@/components/seo/DefinitionBlock";
import { FaqSection } from "@/components/seo/FaqSection";
import { PageStructuredData } from "@/components/seo/PageStructuredData";
import { Button } from "@/components/ui/button";
import { branches } from "@/lib/branches";
import { buildPageMetadata } from "@/lib/metadata-helpers";
import { overContactContent } from "@/lib/page-content";
import { CONTACT_EMAIL, CONTACT_LINKEDIN, KVK } from "@/lib/site";
import { Mail } from "lucide-react";

export const metadata = buildPageMetadata({
  title: "Over Second Shot Media | Contact",
  description:
    "Content studio voor fotografie en videografie, opgericht door Ivan Balkenende. Gevestigd in Utrecht, actief door heel Nederland.",
  path: "/over-en-contact/",
});

export default function OverEnContactPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Over en contact", href: "/over-en-contact/" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <PageStructuredData breadcrumbs={breadcrumbs} faqs={overContactContent.faqs} />

      <Hero
        title="Over Second Shot Media"
        subtitle="Content studio voor fotografie en videografie. Gevestigd in Utrecht, actief door heel Nederland."
        ctaLink="/over-en-contact/#contact"
        align="center"
        className="min-h-[40vh]"
        showSecondaryBtn={false}
      />

      <DefinitionBlock text={overContactContent.definition} />

      <section className="container py-16 px-6 md:px-12 max-w-screen-2xl space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Over Second Shot Media</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                <p>
                  Second Shot Media levert fotografie én videografie voor leisure en events. Wij zijn gevestigd in
                  Utrecht en werken aan projecten door heel Nederland. Voor opdrachten zetten wij een poule van freelance fotografen en videografen in.
                </p>
                  
              </div>
              <Button variant="outline" asChild>
                <Link href="/werken-bij/">werken bij</Link>
              </Button>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Over Ivan Balkenende</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                <p>
                  Ivan Balkenende is de oprichter van Second Shot Media. Met meer dan zes jaar ervaring en ruim 220 events
                  op zijn naam weet hij als geen ander hoe je energie en sfeer vastlegt. Naast zijn werk bij Second Shot Media
                  is Ivan ook nog student Informatica aan de Universiteit Utrecht. Second Shot Media begon als freelance klusjes,
                  maar is nu uitgegroeid tot een volwaardige team met foto- en videografen, designers en content creators.
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden bg-muted md:sticky md:top-24">
            <Image
              src="/images/Ivan-Secondshotmedia-event.jpg"
              alt="Ivan Balkenende - Second Shot Media"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Waar wij voor werken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {branches.map((branch) => (
              <Link
                key={branch.slug}
                href={branch.href}
                className="rounded-2xl border border-border/50 bg-muted/30 p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-bold text-lg">{branch.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">Fotografie en videografie</p>
              </Link>
            ))}
          </div>
        </div>

        <div id="contact" className="scroll-mt-24">
          <div className="grid gap-8 bg-muted/30 p-8 rounded-2xl border border-border/50 max-w-2xl mx-auto text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="text-muted-foreground text-lg">
                Neem contact op via e-mail voor beschikbaarheid en een offerte op maat.
              </p>
            </div>

            <div className="max-w-sm mx-auto w-full">
              <Button size="lg" className="w-full text-lg h-14" asChild>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center justify-center gap-3">
                  <Mail className="h-6 w-6" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </Button>
            </div>

            <div className="pt-6 border-t text-sm text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">Second Shot Media</p>
              <p>Gevestigd in Utrecht</p>
              <p>
                <a href={CONTACT_LINKEDIN} className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </p>
              <p className="text-xs opacity-70">KVK: {KVK}</p>
            </div>
          </div>
        </div>

        <FaqSection items={overContactContent.faqs} />
      </section>
    </div>
  );
}
