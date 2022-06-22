module.exports = {
  content: [
    "./source/**/*.html.erb",
    "./source/**/*.html.md.erb"
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              'font-size': '1.125rem'
            },
          },
        },
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1.125rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
