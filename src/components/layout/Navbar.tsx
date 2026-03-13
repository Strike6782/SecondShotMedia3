"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

type NavItem = {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    name: "Evenementen fotografie",
    href: "/evenementen-fotograaf/",
    children: [
      { name: "Festival fotografie", href: "/festival-fotografie/" },
      { name: "Club fotografie", href: "/clubfotografie/" },
      { name: "Gala fotografie", href: "/gala-fotografie/" },
      { name: "Zakelijk evenement fotografie", href: "/zakelijke-evenementen/" },
    ],
  },
  {
    name: "Evenementen videografie",
    href: "/evenementen-videograaf/",
  },
  {
    name: "Social content",
    href: "/social-content-leisure/",
  },
  {
    name: "Contact",
    href: "/contact/",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-[9999] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Second Shot <span className="text-primary">Media</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex xl:items-center xl:gap-x-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  prefetch={false}
                  className={cn(
                    "inline-flex items-center text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
                <div className="pointer-events-auto opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-150 absolute left-0 top-full pt-2">
                  <div className="rounded-md border bg-background shadow-lg min-w-[240px]">
                    <div className="flex flex-col py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          prefetch={false}
                          className={cn(
                            "px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                            pathname === child.href && "text-foreground bg-muted"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={cn(
                  "inline-flex items-center text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden xl:flex items-center gap-4">
          {/* Placeholder for future actions */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-b bg-background"
          >
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <div key={item.href} className="flex flex-col space-y-2">
                  <Link
                    href={item.href}
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 flex flex-col space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          prefetch={false}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-sm text-muted-foreground hover:text-primary",
                            pathname === child.href && "text-foreground"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="/contact/" onClick={() => setIsOpen(false)}>Offerte Aanvragen</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
