import browserslist from 'browserslist'

export default {
  plugins: {
    tailwindcss: {},
    'postcss-lightningcss': {
      // Lightning CSS doesn't transpile by default unless we pass the browserslist
      browsers: browserslist(),
    },
  },
}
