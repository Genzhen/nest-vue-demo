const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base.js');
const webpack = require('webpack');
const resolve = path => require('path').resolve(__dirname, path);

module.exports = merge(baseWebpack, {
    entry: {
        index: [resolve('../src/index'), 'webpack-hot-middleware/client?timeout=2000&overlay=false']
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
