import type { BranchTestimonial } from "@/lib/types";

type TestimonialsSectionProps = {
  items: BranchTestimonial[];
};

// Client quotes, only rendered when real testimonials are configured.
export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className="space-y-8">
      <h2 className="heading text-3xl">Wat opdrachtgevers zeggen</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {items.map((item) => (
          <blockquote key={item.quote.slice(0, 40)} className="border-l-2 border-primary pl-6">
            <p className="text-xl leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-4">
              <span className="font-semibold">{item.author}</span>
              {item.role && <span className="text-muted-foreground">, {item.role}</span>}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
