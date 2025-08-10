'use client';

import React, { useEffect, useRef, useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

import ShimmerButton from './shimmer-button';

gsap.registerPlugin(GSAPSplitText);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copying' | 'copied'>(
    'idle'
  );

  // 邮箱地址
  const email = '1263976832@qq.com';

  const { scrollY } = useScroll();
  const fontWeight = useTransform(scrollY, [0, 300], [900, 400]);
  const letterSpacing = useTransform(scrollY, [0, 300], ['0.02em', '0.1em']);

  // 检测用户是否偏好减少动画
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;

    const title = titleRef.current;

    // 如果用户偏好减少动画，直接显示静态文本
    if (prefersReducedMotion) {
      setIsLoaded(true);
      return;
    }

    // 创建 SplitText 实例
    const splitText = new GSAPSplitText(title, {
      type: 'chars',
      charsClass: 'kinetic-char',
    });

    // 设置初始状态
    gsap.set(splitText.chars, {
      opacity: 0,
      y: 100,
      rotation: () => gsap.utils.random(-15, 15),
      scale: 0.8,
    });

    // 创建进入动画
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoaded(true);
        // 添加悬停事件监听器（仅在非减少动画模式下）
        if (!prefersReducedMotion) {
          splitText.chars.forEach((char, index) => {
            char.addEventListener('mouseenter', () => handleLetterHover(index));
            char.addEventListener('mouseleave', () => handleLetterLeave(index));
          });
        }
      },
    });

    tl.to(splitText.chars, {
      opacity: 1,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      stagger: {
        amount: 1.2,
        from: 'random',
      },
    });

    return () => {
      // 清理事件监听器
      if (splitText.chars) {
        splitText.chars.forEach((char, index) => {
          char.removeEventListener('mouseenter', () =>
            handleLetterHover(index)
          );
          char.removeEventListener('mouseleave', () =>
            handleLetterLeave(index)
          );
        });
        splitText.revert();
      }
    };
  }, [prefersReducedMotion]);

  const handleLetterHover = (index: number) => {
    if (!isLoaded) return;
    setHoveredLetter(index);

    const chars = document.querySelectorAll('.kinetic-char');
    const targetChar = chars[index];

    if (targetChar) {
      gsap.to(targetChar, {
        y: -10,
        rotation: () => gsap.utils.random(-5, 5),
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const handleLetterLeave = (index: number) => {
    setHoveredLetter(null);

    const chars = document.querySelectorAll('.kinetic-char');
    const targetChar = chars[index];

    if (targetChar) {
      gsap.to(targetChar, {
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  // 复制邮箱到剪切板
  const handleCopyEmail = async () => {
    try {
      setCopyStatus('copying');

      // 使用现代的 Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      }

      setCopyStatus('copied');

      // 2秒后重置状态
      setTimeout(() => {
        setCopyStatus('idle');
      }, 2000);
    } catch (err) {
      console.error('复制失败:', err);
      setCopyStatus('idle');

      // 显示错误提示（可选）
      alert('复制失败，请手动复制邮箱地址：' + email);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* 主标题 - Kinetic Typography */}
        <motion.h1
          ref={titleRef}
          style={{
            fontWeight: prefersReducedMotion ? 900 : fontWeight,
            letterSpacing: prefersReducedMotion ? '0.02em' : letterSpacing,
          }}
          className={`mb-8 cursor-default text-6xl leading-none font-black select-none md:text-8xl lg:text-9xl ${
            prefersReducedMotion ? 'text-white' : 'text-texture'
          }`}
          data-text="HELLO, I'M ASTA."
        >
          HELLO, I'M ASTA.
        </motion.h1>

        {/* 价值陈述 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mx-auto mb-12"
        >
          <p className="mb-4 text-xl font-light text-gray-300 md:text-2xl">
            A full-stack developer crafting intelligent, user-centric
            applications.
          </p>
          <p className="text-lg font-light text-gray-400">
            Bridging the gap between powerful code and intuitive AI experiences.
          </p>
        </motion.div>

        {/* 布局容器 */}
        <div className="flex flex-col items-end justify-between gap-12 lg:flex-row">
          {/* 左下要点 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex-1 text-left"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-300">
                  Full-Stack Web Development
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                <span className="text-gray-300">
                  AI-Powered Feature Integration
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-gray-300">
                  3D-Based Design and Animation
                </span>
              </div>
            </div>
          </motion.div>

          {/* 右侧 CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-1 justify-end"
          >
            <div className="space-y-4">
              <ShimmerButton
                className="w-80 px-8 py-4 text-lg"
                onClick={handleCopyEmail}
                disabled={copyStatus === 'copying'}
              >
                {copyStatus === 'idle' && 'Get in Touch'}
                {copyStatus === 'copying' && 'Copying...'}
                {copyStatus === 'copied' && '✓ Email Copied!'}
              </ShimmerButton>
              <p className="text-sm text-gray-500">
                {copyStatus === 'copied'
                  ? `Copied: ${email}`
                  : "Let's create something extraordinary together"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
