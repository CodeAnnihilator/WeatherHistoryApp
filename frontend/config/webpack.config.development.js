import base_config from './webpack.config.base'
import webpack from 'webpack'
import path from 'path'
import postcssConfig from './postcss.config'

var port = process.env.PORT || 3000
var host = process.env.HOST || 'localhost'

const sourcePath = path.join(__dirname, '../src')

export default {
  ...base_config,
  output: {
    ...base_config.output,
    publicPath: 'http://' + host + ':' + port + base_config.output.publicPath
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://' + host + ':' + port,
    'webpack/hot/only-dev-server',
    ...base_config.entry
  ],
  module: {
    rules: [
      ...base_config.module.rules,
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
          { loader: 'postcss-loader', options: postcssConfig },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  mode: 'development',
  plugins: [
    ...base_config.plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': true,
      'process.env': JSON.stringify('development')
    })
  ]
}