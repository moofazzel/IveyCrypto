"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const BASE_ITEMS: Testimonial[] = [
  {
    quote:
      "Our meme token went live on Base — full site, presale dashboard, and LP lock in 3 days. Smooth launch, no downtime, and the community loved the design. Literally printed holders overnight.",
    name: "Chadski",
    role: "Founder — Meme Token (Base)",
    image: "/images/testimonials/chadski.jpg",
  },
  {
    quote:
      "They built our staking and claim dApp for a utility token on BSC. Clean UI, fast wallet connect, and detailed docs. We scaled from 200 to 4K active wallets in the first week.",
    name: "Jordi",
    role: "Product Lead — Utility Project (BSC)",
    image: "/images/testimonials/jordi.jpg",
  },
  {
    quote:
      "Handled our multi-chain presale (SOL + ETH) flawlessly. Integrated KYC, audit, and live progress bar with real-time updates. Hit hard cap within 48 hours.",
    name: "Ser Blue",
    role: "CTO — Presale Launch (Solana & Ethereum)",
    image: "/images/testimonials/ser-blue.jpg",
  },
];

// Repeat the 3 testimonials to fill the slider naturally
const ITEMS = [...BASE_ITEMS, ...BASE_ITEMS, ...BASE_ITEMS];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="pt-16 sm:pt-20 lg:pt-[68px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Clients Feedback
        </h2>

        <div
          className="mt-8"
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(sw) => (swiperRef.current = sw)}
            loop
            speed={600}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 14 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 18 },
            }}
            className="!pb-10"
          >
            {ITEMS.map((t, i) => (
              <SwiperSlide key={i}>
                <article className="h-full rounded-2xl border border-white/10 bg-[#0F0E15] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.35)] flex flex-col justify-between md:h-[267px]">
                  <p className="text-white/90 leading-relaxed mb-6">
                    “{t.quote}”
                  </p>

                  <footer className="flex items-center gap-4 mt-auto">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{t.name}</h4>
                      <p className="text-sm text-white/60">{t.role}</p>
                    </div>
                  </footer>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
