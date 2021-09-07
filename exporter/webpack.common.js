const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      API: path.resolve(__dirname, 'src/api'),
      Actions: path.resolve(__dirname, 'src/actions'),
      Middleware: path.resolve(__dirname, 'src/middleware'),
      Common: path.resolve(__dirname, 'src/common'),
      Utils: path.resolve(__dirname, 'src/utils'),
      Assets: path.resolve(__dirname, 'public/assets'),
      Fonts: path.resolve(__dirname, 'public/fonts'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
