// app/components/FAQSection.tsx
"use client";

import clsx from "clsx";
import Image from "next/image";
import * as React from "react";

type FaqItem = {
  q: string;
  a: string;
};

const ITEMS: FaqItem[] = [
  {
    q: "How do you secure my crypto assets?",
    a: "We follow industry best practices including multisig wallets, hardware key management, and continuous monitoring. Funds are segregated and access is role-based with audit trails.",
  },
  {
    q: "What fees do you charge?",
    a: "We offer flexible pricing plans with transparent fees, no hidden charges.",
  },
  {
    q: "Can I customize my investment strategy?",
    a: "Yes. We tailor strategies to your risk profile, time horizon, and goals. You can choose passive, active, or hybrid allocations.",
  },
  {
    q: "What types of cryptocurrencies do you manage?",
    a: "We cover major L1s/L2s and selective DeFi assets, with a research filter for liquidity, security, and long-term fundamentals.",
  },
  {
    q: "How can I track the performance of my portfolio?",
    a: "Your dashboard shows real-time balances, PnL, risk metrics, and downloadable statements. Alerts keep you informed on key movements.",
  },
];

export default function FAQSection({
  imageSrc = "/images/faq/faq.avif",
  imageAlt = "3D Spiral Visual",
}: {
  imageSrc?: string;
  imageAlt?: string;
}) {
  const [open, setOpen] = React.useState<number>(1); // Default open = second item

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        {/* ✅ Left visual (30%) */}
        <div className="relative w-full overflow-hidden rounded-[22px] border border-white/5 bg-[#15161A] lg:w-[30%]">
          {/* Image now fills the entire div */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center p-2"
            priority
          />
        </div>

        {/* ✅ Right questions (70%) */}
        <div className="w-full lg:w-[70%]">
          <h2
            id="faq-heading"
            className="mb-16 text-left text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Frequently Asked Questions
          </h2>

          <ul className="space-y-5">
            {ITEMS.map((item, idx) => {
              const active = open === idx;

              return (
                <li key={idx} className="mb-2">
                  <div
                    className={clsx(
                      "rounded-2xl p-[1px] transition-colors",
                      active
                        ? "bg-[linear-gradient(90deg,#00E022_0%,#0667ED_100%)]"
                        : "bg-transparent"
                    )}
                  >
                    <div
                      className={clsx(
                        "relative rounded-2xl bg-[#0D0F12] px-6 py-3 sm:px-7 ",
                        "shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]"
                      )}
                    >
                      <button
                        type="button"
                        aria-expanded={active}
                        aria-controls={`faq-panel-${idx}`}
                        onClick={() => setOpen(active ? -1 : idx)}
                        className="group flex w-full items-center gap-4 text-left"
                      >
                        <span className="flex-1 text-lg font-semibold text-white sm:text-xl">
                          {item.q}
                        </span>

                        {/* Circular + / - button */}
                        <span
                          className={clsx(
                            "relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                            "bg-[linear-gradient(180deg,#01E022_0%,#0667ED_100%)]",
                            "shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset]",
                            "transition-transform duration-300",
                            active
                              ? "scale-100"
                              : "scale-100 group-hover:scale-105"
                          )}
                        >
                          <span className="block h-[2px] w-4 rounded bg-white" />
                          <span
                            className={clsx(
                              "absolute block h-4 w-[2px] rounded bg-white transition-transform duration-200",
                              active ? "scale-y-0" : "scale-y-100"
                            )}
                          />
                        </span>
                      </button>

                      <div
                        className={clsx(
                          "mt-4 h-px w-full bg-white/10 transition-opacity duration-300",
                          active ? "opacity-100" : "opacity-0"
                        )}
                      />

                      <div
                        id={`faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${idx}`}
                        className={clsx(
                          "grid transition-all duration-300",
                          active ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="text-[15px] leading-relaxed text-[#C5C6CA]">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
