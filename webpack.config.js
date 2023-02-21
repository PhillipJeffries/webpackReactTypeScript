const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  devtool: "inline-source-map",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
           MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html",}), new MiniCssExtractPlugin()],
};
