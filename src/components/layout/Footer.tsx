import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40 text-muted-foreground">
      <div className="container py-10 md:py-16 max-w-screen-2xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-foreground">Second Shot Media</h3>
            <p className="text-sm leading-relaxed">
              Professionele evenementenfotografie en videografie. Ik leg de sfeer, energie en momenten vast die jouw event onvergetelijk maken.
            </p>
            <p className="text-sm text-foreground font-medium italic">
              "Elk bijzonder moment verdient een tweede kans om te schitteren"
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Diensten</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/evenementen-fotograaf" className="hover:text-foreground">Evenementen Fotograaf</Link></li>
              <li><Link href="/evenementen-videograaf" className="hover:text-foreground">Evenementen Videograaf</Link></li>
              <li><Link href="/clubfotografie" className="hover:text-foreground">Club & Nightlife</Link></li>
              <li><Link href="/studentenverenigingen" className="hover:text-foreground">Studentenverenigingen</Link></li>
              <li><Link href="/zakelijke-evenementen" className="hover:text-foreground">Zakelijk</Link></li>
              <li><Link href="/attractieparken" className="hover:text-foreground">Attractieparken</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Socials</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="https://instagram.com/secondshotmedia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ivan-balkenende/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Email: <a href="mailto:ivan@secondshotmedia.nl" className="text-foreground hover:underline">ivan@secondshotmedia.nl</a></li>
              <li>Instagram: <a href="https://instagram.com/secondshotmedia" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">@secondshotmedia</a></li>
              <li>KvK: 92016421</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Second Shot Media. Alle rechten voorbehouden.</p>
          <div className="flex gap-4">
            <Link href="/algemene-voorwaarden" className="hover:text-foreground transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
