/* eslint-disable */
'use strict';
/**
 * Webpack Dev Config
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const utils = require('./utils');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base');

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // Reference: https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
});
