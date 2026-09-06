/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050505',
        charcoal: '#080808',
        surface: '#101010',
        ember: {
          DEFAULT: '#FF7A00',
          light: '#FF8A00',
        },
        paper: '#FFFFFF',
        smoke: '#B5B5B5',
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.35em',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '100%': { transform: 'scale(1.12) translate(-1%, -1%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        kenburns: 'kenburns 22s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};
