"use client";

import React from "react";
import clsx from "clsx";

export interface InfiniteMarqueeProps {
  items: React.ReactNode[];
  speed?: number; // seconds per loop
  className?: string;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({ items, speed = 25, className }) => {
  const doubled = [...items, ...items];
  return (
    <div className={clsx("overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div
        className="flex gap-x-10 will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {doubled.map((el, i) => (
          <div key={i} className="shrink-0">
            {el}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee { to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

export default InfiniteMarquee;

