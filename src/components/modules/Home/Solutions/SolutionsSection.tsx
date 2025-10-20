// app/components/SolutionsSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Card = {
  title: string;
  body: string;
  icon: string;
  alt: string;
};

const CARDS: Card[] = [
  {
    title: "Individuals",
    body: "New to cryptocurrency? We’ll guide you every step of the way.",
    icon: "/images/solutions/solution.webp", // replace with your saved asset if needed
    alt: "Individuals icon",
  },
  {
    title: "Businesses",
    body: "Securely store, analyze, and optimize your crypto operations.",
    icon: "/images/solutions/solution.webp",
    alt: "Businesses icon",
  },
  {
    title: "Institutions",
    body: "Custom strategies for portfolio control and risk analysis.",
    icon: "/images/solutions/solution.webp",
    alt: "Institutions icon",
  },
];

export default function SolutionsSection({
  videoSrc = "/images/solutions/bg-video.mp4",
  posterSrc = "/images/solutions/poster.avif",
  cards = CARDS,
}: {
  videoSrc?: string;
  posterSrc?: string;
  cards?: Card[];
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ensure autoplay on mount (some browsers need a nudge even if muted)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        /* ignore — poster will show until user interacts */
      }
    };
    tryPlay();
  }, []);

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28 bg-[#0B0A0F]">
      {/* Background video (full-bleed) */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        muted
        loop
        playsInline
        preload="none"
      />

      {/* color tint overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10
             bg-gradient-to-tr from-[#4e2a7d]/70 via-[#245728]/60 to-[#2a1b42]/90
             mix-blend-screen"
      ></div>

      {/* subtle dark wash to match OG contrast */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0B0A0F]/60" />

      {/* top blend into previous section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#0B0A0F] to-transparent" />

      {/* bottom blend into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#0B0A0F] to-transparent" />

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Crypto Solutions for Everyone
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#C5C6CA] sm:text-lg">
          Custom services to securely manage and grow your assets.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-10 sm:mt-16 sm:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Icon tile */}
              <div className="rounded-[18px] border border-white/8 bg-[#17181C] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32">
                  <Image
                    src={c.icon}
                    alt={c.alt}
                    fill
                    className="object-contain"
                    priority={i === 0}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-white sm:text-[28px]">
                {c.title}
              </h3>

              {/* Body */}
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#B0B2B6]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
