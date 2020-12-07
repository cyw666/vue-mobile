module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://yibaijia.test.jianying.run',
        ws: true,
        changeOrigin: true
      },
      '^/uploads': {
        target: 'http://yibaijia.test.jianying.run',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
