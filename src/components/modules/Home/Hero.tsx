import GradientButton from "@/components/shared/GradientButton";
import { Clock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-[20px] md:py-[70px]"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, rgba(11,11,16,0.2) 0%, #0b0b10 100%), url('/images/banner/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto flex flex-col items-center gap-10 px-4 pb-20 pt-28 md:flex-row md:items-start md:px-6 md:pb-28 md:pt-44">
          {/* Copy */}
          <div className="w-full max-w-3xl text-center md:w-[80%] md:text-left ">
            <h1 className="text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[72px]">
              Crypto-Native <span className="text-cryp-gradient">Websites</span>{" "}
              & <span className="text-cryp-gradient">24/7 Moderation</span>
            </h1>

            <p className="mt-5 mx-auto max-w-2xl text-[20px] leading-8 text-white/90 md:mx-0">
              Ivey Solutions builds conversion-focused token sites and runs
              reliable Telegram/Discord mod teams. From presale funnels and
              tokenomics pages to round-the-clock community safety—we ship what
              moves your launch forward.
            </p>

            {/* Stats row */}
            <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur text-center sm:text-left">
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <div className="rounded-lg border border-white/10 bg-black/20 p-2">
                    <Clock size={20} className="text-white/90" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/60">
                      Availability
                    </p>
                    <p className="text-lg font-semibold text-white">
                      24/7 Active Mods
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur text-center sm:text-left">
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <div className="rounded-lg border border-white/10 bg-black/20 p-2">
                    <Zap size={20} className="text-white/90" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/60">
                      First Response
                    </p>
                    <p className="text-lg font-semibold text-white">
                      &lt; 2 min avg
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur text-center sm:text-left">
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <div className="rounded-lg border border-white/10 bg-black/20 p-2">
                    <ShieldCheck size={20} className="text-white/90" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-white/60">
                      Community Uptime
                    </p>
                    <p className="text-lg font-semibold text-white">99.98%+</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link href="tglink">
                <GradientButton className="w-[230px]">
                  Get Started Now
                </GradientButton>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-[50px] items-center justify-center rounded-full border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5"
              >
                See Recent Launches
              </Link>
            </div>
          </div>

          {/* Visual (placeholder for future art/video) */}
          <div className="hidden md:block flex-1" />
        </div>
      </div>
    </section>
  );
}
