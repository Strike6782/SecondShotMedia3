import type { BranchPricingHint } from "@/lib/types";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PricingHintSectionProps = {
  hint: BranchPricingHint;
};

// Pricing indication block on branch pages to set expectations before offerte.
export function PricingHintSection({ hint }: PricingHintSectionProps) {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-3">
      <h3 className="text-xl font-bold">{hint.title}</h3>
      <p className="text-muted-foreground">{hint.description}</p>
      <Button variant="outline" asChild>
        <Link href="/over-en-contact/#contact">Vraag een offerte aan</Link>
      </Button>
    </div>
  );
}
