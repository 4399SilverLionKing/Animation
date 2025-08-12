'use client';

import React from 'react';

import clsx from 'clsx';

export interface BentoCardProps {
  title: string;
  description?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Bento-style card with glass base and hover lift.
 */
export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  description,
  href,
  className,
  children,
}) => {
  const inner = (
    <div
      className={clsx(
        'group relative h-full w-full overflow-hidden rounded-2xl',
        'border border-white/10 bg-white/5 backdrop-blur-md',
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]',
        'transition-transform duration-300 will-change-transform',
        'hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(56,189,248,0.20)]',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(to bottom right, rgba(56,189,248,0.15), transparent 40%, rgba(255,255,255,0.05))',
        }}
      />

      <div className="relative z-10 p-5 sm:p-6">
        <h3 className="text-base font-semibold text-sky-100 sm:text-lg">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-sky-50/70">{description}</p>
        )}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="block h-full"
      >
        {inner}
      </a>
    );
  }
  return inner;
};

export default BentoCard;
