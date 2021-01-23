const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./scripts/make-index.js",
      filename: `${path.resolve(__dirname, "build")}/index.html`,
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
    historyApiFallback: true,
  },
};
