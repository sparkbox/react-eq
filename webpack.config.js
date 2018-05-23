'use strict';
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        use: 'babel-loader'
      }
    ]
  }
};
