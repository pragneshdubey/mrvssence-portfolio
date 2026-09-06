import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Music, Activity, Video } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface LoadingScreenProps {
  onComplete: () => void;
}

// Timeline video clips matching reference image composition
const TIMELINE_CLIPS = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=400&auto=format&fit=crop',
    flex: '1.2',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=400&auto=format&fit=crop',
    flex: '1',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=400&auto=format&fit=crop',
    flex: '1.3',
  },
  {
    type: 'text',
    text: 'GOOD STORIES MATTER',
    flex: '1',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=400&auto=format&fit=crop',
    flex: '1.4',
  },
  {
    type: 'text',
    text: 'CUT EDIT CREATE',
    flex: '1',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=400&auto=format&fit=crop',
    flex: '1.2',
  },
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const prefersReduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = prefersReduced ? 300 : 1800;
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 300);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [prefersReduced]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between py-6 sm:py-10 px-4 bg-[#050505] text-[#F5F5F5] overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle noise grain & dark cinematic vignette + orange light leaks on left/right edges */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Left Edge Light Leak */}
            <div className="absolute -left-20 top-1/3 w-64 h-96 bg-[#FF7A00]/25 rounded-full blur-[100px]" />
            {/* Right Edge Light Leak */}
            <div className="absolute -right-20 bottom-1/3 w-64 h-96 bg-[#FF7A00]/20 rounded-full blur-[100px]" />
            {/* Dark Vignette Overlay */}
            <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/60 to-[#050505]/95" />
          </div>

          {/* TOP CORNERS */}
          <div className="w-full max-w-[1600px] flex items-center justify-between relative z-30 pointer-events-none">
            {/* TOP-LEFT CORNER */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[9px] sm:text-[10px] text-[#888888] uppercase tracking-[0.25em]"
            >
              <div className="relative pl-3 pt-1 border-l border-t border-white/30 w-fit pr-3 pb-1 rounded-tl-[2px]">
                <div>PLAY</div>
                <div>EDIT</div>
                <div>EXPLORE</div>
              </div>
            </motion.div>

            {/* TOP-RIGHT CORNER */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[9px] sm:text-[10px] text-[#888888] uppercase tracking-[0.25em]"
            >
              <div className="relative pr-3 pt-1 border-r border-t border-white/30 flex items-center gap-2 pl-3 pb-1 rounded-tr-[2px]">
                <span>EST 2024</span>
                <span className="w-5 h-[2px] bg-[#FF7A00]" />
              </div>
            </motion.div>
          </div>

          {/* CENTER MAIN COMPOSITION */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-6xl my-auto">
            {/* VISUALS   LOADING . . . */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-mono text-xs sm:text-sm tracking-[0.45em] text-[#FF7A00] uppercase mb-3 font-semibold"
            >
              VISUALS &nbsp; LOADING . . .
            </motion.p>

            {/* MRVSSENCE BRAND TITLE */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] tracking-wider uppercase leading-none mb-2 select-none"
            >
              <span className="text-[#F5F5F5]">MR</span>
              <span className="text-[#FF7A00]">VSSENCE</span>
            </motion.h1>

            {/* BRAND SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-mono text-xs sm:text-sm text-[#CCCCCC] tracking-[0.35em] uppercase font-semibold mb-6 flex items-center justify-center gap-3 flex-wrap"
            >
              <span>VIDEO EDITOR</span>
              <span className="text-[#FF7A00]">&middot;</span>
              <span>REELS EDITOR</span>
              <span className="text-[#FF7A00]">&middot;</span>
              <span>PHOTO EDITOR</span>
            </motion.p>

            {/* ============================================================
                THE MAIN FEATURE: VIDEO EDITING TIMELINE UI COMPONENT
               ============================================================ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[950px] bg-[#0c0c0c]/90 border border-white/10 rounded-xl p-3 sm:p-4 shadow-2xl backdrop-blur-md relative overflow-hidden my-2"
            >
              {/* Timeline Ruler Timecodes */}
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#666666] px-12 mb-2 tracking-widest">
                <span>00:00</span>
                <span className="text-[#FF7A00] flex items-center gap-1">&bull; 00:10</span>
                <span>00:20</span>
                <span>00:30</span>
                <span>00:40</span>
                <span>00:50</span>
                <span>01:00</span>
              </div>

              {/* Timeline Tracks Body Container */}
              <div className="relative flex items-stretch gap-2 bg-[#050505] rounded-lg p-2 border border-white/5 overflow-hidden">
                {/* Left Tool Column */}
                <div className="flex flex-col justify-around px-2 py-1 border-r border-white/10 text-[#666666] shrink-0">
                  <Film size={14} className="hover:text-white transition-colors" />
                  <Music size={14} className="hover:text-[#FF7A00] transition-colors" />
                  <Activity size={14} className="hover:text-emerald-400 transition-colors" />
                </div>

                {/* Video & Audio Tracks Area */}
                <div className="relative flex-1 flex flex-col gap-2 overflow-hidden">
                  {/* DYNAMIC PLAYHEAD LINE & MARKER */}
                  <div
                    className="absolute top-0 bottom-0 z-30 pointer-events-none transition-all duration-100 ease-out flex flex-col items-center"
                    style={{ left: `${Math.max(2, Math.min(98, progress))}%` }}
                  >
                    {/* Top Marker Triangle */}
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FF7A00] drop-shadow-[0_0_8px_#FF7A00]" />
                    {/* Vertical Playhead Line */}
                    <div className="w-[2px] h-full bg-[#FF7A00] shadow-[0_0_12px_#FF7A00]" />
                  </div>

                  {/* ROW 1: VIDEO CLIPS TRACK */}
                  <div className="flex items-center gap-1.5 h-14 sm:h-16 w-full">
                    {TIMELINE_CLIPS.map((clip, i) => (
                      <div
                        key={i}
                        className="relative h-full bg-[#111111] border border-white/15 rounded-sm overflow-hidden flex items-center justify-center group"
                        style={{ flex: clip.flex }}
                      >
                        {clip.type === 'image' ? (
                          <>
                            <img
                              src={clip.src}
                              alt="Clip thumbnail"
                              className="w-full h-full object-cover contrast-125 saturate-90 brightness-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7A00]/20 via-transparent to-black/60 mix-blend-color-dodge" />
                            <div className="absolute top-1 left-1.5 opacity-60">
                              <Video size={10} className="text-white" />
                            </div>
                          </>
                        ) : (
                          <div className="px-2 py-1 text-center font-mono text-[8px] sm:text-[9px] text-[#BBBBBB] font-semibold tracking-wider bg-[#181818] w-full h-full flex items-center justify-center border border-white/5">
                            {clip.text}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* ROW 2: AUDIO WAVEFORM TRACKS (Green, Orange, Purple) */}
                  <div className="flex items-center gap-1.5 h-8 sm:h-10 w-full">
                    {/* Green Audio Track */}
                    <div className="flex-1 h-full bg-emerald-950/40 border border-emerald-500/30 rounded-sm p-1 flex items-center overflow-hidden">
                      <svg className="w-full h-full text-emerald-400 opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path
                          d="M 0 10 Q 10 2 20 10 T 40 10 T 60 4 T 80 16 T 100 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M 0 10 Q 15 18 30 10 T 60 14 T 80 6 T 100 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          opacity="0.5"
                        />
                      </svg>
                    </div>

                    {/* Orange Audio Track */}
                    <div className="flex-[1.5] h-full bg-amber-950/40 border border-amber-500/40 rounded-sm p-1 flex items-center overflow-hidden shadow-[inset_0_0_10px_rgba(255,122,0,0.2)]">
                      <svg className="w-full h-full text-[#FF7A00] opacity-90" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path
                          d="M 0 10 Q 8 0 16 10 T 32 18 T 48 2 T 64 16 T 80 4 T 100 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>

                    {/* Purple Audio Track */}
                    <div className="flex-1 h-full bg-purple-950/40 border border-purple-500/30 rounded-sm p-1 flex items-center overflow-hidden">
                      <svg className="w-full h-full text-purple-400 opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path
                          d="M 0 10 Q 12 4 25 10 T 50 16 T 75 4 T 100 10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* HORIZONTAL PROGRESS BAR */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100%' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-[320px] sm:max-w-[400px] h-1.5 bg-[#1F1F1F] rounded-full overflow-hidden relative border border-white/10 mt-4 mb-2"
            >
              <div
                className="absolute inset-y-0 left-0 bg-[#FF7A00] rounded-full transition-all duration-100 ease-out shadow-[0_0_14px_#FF7A00]"
                style={{ width: `${progress}%` }}
              />
            </motion.div>

            {/* DYNAMIC PERCENTAGE (e.g. 54 %) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="font-mono text-sm sm:text-base text-[#CCCCCC] font-medium tracking-[0.3em] mb-4"
            >
              {progress} %
            </motion.div>

            {/* CUT  ·  EDIT  ·  CREATE  ·  REPEAT */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-mono text-xs sm:text-sm text-[#CCCCCC] tracking-[0.35em] uppercase font-semibold mb-4 flex items-center justify-center gap-2.5 flex-wrap"
            >
              <span>CUT</span>
              <span className="text-[#FF7A00]">&middot;</span>
              <span>EDIT</span>
              <span className="text-[#FF7A00]">&middot;</span>
              <span>CREATE</span>
              <span className="text-[#FF7A00]">&middot;</span>
              <span>REPEAT</span>
            </motion.p>

            {/* "TURNING IDEAS INTO VISUAL STORIES" */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-xs sm:text-sm text-[#AAAAAA] tracking-widest font-body italic">
                &ldquo;TURNING IDEAS INTO VISUAL STORIES&rdquo;
              </p>
              <div className="w-8 h-0.5 bg-[#FF7A00]" />
            </motion.div>
          </div>

          {/* BOTTOM CORNERS */}
          <div className="w-full max-w-[1600px] flex items-center justify-between relative z-30 pointer-events-none">
            {/* BOTTOM-LEFT CORNER */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[9px] sm:text-[10px] text-[#888888] uppercase tracking-[0.25em]"
            >
              <div className="relative pl-3 pb-1 border-l border-b border-white/30 w-fit pr-3 pt-1 rounded-bl-[2px]">
                <div>GOOD</div>
                <div>STORIES</div>
                <div>NEVER FADE</div>
              </div>
            </motion.div>

            {/* BOTTOM-RIGHT CORNER */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-[9px] sm:text-[10px] text-[#888888] uppercase tracking-[0.25em]"
            >
              <div className="relative pr-3 pb-1 border-r border-b border-white/30 w-fit pl-3 pt-1 rounded-br-[2px] text-right ml-auto">
                <div>MORE</div>
                <div>THAN</div>
                <div>EDITING</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
