import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsDesktop } from '../hooks/useIsDesktop';
import { useReducedMotion } from '../hooks/useReducedMotion';

type CursorState = 'default' | 'nav' | 'button' | 'open' | 'play';

export default function CursorFollower() {
  const isDesktop = useIsDesktop();
  const prefersReduced = useReducedMotion();
  const [state, setState] = useState<CursorState>('default');

  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!isDesktop || prefersReduced) {
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    document.body.classList.add('custom-cursor-active');

    let animationFrameId: number;

    const move = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const updatePosition = () => {
      // 95% tight lerp for immediate response with zero trailing lag
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.95;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.95;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) {
        setState('default');
        return;
      }

      // 1. Explicit data-cursor overrides
      const dataCursor = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (dataCursor === 'play') {
        setState('play');
        return;
      }
      if (dataCursor === 'open') {
        setState('open');
        return;
      }
      if (dataCursor === 'nav') {
        setState('nav');
        return;
      }
      if (dataCursor === 'view' || dataCursor === 'button') {
        setState('button');
        return;
      }

      // 2. Navigation links (simple ring without text)
      if (target.closest('nav button, nav a, header nav button, header nav a')) {
        setState('nav');
        return;
      }

      // 3. External / Social links
      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (
        anchor &&
        (anchor.target === '_blank' ||
          anchor.href.includes('http') ||
          target.closest('[aria-label*="Instagram"], [aria-label*="YouTube"], [aria-label*="LinkedIn"], [aria-label*="Vimeo"], [aria-label*="Behance"]'))
      ) {
        setState('open');
        return;
      }

      // 4. Video / Project playable elements
      if (target.closest('video, [role="button"][aria-label*="play" i], [aria-label*="showreel" i]')) {
        setState('play');
        return;
      }

      // 5. Interactive buttons / CTAs
      if (target.closest('button, a, [role="button"]')) {
        setState('button');
        return;
      }

      setState('default');
    };

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isDesktop, prefersReduced]);

  // Disable custom cursor completely on mobile/tablet or when prefers-reduced-motion is active
  if (!isDesktop || prefersReduced) return null;

  const isDefault = state === 'default';
  const isNav = state === 'nav';
  const isButton = state === 'button';
  const isOpen = state === 'open';
  const isPlay = state === 'play';

  let size = 10;
  if (isNav) size = 18;
  if (isButton || isOpen) size = 48;
  if (isPlay) size = 64;

  let labelText = '';
  if (isButton) labelText = 'VIEW';
  if (isOpen) labelText = 'OPEN';
  if (isPlay) labelText = '▶ PLAY';

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full transition-[width,height,background-color,border-color,box-shadow] duration-150 ease-out"
      style={{
        width: size,
        height: size,
        backgroundColor: isDefault
          ? '#FFFFFF'
          : isNav
          ? 'transparent'
          : 'rgba(8, 8, 8, 0.88)',
        border: isDefault
          ? 'none'
          : isNav
          ? '1.5px solid rgba(255, 122, 0, 0.8)'
          : isPlay
          ? '1px solid rgba(255, 122, 0, 0.9)'
          : isOpen
          ? '1px solid rgba(255, 255, 255, 0.4)'
          : '1px solid rgba(255, 122, 0, 0.85)',
        boxShadow: isDefault
          ? '0 0 8px rgba(255, 255, 255, 0.4)'
          : isNav
          ? 'none'
          : '0 4px 20px rgba(0, 0, 0, 0.5)',
        backdropFilter: isButton || isOpen || isPlay ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: isButton || isOpen || isPlay ? 'blur(8px)' : 'none',
        willChange: 'transform',
      }}
    >
      {labelText && (
        <motion.span
          key={labelText}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.12 }}
          className={`font-mono font-bold tracking-wider uppercase select-none text-center ${
            isPlay ? 'text-ember text-[10px]' : isButton ? 'text-ember text-[9px]' : 'text-paper text-[9px]'
          }`}
        >
          {labelText}
        </motion.span>
      )}
    </div>
  );
}
