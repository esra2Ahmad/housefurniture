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
        textShadow:{
          'xl': '0px 4px 4px rgba(0, 0, 0, 0.25);'
        },
        textShadow:{

        }
    },
    colors: {
      violet:"#7E33E0",
     esra:"#F1F1F1",
     red:"#991b1b",
     blue:"#151875",
     darkblue:"#0D0E43",
     dark:"#1A0B5B",
     green:'#05E6B7',
     pink:"#FB2E86",
     medred:'#FB2448',
    gray:"#E7E6EF",
    black:"#000000",
    
    lightpurple:"#8A8FB9",
    purple:"#ECD2FA",
    },
  },
  plugins: [],
}

