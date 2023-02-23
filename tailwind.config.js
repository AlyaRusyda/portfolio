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
      },
      backgroundImage: {
        'bgcuy': "url('/src/asset/sy.png')",
      },
      colors: {
        primary: "#10162F",
        sec: "#D0D6DF",
      },
      width: {
        bg: "500px",
        img: "450px",
        home: "600px",
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
