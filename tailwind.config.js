/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts}",
    "./public/components/**/*.html"
],
  safelist: [
    // Tag color classes
    'bg-blue-50', 'text-blue-600', 'border-blue-200',
    'bg-purple-50', 'text-purple-600', 'border-purple-200',
    'bg-pink-50', 'text-pink-600', 'border-pink-200',
    'bg-teal-50', 'text-teal-600', 'border-teal-200',
    'bg-orange-50', 'text-orange-600', 'border-orange-200',
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
        'subtitle-text': 'rgb(var(--color-text-subtitle) / <alpha-value>)',
        'blog-bg': 'rgb(var(--color-bg-blog) / <alpha-value>)',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

