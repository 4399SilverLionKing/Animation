"use client";

import React from "react";
import clsx from "clsx";

/**
 * Subtle animated aurora background using blurred gradients.
 */
export function BackgroundAurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={clsx("pointer-events-none absolute inset-0 -z-20 overflow-hidden", className)}
    >
      <div className="absolute -inset-[20%] blur-3xl opacity-50">
        <div className="absolute inset-0 animate-[aurora_16s_linear_infinite] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.20),transparent_55%,rgba(255,255,255,0.12))]" />
        <div className="absolute inset-0 animate-[aurora_20s_linear_infinite_reverse] rounded-full bg-[radial-gradient(60%_60%_at_60%_40%,rgba(255,255,255,0.10),transparent_60%)]" />
      </div>
      <style>{`
        @keyframes aurora { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

export default BackgroundAurora;

