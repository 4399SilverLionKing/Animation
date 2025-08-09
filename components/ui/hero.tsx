'use client';

import React from 'react';

import ShimmerButton from '@/components/ui/shimmer-button';
import SplitText from '@/components/ui/splitText';

export const Hero: React.FC = () => {
  const title = 'Hi, I’m Asta';
  const subtitle =
    'Frontend Developer • Creative Interactions • Motion Enthusiast';
  const cta = 'View Projects';

  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <SplitText
            text={title}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            splitType="chars"
            delay={35}
            duration={0.5}
            from={{ opacity: 0, y: 12 }}
            to={{ opacity: 1, y: 0 }}
          />
          <div className="mt-3 text-lg text-neutral-700 dark:text-neutral-300">
            {subtitle}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <ShimmerButton
              onClick={() => {
                const el = document.querySelector('#projects');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {cta}
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
