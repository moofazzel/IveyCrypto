import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ivey Solutions | Full-Stack Web Development & Creative Branding",
  description:
    "Ivey Solutions builds high-performance websites and digital experiences using Next.js, Tailwind CSS, and modern technologies. From full-stack web apps to AI-powered UX, crypto integration, and creative brand design — we craft solutions that connect technology, design, and strategy to help your business grow.",
  icons: {
    icon: "/images/about/abt.jpg", // path inside /public
    shortcut: "/images/about/abt.jpg",
    apple: "/images/about/abt.jpg",
  },
  keywords: [
    "Ivey Solutions",
    "web development agency",
    "Next.js experts",
    "Tailwind CSS design",
    "React developers",
    "AI-powered UX",
    "crypto web development",
    "Web3 integration",
    "branding and UI design",
    "custom websites",
    "modern web apps",
  ],
  openGraph: {
    title: "Ivey Solutions | Full-Stack Web Development & Creative Branding",
    description:
      "Next.js experts building conversion-focused websites and digital brands. From web apps to AI, Web3, and creative UI — Ivey Solutions delivers innovation with speed and precision.",
    url: "https://www.iveysolutions.com",
    siteName: "Ivey Solutions",
    images: [
      {
        url: "https://www.iveysolutions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ivey Solutions – Full-Stack Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivey Solutions | Full-Stack Web Development & Creative Branding",
    description:
      "Modern websites & apps built with Next.js, Tailwind, and AI-driven UX. Ivey Solutions empowers brands through smart design and scalable technology.",
    images: ["https://www.iveysolutions.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.iveysolutions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} font-poppins antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
