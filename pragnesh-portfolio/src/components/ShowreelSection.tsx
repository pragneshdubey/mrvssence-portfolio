import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import SafeVideo from './SafeVideo';
import { media } from '../data/media';

interface ShowreelSectionProps {
  onPlay: () => void;
}

export default function ShowreelSection({ onPlay }: ShowreelSectionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal border-y border-white/5">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow text-ember mb-4">SHOWREEL</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9] uppercase">
            Craft.
            <br />
            Cut.
            <br />
            <span className="text-ember">Create.</span>
          </h2>
          <p className="mt-6 text-smoke max-w-sm leading-relaxed">
            A glimpse of my work across videos, reels and photos.
          </p>
          <button
            onClick={onPlay}
            data-cursor="play"
            className="mt-8 inline-flex items-center gap-3 text-sm tracking-wide border border-white/20 rounded-full px-6 py-3.5 hover:border-ember hover:text-ember transition-colors"
          >
            <Play size={13} fill="currentColor" />
            WATCH FULL SHOWREEL
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video rounded-sm overflow-hidden cursor-pointer group border border-white/10"
          onClick={onPlay}
          data-cursor="play"
          role="button"
          tabIndex={0}
          aria-label="Play showreel"
          onKeyDown={(e) => e.key === 'Enter' && onPlay()}
        >
          <SafeVideo
            src={media.showreel.src}
            poster={media.showreel.poster}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          />
          <div className="absolute inset-0 bg-void/40 group-hover:bg-void/55 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="w-20 h-20 rounded-full border border-white/40 glass flex items-center justify-center group-hover:scale-110 group-hover:border-ember transition-all">
              <Play size={22} fill="currentColor" className="ml-1" />
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
