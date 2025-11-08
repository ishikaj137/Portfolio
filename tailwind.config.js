/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#0B0E1D',
        'galactic-purple': '#7B61FF',
        'cosmic-cyan': '#00E5FF',
        'neon-green': '#7EE081',
        'star-white': '#E8F9FF',
      },
      fontFamily: {
        'heading': ['Orbitron', 'Poppins', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'Nunito Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

