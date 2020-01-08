const webpack = require('webpack')
const path = require('path')
const htmlWebpack = require('html-webpack-plugin')

const BUILD_DIR = path.join(__dirname,'dist')
const APP_DIR = path.join(__dirname,'src')

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    bundle: APP_DIR + '/App.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpack({
      template: 'index.html',
      title: 'webpack title'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    contentBase: [BUILD_DIR],
    index: 'index.html',
    compress: true,
    hot: true,
    port: 3030,
    historyApiFallback: true,
    watchOptions: {
      poll: true
    },
  }
}

module.exports = config
