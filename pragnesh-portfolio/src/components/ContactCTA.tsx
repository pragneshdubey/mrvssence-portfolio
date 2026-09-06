import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, MessageCircle, X } from 'lucide-react';
import { contactInfo } from '../data/media';

export default function ContactCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleEmail = () => {
    window.location.href = `mailto:${contactInfo.email}`;
    setModalOpen(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917039174016', '_blank', 'noopener,noreferrer');
    setModalOpen(false);
  };

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

        <motion.button
          onClick={() => setModalOpen(true)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="group mt-10 inline-flex items-center gap-3 bg-ember text-void font-medium text-sm md:text-base tracking-wide px-8 py-4 md:px-10 md:py-5 rounded-full cursor-pointer"
        >
          LET&apos;S TALK
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </motion.button>
      </div>

      {/* Contact Choice Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-void/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-sm bg-[#0c0c0c] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-center glass"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-smoke hover:text-ember transition-colors p-1"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <p className="eyebrow text-ember mb-2">CONTACT MRVSSENCE</p>
              <h3 className="font-display text-2xl uppercase tracking-wide mb-6">
                How Would You Like To Connect?
              </h3>

              <div className="flex flex-col gap-3">
                {/* Option 1: Email Me */}
                <button
                  onClick={handleEmail}
                  className="group flex items-center justify-center gap-3 w-full bg-surface border border-white/15 text-paper hover:border-ember hover:text-ember transition-all py-3.5 px-5 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold cursor-pointer"
                >
                  <Mail size={16} className="text-ember shrink-0" />
                  EMAIL ME
                </button>

                {/* Option 2: WhatsApp Me */}
                <button
                  onClick={handleWhatsApp}
                  className="group flex items-center justify-center gap-3 w-full bg-ember text-void hover:bg-ember-light transition-all py-3.5 px-5 rounded-xl font-mono text-xs tracking-wider uppercase font-bold shadow-lg shadow-ember/20 cursor-pointer"
                >
                  <MessageCircle size={16} className="shrink-0" />
                  WHATSAPP ME
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
