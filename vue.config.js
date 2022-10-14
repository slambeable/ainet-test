const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const AutoImport = require('unplugin-auto-import/dist/webpack.cjs');
const Components = require('unplugin-vue-components/dist/webpack.js');
const { ElementPlusResolver } = require('unplugin-vue-components/dist/resolvers.js');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ainet-test/'
    : '/',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      extensions: ['ts'],
      alias: {
        api: path.resolve(__dirname, './src/api/'),
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      new StyleLintPlugin({
        files: [path.resolve(__dirname, 'src/**/*.{vue,scss}')],
      }),
    ],
  },
});
