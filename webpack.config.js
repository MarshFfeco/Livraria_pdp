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
        },

        {
          test: /\.(svg|png|jpg|gif|webp)$/,
            use: [
              {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images"  
              }  
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 50
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: [0.60, 0.70],
                  speed: 4
                },
                gifsicle: {
                  interlaced: true,
                },
                webp: {
                  quality: 60
                }
              }
            }
          ]
        }
    ],
  },
  devtool: 'source-map'
};
