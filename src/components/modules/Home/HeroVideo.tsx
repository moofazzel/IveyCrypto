// app/components/HeroVideo.tsx
"use client";

export default function HeroVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-auto rounded-lg object-cover"
    >
      <source src="/abt.webm" type="video/webm" />
      {/* fallback (optional) */}
      <source src="/abt.webm" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
