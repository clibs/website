import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import WorkboxWebpackPlugin from 'workbox-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import { execSync } from 'child_process'
import path from 'path'

const { NODE_ENV = 'development' } = process.env
const prod = NODE_ENV === 'production'
const GIT_SHA = execSync('git rev-parse HEAD')
const UPDATED_AT = new Date()

const config: webpack.Configuration = {
  entry: './src/main.tsx',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: prod ? '[name].[contenthash].js' : '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/images/favicon.png'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${prod ? 'production' : 'development'}"`,
        GIT_SHA: `"${GIT_SHA.toString().trim()}"`,
        UPDATED_AT: `"${UPDATED_AT.toISOString()}"`
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.css$/i,
        use: [
          prod ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: prod ? '[hash:12]' : '[local]_[hash:4]'
              }
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}

export = (): webpack.Configuration => {
  if (prod) {
    config.mode = 'production'
    config.devtool = 'source-map'
    config.optimization = {
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
    }
    config.plugins!.push(
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[chunkhash].css'
      }),
      new WorkboxWebpackPlugin.GenerateSW()
    )
  } else {
    config.mode = 'development'
    config.devtool = 'cheap-module-source-map'
  }
  return config
}
