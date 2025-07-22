'use client';

import SplitText from '@/components/bits/splitText';

export default function Home() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <SplitText
        text="Hello, GSAP!"
        className="text-center text-2xl font-semibold"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
