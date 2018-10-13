import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

var sourcePath = path.join(__dirname, '../src')

export default {
  context: sourcePath,
  entry: [
    `${sourcePath}/app/root/index.tsx`
  ],
  devtool: 'source-map',
  output: {
    path: '/frontend/dist/',
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
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
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            query: {
              modules: true,
              namedExport: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import')({ addDependencyTo: webpack }),
                require('postcss-url')(),
                require('postcss-preset-env')({ stage: 2 }),
                require('postcss-reporter')(),
                require('postcss-browser-reporter')({ disabled: false })
              ]
            }
          },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    })
  ]
}