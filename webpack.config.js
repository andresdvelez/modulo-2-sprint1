const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const sassRules = {
  test: /\.scss$/i,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
};

const javascriptRules = {
  test: /\.js$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};

const fileRules = {
  test: /\.(jpe?g|png|gif|svg)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "images",
      },
    },
  ],
};

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/app.bundle.js",
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./images"),
    },
  },
  module: {
    rules: [javascriptRules, sassRules, fileRules],
  },
  plugins: [
    new HTMLWebpackPlugin({
      hash: true,
      template: "./src/index.html",
      minify: false,
    }),

    new MiniCssExtractPlugin({
      filename: "css/app.bundle.css",
    }),
  ],
};
