const path = require('path');

module.exports = {
  entry: './src/file.js',
  output: {
    path: path.resolve(__dirname,  'dist'),
    filename: 'myfirstwebpack.bundle.js'
  }
};