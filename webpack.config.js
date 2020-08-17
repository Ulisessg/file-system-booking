const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/pages/main/index-main.js',
    dates: './src/pages/dates/index-dates.js',
    login: './src/pages/login/index-login.js',
    logout: './src/pages/logout/index-logout.js',
    signin: './src/pages/sign-in/index-sign-in.js',
    main: './src/pages/sign-up/index-sign-up.js',
  },
  resolve: {
    extensions: [
      'js',
      '.jsx',
      '.wasm',
      '.ts',
      '.tsx',
      '.mjs',
      '.cjs',
      '.js',
      '.json',
    ],
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/main/main.html',
      filename: 'dist/index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/login/login.html',
      filename: 'dist/login.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/logout/logout.html',
      filename: 'dist/logout.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/sign-in/sign-in.html',
      filename: 'dist/signin.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/sign-up/sign-up.html',
      filename: 'dist/sign-up.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/dates/dates.html',
      filename: 'dist/dates.html',
    }),
  ],
};
