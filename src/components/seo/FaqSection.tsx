import type { FaqItem } from "@/lib/types";

// Visible FAQ section: plain HTML for SEO and AI citation (no accordion).
export function FaqSection({ items }: { items: FaqItem[] }) {
  if (items.length === 0) return null;

  return (
    <section className="space-y-6" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-3xl font-bold">
        Veelgestelde vragen
      </h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.question} className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">{item.question}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
