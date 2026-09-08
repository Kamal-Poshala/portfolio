"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[var(--hairline)] bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] backdrop-blur-md"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-tight text-[var(--ink)]">
          Kamal Poshala
        </Link>

        <div className="hidden items-center gap-7 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/resume"
            className="rounded-md border border-[var(--hairline)] px-3 py-1.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
          >
            Résumé
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--muted)]"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--hairline)] bg-[var(--paper)] px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-[var(--muted)] hover:bg-[var(--surface-2)] hover:text-[var(--ink)]"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/resume"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm text-[var(--ink)] hover:bg-[var(--surface-2)]"
            >
              Résumé
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
