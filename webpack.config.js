const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background.js',
    post_history: './src/post_history.js',
    options_ui: './src/options_ui.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/options.html', to: path.resolve(__dirname, 'dist', 'options.html') },
      { from: './src/manifest.json', to: path.resolve(__dirname, 'dist', 'manifest.json') },
    ]),
  ],
};
