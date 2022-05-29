const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
const MediaQueryPlugin = require("media-query-plugin");
module.exports = {
  entry: "./src/index.tsx",

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      //   { test: /\.svg$/, use: "svg-inline-loader" },
      {
        test: /\.(s*)css$/,
        use: [
          miniCss.loader,
          "css-loader",
          MediaQueryPlugin.loader,
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      { test: /\.svg$/, use: "svg-inline-loader" },
    ],
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index_bundle.js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new miniCss({
      filename: "style.css",
    }),
  ],
  mode: "development",
};
