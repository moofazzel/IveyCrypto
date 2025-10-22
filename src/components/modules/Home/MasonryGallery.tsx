"use client";

import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Category = "all" | "memes" | "utility";
type Item = {
  id: string;
  src: string;
  alt?: string;
  cat: Exclude<Category, "all">;
};

// ✅ Keep only 7–8 items
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
  { id: "tl3", src: "/images/portfolio/tl3.jpg", alt: "tall 3", cat: "memes" },
  {
    id: "wd2",
    src: "/images/portfolio/wd2.jpg",
    alt: "wide 2",
    cat: "utility",
  },
  { id: "bg2", src: "/images/portfolio/bg2.jpg", alt: "big 2", cat: "utility" },
  { id: "bg3", src: "/images/portfolio/bg3.jpg", alt: "big 3", cat: "memes" },
];

type MasonryInstance = {
  layout: () => void;
  destroy: () => void;
} & Masonry;

export default function MasonryGallery() {
  const [active, setActive] = useState<Category>("all");
  console.log(setActive);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const msnryRef = useRef<Masonry | null>(null);

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

    // Disable Masonry below md for a simple stacked flow
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
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
    // Reflow after any class change
    setTimeout(() => safeLayout(), 0);
  };

  return (
    <div className="w-full bg-[#0B0710]">
      <div className="mx-auto max-w-[1405px] px-4 md:px-6">
        {/* Header + absolutely-positioned CTA */}
        <div className="relative">
          <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-3 text-white">
            Our Works
          </h2>
          <p className="text-center text-white/70 mb-14">
            A handpicked selection of recent projects—clean builds, fast
            performance, and designs that convert.
          </p>

          {/* 🔘 View All Projects button (in the pointed right-side space) */}
        </div>

        {/* Masonry Grid */}
        <div
          ref={gridRef}
          id="container"
          className="w-full px-2 sm:px-3 pb-10 relative mt-[40px]"
        >
          <div className="text-right absolute right-[28px] top-[-43px] w-[205px]">
            <Link
              href="/portfolio"
              className="hidden md:inline-flex items-center gap-2 absolute right-0 top-[14px] -translate-y-1/2
                       rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white
                       backdrop-blur hover:bg-white/10 transition-colors"
            >
              View All Works
            </Link>
          </div>
          {/* Column sizer:
              - mobile: full width
              - sm: 2 columns
              - lg: 3 columns */}
          <div className="grid-sizer w-full sm:w-1/2 lg:w-1/3" />

          {filtered.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <figure
                key={item.id}
                className={[
                  "grid-item",
                  "w-full sm:w-1/2 lg:w-[32%]",
                  isExpanded ? "scale-[1.01]" : "scale-100",
                  "cursor-pointer overflow-hidden transition-transform duration-200",
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
    </div>
  );
}
