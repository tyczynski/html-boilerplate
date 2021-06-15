// merge webpack configs with following package
const { merge } = require('webpack-merge');
// webpack plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// common webpack config
const common = require('./webpack.common.js');
// constants
const { ES_TARGET } = require('./constants');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: ES_TARGET,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'app.css',
    }),
    new CssMinimizerPlugin(),
  ],
  cache: false,
});
