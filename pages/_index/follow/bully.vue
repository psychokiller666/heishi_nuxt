<template>
  <div class="index-follow-bully">
    <!-- 推荐卖家 -->
    <seller :data="recommend">
      <baseTitle title="推荐卖家" label="12年薪，没有年终奖" slot="header" />
    </seller>

    <!-- 关注卖家 -->
    <seller :data="bully">
      <baseTitle title="关注卖家" label="12年薪，没有年终奖" slot="header" />
    </seller>
  </div>
</template>

<script>
import seller from '~/components/index/seller.vue'
import baseTitle from '~/components/baseTitle.vue'

export default {

  async asyncData ({app}) {
    // 必须强制加上版本号 version: 3.3.1
    const bully = await app.$axios.$get('appv3/channels', {
      headers: {
        'version': '3.3.1'
      },
      params: {
        channel: 3,
        random: 1,
        sub: 3
      }
    })
    console.log(bully)
    return {
      bully: bully.data.modules[0].data.result,
      recommend: bully.data.modules[1].data.result
    }
  },
  components: {
    seller, baseTitle
  }
}
</script>
