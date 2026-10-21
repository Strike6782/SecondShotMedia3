import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OFFERTE_MAILTO } from "@/lib/site";

type CtaBandProps = {
  title?: string;
  showWorkflowLink?: boolean;
};

// Closing call to action: what to send, and who answers.
export function CtaBand({ title = "Vertel ons over uw event.", showWorkflowLink = true }: CtaBandProps) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container max-w-screen-2xl py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <h2 className="display text-5xl sm:text-6xl lg:text-7xl md:col-span-7">{title}</h2>
          <div className="space-y-6 md:col-span-5">
            <p className="text-lg leading-relaxed text-ink-muted">
              Stuur datum, locatie, tijden en waar u de beelden voor wilt gebruiken. Ivan neemt persoonlijk contact
              met u op en kijkt met u mee wat u nodig heeft.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href={OFFERTE_MAILTO}>Voorstel aanvragen</a>
              </Button>
              {showWorkflowLink && (
                <Button size="lg" variant="outlineOnDark" asChild>
                  <Link href="/werkwijze/">Zo werken wij</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
