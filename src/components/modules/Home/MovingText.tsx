"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface MovingTextProps {
  items?: string[];
  speed?: number; // seconds per full loop
  direction?: "left" | "right";
  strokeColor?: string;
  fontSize?: string;
  className?: string;
}

const DEFAULT_ITEMS = [
  "Secure Moderation",
  "© Ivey Solutions",
  "Full-Stack Web Development",
  "Next.js Experts",
  "Tailwind UI Design",
  "Creative Branding",
  "Crypto & Web3 Integration",
  "AI-Powered UX",
];

export default function MovingText({
  items = DEFAULT_ITEMS,
  speed = 90,
  direction = "left",
  strokeColor = "#a868fa",
  fontSize = "clamp(40px, 8vw, 150px)",
  className = "",
}: MovingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // duplicate array for seamless loop
  const duplicated = [...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    const ul = ulRef.current;
    if (!ul || !container) return;

    const totalWidth = ul.scrollWidth / 2;

    // reset any previous animation
    tweenRef.current?.kill();

    gsap.set(ul, { x: 0 });

    const tween = gsap.to(ul, {
      x: direction === "left" ? -totalWidth : totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    tweenRef.current = tween;

    // pause/resume on hover
    const handleEnter = () => tween.pause();
    const handleLeave = () => tween.resume();

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      tween.kill();
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, [items, direction, speed]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden bg-transparent w-full cursor-pointer ${className}`}
      style={{ background: "#0B0710" }}
    >
      <ul
        ref={ulRef}
        className="flex gap-16 whitespace-nowrap will-change-transform"
        style={{ width: "max-content" }}
      >
        {duplicated.map((text, i) => (
          <li
            key={`${text}-${i}`}
            className="font-extrabold italic select-none"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: strokeColor,
              fontSize,
              whiteSpace: "nowrap",
              lineHeight: "1",
            }}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
