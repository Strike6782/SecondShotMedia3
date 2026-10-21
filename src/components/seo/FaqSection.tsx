import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/types";

// FAQ as native disclosure widgets: collapsible, keyboard accessible, and the answers stay in the HTML for SEO.
export function FaqSection({ items, title = "Veelgestelde vragen" }: { items: FaqItem[]; title?: string }) {
  if (items.length === 0) return null;

  return (
    <section className="grid gap-8 md:grid-cols-12" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="display text-4xl sm:text-5xl md:col-span-4">
        {title}
      </h2>
      <div className="divide-y divide-border border-y border-border md:col-span-8">
        {items.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              <h3>{item.question}</h3>
              <Plus
                aria-hidden
                className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
              />
            </summary>
            <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
