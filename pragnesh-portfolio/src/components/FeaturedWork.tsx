import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import VideoModal from './VideoModal';
import { projects, Project } from '../data/projects';

export default function FeaturedWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && trackRef.current) {
      trackRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <section id="work" className="relative py-24 md:py-32 bg-void overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow text-ember mb-3"
            >
              FEATURED WORK
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl uppercase leading-none"
            >
              Stories That Connect
            </motion.h2>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollByAmount(-1)}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-ember hover:text-ember transition-colors"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollByAmount(1)}
              aria-label="Next project"
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-ember hover:text-ember transition-colors"
            >
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollByAmount(1)}
              className="ml-2 eyebrow text-smoke hover:text-ember transition-colors"
            >
              VIEW ALL WORK &rarr;
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        onWheel={onWheel}
        className="no-scrollbar flex gap-5 md:gap-6 overflow-x-auto pl-6 md:pl-10 pr-6 md:pr-10 pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="snap-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} onOpen={setActiveProject} />
          </motion.div>
        ))}
        <div className="shrink-0 w-2" />
      </div>

      <VideoModal
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        src={activeProject?.video ?? ''}
        poster={activeProject?.poster ?? ''}
        title={activeProject?.title}
        category={activeProject?.category}
        description={activeProject?.description}
        isPhoto={activeProject?.isPhoto}
      />
    </section>
  );
}
