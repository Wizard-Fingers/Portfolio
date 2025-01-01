/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors: {
        primary: "#1E1815",
        secondary: "#2A2320",
        tertiary: "#2A2422",
        accent: {
          DEFAULT: "#FF7A00",
          hover: "#E56E00",
          animation: "#FF8F2E",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#E5E5E5",
          muted: "rgba(255, 255, 255, 0.75)",
          accent: "#FF7A00",
        },
        border: {
          DEFAULT: "#3D3532",
          light: "rgba(255, 255, 255, 0.1)",
        },
      },
      backgroundColor: {
        card: "#231815",
        hover: "#2A2422",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
