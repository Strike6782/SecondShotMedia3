import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { OFFERTE_MAILTO } from "@/lib/site";

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  /** Show the request button (and an optional secondary link). */
  showCta?: boolean;
  secondary?: { label: string; href: string };
  className?: string;
  size?: "page" | "home";
}

// Photo-led hero: the image carries the page, the text sits bottom-left like a caption.
export function Hero({
  title,
  subtitle,
  image,
  imageAlt = "",
  showCta = true,
  secondary,
  className,
  size = "page",
}: HeroProps) {
  const tall = size === "home";

  return (
    <section
      className={cn(
        "relative isolate flex overflow-hidden bg-ink text-ink-foreground",
        image ? (tall ? "min-h-[78svh]" : "min-h-[62svh]") : "min-h-[38svh]",
        className
      )}
    >
      {image && (
        <>
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0f1a2b] via-[#0f1a2b]/55 to-[#0f1a2b]/10" />
        </>
      )}

      <div className="container mt-auto max-w-screen-2xl pb-12 pt-28 md:pb-16">
        <div className="max-w-4xl space-y-6">
          <h1
            className={cn(
              "display",
              tall ? "text-[3.25rem] sm:text-7xl lg:text-8xl xl:text-[7.5rem]" : "text-5xl sm:text-6xl lg:text-7xl"
            )}
          >
            {title}
          </h1>
          <p className="lede max-w-2xl text-lg text-white/85 sm:text-xl">{subtitle}</p>
          {(showCta || secondary) && (
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              {showCta && (
                <Button size="lg" asChild>
                  <a href={OFFERTE_MAILTO}>Voorstel aanvragen</a>
                </Button>
              )}
              {secondary && (
                <Button size="lg" variant="outlineOnDark" asChild>
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
