import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

import config from './webpack.config.development'

var port = process.env.PORT || 3000
var host = process.env.HOST || 'localhost'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  filename: config.output.filename,
  inline: true,
  hot: true,
  stats: true,
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
}).listen(port, host, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`webpack dev server listening on ${host}:${port}`)
  }
})