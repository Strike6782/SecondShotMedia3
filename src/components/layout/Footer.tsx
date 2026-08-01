import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { branches } from "@/lib/branches";
import { CONTACT_EMAIL, CONTACT_INSTAGRAM, CONTACT_LINKEDIN, KVK } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 text-muted-foreground">
      <div className="container py-10 md:py-16 max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-foreground">Second Shot Media</h3>
            <p className="text-sm leading-relaxed">
              Content Agency voor fotografie en videografie. Gevestigd in Utrecht, actief door heel Nederland.
            </p>
            <p className="text-sm text-foreground font-medium italic">
              &quot;Elk bijzonder moment verdient een tweede kans om te schitteren&quot;
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Diensten</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {branches.map((branch) => (
                <li key={branch.slug}>
                  <Link href={branch.href} className="hover:text-foreground">
                    {branch.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Agency</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/over-en-contact/" className="hover:text-foreground">
                  Over en contact
                </Link>
              </li>
              <li>
                <Link href="/werkgebied/" className="hover:text-foreground">
                  Werkgebied
                </Link>
              </li>
              <li>
                <Link href="/werken-bij/" className="hover:text-foreground">
                  Werken bij
                </Link>
              </li>
              <li>
                <a href={CONTACT_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href={CONTACT_LINKEDIN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                E-mail:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>Gevestigd in Utrecht</li>
              <li>Actief in heel Nederland</li>
              <li>KvK: {KVK}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Second Shot Media. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <Link href="/algemene-voorwaarden/" className="hover:text-foreground transition-colors">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
