/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      width: {
        screen: '100vw',
      },
      colors: {
        green: '#005b4f',
        pink: '#ffa3ce',
        blue: {
          100: '#bae4fd',
          600: '#1e2169',
        },
        orange: '#F15937',
        yellow: '#faeb8a',
      },
    },
  },
  plugins: [],
};
