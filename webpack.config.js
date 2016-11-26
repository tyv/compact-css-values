var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: './lib',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/
    }]
  }
};


