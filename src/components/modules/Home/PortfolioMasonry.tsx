"use client";

import Image from "next/image";

type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  href: string;
};

const IMAGES: PortfolioItem[] = [
  {
    id: "tl1",
    src: "/images/portfolio/tl1.jpg",
    alt: "Creative Meme",
    href: "https://example.com",
  },
  {
    id: "tl2",
    src: "/images/portfolio/tl2.jpg",
    alt: "Funny Meme",
    href: "https://example.com",
  },
  {
    id: "wd1",
    src: "/images/portfolio/wd1.jpg",
    alt: "Utility Project",
    href: "https://example.com",
  },
  {
    id: "bg1",
    src: "/images/portfolio/bg1.jpg",
    alt: "Brand Site",
    href: "https://example.com",
  },
  {
    id: "tl5",
    src: "/images/portfolio/tl5.jpg",
    alt: "Comic Meme",
    href: "https://example.com",
  },
  {
    id: "wd2",
    src: "/images/portfolio/wd2.jpg",
    alt: "Utility Dashboard",
    href: "https://example.com",
  },
  {
    id: "bg3",
    src: "/images/portfolio/bg3.jpg",
    alt: "Crypto Utility",
    href: "https://example.com",
  },
  {
    id: "bg2",
    src: "/images/portfolio/bg2.jpg",
    alt: "Marketing Utility",
    href: "https://example.com",
  },
  {
    id: "tl3",
    src: "/images/portfolio/tl3.jpg",
    alt: "Illustrated Meme",
    href: "https://example.com",
  },
  {
    id: "tl4",
    src: "/images/portfolio/tl4.jpg",
    alt: "Animated Meme",
    href: "https://example.com",
  },
  {
    id: "tl6",
    src: "/images/portfolio/tl6.jpg",
    alt: "Humor Meme",
    href: "https://example.com",
  },
  {
    id: "wd3",
    src: "/images/portfolio/wd3.jpg",
    alt: "Portfolio Site",
    href: "https://example.com",
  },
];

export default function PortfolioMasonry(): React.ReactElement {
  // Split evenly into 4 columns for a masonry-like grid
  const columns: PortfolioItem[][] = [[], [], [], []];
  IMAGES.forEach((img, i) => columns[i % 4].push(img));

  return (
    <section className="bg-[#0B0710] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-3 text-white">
          Our Works
        </h2>
        <p className="text-center text-white/70 mb-14">
          A handpicked selection of recent projects — clean builds, fast
          performance, and designs that convert.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {columns.map((col: PortfolioItem[], colIndex: number) => (
            <div key={colIndex} className="grid gap-4">
              {col.map((item: PortfolioItem) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-xl"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={600}
                    className="h-auto w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#5c63fa]/80 to-[#a868fa]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold text-lg">
                      {item.alt}
                    </h3>
                    <span className="mt-2 inline-flex items-center rounded-full bg-white text-neutral-900 px-4 py-1.5 text-sm font-medium shadow-md">
                      View Project →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
