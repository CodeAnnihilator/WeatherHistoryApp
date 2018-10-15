import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import AsyncChunkNames from 'webpack-async-chunk-names-plugin'

import postcssConfig from './postcss.config'

const sourcePath = path.join(__dirname, '../src')

export default {
  context: sourcePath,
  entry: [
    `${sourcePath}/app/root/index.tsx`
  ],
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      app: `${sourcePath}/app`,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: { plugins: ['react-hot-loader/babel'] }
          },
          'ts-loader'
        ]
      },
      { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
      { test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/, use: 'file-loader' }
    ]
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../public/index.html',
      inject: 'body'
    }),
    new AsyncChunkNames()
  ]
}