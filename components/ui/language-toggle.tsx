"use client";

import React from "react";
import clsx from "clsx";

export type Lang = "zh" | "en";

export interface LanguageToggleProps {
  lang: Lang;
  onChange: (lang: Lang) => void;
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ lang, onChange, className }) => {
  return (
    <div className={clsx("inline-flex overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1 text-xs backdrop-blur", className)}>
      {(["zh", "en"] as const).map(l => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={clsx(
            "px-3 py-1.5 transition-colors",
            l === lang ? "bg-sky-300/20 text-sky-100" : "text-neutral-300 hover:bg-white/10"
          )}
        >
          {l === "zh" ? "中文" : "EN"}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;

