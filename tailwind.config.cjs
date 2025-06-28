/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        'codeblock-bg': 'var(--codeblock-bg)',
        'codeblock-topbar-bg': 'var(--codeblock-topbar-bg)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
