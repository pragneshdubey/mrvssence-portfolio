/**
 * ============================================================
 * PROJECTS CONFIGURATION
 * ============================================================
 * Each project card in "Featured Work" is generated from this
 * array. To add a new project, copy an existing object, give it
 * a unique `id`, and fill in your own video/poster/details.
 *
 * TO USE YOUR OWN VIDEO:
 *   video:  "/videos/my-project.mp4"   (place file in /public/videos)
 *   poster: "/images/my-project.jpg"   (place file in /public/images)
 * ============================================================
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  duration?: string;
  description: string;
  video: string;
  poster: string;
  isPhoto?: boolean;
}

export const projects: Project[] = [
  {
    id: 'the-journey',
    title: 'The Journey',
    category: 'Cinematic Travel Film',
    duration: '02:45',
    description:
      'A meditative travel film following a lone traveler through shifting landscapes — shot, graded and cut to feel unhurried and immersive.',
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'live-fast',
    title: 'Live Fast',
    category: 'Bike Promo Reel',
    duration: '00:32',
    description:
      'High-octane vertical reel built for retention — punchy cuts, speed-ramped action and sound design synced frame-to-beat.',
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-street-on-a-motorcycle-4613-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'portrait-retouch',
    title: 'Portrait Retouch',
    category: 'Photo Editing',
    description:
      'Frequency-separation retouching and cinematic color grading on a fashion portrait series — clean, natural, editorial-ready.',
    video: '',
    isPhoto: true,
    poster:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'city-lights',
    title: 'City Lights',
    category: 'Urban Cinematic Reel',
    duration: '00:28',
    description:
      'A neon-soaked night-city montage — long exposures, drone passes and a moody grade that leans into contrast and color separation.',
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    category: 'Travel Montage',
    duration: '01:15',
    description:
      'A sweeping mountains-and-coastline montage cut to a slow build — designed to feel expansive on a big screen.',
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-mountains-under-white-clouds-4227-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'timeless-elegance',
    title: 'Timeless Elegance',
    category: 'Product Promo',
    duration: '00:25',
    description:
      'Macro product cinematography for a luxury watch brand — controlled lighting, slow push-ins and a restrained, premium grade.',
    video:
      'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-hand-with-a-watch-42836-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
  },
];
