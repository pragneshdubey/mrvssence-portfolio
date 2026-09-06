import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'MrVssence is incredibly talented and understands exactly what I wanted. The edit was beyond expectations.',
    name: 'Rahul Sharma',
    role: 'Content Creator',
  },
  {
    quote:
      'His work on our brand film and reels was amazing. Professional, creative and always delivered on time.',
    name: 'Ananya Mehta',
    role: 'Marketing Manager',
  },
  {
    quote: 'The photo edits were clean, crisp and exactly how I imagined.',
    name: 'Vikram Singh',
    role: 'Photographer',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-void">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-ember mb-3 text-center"
        >
          CLIENTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl uppercase mb-14 text-center"
        >
          What They Say
        </motion.h2>

        <div className="max-w-2xl mx-auto relative">
          <Quote className="text-ember/30 mx-auto mb-6" size={40} />

          <div className="relative min-h-[180px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-center w-full"
              >
                <p className="font-display text-2xl md:text-3xl leading-snug text-paper mb-6">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="text-ember text-sm tracking-wide">{current.name}</p>
                <p className="text-smoke text-xs mt-1">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-ember hover:text-ember transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-6 bg-ember' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-ember hover:text-ember transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
