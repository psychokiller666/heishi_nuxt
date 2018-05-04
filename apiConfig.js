const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  cdnUrl: isProdMode ? 'https://img8.ontheroadstoe.com/heishi/cdn/' : '/',
  proxyUrl: isProdMode ? 'https://api.ontheroadstore.com/' : 'https://apitest.ontheroadstore.com/',
  baseUrl: isProdMode ? 'http://hs.ontheroadstore.com/api/' : 'http://hstest.ontheroadstore.com/api/'
}
