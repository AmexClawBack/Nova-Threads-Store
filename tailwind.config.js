/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F3A",
          yellow: "#FFD400",
          gray: "#F3F5F8",
        },
      },
      borderRadius: { "2xl": "1rem" },
      boxShadow: { soft: "0 8px 24px rgba(11,31,58,0.08)" },
      container: { center: true, padding: "1rem", screens: { lg: "1120px" } },
    },
  },
  plugins: [],
};
