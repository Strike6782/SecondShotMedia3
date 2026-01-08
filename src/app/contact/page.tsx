import { Hero } from "@/components/layout/Hero";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Offerte | Second Shot Media",
  description: "Neem contact op met Ivan Balkenende. Direct mailen voor beschikbaarheid en tarieven.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Contact"
        subtitle="Laten we samenwerken. Stuur me een bericht voor beschikbaarheid en een offerte op maat."
        ctaText="Stuur direct een email"
        ctaLink="mailto:ivan@secondshotmedia.nl"
        align="center"
        className="min-h-[40vh]"
      />

      <section className="container py-16 px-6 md:px-12 max-w-screen-md mx-auto">
        <div className="grid gap-8 bg-muted/30 p-8 rounded-2xl border border-border/50 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Neem contact op</h2>
            <p className="text-muted-foreground text-lg">
              De snelste manier om mij te bereiken is per email of via Instagram DM.
              Ik reageer doorgaans binnen 24 uur.
            </p>
          </div>

          <div className="space-y-6 max-w-sm mx-auto w-full">
            <Button size="lg" className="w-full text-lg h-14" asChild>
              <a href="mailto:ivan@secondshotmedia.nl" className="flex items-center justify-center gap-3">
                <Mail className="h-6 w-6" />
                <span>ivan@secondshotmedia.nl</span>
              </a>
            </Button>

            <Button variant="outline" size="lg" className="w-full text-lg h-14" asChild>
              <a href="https://instagram.com/secondshotmedia" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                <Instagram className="h-6 w-6" />
                <span>@secondshotmedia</span>
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t mt-4">
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Second Shot Media</p>
              <p>Ivan Balkenende</p>
              <p>Utrecht</p>
              <p className="mt-2 text-xs opacity-70">KVK: 92016421</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
