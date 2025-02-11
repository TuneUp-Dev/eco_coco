const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", // Change to 'production' for optimized build
  entry: "./src/index.tsx", // Main entry point
  output: {
    path: path.resolve(__dirname, "dist"), // Output folder
    filename: "bundle.js", // Compiled file name
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JS files
        loader: "babel-loader",
        options: {
          compact: true, // Optimize code by removing unnecessary spaces
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/, // Process JS & TS files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.scss$/, // Process SCSS files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/, // Process images
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans old files before building
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: true, // Enables hot reloading
    historyApiFallback: true, // For React Router
  },
};
