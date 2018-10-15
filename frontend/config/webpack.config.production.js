import base_config from './webpack.config.base'
import webpack from 'webpack'
import path from 'path'

import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import AssetsWebpackPlugin from 'assets-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'

import postcssConfig from './postcss.config'

const sourcePath = path.join(__dirname, '../src')

export default {
  ...base_config,
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      ...base_config.module.rules,
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
        include: `${sourcePath}/app`,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'typings-for-css-modules-loader',
            query: {
              publicPath: '../dist/',
              modules: true,
              namedExport: true
            }
          },
          { loader: 'postcss-loader', options: postcssConfig },
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    ...base_config.optimization,
    minimizer: [
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
  stats: {
    entrypoints: false,
    children: false
  },
  plugins: [
    ...base_config.plugins,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.WatchIgnorePlugin([ /(css|scss)\.d\.ts$/ ]),
    new webpack.DefinePlugin({
      '__DEV__': false,
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env': JSON.stringify('production')
    }),
    new OptimizeCSSAssetsPlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new AssetsWebpackPlugin({ filename: 'dist/assets.json' })
  ]
}