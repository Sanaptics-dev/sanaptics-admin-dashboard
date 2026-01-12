/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // scans all your React files
  ],
  theme: {
    extend: {
      colors: {
        'sanaptics-dark': '#0a2540',
        'sanaptics-dark-active': '#1f3a5f',
        'sanaptics-blue': '#3b82f6',
        'sanaptics-green': '#10b981',
        'sanaptics-orange': '#f97316',
        'sanaptics-purple': '#8b5cf6',
      },
    },
  },
  plugins: [],
}
