const path = require('path');

module.exports = {
  entry: './test/eq-test.js',
  output: {
    filename: 'tests.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: {
    jsdom: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
    'react/lib/ReactContext': 'window',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
