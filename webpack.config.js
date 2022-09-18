const path = require('path'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './frontend/assets/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: 'js/bundle.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],

  module:{
    rules: [
        {
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            },
        },

        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }
    ],
  },
  devtool: 'source-map'
};
