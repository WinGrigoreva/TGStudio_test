const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]',
    minimize: true
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    minimize: true
  }
}

module.exports = {
  entry: path.resolve(__dirname, "client/src/index.jsx"),

  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "main.js",
  },

  resolve: {
    extensions: [".jsx", ".js", "css"],
  },

  optimization:{
    minimize: true,
    removeEmptyChunks: true,
    splitChunks:{
      chunks: "all",
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        exclude: /(node_modules)/, 
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react", "mobx"], 
          plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose": true }]
          ]
        },       
      },

      {
        test: /\.(scss|css|sass)$/,
        exclude: /\.module\.(scss|css|sass)$/,
        use: ['style-loader', {
          loader: "css-loader",
          // options: { modules: true}
        }, 'sass-loader']
      },
      {
        test: /\.module\.(scss|css|sass)$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: { modules: true}
          },          
          'sass-loader',
        ]
      },

        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          loader: "file-loader",
          options:{
              name: "assets/images/[name].[ext]"
          }
        },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),

    new CopyWebpackPlugin([
      {
        from: "./client/src/assets",
        to: "assets",
        ignore: ["*.scss", "*.sass"],
      },
    ]),

    new MiniCssExtractPlugin({
      filename: "style.min.css",
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './client/src/index.html',
    })
  ],
};
