const config = require('./apiConfig.js')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '公路商店store',
    // titleTemplate: '%s - 公路商店store',
    meta: [
      { charset: 'utf-8' },
      { name: 'author', content: 'fucked@psychokiller.me' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '公路商店致力于发现、探索尚未被商业力量全面污染的青年文化以及一切被年轻人所接纳的事物和观点，以先锋视角演绎有趣的青年生活方式。' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '//g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ae2121' },
  css: [
    'cube-ui/lib/style.css'
  ],
  cache: {
    max: 20,
    maxAge: 600000
  },
  performance: {
    gzip: true
  },
  plugins: [
    { src: '~/plugins/cube-ui.js' },
    { src: '~/plugins/lazyload.js', ssr: false },
    { src: '~/plugins/axios.js' }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api/': { target: config.proxyUrl, pathRewrite: {'^/api/': ''} }
  },
  axios: {
    baseURL: config.baseUrl,
    browserBaseURL: config.baseUrl,
    proxy: true,
    // retry: true,
    // debug: true
    // debug: true
  },
  dev: process.env.NODE_ENV !== 'production',
  /*
  ** Build configuration
  */
  router: {
    base: '/Portal/'
  },
  build: {
    vendor: ['~/plugins/cube-ui.js', '~/plugins/lazyload.js', 'underscore'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
