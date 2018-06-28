export default function ({ app, redirect }) {
  // 设置请求版本
  app.$axios.setHeader('version', '3.3.1')
  // console.log(app.store)
  app.$axios.onError(error => {
    switch (error.response && error.response.status) {
      case 401:
        if (error.response.data.id === 'illegal_access_token') {
          redirect('/login?redirect=' + app.router.history.current.fullPath)
        } else if(error.response.data.id === 'token_expired') {
          // 刷新token
          app.$axios.get('appv2_2/token').then(res => {
            app.$auth.setToken('local', res.data.data.token)
            app.$axios.setToken(res.data.data.token)
            // app.store.dispatch('getRefreshToken', res.data.data.token)
          }).then(() => {
            console.log('页面刷新')
          })
        }
      break;
    }
  })

}
