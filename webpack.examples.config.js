const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    demo: ["./examples/src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "examples/dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, "examples/dist"),
    // compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./examples/src/index.html",
      filename: "index.html"
    })
  ]
};
