# Pragnesh Dubey — Cinematic Portfolio

A premium, motion-first portfolio built with **React + TypeScript + Vite +
Tailwind CSS + Framer Motion**, designed to feel like an interactive
film-studio showreel rather than a static template.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/
    media.ts       <- ALL video/image URLs live here
    projects.ts    <- Featured Work project list
  components/       <- Navbar, Hero, FeaturedWork, ProjectCard, etc.
  hooks/            <- useReducedMotion, useIsDesktop
  App.tsx
  index.css
```

## 1. Where to put your own videos

Create these folders (already scaffolded, empty by default):

```
public/videos/   <- your .mp4 files
public/images/   <- your poster / photo files
```

## 2. How to replace the hero video

Open `src/data/media.ts` and edit the `hero` entry:

```ts
hero: {
  src: '/videos/my-hero.mp4',
  poster: '/images/my-hero-poster.jpg',
},
```

## 3. How to replace the full showreel video

Same file, edit the `showreel` entry:

```ts
showreel: {
  src: '/videos/my-showreel.mp4',
  poster: '/images/my-showreel-poster.jpg',
},
```

## 4. How to replace project videos & posters

Open `src/data/projects.ts`. Each project has a `video` and `poster` field —
point them at your own files the same way:

```ts
{
  id: 'the-journey',
  title: 'The Journey',
  category: 'Cinematic Travel Film',
  duration: '02:45',
  description: '...',
  video: '/videos/the-journey.mp4',
  poster: '/images/the-journey-poster.jpg',
},
```

For a photo-only project (no video), set `isPhoto: true` and leave `video`
as an empty string — the card will show the poster image and open it as a
photo in the modal instead of a video player.

## 5. How to add a brand-new project

Copy any object in the `projects` array in `src/data/projects.ts`, give it a
unique `id`, and fill in the fields. It will automatically appear in the
Featured Work carousel — no component changes required.

## Notes on the placeholder footage

Every video URL currently in `src/data/media.ts` / `src/data/projects.ts` is
temporary, publicly-hosted, royalty-free sample footage used only so the
site has something cinematic to show out of the box. Every `<video>` in the
project is wrapped in the `SafeVideo` component (`src/components/SafeVideo.tsx`),
which automatically falls back to the poster image — and then to a gradient
— if a remote clip ever fails to load, so the site never shows a broken
player.

## Accessibility & performance

- Respects `prefers-reduced-motion` (disables parallax, Ken Burns zoom, and
  the custom cursor).
- Video modal is keyboard accessible: `Tab` to focus, `Esc` to close, click
  outside to dismiss.
- Project preview videos use `preload="metadata"` and only start playing on
  hover/viewport intersection, so nothing streams until it's needed.
- Custom cursor is desktop-only (`hover: hover` + `pointer: fine` + width
  check) and never renders on touch devices.
