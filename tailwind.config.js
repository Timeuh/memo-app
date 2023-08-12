/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'light': '#F5E6E8',
        'violet': '#D5C6E0',
        'main': '#AAA1C8',
        'purple': '#967AA1',
        'dark': '#192A51'
      },
      fontFamily: {
        'SourceCodePro': 'SourceCodePro'
      }
    }
  },
  plugins: []
};

