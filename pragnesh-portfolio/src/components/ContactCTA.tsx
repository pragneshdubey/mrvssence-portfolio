import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/media';

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative py-28 md:py-40 bg-charcoal overflow-hidden border-y border-white/5"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(255,122,0,0.18), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1600px] mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-ember mb-5"
        >
          LET&apos;S COLLABORATE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-8xl uppercase leading-[0.95]"
        >
          BOOK NOW AND MAKE
          <br />
          YOUR MOMENT
          <br />
          <span className="text-ember">UNFORGETTABLE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-smoke max-w-md mx-auto"
        >
          Let&apos;s create something amazing together.
        </motion.p>

        <motion.a
          href={`mailto:${contactInfo.email}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-10 inline-flex items-center gap-3 bg-ember text-void font-medium text-sm md:text-base tracking-wide px-8 py-4 md:px-10 md:py-5 rounded-full"
        >
          LET&apos;S TALK
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </motion.a>
      </div>
    </section>
  );
}
