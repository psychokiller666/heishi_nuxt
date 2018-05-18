<template>
  <div class="index-follow-goods">
    <div class="recommend" v-show="recommend.length">
      <postsList :postslist_item="recommend"></postsList>
    </div>
    <postsList :data="goods">
      <baseTitle title="推荐狠货" label="狠货配狠人" slot="header" />
    </postsList>
  </div>
</template>

<script>
import postsList from '~/components/index/postsList.vue'
import baseTitle from '~/components/baseTitle.vue'

export default {
  async asyncData ({ app }) {
    // 必须强制加上版本号 version: 3.3.1
    const goods = await app.$axios.$get('appv3/channels', {
      headers: {
        'version': '3.3.1'
      },
      params: {
        channel: 3,
        random: 1,
        sub: 4
      }
    })

    return {
      recommend: goods.data.modules[0].data.result,
      goods: goods.data.modules[1].data.result
    }
  },
  components: {
    postsList, baseTitle
  }
}
</script>

<style lang="less" scoped>
  .recommend {
    border-bottom: .2rem solid #f5f5f5;
  }
</style>
