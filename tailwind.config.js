/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink:  "#0b1220",  // midnight ink
          mint: "#10b981",  // fresh mint
          sky:  "#38bdf8",  // calm sky
          sand: "#f1f5f9",  // soft sand
          peach:"#f59e9e"   // warm accent
        }
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        body:    ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.15)"
      }
    },
  },
  plugins: [],
}