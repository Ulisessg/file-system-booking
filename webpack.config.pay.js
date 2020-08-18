const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/pages/pay/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pay.js',
  },
  watchOptions: {
    ignored: ['files/**/*.js', 'node_modules/**'],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    index: 'pay.html',
    contentBase: path.join(__dirname, 'src/pages/pay/index.js'),
    port: 9000,
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
    host: 'localhost',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html'),
      filename: './pay.html',
    }),
  ],
};
