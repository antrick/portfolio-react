/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-dark': '#0F172A',
        'color-dark': '#0F172E',
        'hover-blue' :'#1CC2E7',
        'letter-light' : '#333333',
        'hover-light' : '#000000',

        'custom-violet': '#6b74c9',
        
        
      },
     

    },
  },
  plugins: [],
}

