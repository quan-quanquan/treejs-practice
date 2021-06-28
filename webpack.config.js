const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './index.js',
  entry: {
    main: './index.js',
    'house-road-1': './HouseAndRoad1/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]/[name]-bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      chunks: ['main'],
      filename: 'main.html'
    }),
    new HtmlWebpackPlugin({
      title: 'HouseAndRoad1',
      chunks: ['house-road-1'],
      filename: 'house-road-1.html'
    })
  ],
};
