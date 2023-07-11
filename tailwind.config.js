/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "casino-black-light": "#161616",
        "casino-black": "#070707",
        "casino-gold": "#B19B73",
        "casino-blue-light": "#215AF4",
        "casino-blue-light-2": "#2E4D97",
        "casino-blue-text": "#2680EA",
        "casino-blue-dark": "#211F4F",
         "casino-green": "#187E3A",
        "casino-green-text": "#16C359",
        "casino-green-dark": "#1A381D",
         "casino-red": "#9A0E30",
        "casino-red-text": "#E31542",
        "casino-red-dark": "#50091E",

      }
    },
  },
  plugins: [],
}
