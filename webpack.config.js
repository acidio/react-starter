var webpack = require("webpack");

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
