module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      sm: { min: "360px", max: "600px" },
      lg: { min: "1280px", max: "1660px" },
    },
    extend: {
      fontFamily: {
        sans: ["Lato", "sans"], // Use 'Lato' as the default sans-serif font
      },
    },
  },
  plugins: [],
};
