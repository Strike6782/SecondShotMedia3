import type { FaqItem } from "@/lib/types";

// Visible FAQ section: plain HTML for SEO and AI citation (no accordion).
export function FaqSection({ items, title = "Veelgestelde vragen" }: { items: FaqItem[]; title?: string }) {
  if (items.length === 0) return null;

  return (
    <section className="grid gap-8 md:grid-cols-12" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="display text-4xl sm:text-5xl md:col-span-4">
        {title}
      </h2>
      <div className="divide-y divide-border border-y border-border md:col-span-8">
        {items.map((item) => (
          <div key={item.question} className="space-y-2 py-6">
            <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
