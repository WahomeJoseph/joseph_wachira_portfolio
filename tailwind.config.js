import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        glow: 'glow 1.5s infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        borderSpin: 'border-spin linear infinite',
      },
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
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
};
