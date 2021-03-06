const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
    background: './src/background.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
