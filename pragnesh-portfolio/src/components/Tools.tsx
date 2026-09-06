import { motion } from 'framer-motion';

const TOOLS = [
  'Adobe Premiere Pro',
  'After Effects',
  'Photoshop',
  'Lightroom',
  'Illustrator',
  'DaVinci Resolve',
];

export default function Tools() {
  return (
    <section className="relative py-16 md:py-20 bg-void border-y border-white/5 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-smoke text-center"
        >
          TOOLS I EDIT WITH
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden no-scrollbar">
        <div className="flex gap-16 md:gap-24 animate-marquee shrink-0 pr-16 md:pr-24">
          {[...TOOLS, ...TOOLS].map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="font-display text-3xl md:text-5xl text-paper/15 hover:text-ember transition-colors whitespace-nowrap uppercase tracking-wide"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
