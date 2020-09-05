const path = require('path');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    busqueda: path.resolve(__dirname, 'src/pages/hotel/hotel.js'),
    propietarios: path.resolve(
      __dirname,
      'src/pages/registroDeHotel/registroDeHotel.js',
    ),
    login: path.resolve(__dirname, 'src/pages/login/login.js'),
    inicio: path.resolve(__dirname, 'src/pages/inicio/inicio.js'),
    pago: path.resolve(__dirname, 'src/pages/pago/pago.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: './',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|gif|jpg|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'assets/[hash].[ext]',
              limit: 90000,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }],
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1000,
      maxSize: 1000000,
    },
  },

  plugins: [
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/hotel.html'),
      filename: path.resolve(__dirname, 'dist/buscar.html'),
      chunks: ['busqueda'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/hotelOwners.html'),
      filename: path.resolve(__dirname, 'dist/propietarios.html'),
      chunks: ['propietarios'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/login.html'),
      filename: path.resolve(__dirname, 'dist/login.html'),
      chunks: ['login'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/inicio.html'),
      filename: path.resolve(__dirname, 'dist/inicio.html'),
      chunks: ['inicio'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/pago.html'),
      filename: path.resolve(__dirname, 'dist/pago.html'),
      chunks: ['pago'],
    }),
  ],
};
