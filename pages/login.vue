<template>
  <div class="videobox">
      sss
  </div>
</template>
<script>
import config from '~/wechatConfig.js'

export default {
  head: {
    title: '登陆'
  },
  async asyncData ({app}) {
    // const cart = await app.$axios.$get('appv4/getcart')
    // console.log(cart)
  },
  // layout: 'baseLayout',
  methods: {
    getCode () {
      if (!this.$route.query.code) {
        window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + config.wechatAppid + '&redirect_uri=' + encodeURIComponent(window.location.href) + '&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
        return false
      }
      this.wxLogin(this.$route.query.code)
    },
    async wxLogin (code) {
      const token = await this.$axios.post('appv5_1/login/wechatapp', {
        code: code
      }).then(res => {
        console.log(res.data)
      })
    }
  },
  mounted () {
    this.getCode()
  }
}
</script>

<style lang="less" scoped>
  .videobox {
    width: 100%;
    height: 100vh;
    video {
      width: 100%;
      height: 100vh;
    }
  }
</style>
