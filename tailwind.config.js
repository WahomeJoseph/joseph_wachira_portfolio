import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        glow: 'glow 1.5s infinite',
      },
      // bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e1a78] to-[#0f172a]
      colors: {
        bgcolor: '#0C090A',
        bgcard: '#1b1416',
        txtcolor: '#cccccc',
        txtspan: '#f7f4f3',
        gold: '#ffd700',
        hgold: '#fcc200',
        gpoppy: '#0000aa',
        gbrown: '#996515',
        uscgold: '#ffcc00',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    keyframes: {
      'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        animation: {
          loading: "loading 1.2s ease-in-out infinite",
          borderSpin: 'border-spin 7s linear infinite'

        },
    },
  },
  plugins: [require('tailwindcss-motion')]
};
