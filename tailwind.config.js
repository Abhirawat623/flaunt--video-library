/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '102': '32rem',
        '100': '28.5rem',
      },
      spacing:{
        '102':'34rem'
      },
      width: {
        '58': '12.6rem',
      }
    },
  },
  plugins: [],
}

