const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");

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
          { loader: miniCss.loader },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "resolve-url-loader" },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index_bundle.js",
    publicPath: "./",
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
