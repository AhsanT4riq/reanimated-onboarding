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
        green: {
          500: '#B8E0D2',
          0: '#174C3C',
        },
        blue: {
          500: '#bae4fd',
          0: '#1e2169',
        },
        brown: {
          500: '#E7C8A1',
          0: '#321808',
        },
      },
    },
  },
  plugins: [],
};
