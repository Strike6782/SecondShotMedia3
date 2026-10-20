"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { branches } from "@/lib/branches";
import { OFFERTE_MAILTO } from "@/lib/site";

const staticNavItems = [
  { name: "Werkwijze", href: "/werkwijze/" },
  { name: "Over ons", href: "/over-en-contact/" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [...branches.map((b) => ({ name: b.navLabel, href: b.href })), ...staticNavItems];
  const isActive = (href: string) => pathname === href || pathname === href.slice(0, -1);

  return (
    <nav className="sticky top-0 z-[9999] w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Second Shot Media, naar de homepage">
          <Image
            src="/images/logo-wordmark.png"
            alt=""
            width={409}
            height={185}
            priority
            className="h-9 w-auto dark:hidden"
          />
          <span className="heading hidden text-xl dark:inline">Second Shot Media</span>
        </Link>

        <div className="ml-auto hidden lg:flex lg:items-center lg:gap-x-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "text-[15px] font-medium transition-colors hover:text-foreground",
                isActive(item.href)
                  ? "text-foreground underline decoration-primary decoration-2 underline-offset-[10px]"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button size="sm" asChild>
            <a href={OFFERTE_MAILTO}>Voorstel aanvragen</a>
          </Button>
        </div>

        <button
          className="lg:hidden -mr-2 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "heading border-b border-border py-3 text-2xl last:border-b-0",
                  isActive(item.href) ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-4 mb-2" size="lg" asChild>
              <a href={OFFERTE_MAILTO} onClick={() => setIsOpen(false)}>
                Voorstel aanvragen
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
