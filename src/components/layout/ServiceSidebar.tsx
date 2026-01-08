import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceSidebarProps {
  className?: string;
  showWorkArea?: boolean;
}

export function ServiceSidebar({ className, showWorkArea = true }: ServiceSidebarProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="rounded-2xl border bg-muted/30 p-8 shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Neem direct contact op</h3>
        <p className="text-muted-foreground mb-6">
          Benieuwd wat ik voor uw evenement kan betekenen? Vraag vrijblijvend een offerte aan.
        </p>
        <Button className="w-full" size="lg" asChild>
          <Link href="mailto:ivan@secondshotmedia.nl">Neem contact op</Link>
        </Button>
        <div className="mt-6 text-sm text-muted-foreground">
          <p>Of mail direct naar:</p>
          <a
            href="mailto:ivan@secondshotmedia.nl"
            className="text-primary hover:underline font-medium"
          >
            ivan@secondshotmedia.nl
          </a>
        </div>
      </div>

      {showWorkArea && (
        <div className="rounded-2xl border bg-background p-6">
          <h4 className="font-semibold mb-2">Werkgebied</h4>
          <p className="text-sm text-muted-foreground">
            Actief in heel Midden-Nederland, voor grote opdrachten ook daarbuiten.
          </p>
        </div>
      )}
    </div>
  );
}
