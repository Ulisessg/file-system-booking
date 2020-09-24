const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
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
    registroHotel: path.resolve(
      __dirname,
      'src/pages/registroDeHotel/registroDeHotel.js',
    ),
    registro: path.resolve(__dirname, 'src/pages/registro/registro.js'),
    dashboard: path.resolve(__dirname, 'src/pages/dashboard/dashboard.js'),
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
      template: path.resolve(__dirname, 'public/dashboard.html'),
      filename: path.resolve(__dirname, 'dist/dashboard.html'),
      chunks: ['dashboard'],
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/registerHotel.html'),
      filename: path.resolve(__dirname, 'dist/registroHotel.html'),
      chunks: ['registroHotel'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/register.html'),
      filename: path.resolve(__dirname, 'dist/registro.html'),
      chunks: ['registro'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/registerHotel.html'),
      filename: path.resolve(__dirname, 'dist/registroHotel.html'),
      chunks: ['registroHotel'],
    }),
  ],
};
