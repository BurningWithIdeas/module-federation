const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const deps = require('./package.json').dependencies;

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 3001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'components',
      library: { type: 'var', name: 'components' },
      filename: 'components.js',
      exposes: {
        './ExportPageComp': './src/pages/export-page/ExportPage',
      },
      shared: {
        react: {
          requiredVersion: deps.react,
          singleton: true,
        },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          singleton: true,
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
});
