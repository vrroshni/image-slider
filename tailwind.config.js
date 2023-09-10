/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {

      colors:{
        extracolor: "#9495C0",
        primarycolor:"#876f84",
        bgcolor:'#f3f2f1',
        brandcolor:'#6B3FA0',
        textcolor:"#251827",
      }
    },
  },
  plugins: [],
}

