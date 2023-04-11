/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'header': '0px 18px 50px -24px rgba(117,117,117,0.26);',
      },
      colors: {
        beige: "#E6E3DC",
        black: "#212025",
        white: "#FFFFFF",
        accent: "#DFDCD4",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  fontFamily: {
    'aeonik-regular': ['aeonik-regular'],
  },
  plugins: [],
}