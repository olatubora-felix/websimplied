/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#05aaff",
        },
        dark: {
          DEFAULT: "#0d161a",
          100: "#0D161B",
          200: "#0D161B66",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "3xl": [
          "2.188rem",
          {
            lineHeight: "1.3rem",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
