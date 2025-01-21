/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        glow: 'glow 1.5s infinite',
      },
      colors: {
        bgcolor: '#1A1110',
        txtcolor: '#cccccc',
        gold: '#ffd700',
        hgold: '#fcc200',
        gpoppy: '#da9100',
        gbrown: '#996515',
        uscgold: '#ffcc00',
        customglow: '0 0 10px 2px rgba(255,204, 0',
      },
      fontFamily: {
         sans: ['Roboto', 'sans-serif'],
         },
    },
    keyframes: {
      glow: {
        '0%, 100%': {boxShadow: '0 0 15px 4px rgba(255,215,0,0.8)'},
        '50%': {boxShadow: '0 0 20px 8px rgba(255,215,0,1)'},
      },
    },
  },
  plugins: [],
};
