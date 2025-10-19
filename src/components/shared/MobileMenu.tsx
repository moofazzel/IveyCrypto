"use client";

import dynamic from "next/dynamic";

// Load only in the browser; grab the `slide` variant
const SlideMenu = dynamic(
  () => import("react-burger-menu").then((m: any) => m.slide),
  { ssr: false }
);

export default SlideMenu;
