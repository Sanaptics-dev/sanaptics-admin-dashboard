/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563EB',
        'brand-blue-dark': '#1D4ED8',
        'brand-blue-light': '#EFF6FF',
        'brand-purple': '#9333EA',
        'brand-purple-light': '#F5F3FF',
        'bg-app': '#F8FAFC',
        'bg-card': '#FFFFFF',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
        'border-color': '#E5E7EB',
      },
      boxShadow: {
        "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "nav-active-shadow": "0 4px 6px -1px rgba(37, 99, 235, 0.2)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      width: {
        'sidebar': '260px',
      },
    },
  },
  plugins: [],
}
