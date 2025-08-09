"use client";

import React from "react";
import clsx from "clsx";

/**
 * Simple diagonal moving beams as a background layer.
 */
export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div aria-hidden className={clsx("pointer-events-none absolute inset-0 -z-10", className)}>
      <div className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div className="absolute -left-1/2 top-0 h-[200%] w-[200%] -rotate-12 animate-[beams_18s_linear_infinite]" style={{
          background:
            "repeating-linear-gradient(90deg, rgba(56,189,248,0.12) 0 2px, transparent 2px 10px)",
        }} />
      </div>
      <style>{`
        @keyframes beams { to { transform: translateX(25%); } }
      `}</style>
    </div>
  );
}

export default BackgroundBeams;

