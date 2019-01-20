var webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "assets"
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
      {test: /\.html$/, loader: "html-loader" },
      {test : /\.css$/, use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]},
    ]
  },
  target: "web",
  devtool: "source-map",
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 10000
  },
};
