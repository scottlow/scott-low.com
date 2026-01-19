'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    // Throttled scroll handler using requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Calculate parallax offsets for different layers
  const layer1Offset = prefersReducedMotion ? 0 : scrollY * 0.1;
  const layer2Offset = prefersReducedMotion ? 0 : scrollY * 0.2;
  const layer3Offset = prefersReducedMotion ? 0 : scrollY * 0.05;

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Base gradient - deepens as you scroll */}
      <div
        className="absolute inset-0 transition-colors duration-1000"
        style={{
          background: `linear-gradient(
            180deg,
            #f8fbfc 0%,
            #e8f4f8 30%,
            #d4eef4 60%,
            #c0e6ef 100%
          )`,
        }}
      />

      {/* Layer 1: Large, slow-moving organic shapes */}
      <svg
        className="absolute w-full h-full"
        style={{
          transform: `translateY(${layer1Offset}px)`,
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2196f3" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#1976d2" stopOpacity="0.03" />
          </linearGradient>
        </defs>
        {/* Large wave form */}
        <path
          d="M0,400 C200,350 400,450 600,400 C800,350 1000,450 1200,400 C1400,350 1500,400 1440,400 L1440,900 L0,900 Z"
          fill="url(#gradient1)"
          className={prefersReducedMotion ? '' : 'animate-float-slow'}
        />
      </svg>

      {/* Layer 2: Medium shapes with more movement */}
      <svg
        className="absolute w-full h-full"
        style={{
          transform: `translateY(${layer2Offset}px)`,
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#64b5f6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#42a5f5" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        {/* Organic blob shapes suggesting underwater depth */}
        <ellipse
          cx="200"
          cy="600"
          rx="300"
          ry="200"
          fill="url(#gradient2)"
          className={prefersReducedMotion ? '' : 'animate-float-medium'}
        />
        <ellipse
          cx="1100"
          cy="500"
          rx="250"
          ry="180"
          fill="url(#gradient2)"
          className={prefersReducedMotion ? '' : 'animate-float-slow'}
        />
        <ellipse
          cx="700"
          cy="750"
          rx="400"
          ry="150"
          fill="url(#gradient2)"
          className={prefersReducedMotion ? '' : 'animate-float-fast'}
        />
      </svg>

      {/* Layer 3: Subtle particle-like dots suggesting underwater atmosphere */}
      <svg
        className="absolute w-full h-full opacity-40"
        style={{
          transform: `translateY(${layer3Offset}px)`,
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="particleGradient">
            <stop offset="0%" stopColor="#90caf9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#90caf9" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Scattered particles */}
        <circle cx="100" cy="200" r="40" fill="url(#particleGradient)" />
        <circle cx="300" cy="500" r="25" fill="url(#particleGradient)" />
        <circle cx="500" cy="150" r="35" fill="url(#particleGradient)" />
        <circle cx="750" cy="400" r="30" fill="url(#particleGradient)" />
        <circle cx="950" cy="250" r="45" fill="url(#particleGradient)" />
        <circle cx="1150" cy="550" r="28" fill="url(#particleGradient)" />
        <circle cx="1300" cy="300" r="38" fill="url(#particleGradient)" />
        <circle cx="200" cy="700" r="32" fill="url(#particleGradient)" />
        <circle cx="600" cy="650" r="42" fill="url(#particleGradient)" />
        <circle cx="1000" cy="700" r="35" fill="url(#particleGradient)" />
      </svg>

      {/* Subtle wave lines at different depths */}
      <svg
        className="absolute bottom-0 w-full"
        style={{
          transform: `translateY(${layer2Offset * 0.5}px)`,
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 Q360,150 720,100 T1440,100 L1440,200 L0,200 Z"
          fill="#2196f3"
          fillOpacity="0.03"
        />
        <path
          d="M0,120 Q360,80 720,120 T1440,120 L1440,200 L0,200 Z"
          fill="#1976d2"
          fillOpacity="0.02"
        />
      </svg>
    </div>
  );
}
