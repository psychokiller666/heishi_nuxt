module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '公路商店store',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
  loading: { color: '#3B8070' },
  css: [
    'cube-ui/lib/style.css'
  ],
  plugins: [
    { src: '~/plugins/cube-ui.js' },
    { src: '~/plugins/lazyload.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    '/api/': { target: 'https://api.ontheroadstore.com', pathRewrite: {'^/api/': ''} }
  },
  axios: {
    baseURL: 'http://localhost:3000/api/',
    browserBaseURL: 'http://localhost:3000/api/',
    proxy: true,
    // debug: true
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/plugins/cube-ui.js', '~/plugins/lazyload.js'],
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
