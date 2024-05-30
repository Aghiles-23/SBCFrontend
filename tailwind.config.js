/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      bleu: "#B6CDE8",
      bleuF: "#465475",
      violet: "#EEEDFF",
      rouge: "#FF584D",
      vertF: "#30CA3F",
      vert: "#068548",
    },},
  },
  plugins: [],
};
