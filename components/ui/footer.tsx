import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-5xl px-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Asta — Built with Next.js & Tailwind
      </div>
    </footer>
  );
};

export default Footer;

