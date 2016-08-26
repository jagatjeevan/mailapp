import webpack from 'webpack';
import serverConfig from './server-config-file';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import path from 'path';

module.exports = {
  entry: [
    "./src/js/index.js"
  ],
  output: {
    filename: "index.js",
    path: "./dist/js",
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /.scss$/,
        exclude: /node_modules/,
        loader: "sasslint"
      }
    ],
    loaders: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc.json'
  },
  sasslint: {
    configFile: './.sass-lint.yml'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {}),
    new ExtractTextPlugin('../css/styles.css')
  ],
};
