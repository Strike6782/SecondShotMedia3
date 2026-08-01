import type { BranchTestimonial } from "@/lib/types";

type TestimonialsSectionProps = {
  items: BranchTestimonial[];
};

// Client quotes section — only rendered when real testimonials are configured.
export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">Wat klanten zeggen</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <blockquote
            key={item.quote.slice(0, 40)}
            className="rounded-xl border border-border/50 bg-muted/20 p-6 space-y-3"
          >
            <p className="text-muted-foreground italic">&quot;{item.quote}&quot;</p>
            <footer className="text-sm">
              <span className="font-semibold text-foreground">{item.author}</span>
              {item.role && <span className="text-muted-foreground"> — {item.role}</span>}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
