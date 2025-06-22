/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* 2️⃣  Keyframes ---------------------------------------------------- */
      keyframes: {
        /*  fade + slight slide-up  */
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)"     },
        },

        /*  (optional) menu container dropdown animation
            …only needed if you want animate-dropdown on the wrapper   */
        dropdown: {
          "0%":   { maxHeight: "0px",   opacity: "0" },
          "100%": { maxHeight: "500px", opacity: "1" },
        },
      },

      /* 3️⃣  Animation utility names ------------------------------------ */
      animation: {
        /* used on each <Link> */
        "fade-in-up": "fadeInUp 0.4s ease-out forwards",

        /* used on the <div> that wraps the whole dropdown (optional) */
        dropdown: "dropdown 0.3s ease-out forwards",
      },
    },
  },

  plugins: [],
};
