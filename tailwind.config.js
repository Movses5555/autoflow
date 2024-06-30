/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-pattern': "url('/src/assets/Mask_1.png')",
      },
      lineHeight: {
        '2': '8px',
        '3.5': '14px',
        
      },
      fontSize: {
        '20': '20px',
      }
    },
  },
  plugins: [],
}

