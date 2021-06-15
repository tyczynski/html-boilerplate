const path = require('path');
// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
// constants
const { ES_TARGET } = require('./constants');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(process.cwd(), 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: ES_TARGET,
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
