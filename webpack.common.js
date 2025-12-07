const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // HTML <img> support
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // Images in JS/CSS imports
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
