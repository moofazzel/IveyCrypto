"use client";

import Image from "next/image";
import "../../../app/portfolio/Portfolio.css";

const Masonry = () => {
  const images = [
    { src: "/images/portfolio/tl1.jpg", alt: "tall image 1", class: "tall" },
    { src: "/images/portfolio/tl2.jpg", alt: "tall image 2", class: "tall" },
    { src: "/images/portfolio/wd1.jpg", alt: "wide image 1", class: "wide" },
    { src: "/images/portfolio/bg1.jpg", alt: "big image 1", class: "big" },
    { src: "/images/portfolio/tl5.jpg", alt: "tall image 5", class: "tall" },
    { src: "/images/portfolio/wd2.jpg", alt: "wide image 2", class: "wide" },
    { src: "/images/portfolio/bg3.jpg", alt: "big image 3", class: "big" },
    { src: "/images/portfolio/bg2.jpg", alt: "big image 2", class: "big" },
    { src: "/images/portfolio/tl3.jpg", alt: "tall image 3", class: "tall" },
    {
      src: "/images/portfolio/screencapture-poppythehippo-fun-2025-10-21-14_07_10-(1)-(1).png",
      alt: "poppy hippo",
      class: "",
    },
    { src: "/images/portfolio/tl4.jpg", alt: "tall image 4", class: "tall" },
    { src: "/images/portfolio/tl6.jpg", alt: "tall image 6", class: "tall" },
    { src: "/images/portfolio/wd3.jpg", alt: "wide image 3", class: "wide" },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid-wrapper">
          {images.map(({ src, alt, class: cls }, i) => (
            <div key={i} className={cls}>
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded-lg"
                  priority={i < 2} // first 2 load fast
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Masonry;
