"use client";

import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import { useEffect, useMemo, useRef, useState } from "react";

type Category = "all" | "newYork" | "flowers" | "others";
type Item = {
  id: string;
  src: string;
  alt?: string;
  cat: Exclude<Category, "all">;
};

// Unsplash images (stable URLs)
const ITEMS: Item[] = [
  // Flowers
  {
    id: "f1",
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop",
    alt: "Sunflower",
    cat: "flowers",
  },
  {
    id: "f2",
    src: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1600&auto=format&fit=crop",
    alt: "Blossoms",
    cat: "flowers",
  },
  {
    id: "f3",
    src: "https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?q=80&w=1600&auto=format&fit=crop",
    alt: "Butterfly on flower",
    cat: "flowers",
  },
  {
    id: "f4",
    src: "https://images.unsplash.com/photo-1465127684370-8e2b0c4a3eeb?q=80&w=1600&auto=format&fit=crop",
    alt: "Bee on flower",
    cat: "flowers",
  },
  {
    id: "f5",
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1600&auto=format&fit=crop",
    alt: "Close-up",
    cat: "flowers",
  },
  {
    id: "f6",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
    alt: "Red flower",
    cat: "flowers",
  },

  // New York
  {
    id: "ny1",
    src: "https://images.unsplash.com/photo-1468436385273-8abca6dfd8d1?q=80&w=1600&auto=format&fit=crop",
    alt: "NYC building",
    cat: "newYork",
  },
  {
    id: "ny2",
    src: "https://images.unsplash.com/photo-1448317971280-6c74e016e49c?q=80&w=1600&auto=format&fit=crop",
    alt: "NYC skyline",
    cat: "newYork",
  },
  {
    id: "ny3",
    src: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1600&auto=format&fit=crop",
    alt: "Hudson tanker",
    cat: "newYork",
  },
  {
    id: "ny4",
    src: "https://images.unsplash.com/photo-1488747279002-c8523379faaa?q=80&w=1600&auto=format&fit=crop",
    alt: "NY street",
    cat: "newYork",
  },
  {
    id: "ny5",
    src: "https://images.unsplash.com/photo-1511216335778-7cb1b78a5571?q=80&w=1600&auto=format&fit=crop",
    alt: "Grace Building",
    cat: "newYork",
  },
  {
    id: "ny6",
    src: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=1600&auto=format&fit=crop",
    alt: "Little Red Lighthouse",
    cat: "newYork",
  },

  // Others
  {
    id: "o1",
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop",
    alt: "Highway long exposure",
    cat: "others",
  },
  {
    id: "o2",
    src: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1600&auto=format&fit=crop",
    alt: "Red mill B&W",
    cat: "others",
  },
  {
    id: "o3",
    src: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1600&auto=format&fit=crop",
    alt: "Neon sign",
    cat: "others",
  },
];

const TABS: { id: Category; label: string }[] = [
  { id: "all", label: "All Images" },
  { id: "newYork", label: "New York City" },
  { id: "flowers", label: "Flowers" },
  { id: "others", label: "Other" },
];

// Define instance type (ensures layout/destroy exist)
type MasonryInstance = {
  layout: () => void;
  destroy: () => void;
} & Masonry;

export default function MasonryGallery() {
  const [active, setActive] = useState<Category>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const gridRef = useRef<HTMLDivElement | null>(null);
  const msnryRef = useRef<Masonry | null>(null);

  // Safe helpers (no `any`)
  const safeLayout = (): void => {
    const inst = msnryRef.current as MasonryInstance | null;
    if (inst && typeof inst.layout === "function") inst.layout();
  };
  const safeDestroy = (): void => {
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

    const imgLoad = imagesLoaded(grid);

    const onAll = () => {
      // re-init Masonry every time images for current tab are confirmed
      safeDestroy();
      msnryRef.current = new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
        transitionDuration: "0.2s",
        // IMPORTANT: remove gutter so 3 columns fill 100% (no right gap)
        // gutter: 16,
        fitWidth: false, // keep full-bleed container
      });
      // After init, layout once more for safety
      safeLayout();
    };

    imgLoad.on("always", onAll);

    const onResize = () => safeLayout();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      imgLoad.off("always", onAll); // TS-safe off()
      safeDestroy();
      msnryRef.current = null;
    };
  }, [filtered]);

  const onItemClick = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
    setTimeout(() => safeLayout(), 0);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <header className="w-full px-4 pt-8 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Testing Masonry — Cascading grid layout library
        </h1>
        <p className="text-neutral-300">
          Images by{" "}
          <a
            href="https://www.instagram.com/dan10gc/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-indigo-300"
          >
            Daniel Gonzalez
          </a>
        </p>
      </header>

      {/* Tabs (full-bleed, left-aligned) */}
      <div className="w-full px-4 pb-4">
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
                  "whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium",
                  active === t.id
                    ? "bg-white text-neutral-900"
                    : "text-neutral-200 hover:bg-neutral-700/80",
                ].join(" ")}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Masonry Grid — FULL BLEED */}
      <div
        ref={gridRef}
        id="container"
        className="w-full bg-[#333] px-2 sm:px-3 pb-10"
      >
        {/* grid-sizer controls the column base width at breakpoints */}
        <div className="grid-sizer w-full sm:w-1/2 lg:w-1/3" />

        {filtered.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <figure
              key={item.id}
              className={[
                "grid-item",
                // 1 col (mobile) → 2 cols (sm) → 3 cols (lg)
                isExpanded
                  ? "w-full sm:w-full md:w-[30%]"
                  : "w-full sm:w-full md:w-[30%]",
                "cursor-pointer overflow-hidden",
              ].join(" ")}
              onClick={() => onItemClick(item.id)}
            >
              {/* Inner padding creates visual “gutter” without breaking Masonry math */}
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
  );
}
