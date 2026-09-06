/**
 * ============================================================
 * CENTRALIZED MEDIA CONFIGURATION
 * ============================================================
 * This is the ONLY file you need to touch to swap temporary
 * stock footage for your own videos and photos.
 *
 * Every video entry supports:
 *   src    -> the video file (mp4)
 *   poster -> fallback / preview image shown before + on error
 *
 * HOW TO REPLACE WITH YOUR OWN FILES:
 *   1. Drop your .mp4 into  /public/videos/your-file.mp4
 *   2. Drop your poster into /public/images/your-poster.jpg
 *   3. Change the matching `src` / `poster` value below to:
 *        src: "/videos/your-file.mp4"
 *        poster: "/images/your-poster.jpg"
 *
 * That's it — every component reads from this file, so nothing
 * else in the codebase needs to change.
 *
 * NOTE ON TEMPORARY FOOTAGE:
 * The URLs below point to publicly hosted, royalty-free sample
 * clips (Mixkit / Pexels style CDNs) used only as placeholders.
 * Every <video> in this project is wired with an onError handler
 * that swaps to the poster image automatically if a remote clip
 * ever fails to load — so the site never shows a broken player.
 * ============================================================
 */

export interface VideoAsset {
  src: string;
  poster: string;
}

export const media = {
  // Full-screen hero background — editor at work / cinematic city glow
  hero: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-editing-video-on-a-computer-42646-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1920&auto=format&fit=crop',
  } as VideoAsset,

  // Full showreel — plays inside the fullscreen ShowreelModal
  showreel: {
    src: 'https://assets.mixkit.co/videos/preview/mixkit-film-strip-with-image-frames-in-motion-32916-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1920&auto=format&fit=crop',
  } as VideoAsset,

  // Large cinematic portrait for the About section
  aboutPortrait: '/images/about-portrait.jpg',

  // Gradient fallback shown if BOTH video + poster fail (last resort)
  fallbackGradient: 'linear-gradient(135deg, #101010 0%, #050505 60%, #1a0d00 100%)',
};

export const socialLinks = {
  instagram: 'https://www.instagram.com/mrvssence?stkn=MTlrc2tqeGx2ZXZqMw==',
  youtube: 'https://youtube.com/@mrvssence?si=S-7T9JSfFXchVslA',
  vimeo: 'https://vimeo.com',
  behance: 'https://behance.net',
  linkedin: 'https://linkedin.com',
};

export const contactInfo = {
  email: 'vs030848@gmail.com',
  phone: '7039174016',
  tel: 'tel:+917039174016',
  location: 'Mumbai, India',
};
