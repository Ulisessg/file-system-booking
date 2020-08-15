const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    dates: path.resolve(__dirname, 'src/pages/dates/index-dates.js'),
    login: path.resolve(__dirname, 'src/pages/login/index-login.js'),
    logout: path.resolve(__dirname, 'src/pages/logout/index-logout.js'),
    main: path.resolve(__dirname, 'src/pages/main/index-main.js'),
    signin: path.resolve(__dirname, 'src/pages/sign-in/index-sign-in.js'),
    signup: path.resolve(__dirname, './src/pages/sign-up/index-sign-up.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
};
