const path = require('path')

module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: process.env.VUE_APP_ENV !== 'local' ? './' : '/form',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }
}
