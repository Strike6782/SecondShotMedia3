"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getPricingHint, type PricingHint } from "@/lib/pricing-hints";
import { OFFERTE_MAILTO } from "@/lib/site";

type PricingHintSectionProps = {
  branchSlug: string;
};

// Pricing block rendered after hydration so amounts stay out of static HTML archives.
export function PricingHintSection({ branchSlug }: PricingHintSectionProps) {
  const [hint, setHint] = useState<PricingHint | null>(null);

  useEffect(() => {
    setHint(getPricingHint(branchSlug) ?? null);
  }, [branchSlug]);

  if (!hint) {
    return null;
  }

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 space-y-3">
      <h3 className="text-xl font-bold">{hint.title}</h3>
      <p className="text-muted-foreground">{hint.description}</p>
      <Button variant="outline" asChild>
        <a href={OFFERTE_MAILTO}>Vraag een offerte aan</a>
      </Button>
    </div>
  );
}
