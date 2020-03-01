module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete("svg");
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('vue-svg-loader')
        .loader('vue-svg-loader')
        .end()
  }
}
