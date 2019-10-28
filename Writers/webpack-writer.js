const { write } = require('./writer');

function webpackWriter(path) {
  return write(`const HtmlPlugin = require('html-webpack-plugin');
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  const DotenvWebpack = require('dotenv-webpack');
  
  module.exports = {
    entry: './src/index.js',
    output: {
      filename: './bundle.js'
    },
    devServer: {
      port: 7890
    },
    plugins: [
      new HtmlPlugin({ template: './src/index.html' }),
      new CleanWebpackPlugin(),
      new DotenvWebpack()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('autoprefixer')(),
                  require('postcss-nested')()
                ]
              }
            }
          ]
        },
        {
          test: /\.(jpeg|jpg|png|svg)$/,
          use: {
            loader: 'url-loader',
            options: { limit: 1000 },
          },
        }
      ]
    }
  };`, path
  )
}

module.exports = webpackWriter;