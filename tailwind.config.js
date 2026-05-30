/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#FF6B35',
        navy: '#16223C',
        cream: '#FDF4EC',
        ink: '#2A3140',
        muted: '#69707D',
      },
      fontFamily: {
        serif: ['Spectral', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
