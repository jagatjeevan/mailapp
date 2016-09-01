import webpack from 'webpack';
import serverConfig from './server-config-file';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import path from 'path';

module.exports = {
  context: __dirname,
  entry: "./src/js/index.js",
  output: {
    path: __dirname + "/dist/js",
    filename: "index.js",
  },
  devtool: (serverConfig.environment == 'dev') ? 'source-map' : '',
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
  watch: serverConfig.watch
};
