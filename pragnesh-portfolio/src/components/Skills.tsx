import { motion } from 'framer-motion';

const SKILLS = [
  { label: 'Video Editing', value: 95 },
  { label: 'Color Grading', value: 90 },
  { label: 'Reels / Short-form Editing', value: 95 },
  { label: 'Photo Editing & Retouching', value: 90 },
  { label: 'Sound Design', value: 80 },
];

export default function Skills() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-ember mb-3"
        >
          EXPERTISE
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl uppercase mb-12 md:mb-16"
        >
          Skills
        </motion.h2>

        <div className="flex flex-col gap-8">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-baseline justify-between mb-2.5">
                <span className="text-sm md:text-base text-paper">{skill.label}</span>
                <span className="font-mono text-xs text-ember">{skill.value}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-ember rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 1, delay: i * 0.08 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
