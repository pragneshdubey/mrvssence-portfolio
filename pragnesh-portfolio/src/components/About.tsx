import { motion } from 'framer-motion';
import { Sparkles, Target, Clock, Download } from 'lucide-react';
import { media } from '../data/media';
import StatsBar from './StatsBar';

const TRAITS = [
  { icon: Sparkles, label: 'Creative Storytelling' },
  { icon: Target, label: 'Detail Oriented' },
  { icon: Clock, label: 'On-Time Delivery' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 order-2 md:order-1"
        >
          <img
            src={media.aboutPortrait}
            alt="MrVssence, video editor"
            className="w-full h-full object-cover grayscale-[20%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void/50 to-transparent" />
        </motion.div>

        <div className="order-1 md:order-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-ember mb-3"
          >
            ABOUT ME
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl uppercase leading-none mb-6"
          >
            Hi, I&apos;m <span className="text-ember">MrVssence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-smoke leading-relaxed max-w-lg"
          >
            I&apos;m a passionate Video &amp; Photo Editor focused on cinematic
            storytelling, engaging reels and visuals that leave a lasting
            impression.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col gap-4"
          >
            {TRAITS.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full border border-ember/40 text-ember flex items-center justify-center shrink-0">
                  <t.icon size={15} />
                </span>
                <span className="text-sm text-paper">{t.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <StatsBar variant="plain" />
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            onClick={(e) => e.preventDefault()}
            className="mt-10 inline-flex items-center gap-3 bg-paper text-void text-sm font-medium tracking-wide px-6 py-3.5 rounded-full hover:bg-ember hover:text-void transition-colors"
          >
            <Download size={15} />
            DOWNLOAD RESUME
          </motion.a>
        </div>
      </div>
    </section>
  );
}
