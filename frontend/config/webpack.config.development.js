import base_config from './webpack.config.base'
import webpack from 'webpack'

var port = process.env.PORT || 3000
var host = process.env.HOST || '0.0.0.0'

export default {
  ...base_config,
  output: {
    ...base_config.output,
    publicPath: 'http://' + host + ':' + port + base_config.output.publicPath,
    filename: 'bundle.js'
  },
  entry: [
    'webpack-dev-server/client?http://' + host + ':' + port,
    'webpack/hot/only-dev-server',
    ...base_config.entry
  ],
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