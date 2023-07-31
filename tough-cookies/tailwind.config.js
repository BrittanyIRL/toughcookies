/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
      colors: {
        purple: "#d621eb",
        green: "#8dbf41",
        blue: "#0b85db",
        teal: "#3ec9b0",
      },
    },
  },
  plugins: [],
};
