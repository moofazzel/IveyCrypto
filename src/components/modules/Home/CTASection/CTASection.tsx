// app/components/CTASection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden py-28 md:py-40"
    >
      {/* ✅ Background Image (Full Width like OG) */}
      <Image
        src="/images/backgrounds/cta-bg.avif"
        alt="Background"
        fill
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      {/* subtle dark wash to match OG contrast */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0B0A0F]/60" />

      {/* top blend into previous section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-[#0B0A0F] to-transparent" />

      {/* bottom blend into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#0B0A0F] to-transparent" />

      {/* ✅ Dark overlay (for text readability like OG site) */}
      {/* <div className="absolute inset-0 -z-10 bg-black/50" /> */}

      {/* ✅ Content */}
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2
          id="cta-heading"
          className="text-balance text-3xl md:text-6xl font-extrabold tracking-tighter text-white"
        >
          Need Help? We&apos;re Here for You!
        </h2>

        <p className="mt-4 text-balance text-base leading-relaxed text-gray-300 sm:text-lg">
          We&apos;re here to help! Contact our support team for assistance.
        </p>

        <div className="mt-8">
          <Link
            href="/#contact"
            className="
            relative inline-flex items-center justify-center overflow-hidden
            rounded-[58px] px-7 py-4
            text-sm sm:text-base font-medium text-white
            [background:linear-gradient(270deg,rgb(6,103,237)_0%,rgb(1,224,34)_100%)]
            shadow-[0_0_0_1px_rgba(255,255,255,0.10)_inset]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
            focus-visible:ring-offset-2 focus-visible:ring-offset-black/60

            before:content-[''] before:absolute before:inset-0 before:rounded-[58px]
            before:[background:linear-gradient(270deg,rgb(1,224,34)_0%,rgb(6,103,237)_100%)]
            before:opacity-0 before:transition-opacity before:duration-700 before:ease-in-out
            before:z-0 hover:before:opacity-100
          "
          >
            <span className="relative z-10">Book a Free Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
