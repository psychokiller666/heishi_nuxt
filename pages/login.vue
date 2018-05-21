<template>
  <div class="login" v-lazy:background-image.container="'http://img8.ontheroadstore.com/upload/171220/812e248b49ad89c1cdcabdfefa30cf9c.png@640w_1l'">
    <div class="item logo">
      <img class="image" v-lazy="'http://img8.ontheroadstore.com/upload/180516/7691aec0cd279456d9999dc2fed05a50.png'" />
      <div class="flag">
        <p>我们探索发现，整理报道</p>
        <p>年轻人喜欢的摇滚乐，流行，时尚，亚文化</p>
      </div>
    </div>
    <div class="item wechat-login">
      <button @click="getCode">微信登陆</button>
    </div>
    <div class="item pact">
      <div class="label">登录即同意公路商店</div>
      <div class="service">
        <nuxt-link to="/agreement">用户服务协议</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import config from '~/wechatConfig.js'

export default {
  layout: 'baseLayout',
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
    // this.getCode()
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/less/common.less';

  .login {
    width: 10rem;
    height: 100vh;
    padding: 2rem 1.5rem;
    .hs-cover;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .item {
      text-align: center;
      width: 100%;
      padding-bottom: 3.8rem;
      &:last-child {
        padding-bottom: 0;
      }
      &.logo {
        // margin-top: 2rem;
        .image {
          width: 4.56rem;
          margin-bottom: .2rem;
        }
        .flag {
          color: #fff;
          .font-dpr(13px);
          p {
            margin-top: .4rem;
          }
        }
      }
      &.pact {
        display: flex;
        justify-content: space-between;
        .font-dpr(12px);
        .label {
          color: #b1abab;
        }
        .service {
          a {
            color: #fff;
          }

        }
      }
      &.wechat-login {
        // margin-bottom: 1rem;
        button {
          width: 100%;
          box-sizing: border-box;
          border: .04rem solid #fff;
          background-color: transparent;
          color: #fff;
          .font-dpr(15px);
          padding: .27rem 0;
        }
      }
    }
  }
</style>
