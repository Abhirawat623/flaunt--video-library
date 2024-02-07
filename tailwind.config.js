/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '102': '30rem',
        '100': '28rem',
      },
      width: {
        '58': '12.6rem',
      }
    },
  },
  plugins: [],
}

