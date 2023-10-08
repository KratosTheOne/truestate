module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      sm: { min: "360px", max: "600px" },
      pr: { min: "601px", max: "900px" },
      ld: { min: "901px", max: "1279px" },
      lg: { min: "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans"], // Use 'Lato' as the default sans-serif font
      },
    },
  },
  plugins: [],
};

//custom media query
// or 601 to 900 and 901 to 1279
