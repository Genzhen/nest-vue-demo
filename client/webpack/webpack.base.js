const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || "development";
const _modeflag = (_mode == "production" ? true : false);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const resolve = path => require('path').resolve(__dirname, path);
let webpackConfig = {
    entry: {
        app: resolve('../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/[name].[hash:5].js",
        publicPath:'/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(css|postcss)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            importLoaders: 1,
                            // localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }, {
                        loader: 'postcss-loader'
                    }
                ]

            },
            {
                test: /\.(png|jpe?j|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,
                        name:'public/images/[name].[ext]?[hash]'
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                }, ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    plugins: [
        new CleanWebpackPlugin(["build"]),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([{
            context: resolve('../src'),
            from: './assets/**/*.*',
            to: ''
        }]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'ques_bank',
            template: resolve('../src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: _modeflag ? "styles/[name].[contenthash:5].css" : "styles/[name].css",
            chunkFilename: _modeflag ? "styles/[id].[contenthash:5].css" : "styles/[id].css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery"
          })
    ]
}
module.exports = webpackConfig;
