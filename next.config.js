// next.config.js
const withAntdLess = require('next-plugin-antd-less');
const { i18n } = require('./next-i18next.config');

module.exports = withAntdLess({
  // optional
  // modifyVars: { '@primary-color': '#04f' },
  // optional
  // lessVarsFilePath: './src/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },

  i18n,
});