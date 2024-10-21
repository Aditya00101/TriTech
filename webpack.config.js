const path = require("path");
const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.VAPI_API_KEY': JSON.stringify(process.env.VAPI_API_KEY)
    })
  ],
  entry: "./src/index.js", // the main entry file for your application
  output: {
    filename: "bundle.js", // the output bundle file name
    path: path.resolve(__dirname, "public"), // path to output folder
  },
  module: {
    rules: [
      {
        test: /\.js$/, // target any JavaScript files
        exclude: /node_modules/, // exclude the node_modules directory
        use: {
          loader: "babel-loader", // use babel-loader to transpile the JavaScript
          options: {
            presets: ["@babel/preset-env"], // use the preset-env for transpiling modern JavaScript to older syntax
          },
        },
      },
    ],
  },
};
