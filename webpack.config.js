const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { gitHash } = require('./build-utils/git-hash.js');

const gitShortHash = gitHash();

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
      template: "./src/index.html",
      meta: {
        'commit-hash': gitShortHash,
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
};
