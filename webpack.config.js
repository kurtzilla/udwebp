var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var purify = require("purifycss-webpack-plugin");

const VENDOR_LIBS = [
  'faker', 'lodash', 'react', 'redux', 'react-redux', 'react-dom',
  'react-input-range', 'redux-form', 'redux-thunk'
];

module.exports = {
  //devtool: "inline-source-map",
  entry: {
      bundle: './src/index.js', // filename will be name of key - see output
      vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [ // loaders - work with individual files
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/i,
        loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?sourceMap!resolve-url-loader?keepQuery!sass-loader?sourceMap'
          })
      },
      // {
      //   test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'url-loader?limit=100000'
      // }
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[hash].[ext]'
      },
      {
        test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      }
    ]
  },
  plugins: [  // like loaders, but they look at the total sum of input or output
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({ // sets our src/index to generate for /dist
      template: 'src/index.html'
    }),
    // defines window scope variables that will be defined in our bundle.js
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new ExtractTextPlugin({
      filename: '[id].style.css',
      allChunks: true
    }),
    
    // TODO activate the following on production builds only (slow build time)
    
    // new purify({
    //   basePath: 'src',
    //   purifyOptions: {
    //     minify: true,
    //     output: false,
    //     info: false,
    //     rejected: false
    //   }
    // }),
    //new webpack.optimize.OccurrenceOrderPlugin(true),
    // new webpack.optimize.UglifyJsPlugin()
  ]
};
