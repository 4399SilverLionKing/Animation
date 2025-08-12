import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { GithubIcon } from 'lucide-react';

import GooeyNav from '@/components/ui/groovy-nav';
import SplashCursor from '@/components/ui/splash-cursor';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Asta's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Timeline', href: '#timeline' },
  ];

  const githubUrl = 'https://github.com/4399SilverLionKing';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed inset-x-0 top-0 z-50">
          <div className="mx-auto w-full px-4 sm:px-6">
            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
              <div className="flex h-12 items-center justify-between px-4">
                <GooeyNav
                  items={navItems}
                  particleCount={5}
                  particleDistances={[200, 10]}
                  particleR={300}
                  animationTime={1000}
                  timeVariance={200}
                />
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-neutral-300 transition-colors hover:text-white"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </header>
        <SplashCursor
          DENSITY_DISSIPATION={10}
          SPLAT_RADIUS={0.1}
          VELOCITY_DISSIPATION={1}
          PRESSURE={1}
        />
        {children}
      </body>
    </html>
  );
}
