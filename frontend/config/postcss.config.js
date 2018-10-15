import webpack from 'webpack'

export default {
  ident: 'postcss',
  plugins: [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-url')(),
    require('postcss-preset-env')({ stage: 2 }),
    require('postcss-reporter')(),
    require('postcss-browser-reporter')({ disabled: false })
  ]
}