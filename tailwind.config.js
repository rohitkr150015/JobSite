/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mine-shaft': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#2d2d2d',
    },
    
    'paris-m': {
        '50': '#f4f3ff',
        '100': '#ebe9fe',
        '200': '#dad6fe',
        '300': '#beb4fe',
        '400': '#9d8afb',
        '500': '#7e5bf7',
        '600': '#6e38ef',
        '700': '#5f26db',
        '800': '#4f20b7',
        '900': '#421c96',
        '950': '#29106b',
    },
    
    

    
      }
    },
  },
  plugins: [],
}