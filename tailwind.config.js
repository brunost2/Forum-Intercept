/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        950: "#1e1e1e",
        "placeholder-white": "#4d4d4d",
        cinza: "#929191",
        azul: "#0c4672",
        esbranquicado: "#D9D9D9",
      },
      spacing: {
        "100ml": "600px",
        101: "900px",
        300: "275px",
      },
      fontSize: {
        "xxs": '0.65rem',
      }
    },
  },
  plugins: [],
};
