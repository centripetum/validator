'use strict'

const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const minimizeTrait = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          },
          output: {
            comments: false
          }
        }
      })
    ]
  }
}

const validator = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve('./dist'),
    filename: 'centripetal-validator.node.js',
    libraryTarget: 'umd',
    library: 'centripetal-validator'
  },
  externals: {
    sanctuary: 'sanctuary'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/u,
        exclude: /node_modules/u,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: '9'
                },
                forceAllTransforms: true
              }
            ]
          ]
        }
      },
      {
        exclude: /node_modules/u,
        loader: 'eslint-loader',
        options: {},
        test: /\.js$/u
      }
    ]
  }
}

const validatorMin = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    output: {
      path: path.resolve('./dist'),
      filename: 'centripetal-validator.node.min.js',
      libraryTarget: 'umd',
      library: 'centripetal-validator'
    },
    externals: {
      sanctuary: 'sanctuary'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/u,
          exclude: /node_modules/u,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: '4'
                  },
                  forceAllTransforms: true
                }
              ]
            ]
          }
        },
        {
          exclude: /node_modules/u,
          loader: 'eslint-loader',
          options: {},
          test: /\.js$/u
        }
      ]
    }
  },
  minimizeTrait
)

const validatorWeb = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve('./dist'),
    filename: 'centripetal-validator.web.js',
    libraryTarget: 'umd',
    library: 'centripetal-validator'
  },
  externals: {
    sanctuary: 'S'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/u,
        exclude: /node_modules/u,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                forceAllTransforms: true
              }
            ]
          ],
          plugins: [
            [
              '@babel/plugin-transform-modules-commonjs',
              {
                loose: true
              }
            ]
          ]
        }
      },
      {
        exclude: /node_modules/u,
        loader: 'eslint-loader',
        options: {},
        test: /\.js$/u
      }
    ]
  }
}

const validatorWebMin = Object.assign(
  {
    mode: 'production',
    entry: './src/index.js',
    target: 'web',
    output: {
      path: path.resolve('./dist'),
      filename: 'centripetal-validator.web.min.js',
      libraryTarget: 'umd',
      library: 'centripetal-validator'
    },
    externals: {
      sanctuary: 'S'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/u,
          exclude: /node_modules/u,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  forceAllTransforms: true
                }
              ]
            ],
            plugins: [
              [
                '@babel/plugin-transform-modules-commonjs',
                {
                  loose: true
                }
              ]
            ]
          }
        },
        {
          exclude: /node_modules/u,
          loader: 'eslint-loader',
          options: {},
          test: /\.js$/u
        }
      ]
    }
  },
  minimizeTrait
)

module.exports = [validator, validatorMin, validatorWeb, validatorWebMin]
