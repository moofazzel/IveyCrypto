import AllPortfolio from "@/components/modules/Home/Portfolio/AllPortfolio";
import StatsSection from "@/components/modules/Home/Portfolio/StatsSection";
import Testimonials from "@/components/modules/Home/Portfolio/Testimonials";

import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="bg-[#0B0A0F] text-white">
      {/* ===== Hero / Top Banner ===== */}
      <section className="relative overflow-hidden">
        {/* Decorative gradient fields */}
        <div className="pointer-events-none absolute inset-0">
          {/* large background wash */}
          <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_10%_-10%,rgba(92,99,250,0.20),transparent_60%),radial-gradient(900px_600px_at_90%_0%,rgba(168,104,250,0.20),transparent_60%),radial-gradient(800px_500px_at_50%_120%,rgba(92,99,250,0.12),transparent_60%)]" />
          {/* subtle vignette for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,transparent_60%,rgba(0,0,0,0.5))]" />
        </div>

        {/* content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="min-h-[68vh] sm:min-h-[72vh] lg:min-h-[78vh] grid place-items-center">
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Projects that turn{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  clicks into customers
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/70">
                Fast, secure and conversion-focused builds for SaaS, crypto, and
                local businesses. Here’s a curated look at how we design, ship,
                and scale.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {/* primary — matches your button gradient */}
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-[#5c63fa] to-[#a868fa] px-6 py-3 text-sm sm:text-base font-semibold shadow-[0_10px_30px_rgba(92,99,250,0.35)] hover:opacity-95 transition"
                >
                  Book a Free Consultation
                </Link>

                {/* secondary */}
                <Link
                  href="#gallery"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm sm:text-base font-semibold hover:bg-white/10 transition"
                >
                  Jump to Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick Stats / Badges ===== */}
      <StatsSection />

      {/* ===== GALLERY SLOT (your Masonry goes here) ===== */}
      <section id="gallery" className=" lg:px-8">
        <AllPortfolio />
      </section>

      {/* ===== Testimonials ===== */}
      <Testimonials />

      {/* ===== CTA ===== */}
      <section className="relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(99,102,241,0.18),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#12101A] to-[#161423] p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Let’s ship something revenue-ready
              </h3>
              <p className="mt-2 text-white/70">
                We’ll review your goals, propose a plan, and estimate timeline &
                price—no fluff.
              </p>
            </div>
            <Link
              href="tglink"
              className="rounded-full bg-gradient-to-r from-[#5c63fa] to-[#a868fa] px-6 py-3 text-base font-semibold shadow-[0_10px_30px_rgba(92,99,250,0.35)] hover:opacity-95 transition"
            >
              Lets Talk Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Small Reusable Components ---------- */

// function StatCard({ kpi, label }: { kpi: string; label: string }) {
//   return (
//     <div className="rounded-2xl border border-white/10 bg-[#0F0E15] p-5 sm:p-6">
//       <div className="text-2xl sm:text-3xl font-extrabold">{kpi}</div>
//       <div className="mt-1 text-sm text-white/60">{label}</div>
//     </div>
//   );
// }
