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

const ITEMS: Testimonial[] = [
  {
    quote:
      "The site loads insanely fast and the funnel prints leads. Easily our best investment this year.",
    name: "Aaron M.",
    role: "Founder, Home Services",
    image: "/images/clients/client1.jpg",
  },
  {
    quote:
      "They understood the conversion game. Pixel-perfect and SEO ready from day one.",
    name: "Lydia S.",
    role: "CMO, SaaS",
    image: "/images/clients/client2.jpg",
  },
  {
    quote:
      "From crypto launchpad to docs—everything shipped on time with clean code.",
    name: "Drew K.",
    role: "CTO, Web3",
    image: "/images/clients/client3.jpg",
  },
  {
    quote:
      "Smart strategy + execution. Our new site converts ~3x better on mobile.",
    name: "Rachel P.",
    role: "Head of Growth, DTC",
    image: "/images/clients/client4.jpg",
  },
  {
    quote:
      "Great communication, fast iterations, and measurable CRO improvements.",
    name: "Daniel S.",
    role: "Product Lead, Fintech",
    image: "/images/clients/client5.jpg",
  },
  {
    quote:
      "They shipped a performant Next.js stack and trained our team—super smooth.",
    name: "Victor L.",
    role: "Engineering Manager",
    image: "/images/clients/client6.jpg",
  },
];

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Client Feedback
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
                <article className="h-full rounded-2xl border border-white/10 bg-[#0F0E15] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.35)] flex flex-col justify-between">
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
