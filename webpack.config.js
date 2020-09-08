const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    resultado: path.resolve(__dirname, 'src/pages/resultado/resultado.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: '/',
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
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HotModuleReplacementPlugin(),
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/resultado.html'),
      filename: path.resolve(__dirname, 'dist/resultado.html'),
      chunks: ['resultado'],
    }),
  ],
  devServer: {
    index: 'inicio.html',
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    port: 2001,
    watchContentBase: true,
    watchOptions: {
      poll: 666,
    },
  },
};
