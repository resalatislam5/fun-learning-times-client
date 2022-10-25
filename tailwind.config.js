/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
"primary": "#f47fba",
      
"secondary": "#5606d6",
      
"accent": "#dd7068",
      
"neutral": "#241727",
      
"base-100": "#F2F1F3",
      
"info": "#6AADD7",
      
"success": "#78E2BF",
      
"warning": "#B89C14",
      
"error": "#EE113D",
      },
    },
  ],
  plugins: [require("daisyui")],
}
