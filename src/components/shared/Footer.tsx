"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Footer({
  videoSrc = "/images/footer/bg-video.mp4", // ← your saved video
  posterSrc = "/images/footer/poster.avif", // ← your saved poster
}: {
  videoSrc?: string;
  posterSrc?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <footer className="relative isolate overflow-hidden pt-64 pb-10">
      {/* BG video */}
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src={videoSrc}
        poster={posterSrc}
        muted
        loop
        playsInline
        preload="none"
      />
      {/* subtle dark wash + soft melts top/bottom to match OG */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0B0A0F]/70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-20 bg-gradient-to-b from-[#0B0A0F] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#0B0A0F] to-transparent" />

      {/* content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* top row */}
        <div className="flex items-center justify-between pb-28">
          {/* logo */}
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#11C55C] text-white">
              {/* quick “C” mark — replace with your logo if you have one */}
              <span className="text-lg font-extrabold">c</span>
            </span>
            <span className="text-2xl font-semibold tracking-tight text-white">
              Cryp
            </span>
          </div>

          {/* socials (round white chips) */}
          <div className="flex items-center gap-4">
            <IconChip href="https://facebook.com" aria="Facebook">
              {/* Facebook */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#1877F2"
                aria-hidden
              >
                <path d="M22 12.07C22 6.5 17.52 2 11.95 2A10.05 10.05 0 0 0 2 12a10 10 0 0 0 8.44 9.87v-7H7.9v-3h2.54V9.41c0-2.5 1.5-3.88 3.79-3.88 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.78l-.44 3h-2.34v7A10 10 0 0 0 22 12.07z" />
              </svg>
            </IconChip>

            <IconChip href="https://twitter.com" aria="X">
              {/* X / Twitter */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#0A0A0A"
                aria-hidden
              >
                <path d="M18.244 3H21l-6.56 7.49L22 21h-6.12l-4.79-5.76L5.6 21H3l7.02-8.02L2 3h6.24l4.29 5.17L18.244 3Zm-1.08 16.2h1.69L7.91 4.69H6.13l11.034 14.51Z" />
              </svg>
            </IconChip>

            <IconChip href="https://telegram.org" aria="Telegram">
              {/* Telegram */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#229ED9"
                aria-hidden
              >
                <path d="M9.04 15.31 8.86 19c.41 0 .58-.18.79-.4l1.9-1.83 3.94 2.9c.72.4 1.24.19 1.43-.67L20.9 5.1c.25-1.03-.37-1.44-1.07-1.19L3.1 10.4c-1 .39-.99.95-.17 1.2l4.39 1.37 10.2-6.43c.48-.29.92-.13.56.16L9.04 15.31Z" />
              </svg>
            </IconChip>

            <IconChip href="https://instagram.com" aria="Instagram">
              {/* Instagram */}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#E4405F"
                aria-hidden
              >
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
              </svg>
            </IconChip>
          </div>
        </div>

        {/* hairline like OG */}
        <div className="h-[1px] bg-white/15" />

        {/* bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 py-8 text-[13px] text-white/70 sm:flex-row">
          <p className="whitespace-pre">© Cryp – Built by Grooic × Framer</p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* === helpers === */

function IconChip({
  href,
  aria,
  children,
}: {
  href: string;
  aria: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={aria}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-black
                 ring-1 ring-white/60 shadow-[0_1px_0_rgba(255,255,255,0.35)_inset,0_8px_20px_rgba(0,0,0,0.25)]
                 transition-transform hover:scale-105"
    >
      {children}
    </Link>
  );
}
