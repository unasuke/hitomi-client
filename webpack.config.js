const path = require('path');

module.exports = {
  entry: {
    background: './src/background.js',
    post_history: './src/post_history.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
