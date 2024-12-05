/** @type {import('tailwindcss').Config} */

export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora"],
        royale: ["Bonheur Royale"],
        dancing: ["Dancing Script"],
        garamond: ["'Cormorant Garamond'", "serif"],
    },
  },
  plugins: [],
}
}

