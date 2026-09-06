import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin } from 'lucide-react';
import { socialLinks } from '../data/media';

const ICONS = [
  { Icon: Instagram, href: socialLinks.instagram, label: 'Instagram' },
  { Icon: Youtube, href: socialLinks.youtube, label: 'YouTube' },
  { Icon: VimeoIcon, href: socialLinks.vimeo, label: 'Vimeo' },
  { Icon: BehanceIcon, href: socialLinks.behance, label: 'Behance' },
  { Icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
];

function VimeoIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32-2.83 3.67-5.225 5.508-7.184 5.508-1.212 0-2.239-1.12-3.079-3.36-.56-2.052-1.119-4.104-1.68-6.156-.622-2.24-1.29-3.36-2.005-3.36-.156 0-.7.328-1.634.98L1.6 8.008c1.026-.902 2.038-1.804 3.033-2.708 1.368-1.192 2.395-1.82 3.08-1.883 1.616-.156 2.61.95 2.984 3.32.404 2.557.685 4.147.841 4.77.467 2.12.982 3.18 1.544 3.18.435 0 1.09-.688 1.963-2.064.871-1.376 1.338-2.422 1.4-3.142.125-1.188-.343-1.782-1.4-1.782-.499 0-1.012.114-1.541.34 1.023-3.35 2.977-4.976 5.862-4.883 2.14.062 3.148 1.452 3.03 4.168z" />
    </svg>
  );
}

function BehanceIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7.5h-6v-1.5h6v1.5zm1.008 4.297c0-2.559-1.494-4.617-4.406-4.617-2.94 0-4.696 2.203-4.696 4.851 0 2.786 1.634 4.868 4.856 4.868 1.945 0 3.516-.822 4.244-2.645h-2.152c-.229.573-.997.998-1.996.998-1.34 0-2.194-.734-2.302-2.07h6.42c.019-.202.032-.396.032-.585v-.8zm-6.42-1.03c.126-1.13.913-1.788 2.03-1.788 1.058 0 1.809.717 1.906 1.788h-3.936zM8.192 15.75H0V4.5h7.9c2.006 0 3.577.99 3.577 3.088 0 1.267-.66 2.135-1.775 2.611 1.469.397 2.297 1.474 2.297 3.015 0 2.44-2.055 2.536-3.807 2.536zM2.65 8.996h4.507c.876 0 1.531-.395 1.531-1.377 0-.94-.63-1.242-1.531-1.242H2.65v2.619zm0 4.635h4.79c1.041 0 1.69-.5 1.69-1.541 0-1.024-.677-1.483-1.69-1.483H2.65v3.024z" />
    </svg>
  );
}

export default function SocialSidebar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      className="hidden lg:flex fixed left-8 top-0 h-screen z-40 flex-col items-center justify-between py-32 pointer-events-none"
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -12 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-5 pointer-events-auto">
        {ICONS.map(({ Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ y: -3, color: '#FF7A00' }}
            className="text-smoke hover:text-ember transition-colors"
          >
            <Icon size={16} />
          </motion.a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 pointer-events-none">
        <span className="w-px h-16 bg-white/20" />
        <span
          className="eyebrow text-smoke"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          SCROLL TO EXPLORE
        </span>
      </div>
    </motion.div>
  );
}
