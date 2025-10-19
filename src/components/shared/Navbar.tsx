"use client";

import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "fixed bg-black/70 backdrop-blur-md shadow-lg" : "absolute"
      } left-0 top-0 z-50 w-full transition-all`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-cryp-gradient" />
          <span className="text-xl font-semibold tracking-tight text-white">
            Cryp
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-white/80 hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+19179003111"
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            <Phone size={16} />
            917 900 3111
          </a>
          <Link href="#consult" className="btn-gradient text-sm">
            Book a Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen((s) => !s)}
          className="rounded-lg p-2 text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        } overflow-hidden border-t border-white/10 transition-[max-height] duration-300`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
          <ul className="grid gap-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href="tel:+19179003111"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-white/90"
            >
              <Phone size={16} />
              917 900 3111
            </a>
            <Link href="#consult" className="btn-gradient flex-1">
              Free Consult
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
