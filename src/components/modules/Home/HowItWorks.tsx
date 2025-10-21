import { Boxes, PhoneCall, Shield } from "lucide-react";

function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 84"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="7"
          refY="5"
          orient="auto"
        >
          <path
            d="M0,0 L10,5 L0,10"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </marker>
      </defs>
      <path
        d="M10,74 C70,10 150,10 210,60"
        fill="none"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="3"
        strokeDasharray="8 8"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
}

const steps = [
  {
    id: "01",
    title: "Connect on Telegram",
    desc: "Message us directly on Telegram to discuss your project and goals. We’ll reply fast — no forms or waiting.",
    Icon: PhoneCall,
  },
  {
    id: "02",
    title: "Finalize the Scope",
    desc: "We review your needs, share ideas, and agree on deliverables, budget, and timeline — all within Telegram chat.",
    Icon: Boxes,
  },
  {
    id: "03",
    title: "Execution & Updates",
    desc: "Once confirmed, our team starts the work and keeps you updated through Telegram until final delivery.",
    Icon: Shield,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[#0C0912] text-white pb-20 pt-16">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-3">
          How It Works
        </h2>
        <p className="text-center text-white/70 mb-14">
          We connect, plan, and deliver — all through Telegram for fast, secure,
          and seamless communication.
        </p>

        <div className="relative flex flex-wrap items-start justify-between gap-4 md:gap-6 mt-[120px]">
          {steps.map(({ id, title, desc, Icon }) => (
            <div
              key={id}
              className="relative md:w-[31%] md:min-w-[300px] sm:w-[48%] w-full bg-[#121215] border border-white/10 rounded-2xl
                         px-8 py-12 overflow-visible hover:bg-[#16161a] transition-colors min-h-[220px] mb-[37px] md:mb-0"
            >
              {/* Icon bubble */}
              <div
                className="absolute -top-[19%] left-8 h-[90px] w-[90px] rounded-full bg-[#0E0E12] border border-white/10
                              flex items-center justify-center z-10"
              >
                <Icon className="h-7 w-7 text-white" />
              </div>

              {/* Step number outline */}
              <div className="absolute top-6 right-6 pointer-events-none select-none">
                <span className="text-outline text-[72px] leading-none font-extrabold tracking-tight">
                  {id}
                </span>
              </div>

              <div className="pt-10">
                <h3 className="text-lg md:text-[27px] font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}

          {/* Connecting arrows */}
          <CurvedArrow className="hidden md:block absolute -top-13 left-[27%] w-[10%] h-[52px] z-0" />
          <CurvedArrow className="hidden md:block absolute -top-13 left-[61%] w-[10%] h-[52px] z-0" />
        </div>
      </div>
    </section>
  );
}
