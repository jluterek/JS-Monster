/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#f3df49',
          500: '#f3df49',
          300: '#f3df49',
          200: '#f3df49',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}