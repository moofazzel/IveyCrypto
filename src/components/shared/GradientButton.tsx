"use client";

import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * Reusable gradient button
 * - Uses brand colors: #5c63fa → #a868fa
 * - On hover: gradient reverses smoothly
 */
export default function GradientButton({
  children,
  onClick,
  className = "",
  type = "button",
}: GradientButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`grad_button btn-hover ${className}`}
    >
      {children}
    </button>
  );
}
