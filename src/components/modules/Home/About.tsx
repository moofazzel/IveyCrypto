"use client";

import { Award, Briefcase, Users } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type StatCardProps = {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
};

function StatCard({
  icon,
  value,
  suffix = "+",
  label,
  delay = 0,
}: StatCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="flex items-center gap-4 rounded-2xl bg-[#131416] px-6 py-[32px] ring-1 ring-white/10 backdrop-blur-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
        {icon}
      </div>
      <div>
        <div className="text-3xl font-extrabold tracking-tight text-white">
          {inView ? (
            <CountUp start={0} end={value} duration={1.6} delay={delay} />
          ) : (
            0
          )}
          {suffix}
        </div>
        <p className="text-sm text-white/70">{label}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 lg:py-[100px]"
      style={{
        background:
          "linear-gradient(rgba(12, 9, 18, 0.99), rgba(12, 9, 18, 0.93)), url('/images/about/bg.svg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* subtle grid glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(100%_60%_at_80%_10%,rgba(61,171,244,0.14)_0%,transparent_60%)]"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-start gap-10 xl:flex-row">
          {/* LEFT */}
          <div className="w-full xl:w-[50%]">
            <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              About <span className="text-cryp-gradient">Ivey Solutions</span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              {/* Ivey Solutions is a full-stack digital agency specializing in{" "}
              <span className="text-white font-semibold">Web Development</span>,{" "}
              <span className="text-white font-semibold">
                Crypto & Web3 Integration
              </span>
              , <span className="text-white font-semibold">Branding</span>, and{" "}
              <span className="text-white font-semibold">
                Content Moderation
              </span> */}
              <br />
              We build lightning-fast, conversion-ready websites, connect
              businesses to the blockchain ecosystem, design identities that
              stand out, and provide secure moderation to keep online
              communities safe and authentic.
            </p>

            {/* TOP ROW CARDS */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <StatCard
                icon={<Award size={22} />}
                value={16}
                suffix="+"
                label="Years of Expertise"
              />
              <StatCard
                icon={<Briefcase size={22} />}
                value={500}
                suffix="+"
                label="Projects Completed"
                delay={0.15}
              />
            </div>

            {/* FULL WIDTH CARD */}
            <div className="mt-6">
              <div className="flex items-center gap-4 rounded-2xl bg-[#131416] px-6 py-[31px] ring-1 ring-white/10 backdrop-blur-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Users size={22} />
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight text-white">
                    Over <CountUp start={0} end={1000} duration={1.6} />+
                  </div>
                  <p className="text-sm text-white/70">
                    Clients Served, Supported & Empowered Through Our Work
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="w-full xl:w-[50%]">
            <div className="relative mx-auto aspect-[4/4] w-full max-w-[560px]">
              <Image
                src="/images/about/abt.jpg"
                alt="Ivey Solutions — Web, Crypto, and Moderation Services"
                fill
                priority
                className="rounded-3xl object-cover"
              />
              {/* glow accents */}
              <span className="absolute -left-6 top-8 h-16 w-16 rounded-full bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)] opacity-50 blur-xl" />
              <span className="absolute -right-8 bottom-8 h-28 w-28 rounded-full bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)] opacity-40 blur-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
