// app/components/CTASection.tsx

import GradientButton from "@/components/shared/GradientButton";
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
          Your Launch. Our Expertise.
        </h2>

        <p className="mt-4 text-balance text-base leading-relaxed text-gray-300 sm:text-lg">
          We design, develop, and drive your crypto project forward.
        </p>

        <div className="mt-8">
          <Link href="/https://t.me/mahmud_3322">
            <GradientButton className="w-52">
              <span className="relative z-10">Send a Message</span>
            </GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
