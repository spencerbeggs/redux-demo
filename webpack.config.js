var path = require('path');
var webpack = require('webpack');
var nodeModulesDir = path.resolve(__dirname, 'node_modules');
var webAppPath = path.resolve(__dirname, 'app');

module.exports = {
  context: webAppPath,
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
       path.resolve(webAppPath, 'app.jsx')
    ]
  },
  devtool: 'source-map',
  output: {
    path: './dist',
    filename: 'app.js',
    publicPath: '__dist__'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'babel'], exclude: [nodeModulesDir] },
      { test: /\.js$/, loaders: ['babel'], exclude: [nodeModulesDir] },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};