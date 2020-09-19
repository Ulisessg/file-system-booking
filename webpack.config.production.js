const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    busqueda: join(__dirname, 'src', 'pages', 'hotel', 'hotel.js'),
    propietarios: join(
      __dirname,
      'src',
      'pages',
      'registroDeHotel',
      'registroDeHotel.js',
    ),
    login: join(__dirname, 'src', 'pages', 'login', 'login.js'),
    inicio: join(__dirname, 'src', 'pages', 'inicio', 'inicio.js'),
    pago: join(__dirname, 'src', 'pages', 'pago', 'pago.js'),
    resultado: join(__dirname, 'src', 'pages', 'resultado', 'resultado.js'),
  },

  output: {
    path: join(__dirname, 'dist'),
    filename: 'js/[name].[hash].js',
    publicPath: './',
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 1200,
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({ test: /\.js(\?.*)?$/i, exclude: /\/node_modules/ }),
      new OptimizeCSSAssetsPlugin(),
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /\/node_modules/,
        filename: 'js/compress.[name].[hash].js',
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
    ],
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
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|gif|jpg|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'assets/[hash].[ext]',
            limit: 900000,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'hotel.html'),
      filename: join(__dirname, 'dist', 'buscar.html'),
      chunks: ['busqueda'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'hotelOwners.html'),
      filename: join(__dirname, 'dist', 'propietarios.html'),
      chunks: ['propietarios'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'login.html'),
      filename: join(__dirname, 'dist', 'login.html'),
      chunks: ['login'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'inicio.html'),
      filename: join(__dirname, 'dist', 'inicio.html'),
      chunks: ['inicio'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'pago.html'),
      filename: join(__dirname, 'dist', 'pago.html'),
      chunks: ['pago'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'resultado.html'),
      filename: join(__dirname, 'dist', 'resultado.html'),
      chunks: ['resultado'],
    }),
  ],
};
