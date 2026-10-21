import Image from "next/image";
import type { BranchLogo } from "@/lib/types";
import { cn } from "@/lib/utils";

// Client logos on equal tiles so wide and square logos read at the same weight.
export function ClientLogoGrid({ logos }: { logos: BranchLogo[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {logos.map((logo) => (
        <li
          key={logo.src}
          className={cn(
            "flex h-32 items-center justify-center border border-border p-5",
            logo.dark ? "bg-ink" : "bg-white"
          )}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={100}
            className="max-h-20 w-auto max-w-full object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
