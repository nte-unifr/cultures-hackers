module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cultures-hackers/'
    : '/',
  devServer: {
    disableHostCheck: true
  }
}