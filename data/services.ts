// data/services.ts
export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "Package" | "Layers" | "Box" | "Server" | "BarChart" | string; // hint for choosing icon
  layout: "wide" | "narrow"; // wide -> w-[50%], narrow -> w-[33%]
};

export const services: Service[] = [
  // top row: two wide cards (w-[50%])
  {
    id: "s1",
    title: "Logo Design",
    subtitle: "Brand Mark & Identity",
    description:
      "Craft memorable logos that scale across web, mobile and print. Fast iterations, vector-ready deliverables.",
    iconName: "Package",
    layout: "wide",
  },
  {
    id: "s2",
    title: "UI/UX Design",
    subtitle: "Product & Interface Design",
    description:
      "Human-centered UI, rapid prototypes, and accessible interactions that turn visitors into users.",
    iconName: "Layers",
    layout: "wide",
  },

  // second row: three narrow cards (w-[33%])
  {
    id: "s3",
    title: "Token & Presale Pages",
    subtitle: "Landing + Presale Flow",
    description:
      "Convert visitors into early backers with conversion-optimized token pages and presale funnels.",
    iconName: "Box",
    layout: "narrow",
  },
  {
    id: "s4",
    title: "DApp Dashboards",
    subtitle: "Admin & Analytics",
    description:
      "Real-time dashboards for on-chain metrics, user flows and wallet interactions — built for performance.",
    iconName: "Server",
    layout: "narrow",
  },
  {
    id: "s5",
    title: "Crypto Growth & Moderation",
    subtitle: "Community + Growth Ops",
    description:
      "Moderation flows, growth playbooks and paid/organic campaign support tailored for crypto communities.",
    iconName: "BarChart",
    layout: "narrow",
  },
];

export default services;
