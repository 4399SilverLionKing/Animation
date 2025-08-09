"use client";

import React, { useEffect, useRef } from "react";
import clsx from "clsx";

/**
 * A lightweight background spotlight effect inspired by reactbits.
 * - Creates a radial gradient that follows the cursor
 * - Cold white-blue glow suitable for neon/glassmorphism aesthetics
 */
export function BackgroundSpotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spotlight-x", `${x}%`);
      el.style.setProperty("--spotlight-y", `${y}%`);
    };

    // Start from center
    el.style.setProperty("--spotlight-x", "50%");
    el.style.setProperty("--spotlight-y", "35%");

    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      style={{
        background:
          // Large soft spotlight + subtle vertical gradient
          `radial-gradient(600px circle at var(--spotlight-x,50%) var(--spotlight-y,50%), rgba(56,189,248,0.25), transparent 60%),
           radial-gradient(1000px 400px at 50% 0%, rgba(255,255,255,0.06), transparent 70%)`,
        maskImage:
          // Soften the edges a bit
          "radial-gradient(1200px 800px at 50% 20%, black 60%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(1200px 800px at 50% 20%, black 60%, transparent 100%)",
      }}
    />
  );
}

export default BackgroundSpotlight;

