import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  className?: string;
  align?: "center" | "left";
  showSecondaryBtn?: boolean;
}

export function Hero({
  title,
  subtitle,
  ctaText = "Neem direct contact op",
  ctaLink = "/contact",
  backgroundImage,
  className,
  align = "center",
  showSecondaryBtn = true,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-muted/20 px-4 py-24",
        className
      )}
    >
      {/* Background Image / Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        </div>
      )}

      <div
        className={cn(
          "relative z-10 container flex max-w-screen-xl flex-col gap-6",
          align === "center" ? "items-center text-center" : "items-start text-left"
        )}
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {subtitle}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild className="text-base">
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
          {showSecondaryBtn && (
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link href="/portfolio">Bekijk Portfolio</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
