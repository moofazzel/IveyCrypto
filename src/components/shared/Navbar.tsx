"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import GradientButton from "./GradientButton";

const NAV_LINKS = [
  { href: "/", label: "Home" },

  { href: "/portfolio", label: "Portfolio" },
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

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  return (
    <header
      className={`${
        scrolled
          ? "fixed bg-black/70 backdrop-blur-md shadow-lg pt-0"
          : "absolute"
      } left-0 top-0 z-50 w-full transition-all `}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-[linear-gradient(to_right,#5c63fa,#a868fa,#3dabf4,#5c63fa)]" />
          <span className="text-xl font-semibold tracking-tight text-white">
            Ivey Solutions
          </span>
        </Link>

        {/* Right Side — Nav Links + CTA */}
        <div className="md:flex items-center gap-7 hidden">
          {/* Nav Links */}
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[18px] font-medium text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="tglink">
            <GradientButton className="w-[160px]">
              <div className="flex items-center justify-center gap-3">
                <span className="tracking-wide">Let&apos;s Talk</span>
              </div>
            </GradientButton>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-white lg:hidden"
        >
          <Menu />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ease-out lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Right slide drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-[#d9bb79] text-black shadow-xl
        transition-transform duration-300 ease-out will-change-transform lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <h3 className="text-lg font-semibold">Menu</h3>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-sm border border-black/30"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-6">
          <ul className="space-y-6">
            {NAV_LINKS.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block text-[17px] leading-none ${
                    i === 0 ? "text-[#3B82F6] font-medium" : "text-black"
                  } hover:underline underline-offset-4`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* BOOK NOW */}
          <div className="pt-8">
            <Link href="tglink">
              <GradientButton className="w-[170px]">
                <div className="flex items-center justify-center gap-3">
                  <span className="tracking-wide">Let&apos;s Talk</span>
                </div>
              </GradientButton>
            </Link>
          </div>
        </nav>
      </aside>
    </header>
  );
}
