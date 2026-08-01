import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
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
  title: "Over en contact",
  description:
    "Contact met Second Shot Media: content agency voor fotografie en videografie. Oprichter Ivan Balkenende, team in Utrecht, opdrachten door heel Nederland. Vraag een offerte aan.",
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
        subtitle="Content Agency voor fotografie en videografie. Gevestigd in Utrecht, actief door heel Nederland."
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
                  Second Shot Media is een content agency voor fotografie en videografie op leisure en events.
                  Vanuit Utrecht werken wij aan projecten door heel Nederland met een poule van freelance fotografen en videografen.
                </p>
                <p className="text-foreground font-medium italic">
                  Elk bijzonder moment verdient een tweede kans om te schitteren — dat is waar onze naam staat voor.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link href="/werken-bij/">Werken bij</Link>
              </Button>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Over Ivan Balkenende</h2>
              <div className="prose prose-lg dark:prose-invert text-muted-foreground space-y-4">
                <p>
                  Ivan Balkenende is de oprichter van Second Shot Media. Met meer dan zes jaar ervaring en ruim 220 events
                  op zijn naam weet hij als geen ander hoe je energie en sfeer vastlegt. Naast zijn werk bij Second Shot Media
                  is Ivan ook nog student Informatica aan de Universiteit Utrecht. Second Shot Media begon als freelance klusjes,
                  maar is nu uitgegroeid tot een volwaardig team met foto- en videografen, designers en content creators.
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
          <div className="grid gap-8 bg-muted/30 p-8 rounded-2xl border border-border/50 max-w-3xl mx-auto">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold">Contact</h2>
              <p className="text-muted-foreground text-lg">
                Vul het formulier voor beschikbaarheid en een offerte op maat, of mail direct.
              </p>
            </div>

            <ContactForm />

            <div className="pt-6 border-t text-sm text-muted-foreground space-y-1 text-center">
              <p>
                Direct mailen:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline flex items-center justify-center gap-2 mt-2">
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="font-semibold text-foreground mt-4">Second Shot Media</p>
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
