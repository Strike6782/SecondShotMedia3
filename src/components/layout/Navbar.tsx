"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { branches } from "@/lib/branches";

const staticNavItems = [
  { name: "Over en contact", href: "/over-en-contact/" },
  { name: "Werken bij", href: "/werken-bij/" },
];

const CONTACT_FORM_HREF = "/over-en-contact/#contact";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // On the about page, scroll directly to the contact form instead of reloading.
  const handleOfferteClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isOnContactPage =
      pathname === "/over-en-contact" || pathname === "/over-en-contact/";

    if (isOnContactPage) {
      event.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    ...branches.map((b) => ({ name: b.navLabel, href: b.href })),
    ...staticNavItems,
  ];

  return (
    <nav className="sticky top-0 z-[9999] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Second Shot <span className="text-primary">Media</span>
          </span>
        </Link>

        <div className="ml-auto hidden xl:flex xl:items-center xl:gap-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href || pathname === item.href.slice(0, -1)
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" asChild>
            <Link href={CONTACT_FORM_HREF} onClick={handleOfferteClick}>
              Offerte aanvragen
            </Link>
          </Button>
        </div>

        <button
          className="xl:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t bg-background"
          >
            <div className="container flex flex-col gap-2 py-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-2" asChild>
                <Link href={CONTACT_FORM_HREF} onClick={handleOfferteClick}>
                  Offerte aanvragen
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
