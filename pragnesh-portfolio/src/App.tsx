import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import SocialSidebar from './components/SocialSidebar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import ShowreelSection from './components/ShowreelSection';
import Services from './components/Services';
import About from './components/About';
import Tools from './components/Tools';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { media } from './data/media';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ScrollProgress />
            <CursorFollower />
            <Navbar />
            <SocialSidebar />

            <main>
              <Hero onWatchShowreel={() => setShowreelOpen(true)} />
              <FeaturedWork />
              <ShowreelSection onPlay={() => setShowreelOpen(true)} />
              <Services />
              <About />
              <Tools />
              <Skills />
              <Testimonials />
              <ContactCTA />
            </main>

            <Footer />

            <VideoModal
              isOpen={showreelOpen}
              onClose={() => setShowreelOpen(false)}
              src={media.showreel.src}
              poster={media.showreel.poster}
              title="Full Showreel"
              category="Craft. Cut. Create."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
