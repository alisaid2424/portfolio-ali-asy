/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container :{
      padding: "2rem",
      center : true,
    },
    extend: {
      fontFamily: {
        portfolio: "Roboto, sans-serif",
      },
      colors :{
        primary: {
          light: "#fafafa",
          dark: "#000000",
        },
        secondary: {
          light: "#ffffff",
          dark: "#18181b",
        },
        border: {
          light: "#E3E3E3",
          dark: "#3f3f46",
        },
        title: {
          light: "#272729",
          dark: "#f4f4f5",
        },
        subtitle: {
          light: "#52525b",
          dark: "#a1a1aa",
        },
        bgHeader :{
          light: "#fdfdfd",
          dark: "#272729",
        },
        bluu :{
          light: "#0095f6",
          dark: "#5dbcfc",
        },
        iconhover :{
          light: "#333333",
          dark: "#d4d4d8",
        },
        inputback :{
          light: "#FFFFFF29",
          dark: "#3F3F4630",
        },
        inputBorder :{
          light: "#80808072",
          dark: "#3F3F46",
        },
      },
      animation: {
        'popap': 'mymove .77s 1',
      },
      keyframes: {
        mymove: {
          '0%': { transform: 'scale(0)' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      
    },
  },
  plugins: [],
};
