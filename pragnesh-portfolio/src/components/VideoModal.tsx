import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SafeVideo from './SafeVideo';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  poster: string;
  title?: string;
  category?: string;
  description?: string;
  isPhoto?: boolean;
}

export default function VideoModal({
  isOpen,
  onClose,
  src,
  poster,
  title,
  category,
  description,
  isPhoto,
}: VideoModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label={title ? `${title} video player` : 'Video player'}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-12 right-0 md:-right-2 flex items-center gap-2 text-smoke hover:text-ember transition-colors"
            >
              <span className="eyebrow hidden md:inline">CLOSE</span>
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
                <X size={16} />
              </span>
            </button>

            <div className="rounded-sm overflow-hidden border border-white/10 bg-surface">
              {isPhoto ? (
                <img
                  src={poster}
                  alt={title ?? 'Project image'}
                  className="w-full aspect-video object-cover bg-black"
                />
              ) : (
                <SafeVideo
                  src={src}
                  poster={poster}
                  className="w-full aspect-video object-cover bg-black"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                />
              )}
              {(title || description) && (
                <div className="p-5 md:p-6 border-t border-white/10">
                  {category && (
                    <p className="eyebrow text-ember mb-2">{category}</p>
                  )}
                  {title && (
                    <h3 className="font-display text-2xl md:text-3xl mb-2">{title}</h3>
                  )}
                  {description && (
                    <p className="text-smoke text-sm md:text-base max-w-2xl">{description}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
