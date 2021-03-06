const path = require('path');

module.exports = {
  entry: ['./client/index.jsx', './public/styles.scss'],
  output: {
    filename: 'carousel-module-bundle.js',
    path: path.join(__dirname, '/public'),
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
      },
    ],
  },
};
