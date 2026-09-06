import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ImageIcon } from 'lucide-react';
import SafeVideo from './SafeVideo';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [inViewport, setInViewport] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (hovered && inViewport && project.video) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  }, [hovered, inViewport, project.video]);

  return (
    <div
      ref={containerRef}
      className="group relative shrink-0 w-[78vw] sm:w-[340px] md:w-[380px] aspect-[3/4] rounded-sm overflow-hidden cursor-pointer bg-surface border border-white/5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
      data-cursor="view"
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} project`}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen(project);
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {project.video ? (
          <SafeVideo
            ref={videoRef}
            src={project.video}
            poster={project.poster}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={project.poster}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent"
        animate={{ opacity: hovered ? 0.95 : 0.75 }}
        transition={{ duration: 0.4 }}
      />

      {/* Play / view icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <span className="w-14 h-14 rounded-full border border-white/40 glass flex items-center justify-center">
          {project.isPhoto ? <ImageIcon size={18} /> : <Play size={16} fill="currentColor" />}
        </span>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <motion.p
          className="eyebrow text-ember mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.category}
        </motion.p>
        <motion.h3
          className="font-display text-2xl md:text-3xl leading-none uppercase"
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {project.title}
        </motion.h3>
        {project.duration && (
          <motion.p
            className="mt-2 text-smoke text-xs font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {project.duration}
          </motion.p>
        )}
      </div>
    </div>
  );
}
