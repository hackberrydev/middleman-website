module.exports = {
  content: [
    "./source/**/*.html.erb",
    "./source/**/*.html.md.erb"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
