/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{css}",
  ],

  theme: {
    extend: {
      screens: {
        'xs': '400px', // custom screen for large phones
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dropdown: {
          "0%": { maxHeight: "0px", opacity: "0" },
          "100%": { maxHeight: "500px", opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.4s ease-out forwards",
        dropdown: "dropdown 0.3s ease-out forwards",
      },
    },
  },

  plugins: [],
};
