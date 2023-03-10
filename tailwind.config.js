/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasneue: "Bebas Neue",
        Montserrat: "Montserrat",
        gloock: "Gloock",
      },
      backgroundImage: {
        product: "url('/images/food-ecommerce.png')"
      },
      colors: {
        primary: "#10162F",
        sec: "#D0D6DF",
      },
      width: {
        bg: "500px",
        hero: "600px",
        img: "450px",
        home: "750px",
        study: "350px",
      },
      height: {
        about: "800px",
        homesm: "720px",
        contact: "580px",
      },
      large: {
        bg: "600px",
      },
      margin: {
        about: "450px",
      },
    },
  },
  plugins: [],
}
