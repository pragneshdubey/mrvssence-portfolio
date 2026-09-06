import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Volume2, VolumeX } from 'lucide-react';
import SafeVideo from './SafeVideo';
import StatsBar from './StatsBar';
import { media } from '../data/media';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeroProps {
  onWatchShowreel: () => void;
}

export default function Hero({ onWatchShowreel }: HeroProps) {
  const prefersReduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (prefersReduced) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my, prefersReduced]);

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-void pt-24 pb-16 md:py-0"
    >
      {/* Background video / cinematic visual (primarily right-focused) */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReduced ? undefined : { x: springX, y: springY, scale: 1.05 }}
      >
        <SafeVideo
          ref={videoRef}
          src={media.hero.src}
          poster={media.hero.poster}
          className={`w-full h-full object-cover object-center ${
            prefersReduced ? '' : 'animate-kenburns'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* Dark gradient overlays to ensure text readability on the left side */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-void via-void/90 lg:via-void/75 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-void via-transparent to-void/50 pointer-events-none" />

      {/* Sound Control - Upper Right */}
      <div className="absolute right-6 sm:right-10 top-24 sm:top-28 z-30 flex flex-col items-center">
        <button
          onClick={toggleSound}
          aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
          className="w-12 h-12 rounded-full border border-white/20 flex flex-col items-center justify-center gap-0.5 glass hover:border-ember transition-colors shadow-lg"
        >
          <motion.span
            key={muted ? 'off' : 'on'}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="text-paper"
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </motion.span>
          <span className="eyebrow text-[7px] text-smoke leading-none">{muted ? 'SOUND OFF' : 'SOUND ON'}</span>
        </button>
      </div>

      {/* Page Indicator - Bottom Right */}
      <div className="hidden sm:flex absolute right-6 sm:right-10 bottom-8 sm:bottom-10 z-30 items-center gap-2 font-mono text-xs text-smoke tracking-widest pointer-events-none">
        <span className="text-ember font-bold text-sm">01</span>
        <span className="text-white/30">/</span>
        <span className="text-smoke/70">04</span>
      </div>

      {/* Hero content - Left aligned occupying ~35-40% width */}
      <div className="relative z-20 max-w-[1600px] w-full mx-auto px-6 sm:px-12 lg:pl-32 xl:pl-40 pr-6 lg:pr-16 flex flex-col justify-center min-h-screen pt-36 sm:pt-40 md:pt-44 pb-16 md:pb-24">
        <div className="w-full max-w-xl lg:max-w-[42vw] xl:max-w-[600px]">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="eyebrow text-ember mb-3 sm:mb-4 text-xs sm:text-sm font-medium tracking-[0.35em]"
          >
            FILM &amp; VISUAL EDITOR
          </motion.p>

          {/* Headline - 4 lines strictly formatted */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.5vw] xl:text-[5.4rem] leading-[0.92] tracking-tight uppercase select-none">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-paper overflow-visible"
            >
              I TURN
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-paper overflow-visible"
            >
              RAW MOMENTS
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="block text-paper overflow-visible"
            >
              INTO POWERFUL
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block text-ember overflow-visible"
            >
              STORIES.
            </motion.span>
          </h1>

          {/* Description Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-6 sm:mt-8 text-smoke leading-relaxed space-y-1 font-body text-sm sm:text-base max-w-md"
          >
            <p className="font-medium text-paper/90 text-sm sm:text-base">
              Video Editor. Reels Editor. Photo Editor.
            </p>
            <p className="text-smoke/90 text-xs sm:text-sm md:text-base">
              Crafting cinematic videos, scroll-stopping reels and
              stunning visuals that leave a lasting impact.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-6"
          >
            {/* Primary CTA: Orange button with dark text */}
            <button
              onClick={() => scrollToSection('work')}
              data-cursor="view"
              className="group inline-flex items-center justify-center bg-ember text-void font-semibold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-ember-light transition-all shadow-lg shadow-ember/20"
            >
              VIEW MY WORK
            </button>

            {/* Secondary CTA: Minimal/transparent with outlined circular arrow icon */}
            <button
              onClick={onWatchShowreel}
              data-cursor="play"
              className="group inline-flex items-center gap-3 text-paper text-xs sm:text-sm font-medium tracking-wider uppercase hover:text-ember transition-colors py-2"
            >
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-paper group-hover:border-ember group-hover:text-ember transition-colors shrink-0">
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </span>
              EXPLORE MORE
            </button>
          </motion.div>

          {/* Floating Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-10 sm:mt-12"
          >
            <StatsBar variant="floating" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
