import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL } from "@/lib/site";

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
          Benieuwd wat wij voor uw project kunnen betekenen? Vraag vrijblijvend een offerte aan.
        </p>
        <Button className="w-full" size="lg" asChild>
          <Link href="/over-en-contact/">Neem contact op</Link>
        </Button>
        <div className="mt-6 text-sm text-muted-foreground">
          <p>Of mail direct naar:</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-medium">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      {showWorkArea && (
        <div className="rounded-2xl border bg-background p-6">
          <h4 className="font-semibold mb-2">Locatie</h4>
          <p className="text-sm text-muted-foreground">
            Gevestigd in Utrecht · Actief in heel Nederland
          </p>
        </div>
      )}
    </div>
  );
}
