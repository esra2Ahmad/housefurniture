/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["josefin", "sans-serif"],
      },

      textShadow: {
        xl: "0px 4px 4px rgba(0, 0, 0, 0.25);",
      },
      textShadow: {},
    },
    colors: {
      violet: "#7E33E0",
      white: "#F1F1F1",
      red: "#991b1b",
      blue: "#151875",
      darkblue: "#0D0E43",
      dark: "#1A0B5B",
      green: "#05E6B7",
      pink: "#FB2E86",
      medred: "#FB2448",
      gray: "#E7E6EF",
      lightgray: "#1A0B5B4D",
      black: "#000000",
      babypurple: "#F1F0FF",
      lightpink: "#ECD2FA",
      lightviolet: "#F2F0FF",
      blue1: "#2F1AC4",
      neutral_100: "#f5f5f5",
      darkgray: "#ACABC3",
      medgray: "#B7BACB",
      gray1: "#72718F",
      medviolet: "#EEEFFB",
      gray2: "#8A8FB9",
      highviolet: "#E7E4F8",
      orange: "#DE9034",
      blue1: "#5E37FF",
      blue2: "#111C85",
      brown: "#FFBF95",
      lightpurple: "#8A8FB9",
      purple: "#ECD2FA",
      graymid: "#9295AA",
      zinc: "#7E81A2",
      purple1: "#E248FF",
      green1: "#33D221",
      sky: "#26CBFF",
      gray3: "#A9ACC6",
    },
  },
  plugins: [],
};
