"use client";

import { useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TEXTS = [
  "Secure Moderation",
  "© Ivey Solutions",
  "Full-Stack Web Development",
  "Next.js Experts",
  "Tailwind UI Design",
  "Creative Branding",
  "Crypto & Web3 Integration",
  "AI-Powered UX",
];

export default function MarqueeTape() {
  const swiperRef = useRef<SwiperType | null>(null);
  const speedRef = useRef<number>(4000);
  const pausedRef = useRef<boolean>(false);

  /** Freeze current position instantly (continuous marquee uses a long transition). */
  const hardPause = (s: SwiperType) => {
    if (pausedRef.current) return;
    pausedRef.current = true;

    s.autoplay?.stop();

    const wrap = s.wrapperEl as HTMLElement;
    const cs = window.getComputedStyle(wrap);
    // lock where it is right now
    wrap.style.transitionDuration = "0ms";
    wrap.style.transform = cs.transform;
  };

  /** Hand control back to Swiper and resume autoplay smoothly. */
  const hardResume = (s: SwiperType) => {
    if (!pausedRef.current) return;
    pausedRef.current = false;

    const wrap = s.wrapperEl as HTMLElement;
    // clear our locks
    wrap.style.transitionDuration = "";
    wrap.style.transform = "";
    // force reflow so the cleared styles apply before we nudge
    void wrap.getBoundingClientRect();

    // Nudge once to re-sync internal translate; 0ms = instant
    if (typeof s.slideNext === "function") s.slideNext(0, false);

    s.autoplay?.start();
  };

  useEffect(() => {
    const s = swiperRef.current;
    if (!s) return;

    s.autoplay?.start();

    const el = s.el as HTMLElement;

    const onEnter = () => hardPause(s);
    const onLeave = () => hardResume(s);

    // mouse + keyboard a11y
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("focusout", onLeave);

    // mobile/touch (press & hold pauses)
    el.addEventListener("pointerdown", onEnter);
    el.addEventListener("pointerup", onLeave);
    el.addEventListener("pointercancel", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("focusout", onLeave);
      el.removeEventListener("pointerdown", onEnter);
      el.removeEventListener("pointerup", onLeave);
      el.removeEventListener("pointercancel", onLeave);
      s.autoplay?.stop();
    };
  }, []);

  return (
    <section className="relative bg-[#0A0A0D] overflow-hidden">
      <div className="relative bg-[#101828] text-white font-extrabold text-3xl md:text-5xl tracking-tight py-4 md:py-6">
        <Swiper
          modules={[Autoplay, FreeMode]}
          onSwiper={(s) => {
            swiperRef.current = s;
            speedRef.current = s.params.speed ?? 4000;
          }}
          loop
          freeMode={{ enabled: true, momentum: false }}
          slidesPerView="auto"
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false, // we'll manage pause ourselves
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          className="w-full select-none"
        >
          {[...Array(2)].map((_, i) =>
            TEXTS.map((text, j) => (
              <SwiperSlide
                key={`${i}-${j}`}
                className="!w-auto !h-auto flex items-center"
              >
                <span className="px-10 whitespace-nowrap">{text}</span>
              </SwiperSlide>
            ))
          )}
        </Swiper>

        {/* optional edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0D] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0D] to-transparent" />
      </div>
    </section>
  );
}
