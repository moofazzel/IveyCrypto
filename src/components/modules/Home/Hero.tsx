"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b0b10]" />
        {/* subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(61,171,244,0.18)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-36 md:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-44">
        {/* Copy */}
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Simplify Your <span className="text-cryp-gradient">Crypto</span>{" "}
            Investments
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/70">
            Secure, reliable, and customized solutions to protect and grow your
            digital assets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#consult" className="btn-gradient">
              Book a Free Consultation
            </Link>
            <Link
              href="#learn"
              className="rounded-xl px-5 py-3 text-white/80 ring-1 ring-inset ring-white/15 hover:text-white"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative mx-auto w-full max-w-[640px]">
            <Image
              src="/images/hero/hero.jpg" // swap with your asset
              alt="Crypto preview"
              width={960}
              height={720}
              className="rounded-3xl border border-white/10 shadow-2xl"
              priority
            />
            {/* floating orbs */}
            <span className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-cryp-gradient blur-md opacity-60" />
            <span className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-cryp-gradient blur-lg opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
