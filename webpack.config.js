const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const basePath = __dirname;
module.exports = {
  context: path.join(basePath, 'src'),
  entry: [
    './main.jsx',
  ],
  output: {
    path: path.join(basePath, 'dist'),
    filename: 'bundle.js',
    pathinfo: true
  },
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    inline: true,
    hot: true,
    host: 'localhost',
    progress: true,
    port: 3000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass'
      }
    ]
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
    }),
  ],
};
