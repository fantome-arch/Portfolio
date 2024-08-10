/** @type {import('tailwindcss').Config} */
import { Theme } from './src/Misc/Colors'
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightText: Theme.generalText, // Define your custom color here
        darkbg:Theme.darkBackground,
        text2:Theme.text2,
        bordercol:Theme.border,
        navdark:Theme.navbarDark,
        cardLight:Theme.cardLight,
        backdrop:Theme.backdrop,
        techLight:Theme.techLight,
        techDark:Theme.techDark,
        unselectlight:Theme.unselectlight,
        unselectdark:Theme.unselectdark,
        navmob:Theme.navmob,
        navmob2:Theme.navmob2,
      },
    },
  },
  plugins: [],
};
