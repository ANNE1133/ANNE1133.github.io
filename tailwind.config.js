/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts}",
    "./public/components/**/*.html"
],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        'main-bg': 'rgb(var(--color-bg-main) / <alpha-value>)',
        'card-bg': 'rgb(var(--color-bg-card) / <alpha-value>)',
        'title-text': 'rgb(var(--color-text-title) / <alpha-value>)',
        'body-text': 'rgb(var(--color-text-body) / <alpha-value>)',
        'border-color': 'rgb(var(--color-border) / <alpha-value>)',
        'nav-bg': 'rgb(var(--color-bg-nav) / <alpha-value>)',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

