// app/components/TestimonialSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

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
      "“The portfolio tracking and tax reporting features are very useful. I now feel confident managing my assets and making informed decisions.”",
    name: "Cody Fisher",
    role: "Video Producer",
    avatar: "/images/testimonials/person.avif", // or a remote URL
    stars: 5,
  },
  {
    quote:
      "“The advanced analytics and real-time updates have changed how we manage our assets. The team is always providing valuable insights.”",
    name: "Marvin McKinney",
    role: "Business Owner",
    avatar: "/images/testimonials/person.avif",
    stars: 5,
  },
  {
    quote:
      "“Slick UI and timely alerts. It helped me rebalance at the right time without stress.”",
    name: "Jenny Wilson",
    role: "Product Manager",
    avatar: "/images/testimonials/person.avif",
    stars: 5,
  },
];

// 0 = front, 1 = middle, 2 = back
const layerStyles = (layer: 0 | 1 | 2) => {
  switch (layer) {
    case 0:
      return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        blur: 0,
        opacity: 1,
        zIndex: 30,
        zDepth: 80,
        rx: -1.5,
        ry: 0.6,
        shadow: "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
      };
    case 1:
      return {
        x: -10,
        y: 28,
        rotate: -11,
        scale: 0.985,
        blur: 0.6,
        opacity: 0.38,
        zIndex: 20,
        zDepth: 20,
        rx: -3,
        ry: 1.2,
        shadow: "shadow-[0_16px_48px_rgba(0,0,0,0.55)]",
      };
    default:
      return {
        x: 18,
        y: 54,
        rotate: 10.5,
        scale: 0.972,
        blur: 1.4,
        opacity: 0.26,
        zIndex: 10,
        zDepth: -30,
        rx: -4.5,
        ry: 1.8,
        shadow: "shadow-[0_14px_44px_rgba(0,0,0,0.55)]",
      };
  }
};

// Gradient frame used by the active/front card
const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="rounded-2xl p-[2px] [background:linear-gradient(90deg,#00E022_0%,#0667ED_100%)]">
    <div className="rounded-2xl bg-[#0D0F12] p-6 sm:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]">
      {children}
    </div>
  </div>
);

export default function TestimonialSection() {
  const count = DATA.length;

  // 3D cursor tilt on the active card
  const areaRef = React.useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x: ny * 3, y: nx * 3 }); // ~±3°
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Deck is [front, middle, back] -> indexes into DATA
  const [deck, setDeck] = React.useState<number[]>([0, 1 % count, 2 % count]);
  const [dir, setDir] = React.useState<1 | -1>(1); // 1 => next →, -1 => prev ←

  const next = () => {
    setDir(1);
    setDeck(([a, b, c]) => [b, c, (c + 1) % count]);
  };
  const prev = () => {
    setDir(-1);
    setDeck(([a, b, c]) => [(a - 1 + count) % count, a, b]);
  };

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8 mt-24">
      <div className="grid items-start gap-12 lg:grid-cols-[60%_40%]">
        {/* LEFT: 3-card 3D deck */}
        <div
          ref={areaRef}
          className="relative h-[400px] sm:h-[420px] lg:h-[440px] w-[95%]"
        >
          {/* soft ground shadow to sell depth */}
          <div className="pointer-events-none absolute left-6 bottom-2 h-10 w-[78%] rounded-[999px] bg-black/30 blur-2xl opacity-40" />
          <div
            className="absolute inset-0"
            style={{ perspective: 1200, transformStyle: "preserve-3d" }}
          >
            {deck.map((itemIdx, role) => {
              const t = DATA[itemIdx];
              const s = layerStyles(role as 0 | 1 | 2);
              const isFront = role === 0;

              return (
                <motion.div
                  key={itemIdx} // keep item mounted; role changes to animate between poses
                  initial={{
                    x: s.x + (dir === 1 ? 40 : -40),
                    y: s.y,
                    z: s.zDepth,
                    rotate: s.rotate,
                    rotateX: s.rx,
                    rotateY: s.ry,
                    scale: s.scale,
                    opacity: 0,
                    transformPerspective: 900,
                  }}
                  animate={{
                    x: s.x,
                    y: s.y,
                    z: s.zDepth,
                    rotate: s.rotate + (!isFront ? (dir === 1 ? -2 : 2) : 0), // tiny reactive tilt on rear plates
                    rotateX: s.rx + (isFront ? tilt.x : 0),
                    rotateY: s.ry + (isFront ? tilt.y : 0),
                    scale: s.scale,
                    opacity: s.opacity,
                    transformPerspective: 900,
                  }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    zIndex: s.zIndex,
                    filter: `blur(${s.blur}px)`,
                    transformStyle: "preserve-3d",
                  }}
                  className={`absolute left-0 top-0 h-[80%] w-[92%] ${
                    isFront
                      ? ""
                      : `rounded-2xl border border-white/5 bg-[#0F1114] ${s.shadow}`
                  }`}
                >
                  {isFront && (
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
                            <div className="font-semibold text-white">
                              {t.name}
                            </div>
                            <div className="text-sm text-white/60">
                              {t.role}
                            </div>
                          </div>
                        </div>

                        {/* stars */}
                        <div className="flex items-center gap-2">
                          {Array.from({ length: t.stars ?? 5 }).map(
                            (_, sIdx) => (
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
                            )
                          )}
                        </div>
                      </div>
                    </Frame>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: heading + arrows */}
        <div className="text-left lg:pl-8 self-start mt-2">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Quotes From <br className="hidden sm:block" />
            Satisfied Users
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Join Thousands of Happy Investors.
          </p>

          <div className="mt-10 flex items-center gap-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#17181C] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-transform hover:scale-105"
            >
              {/* ← */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#17181C] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-transform hover:scale-105"
            >
              {/* → */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L12.17 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
