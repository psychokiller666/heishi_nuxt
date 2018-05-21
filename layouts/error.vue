<template>
  <div class="error">
    <div class="item" v-if="error.statusCode === 404">
      <img class="image" v-lazy="'//img8.ontheroadstore.com/upload/180519/34c7c7c72e1b49ab83cff72148b898a1.png'" />
      <nuxt-link to="/">
        <img class="image" v-lazy="'//img8.ontheroadstore.com/upload/180519/3279c578dabe18eaeda6985222833615.png'" />
      </nuxt-link>
    </div>
    <div class="item" v-else-if="error.statusCode === 503">
      <img class="image" v-lazy="'//img8.ontheroadstore.com/upload/180521/6b9d30fe8e877c5e63e0a28973863893.png'" />
    </div>
    <div class="item" v-else-if="error.statusCode === 401">
      转跳登陆页面
    </div>
    <div class="item" v-else>

    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  data () {
    return {
      Countdown: 10
    }
  },
  methods: {
    initError () {
      switch (this.error.statusCode && this.error.response.status) {
        case 401:
          // 401错误转跳登陆页面
          this.$router.push({
            name: 'login',
            query: {
              redirect: this.$router.history.pending.fullPath
            }
          })
        break;
        case 503:
          // 503 倒计时转跳页面
        break;
      }
    }
  },
  mounted () {
    this.initError()
  }
}
</script>

<style lang="less" scoped>
  .error {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 10rem; text-align: center;
      .image {
        width: 10rem;
        margin-top: 1rem;
      }
    }
  }
</style>
