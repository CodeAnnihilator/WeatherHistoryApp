import base_config from './webpack.config.base'
import webpack from 'webpack'

import ExtractTextPlugin from 'extract-text-webpack-plugin'
import AssetsWebpackPlugin from 'assets-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'

var port = process.env.PORT || 3000
var host = process.env.HOST || '0.0.0.0'

export default {
  ...base_config,
  output: {
    ...base_config.output,
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    ...base_config.module,

    //wrap style rules with extract text plugin
    rules: base_config.module.rules.map(function(conf) {
        return {
            ...conf,
            loader: conf.rule && conf.rule.includes('style!') ? ExtractTextPlugin.extract('style', conf.rule.replace('style!', '')) : conf.rule
        }
    })
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': false,
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env': JSON.stringify('production')
    }),
    new ExtractTextPlugin("[hash]_styles.css"),
    new AssetsWebpackPlugin({ filename: 'dist/assets.json' })
  ]
}