import { cn } from "@/lib/utils";
import type { DayStep } from "@/lib/page-content";

type EventDayProps = {
  steps: DayStep[];
  /** "row" lays the day out left to right on wide screens; "column" always stacks. */
  layout?: "row" | "column";
  tone?: "light" | "dark";
  className?: string;
};

// The event day as a timeline.
export function EventDay({ steps, layout = "row", tone = "light", className }: EventDayProps) {
  const dark = tone === "dark";
  const row = layout === "row";

  return (
    <ol
      className={cn(
        "relative grid gap-0",
        row ? "md:grid-flow-col md:auto-cols-fr" : "",
        className
      )}
    >
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={cn(
            "relative pl-8 pb-8 last:pb-0",
            row && "md:pl-0 md:pb-0 md:pr-6 md:pt-10"
          )}
        >
          {/* Line segment to the next step */}
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className={cn(
                "absolute left-[5px] top-3 h-full w-px",
                row && "md:left-3 md:top-[5px] md:h-px md:w-full",
                dark ? "bg-white/25" : "bg-border"
              )}
            />
          )}
          {/* Marker */}
          <span
            aria-hidden
            className={cn(
              "absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2",
              row && "md:top-0",
              dark ? "border-white/60 bg-[#0f1a2b]" : "border-foreground/50 bg-background"
            )}
          />
          <p
            className={cn("text-sm font-semibold", dark ? "text-ink-muted" : "text-muted-foreground")}
          >
            {step.when}
          </p>
          <h3 className="heading mt-1 text-2xl">{step.title}</h3>
          <p className={cn("mt-2 max-w-xs leading-relaxed", dark ? "text-ink-muted" : "text-muted-foreground")}>
            {step.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
