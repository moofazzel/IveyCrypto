// app/(site)/components/PortfolioGallery.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Category = "all" | "memes" | "utility";

type Item = {
  id: string;
  src: string;
  title: string; // shown on card
  blurb: string; // subtitle on card
  cat: Exclude<Category, "all">;
  href?: string;
};

const ITEMS: Item[] = [
  // ----- bg* (memes landing pages) -----
  {
    id: "bg1",
    src: "/images/portfolio/bg1.jpg",
    title: "Marutaru",
    blurb:
      "Playful meme-coin landing with tokenomics, roadmap, and a clear CTA.",
    cat: "memes",
    href: "https://marutaru.vercel.app/",
  },
  {
    id: "bg2",
    src: "/images/portfolio/bg2.jpg",
    title: "Harambe",
    blurb:
      "High-contrast presale page themed around Harambe with roadmap, FAQ, and mint CTA.",
    cat: "memes",
    href: "https://harambe-tawny.vercel.app/",
  },
  {
    id: "bg3",
    src: "/images/portfolio/bg3.jpg",
    title: "Papi",
    blurb:
      "Two-column meme site featuring About, tokenomics, and social links.",
    cat: "memes",
    href: "https://papi-3.vercel.app/",
  },

  // ----- tl* (memes/creative) -----
  {
    id: "tl1",
    src: "/images/portfolio/tl1.jpg",
    title: "Decopin",
    blurb: "Retro pixel-art homepage with side-scroll vibe and chunky CTAs.",
    cat: "memes",
    href: "https://decopin.vip/",
  },
  {
    id: "tl2",
    src: "/images/portfolio/tl2.jpg",
    title: "Aster Boy",
    blurb:
      "Dark, sci-fi landing with character panels, hero section, and strong CTA.",
    cat: "utility",
    href: "https://astarboy.vercel.app/",
  },
  {
    id: "tl3",
    src: "/images/portfolio/tl3.jpg",
    title: "ABS CHAD",
    blurb:
      "Bold green community meme one-pager with token highlights and socials.",
    cat: "memes",
    href: "https://abstractchad.xyz/",
  },
  {
    id: "tl4",
    src: "/images/portfolio/tl4.jpg",
    title: "Uzu Chan",
    blurb:
      "Black/orange brand microsite with product-style sections and clear CTAs.",
    cat: "memes",
    href: "https://www.uzuchan.vip/",
  },
  {
    id: "tl5",
    src: "/images/portfolio/tl5.jpg",
    title: "BASETET",
    blurb:
      "Playful Base-themed showcase with 3D-style card grid and shop feel.",
    cat: "memes",
    href: "https://basetet.vercel.app/",
  },
  {
    id: "tl6",
    src: "/images/portfolio/tl6.jpg",
    title: "Poppy the Hippo",
    blurb: "Whimsical desert-themed landing with character card and mint CTA.",
    cat: "memes",
    href: "https://www.poppythehippo.fun/",
  },

  // ----- wd* (utility: web/app/dashboards) -----
  {
    id: "wd1",
    src: "/images/portfolio/wd1.jpg",
    title: "Ethernet Dev",
    blurb:
      "Developer UI for wallet connect, network switch, and transaction states.",
    cat: "utility",
    href: "https://ethernet-dev.vercel.app/",
  },
  {
    id: "wd2",
    src: "/images/portfolio/wd2.jpg",
    title: "Rhino Ninja",
    blurb:
      "Game lobby interface with server list, status indicators, and map rotation.",
    cat: "utility",
    href: "https://rhino.ninja/",
  },
  {
    id: "wd3",
    src: "/images/portfolio/wd3.jpg",
    title: "Ignis AI",
    blurb:
      "AI brand landing with illustration hero and feature/promo sections.",
    cat: "utility",
    href: "https://ignis-iota.vercel.app/",
  },
];

const TABS: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "memes", label: "Memes" },
  { id: "utility", label: "Utility" },
];

// pill tags like your Featured cards
const TAGS_BY_ID: Record<string, string[]> = {
  // utility / web builds
  bg1: ["Next.js", "Tailwind", "Tokenomics"],
  bg2: ["Next.js", "CRO", "SEO"],
  bg3: ["Next.js", "Design", "Brand"],
  wd1: ["Web3", "WalletConnect", "Ethers.js"],
  wd2: ["UI/UX", "Game UI", "Dark Mode"],
  wd3: ["Illustration", "Brand", "Assets"],

  // memes / creative
  tl1: ["Pixel Art", "Retro", "Layout"],
  tl2: ["Cinematic", "Promo", "Dark UI"],
  tl3: ["Minimal", "Community", "Landing"],
  tl4: ["Storefront", "Grid", "CTA"],
  tl5: ["3D Cards", "Marketplace", "UI"],
  tl6: ["Character", "Teaser", "Mint"],
};

export default function PortfolioGallery() {
  const [active, setActive] = useState<Category>("all");
  const items = useMemo(
    () => (active === "all" ? ITEMS : ITEMS.filter((i) => i.cat === active)),
    [active]
  );

  return (
    <section className="w-full bg-[#0B0710]">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20">
        {/* Header */}
        <header className="mb-8 md:mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Our Projects
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-3">
            A handpicked selection of recent work — clean builds, fast
            performance, and designs that convert.
          </p>
        </header>

        {/* Tabs */}
        <div className="w-full text-center mb-8">
          <ul className="inline-flex w-auto gap-2 rounded-full bg-neutral-800 p-1">
            {TABS.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => setActive(t.id)}
                  className={[
                    "whitespace-nowrap rounded-[30px] px-[22px] md:px-[30px] py-2 text-[15px] md:text-[16px] font-medium transition-all duration-200 cursor-pointer",
                    active === t.id
                      ? "bg-gradient-to-r from-[#5c63fa] to-[#a868fa] text-white shadow-[0_0_15px_rgba(92,99,250,0.35)]"
                      : "text-neutral-200 hover:bg-neutral-700/80",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 justify-items-center">
          {items.map((it) => {
            const techs = TAGS_BY_ID[it.id] ?? [];
            const CardInner = (
              <>
                {/* equal visual width & height via aspect wrapper */}
                <div className="relative w-full aspect-[16/10] overflow-hidden">
                  <Image
                    src={it.src}
                    alt={it.title}
                    fill
                    className="object-cover transition-transform duration-500 "
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 44vw, 28vw"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-black/60 text-white/90 text-xs px-2 py-1 border border-white/10">
                    {it.cat}
                  </span>
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">{it.blurb}</p>

                  {/* tech tags */}
                  {techs.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {techs.map((t) => (
                        <li
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/80"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {/* CTA */}
                  <div className="mt-5">
                    {it.href ? (
                      <span
                        className="btn-hover grad_button inline-flex items-center rounded-full px-4 py-2 text-sm  text-white shadow-[0_8px_24px_rgba(92,99,250,0.35)] transition-all duration-500 ease-in-out w-[136px] text-center justify-center h-[50px]"
                        style={{
                          fontSize: "17px",
                          height: "48px",
                          marginTop: "6px",
                        }}
                      >
                        View live
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/80">
                        Private / NDA
                      </span>
                    )}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 opacity-0  transition-opacity duration-300 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              </>
            );

            return (
              <article
                key={it.id}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm w-full max-w-[420px]"
              >
                {it.href ? (
                  <Link href={it.href} target="_blank" aria-label={it.title}>
                    {CardInner}
                  </Link>
                ) : (
                  CardInner
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
