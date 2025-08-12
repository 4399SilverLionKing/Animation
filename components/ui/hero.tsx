'use client';

import React, { useState } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import ShimmerButton from './shimmer-button';

export const Hero: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copying' | 'copied'>(
    'idle'
  );

  // 邮箱地址
  const email = '1263976832@qq.com';

  const { scrollY } = useScroll();
  const fontWeight = useTransform(scrollY, [0, 300], [900, 400]);
  const letterSpacing = useTransform(scrollY, [0, 300], ['0.02em', '0.1em']);

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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        {/* 主标题 - Kinetic Typography */}
        <motion.h1
          style={{
            fontWeight: fontWeight,
            letterSpacing: letterSpacing,
          }}
          className="text-texture mb-8 cursor-default text-6xl leading-none font-black select-none md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
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
