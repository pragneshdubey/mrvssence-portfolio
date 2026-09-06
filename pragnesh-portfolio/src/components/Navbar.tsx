import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Services', id: 'services' },
  { label: 'Clients', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/10 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group text-left"
            aria-label="Scroll to top"
          >
            <img
              src="/images/logo.png"
              alt="MrVssence Logo"
              className="h-10 md:h-12 w-auto object-contain rounded-full border border-ember/30 group-hover:border-ember transition-colors"
            />
            <div className="hidden sm:block">
              <div className="font-display text-xl md:text-2xl tracking-wide leading-none uppercase">
                Mr<span className="text-ember">Vssence</span>
              </div>
              <div className="eyebrow text-smoke text-[9px] mt-1 tracking-widest">
                VIDEO EDITOR &bull; REELS EDITOR &bull; PHOTO EDITOR
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative text-sm tracking-wide py-1 transition-colors ${
                  active === item.id ? 'text-ember' : 'text-paper/90 hover:text-ember'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-px bg-ember transition-all duration-300 ${
                    active === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-0.5 h-px bg-ember"
                  style={{ width: active === item.id ? '100%' : 0 }}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:inline-flex items-center border border-ember text-ember text-xs tracking-widest2 uppercase px-5 py-2.5 rounded-full hover:bg-ember hover:text-void transition-colors duration-300"
            >
              Let&apos;s Work Together
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-ember transition-colors"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-[79] glass border-b border-white/10 pt-24 pb-8 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`font-display text-2xl tracking-wide ${
                    active === item.id ? 'text-ember' : 'text-paper'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="mt-2 border border-ember text-ember text-xs tracking-widest2 uppercase px-6 py-3 rounded-full"
              >
                Let&apos;s Work Together
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
