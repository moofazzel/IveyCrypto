"use client";

import { Menu as MenuIcon, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { slide as BurgerMenu } from "react-burger-menu";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <div
            className="h-9 w-9 rounded-xl"
            style={{ background: "var(--cryp-gradient)" }}
          />
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

        {/* Right side CTA — Gradient ring by default, fill on hover */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+19179003111"
            className="group relative inline-flex items-center rounded-full p-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            style={{ background: "var(--cryp-gradient)" }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white/90 transition-all
                         bg-black group-hover:bg-[length:100%_100%] group-hover:text-white"
              style={{
                background: "linear-gradient(#0b0b0c,#0b0b0c)", // inner dark by default
              }}
            >
              <Phone size={18} />
              <span className="tracking-wide">917 900 3111</span>
            </span>

            {/* On hover, flood fill with same gradient */}
            <style jsx>{`
              .group:hover span {
                background: var(--cryp-gradient) !important;
              }
            `}</style>
          </a>
        </div>

        {/* Mobile toggle (burger-menu handles the UI) */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 text-white lg:hidden"
        >
          <MenuIcon />
        </button>
      </nav>

      {/* Mobile menu with react-burger-menu */}
      <BurgerMenu
        right
        isOpen={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        customBurgerIcon={false}
        customCrossIcon={<X color="#fff" />}
        width={"85%"}
      >
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile CTA — same gradient ring & hover fill */}
          <a
            href="tel:+19179003111"
            className="group mt-3 inline-flex items-center justify-center rounded-full p-[2px]"
            style={{ background: "var(--cryp-gradient)" }}
          >
            <span
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-white/90 transition-all"
              style={{ background: "linear-gradient(#0b0b0c,#0b0b0c)" }}
            >
              <Phone size={18} />
              917 900 3111
            </span>
            <style jsx>{`
              .group:hover span {
                background: var(--cryp-gradient) !important;
                color: #fff;
              }
            `}</style>
          </a>
        </div>
      </BurgerMenu>
    </header>
  );
}
