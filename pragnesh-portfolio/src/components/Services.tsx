import { motion } from 'framer-motion';
import { Film, Clapperboard, Image, Layers } from 'lucide-react';

const SERVICES = [
  {
    icon: Film,
    num: '01',
    title: 'Video Editing',
    desc: 'Cinematic storytelling, color grading, sound design and smooth transitions.',
  },
  {
    icon: Clapperboard,
    num: '02',
    title: 'Reels Editing',
    desc: 'Short-form, high-retention reels that grab attention and drive engagement.',
  },
  {
    icon: Image,
    num: '03',
    title: 'Photo Editing',
    desc: 'Professional retouching, color grading, manipulation and creative enhancements.',
  },
  {
    icon: Layers,
    num: '04',
    title: 'Video + Photo',
    desc: 'Complete visual content creation for brands, creators and businesses.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-void">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-ember mb-3"
        >
          WHAT I DO
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl uppercase mb-12 md:mb-16"
        >
          Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-void p-8 md:p-10 flex flex-col justify-between min-h-[280px] transition-colors hover:bg-surface"
            >
              <div className="flex items-start justify-between">
                <motion.span
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-ember group-hover:bg-ember group-hover:text-void group-hover:border-ember transition-colors"
                  whileHover={{ rotate: 12 }}
                >
                  <s.icon size={18} />
                </motion.span>
                <span className="eyebrow text-smoke">{s.num}</span>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-2xl uppercase mb-3">{s.title}</h3>
                <p className="text-smoke text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
