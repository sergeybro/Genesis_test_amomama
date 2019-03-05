const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPathP: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "resolve-url-loader",
          "sass-loader"
        ]
      },
      {
          test: /\.(html)$/,
          use: {
              loader: 'html-loader',
              options: {
                  attrs: ['img:src']
              }
          }
      },
        {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        publicPath: 'img/',
                        outputPath: 'img/',
                        name: '[name].[ext]',
                    },
                },
            ],
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: 'fonts',
                    outputPath: 'fonts'
                }
            }]
        }
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({filename: "[name].css"}),
      new HtmlWebpackPlugin({
          title: 'My App test',
          filename: 'index.html',
          template: 'src/index.html'
      })
  ]
}

module.exports = (env, options) => {
    let isProduction = options.mode === 'production';
    config.devtool = isProduction ? 'source-map' : 'eval-sourcemap';

    return config;
};