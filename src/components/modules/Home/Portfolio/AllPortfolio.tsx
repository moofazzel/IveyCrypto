"use client";

import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import { useEffect, useMemo, useRef, useState } from "react";

type Category = "all" | "memes" | "utility";
type Item = {
  id: string;
  src: string;
  alt?: string;
  cat: Exclude<Category, "all">;
};

// Local images (mapped by your naming guide: tl* → memes, wd*/bg*/screencap → utility)
const ITEMS: Item[] = [
  { id: "tl1", src: "/images/portfolio/tl1.jpg", alt: "tall 1", cat: "memes" },
  { id: "tl2", src: "/images/portfolio/tl2.jpg", alt: "tall 2", cat: "memes" },
  {
    id: "wd1",
    src: "/images/portfolio/wd1.jpg",
    alt: "wide 1",
    cat: "utility",
  },
  { id: "bg1", src: "/images/portfolio/bg1.jpg", alt: "big 1", cat: "utility" },
  { id: "tl5", src: "/images/portfolio/tl5.jpg", alt: "tall 5", cat: "memes" },
  {
    id: "wd2",
    src: "/images/portfolio/wd2.jpg",
    alt: "wide 2",
    cat: "utility",
  },
  { id: "bg3", src: "/images/portfolio/bg3.jpg", alt: "big 3", cat: "utility" },
  { id: "bg2", src: "/images/portfolio/bg2.jpg", alt: "big 2", cat: "utility" },
  { id: "tl3", src: "/images/portfolio/tl3.jpg", alt: "tall 3", cat: "memes" },

  { id: "tl4", src: "/images/portfolio/tl4.jpg", alt: "tall 4", cat: "memes" },
  { id: "tl6", src: "/images/portfolio/tl6.jpg", alt: "tall 6", cat: "memes" },
  {
    id: "wd3",
    src: "/images/portfolio/wd3.jpg",
    alt: "wide 3",
    cat: "utility",
  },
];

const TABS: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "memes", label: "Memes" },
  { id: "utility", label: "Utility" },
];

// Instance type to satisfy TS when calling layout()/destroy()
type MasonryInstance = {
  layout: () => void;
  destroy: () => void;
} & Masonry;

export default function AllPortfolio() {
  const [active, setActive] = useState<Category>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const msnryRef = useRef<Masonry | null>(null);

  // Safe helpers
  const safeLayout = () => {
    const inst = msnryRef.current as MasonryInstance | null;
    if (inst && typeof inst.layout === "function") inst.layout();
  };
  const safeDestroy = () => {
    const inst = msnryRef.current as MasonryInstance | null;
    if (inst && typeof inst.destroy === "function") inst.destroy();
  };

  const filtered = useMemo(
    () => (active === "all" ? ITEMS : ITEMS.filter((i) => i.cat === active)),
    [active]
  );

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const isMobile = window.innerWidth < 768; // Tailwind 'md' breakpoint
    if (isMobile) {
      // Disable Masonry on phones for simpler flow
      safeDestroy();
      msnryRef.current = null;
      return;
    }

    const imgLoad = imagesLoaded(grid);

    const onAll = () => {
      safeDestroy();
      msnryRef.current = new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
        transitionDuration: "0.2s",
        fitWidth: false,
      });
      safeLayout();
    };

    imgLoad.on("always", onAll);
    const onResize = () => safeLayout();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      imgLoad.off("always", onAll);
      safeDestroy();
      msnryRef.current = null;
    };
  }, [filtered]);

  const onItemClick = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
    setTimeout(() => safeLayout(), 0);
  };

  return (
    <div className="w-full bg-[#0B0710] md:py-20 py-16">
      <div className="mx-auto max-w-[1405px] px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-3 text-white">
          Our Works
        </h2>
        <p className="text-center text-white/70 mb-14">
          A handpicked selection of recent projects—clean builds, fast
          performance, and designs that convert.{" "}
        </p>
        <div className="w-full px-4 pt-6 pb-4 text-center">
          <ul className="inline-flex w-auto gap-2 rounded-lg bg-neutral-800 p-1">
            {TABS.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => {
                    setExpandedId(null);
                    setActive(t.id);
                    setTimeout(() => safeLayout(), 0);
                  }}
                  className={[
                    "whitespace-nowrap rounded-[30px] px-[35px] py-2 text-[16px] font-medium transition-all duration-200 cursor-pointer",
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

        {/* Masonry Grid (full width) */}
        <div ref={gridRef} id="container" className="w-full px-2 sm:px-3 pb-10">
          {/* Base column size: 1col (mobile) → 2col (sm) → 3col (lg) */}
          <div className="grid-sizer w-full sm:w-1/2 lg:w-1/3" />

          {filtered.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <figure
                key={item.id}
                className={[
                  "grid-item",
                  isExpanded
                    ? "w-full sm:w-full md:w-[32%]"
                    : "w-full sm:w-full md:w-[32%]",
                  "cursor-pointer overflow-hidden",
                ].join(" ")}
                onClick={() => onItemClick(item.id)}
              >
                <div className="p-2">
                  <img
                    src={item.src}
                    alt={item.alt ?? ""}
                    className="block w-full select-none rounded-md border-[10px] border-white sm:border-[8px]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </div>
      {/* Tabs */}
    </div>
  );
}
