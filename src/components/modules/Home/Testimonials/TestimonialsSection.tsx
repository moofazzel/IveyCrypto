// app/components/TestimonialsSection.tsx
"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  stars?: 1 | 2 | 3 | 4 | 5;
};

const DATA: Testimonial[] = [
  {
    quote:
      "“Ivey team gets it. Fast, clean, and always ahead of the curve. Every site we’ve launched with them has felt like a statement. They're our go-to for anything web.”",
    name: "Ser Blue",
    role: "Andy Project Owner",
    avatar: "/images/testimonials/ser-blue.jpg",
    stars: 5,
  },
  {
    quote:
      "“I’ve worked with a lot of devs, but Ivey's precision and vibe are unmatched. They build with clarity and deliver with heart. Highly recommend.”",
    name: "Jordi",
    role: "Crypto Chad",
    avatar: "/images/testimonials/jordi.jpg",
    stars: 5,
  },
  {
    quote:
      "“Crypto moves fast, and Ivey moves faster. From concept to launch, they’ve been solid. Reliable, sharp, and always on point.”",
    name: "Chadski23",
    role: "X KOL",
    avatar: "/images/testimonials/chadski.jpg",
    stars: 5,
  },
];

// Gradient frame used by the active card
const Frame: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div
    className={`inline-block self-start rounded-2xl p-[2px] [background:linear-gradient(90deg,#00E022_0%,#0667ED_100%)] ${className}`}
  >
    <div className="rounded-2xl bg-[#0D0F12] p-6 sm:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
      {children}
    </div>
  </div>
);

// 👉 Proper Variants map with named states and TS-safe transitions
const slideVariants: Variants = {
  enter: (direction: 1 | -1) => ({
    x: direction === 1 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: (direction: 1 | -1) => ({
    x: direction === 1 ? -40 : 40,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.45, ease: "easeOut" },
  }),
};

export default function TestimonialsSection() {
  const [index, setIndex] = React.useState(0);
  const [dir, setDir] = React.useState<1 | -1>(1); // 1 => next →, -1 => prev ←

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % DATA.length);
  };

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + DATA.length) % DATA.length);
  };

  const t = DATA[index];

  return (
    <section className="w-full bg-[#0C0912] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 lg:grid-cols-[60%_40%] pt-12">
        {/* LEFT: single animated testimonial card (no back layers, no 3D) */}
        <div className="relative min-h-[340px]">
          <AnimatePresence mode="popLayout" custom={dir}>
            <motion.div
              key={index}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={dir}
              className="absolute inset-0 flex items-start"
            >
              <Frame>
                <p className="text-lg leading-8 text-white sm:text-xl">
                  {t.quote}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  {/* author */}
                  <div className="flex items-center gap-4">
                    <span className="relative block h-12 w-12 overflow-hidden rounded-full ring-1 ring-white/10">
                      <Image
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        fill
                        className="object-cover"
                        sizes="48px"
                        priority
                      />
                    </span>
                    <div>
                      <div className="font-semibold text-white">{t.name}</div>
                      <div className="text-sm text-white/60">{t.role}</div>
                    </div>
                  </div>

                  {/* stars */}
                  <div className="flex items-center gap-2">
                    {Array.from({ length: t.stars ?? 5 }).map((_, sIdx) => (
                      <svg
                        key={sIdx}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#FFD400"
                        aria-hidden
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.77 5.82 22 7 14.15l-5-4.88 6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </Frame>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: heading + arrows */}
        <div className="text-left lg:pl-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Quotes From <br className="hidden sm:block" />
            Satisfied Users
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Join Thousands of Happy Investors.
          </p>

          <div className="mt-10 flex items-center gap-14">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#17181C] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#17181C] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-transform hover:scale-105 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
