const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    dates: path.resolve(__dirname, 'src/pages/dates/index-dates.js'),
    login: path.resolve(__dirname, 'src/pages/login/index-login.js'),
    logout: path.resolve(__dirname, 'src/pages/logout/index-logout.js'),
    main: path.resolve(__dirname, 'src/pages/main/index-main.js'),
    signin: path.resolve(__dirname, 'src/pages/sign-in/index-sign-in.js'),
    signup: path.resolve(__dirname, 'src/pages/sign-up/index-sign-up.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'dates.html',
      chunks: ['dates'],
      template: 'public/dates.html',
    }),

    new HtmlWebpackPlugin({
      template: 'public/login.html',
      filename: 'login.html',
      chunks: ['login'],
    }),

    new HtmlWebpackPlugin({
      template: 'public/logout.html',
      filename: 'logout.html',
      chunks: ['logout'],
    }),

    new HtmlWebpackPlugin({
      template: 'public/main.html',
      filename: 'main.html',
      chunks: ['main'],
    }),

    new HtmlWebpackPlugin({
      template: 'public/sign-in.html',
      filename: 'sign-in.html',
      chunks: ['signin'],
    }),

    new HtmlWebpackPlugin({
      template: 'public/sign-up.html',
      filename: 'sign-up.html',
      chunks: ['signup'],
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
};
