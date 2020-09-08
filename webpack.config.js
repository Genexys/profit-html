const path = require(`path`);
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);

module.exports = {
  context: path.resolve(__dirname, `source`),
  mode: `production`, // Режим сборки
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  },
  entry: {
    // "main": `./js/main.js`,
    // "main.min": `./js/main.js`,
    "vendor.min": `./js/vendor.js`,
  }, // Точка входа приложения
  output: {// Настройка выходного файла
    filename: `[name].js`,
    path: path.join(__dirname, `build/js`),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`],
          },
        },
      },
    ],
  },
};
