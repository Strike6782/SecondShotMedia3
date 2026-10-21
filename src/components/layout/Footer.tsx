import Link from "next/link";
import { branches } from "@/lib/branches";
import { BTW_ID, CONTACT_EMAIL, CONTACT_INSTAGRAM, CONTACT_LINKEDIN, KVK, OFFERTE_MAILTO } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-ink-foreground">
      <div className="container max-w-screen-2xl py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-5">
            <p className="display text-4xl md:text-5xl">Second Shot Media</p>
            <p className="max-w-sm text-ink-muted leading-relaxed">
              Foto en video voor zakelijke events, bedrijfsfeesten, festivals en pretparken. Gevestigd in Utrecht, actief
              door heel Nederland.
            </p>
            <a
              href={OFFERTE_MAILTO}
              className="inline-block text-lg font-semibold underline decoration-primary decoration-2 underline-offset-8 hover:decoration-4"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h2 className="font-semibold">Events</h2>
            <ul className="space-y-2 text-ink-muted">
              {branches.map((branch) => (
                <li key={branch.slug}>
                  <Link href={branch.href} className="hover:text-ink-foreground">
                    {branch.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h2 className="font-semibold">Second Shot Media</h2>
            <ul className="space-y-2 text-ink-muted">
              <li>
                <Link href="/werkwijze/" className="hover:text-ink-foreground">
                  Werkwijze
                </Link>
              </li>
              <li>
                <Link href="/over-en-contact/" className="hover:text-ink-foreground">
                  Over ons en contact
                </Link>
              </li>
              <li>
                <Link href="/werkgebied/" className="hover:text-ink-foreground">
                  Werkgebied
                </Link>
              </li>
              <li>
                <Link href="/werken-bij/" className="hover:text-ink-foreground">
                  Werken bij
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h2 className="font-semibold">Volg ons</h2>
            <ul className="space-y-2 text-ink-muted">
              <li>
                <a href={CONTACT_LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-ink-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={CONTACT_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-ink-foreground">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-ink-muted sm:flex-row sm:justify-between">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Second Shot Media, Utrecht. KvK {KVK}. Btw-id {BTW_ID}
          </p>
          <Link href="/algemene-voorwaarden/" className="hover:text-ink-foreground">
            Algemene voorwaarden
          </Link>
        </div>
      </div>
    </footer>
  );
}
