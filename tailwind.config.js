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
    },
    colors: {
      violet:"#7E33E0",
     esra:"#F1F1F1",
     red:"#991b1b",
     darkblue:"#0D0E43",
     pink:"#FB2E86",
    gray:"#E7E6EF"
    },
  },
  plugins: [],
}

