import React from "react";

export interface TimelineItem {
  title: string;
  period?: string;
  description?: string;
}

export const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <ol className="relative border-s border-white/10 pl-6">
      {items.map((it, idx) => (
        <li key={idx} className="mb-8 ms-4">
          <span className="absolute -start-3 flex size-6 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
            <span className="size-2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
          </span>
          <h4 className="text-sky-100 font-medium">{it.title}</h4>
          {it.period && (
            <div className="text-xs text-sky-200/70 mt-1">{it.period}</div>
          )}
          {it.description && (
            <p className="mt-2 text-sm text-neutral-300/90">{it.description}</p>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Timeline;

