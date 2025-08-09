'use client';

import React from 'react';

import clsx from 'clsx';

export interface SocialLinksProps {
  githubUrl?: string;
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  githubUrl = 'https://github.com/',
  className,
}) => {
  const base =
    'rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-colors';

  return (
    <div className={clsx('flex items-center gap-3', className)}>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={clsx(base, 'px-3 py-2 text-xs text-sky-100')}
          aria-label="GitHub"
        >
          GitHub
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
