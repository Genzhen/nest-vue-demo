const merge = require('webpack-merge');
const baseWebpack = require('./webpack.base.js');
const resolve = path => require('path').resolve(__dirname, path);

module.exports = merge(baseWebpack, {
    output: {
        path: resolve('../../build')
    },
    mode: 'production'
});
