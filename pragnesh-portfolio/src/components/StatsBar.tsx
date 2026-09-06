import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Pencil, Smile, Award, Heart, LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: Pencil, value: 50, suffix: '+', label: 'Projects Completed' },
  { icon: Smile, value: 30, suffix: '+', label: 'Happy Clients' },
  { icon: Award, value: 4, suffix: '+', label: 'Years Experience' },
  { icon: Heart, value: 100, suffix: '%', label: 'Client Satisfaction' },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-paper">
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar({ variant = 'floating' }: { variant?: 'floating' | 'plain' }) {
  return (
    <div
      className={
        variant === 'floating'
          ? 'grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 glass border border-white/10 rounded-sm px-6 md:px-12 py-6 md:py-8'
          : 'grid grid-cols-2 md:grid-cols-4 gap-8'
      }
    >
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="flex items-center gap-3"
        >
          <span className="text-ember shrink-0">
            <stat.icon size={variant === 'floating' ? 22 : 26} />
          </span>
          <div>
            <CountUp value={stat.value} suffix={stat.suffix} />
            <p className="text-smoke text-xs md:text-sm mt-0.5">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
