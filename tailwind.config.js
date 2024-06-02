/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-orange": "#f37125",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(-100%)" }, // Start off-screen to the left
          to: { transform: "translateX(0%)" }, // End aligned with the left edge
        },
      },
      animation: {
        slide: "slide 1s ease-out forwards",
        slide2: "slide 2s ease-out forwards",
      },
    },
  },
  plugins: [forms, typography, flowbite],
};
