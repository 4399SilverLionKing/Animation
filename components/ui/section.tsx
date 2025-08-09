import React from 'react';

import clsx from 'clsx';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  full?: boolean; // occupy full viewport height
  center?: boolean; // vertically center content
}

export const Section: React.FC<SectionProps> = ({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  full = false,
  center = false,
  className,
  children,
  ...rest
}) => {
  const isCenter = align === 'center';
  const sectionClasses = clsx(
    full ? 'h-screen snap-start' : 'py-20 sm:py-28',
    center && 'flex flex-col justify-center',
    className
  );

  return (
    <section id={id} className={sectionClasses} {...rest}>
      {(eyebrow || title || subtitle) && (
        <div
          className={clsx('mx-auto max-w-3xl px-6', isCenter && 'text-center')}
        >
          {eyebrow && (
            <div className="mb-2 text-xs tracking-[0.18em] text-sky-300/80 uppercase">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-sm/relaxed text-neutral-600 dark:text-neutral-300">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="mx-auto mt-10 max-w-6xl px-6">{children}</div>
    </section>
  );
};

export default Section;
