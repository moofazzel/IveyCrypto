"use client";

import { useRef } from "react";
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
  const pause = () => swiperRef.current?.autoplay?.stop();
  const play = () => swiperRef.current?.autoplay?.start();

  return (
    <section className="relative bg-[#0A0A0D] overflow-hidden">
      <div
        onMouseEnter={pause}
        onMouseLeave={play}
        className="relative bg-[#101828] text-white font-extrabold text-3xl md:text-5xl tracking-tight  py-4 md:py-6"
      >
        <Swiper
          modules={[Autoplay, FreeMode]}
          onSwiper={(s) => (swiperRef.current = s)}
          loop
          freeMode
          slidesPerView="auto"
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          className="w-full"
        >
          {[...Array(3)].map((_, i) =>
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
      </div>
    </section>
  );
}
