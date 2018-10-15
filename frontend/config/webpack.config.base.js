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
    path: path.join(__dirname, '../dist/'),
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      app: `${sourcePath}/app`,
    },
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
        include: `${sourcePath}/app`,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            query: {
              modules: true,
              namedExport: true,
              localIdentName: '[local]__[hash:base64:5]'
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
      },
      { test: /\.(a?png|svg)$/, use: 'url-loader?limit=10000' },
      { test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/, use: 'file-loader' }
    ]
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    })
  ]
}