/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sanL: ["SanL", "cursive"],
        sanUL: ["SanUL", "cursive"],
        sanT: ["SanT", "cursive"],
        sanR: ["SanR", "cursive"],
        sanM: ["SanM", "cursive"],
        sanSB: ["SanSB", "cursive"],
        sanB: ["SanB", "cursive"],
        sanBL: ["SanBl", "cursive"],
        sanH: ["SanH", "cursive"],
      },
      colors: {
        white: "#fff",
        black: "#000",
        green: "#03C584",
        darkGreen: "#034435",
        blue: "#0591DF",
        lightBlue: "#26FDE6",
        yellow: "#F8B500",
        orange: "#E43A15",
        lightOrange: "#E65245",
      },
      margin: {
        section: "80px",
        sectionMB: "50px",
      },
      spacing: {
        section: "80px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
