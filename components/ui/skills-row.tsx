import React from "react";
import { Code, Cpu, Palette, Sparkles } from "lucide-react";

export const SkillsRow = () => {
  const item = (text: string, Icon = Sparkles) => (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-sky-100 backdrop-blur">
      <Icon className="size-4 text-sky-300" />
      <span>{text}</span>
    </div>
  );
  return (
    <div className="flex items-center gap-4">
      {item("TypeScript / React", Code)}
      {item("Next.js / Tailwind", Palette)}
      {item("GSAP / Motion", Sparkles)}
      {item("Performance / DX", Cpu)}
    </div>
  );
};

export default SkillsRow;

