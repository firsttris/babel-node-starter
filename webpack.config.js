const path = require('path'),
  webpack = require('webpack'),
  cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  target: "node",
  context: __dirname,
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(["dist"]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};
