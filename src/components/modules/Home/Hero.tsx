"use client";

import GradientButton from "@/components/shared/GradientButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-[70px]"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(11,11,16,0.2) 0%, #0b0b10 100%), url('/images/banner/banner.jpg')",

        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto max-w-7xl container">
        <div className="mx-auto flex gap-10 px-4 pb-20 pt-36 md:px-6 lg:pb-28 lg:pt-44">
          {/* Copy */}
          <div className="w-[80%]">
            <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[84px]">
              Simplify Your <span className="text-cryp-gradient">Crypto</span>{" "}
              Investments
            </h1>

            <p className="mt-5 max-w-xl text-[24px] text-white">
              Secure, reliable, and customized solutions to protect and grow
              your digital assets.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/">
                <GradientButton>Book a Free Consultation</GradientButton>
              </Link>
            </div>
          </div>

          {/* Visual */}
        </div>
      </div>
    </section>
  );
}
