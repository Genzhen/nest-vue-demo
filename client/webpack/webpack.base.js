const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = path => require('path').resolve(__dirname, path);
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: resolve('../src/index.js'),
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: resolve('../src/template.html'),
          filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      }
    }
}