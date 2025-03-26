import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        glow: 'glow 1.5s infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
        borderSpin: 'border-spin linear infinite',
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
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
      
    },
  },
  plugins: [require('tailwindcss-motion')],
};
