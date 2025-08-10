'use client';

import React from 'react';

import { GithubIcon } from 'lucide-react';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#timeline', label: 'Timeline' },
];

export default function Navbar() {
  const githubUrl = 'https://github.com/4399SilverLionKing';

  const handleNavClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Smooth-scroll within the main scroll container
      e.preventDefault();
      const el = document.querySelector(href) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update the URL hash without adding a new history entry
        history.replaceState(null, '', href);
      } else {
        // Fallback to normal navigation if not found
        window.location.hash = href;
      }
    };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full px-4 sm:px-6">
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <nav className="flex h-12 items-center justify-between px-4">
            <div className="flex items-center gap-4 text-xs sm:gap-6 sm:text-sm">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-300 transition-colors hover:text-white"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
