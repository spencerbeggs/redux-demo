var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var webAppPath = path.resolve(__dirname, 'app');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
     path.resolve(webAppPath, 'startup.js'),
     path.resolve(webAppPath, 'js', 'app.jsx')
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/__dist__/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: [nodeModulesDir] },
      { test: /\.js$/, loaders: ['babel'], exclude: [nodeModulesDir] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css')
  ]
};