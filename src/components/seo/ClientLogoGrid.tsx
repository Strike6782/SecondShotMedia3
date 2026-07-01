import Image from "next/image";
import type { BranchLogo } from "@/lib/types";

// Client logo grid with consistent sizing so wide logos stay inside their box.
export function ClientLogoGrid({ logos }: { logos: BranchLogo[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 items-stretch">
      {logos.map((logo) => (
        <div
          key={logo.src}
          className="flex h-[132px] w-full items-center justify-center overflow-hidden rounded-xl border bg-muted/60 p-4"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={120}
            className="max-h-[100px] max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
