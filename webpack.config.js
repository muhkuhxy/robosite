var path = require('path')
// var webpack = require('webpack')

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          // Emit errors instead of warnings (default = false)
          // error: true,
          // enable snazzy output (default = true)
          snazzy: true
        }
      }
    ]
  }
}
