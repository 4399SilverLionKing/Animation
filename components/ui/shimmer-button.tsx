"use client";

import React from "react";
import clsx from "clsx";

/**
 * Shimmer button inspired by reactbits.
 * - Cold white-blue accent
 * - Works with Tailwind utility classes
 */
export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const ShimmerButton = ({ className, children, ...props }: ShimmerButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "relative inline-flex items-center justify-center rounded-xl px-5 py-2.5",
        "font-medium tracking-wide text-sky-50",
        // glass base
        "bg-white/10 backdrop-blur-md border border-white/15",
        // subtle inner highlight
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none",
        // shimmer
        "after:absolute after:inset-0 after:rounded-xl after:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] after:-translate-x-full after:animate-[shimmer_2s_infinite] after:pointer-events-none",
        // hover ring
        "hover:border-sky-300/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]",
        // active press
        "active:scale-[0.98]",
        className
      )}
      style={{
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {children}
      <style>{`
        @keyframes shimmer { to { transform: translateX(100%); } }
      `}</style>
    </button>
  );
};

export default ShimmerButton;

