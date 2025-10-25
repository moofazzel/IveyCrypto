import {
  BarChart,
  Box,
  // fallback
  Box as FallbackIcon,
  Layers,
  Package,
  Server,
} from "lucide-react";
import React from "react";
import services from "../../../../data/services";

const ICON_MAP: Record<string, React.ElementType> = {
  Package,
  Layers,
  Box,
  Server,
  BarChart,
};

function getIcon(name: string) {
  return ICON_MAP[name] ?? FallbackIcon;
}

export const ServicesSection: React.FC = () => {
  const wide = services.filter((s) => s.layout === "wide");
  const narrow = services.filter((s) => s.layout === "narrow");

  return (
    <section className="py-16 bg-[#0b0710] text-white md:py-20 lg:py-[110px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
            Our Core Services
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Ivey Solutions delivers full-stack web development, crypto
            integration, brand design, and secure moderation — engineered for
            growth and trust.
          </p>
        </div>

        {/* Bottom row: three narrow cards (w-[33%]) */}
        <div className="flex flex-wrap justify-center gap-6">
          {narrow.map((s) => {
            const Icon = getIcon(s.iconName);
            return (
              <article
                key={s.id}
                className="w-full sm:w-[48%] md:w-[31%] md:m-[3px] rounded-xl bg-[#131416] border border-[#221b2a] p-8 text-center shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
              >
                <div className="mx-auto w-24 h-24 rounded-lg bg-gradient-to-tr from-[#111018] to-[#19141b] flex items-center justify-center border border-[#222]">
                  <Icon size={44} className="text-gray-200" />
                </div>

                <h4 className="text-lg font-semibold mt-6">{s.title}</h4>
                {/* <p className="text-gray-400 mt-1">{s.subtitle}</p> */}
                <p className="text-gray-300 mt-4">{s.description}</p>
              </article>
            );
          })}
        </div>
        {/* Top row: two wide cards (w-[50%]) */}
        <div className="flex flex-wrap justify-center gap-6 mb-[24px] mt-[28px]">
          {wide.map((s) => {
            const Icon = getIcon(s.iconName);
            return (
              <article
                key={s.id}
                className="w-full sm:w-[48%] md:w-[48%] max-w-2xl rounded-xl bg-[#131416] border border-[#221b2a] p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-md bg-gradient-to-tr from-[#111018] to-[#19141b] flex items-center justify-center border border-[#222] mx-auto sm:mx-0">
                  <Icon size={36} className="text-gray-200" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  {/* <p className="text-gray-400 mt-1">{s.subtitle}</p> */}
                  <p className="text-gray-300 mt-3">{s.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
