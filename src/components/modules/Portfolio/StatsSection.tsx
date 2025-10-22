"use client";

import { Award, Briefcase, Users } from "lucide-react";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white/80" />,
      value: 16,
      suffix: "+",
      label: "Years of Expertise",
    },
    {
      id: 2,
      icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-white/80" />,
      value: 500,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      id: 3,
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white/80" />,
      value: 1000,

      suffix: "+",
      label: "Clients Served All over the World",
    },
  ];

  return (
    <section className="bg-[#0C0B11] border-y border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`flex items-center gap-4 rounded-2xl bg-[#111017]/80 backdrop-blur-sm border border-white/10 p-5 sm:p-6 `}
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-baseline gap-1">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </h3>
                <p className="text-sm sm:text-base text-white/70">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
