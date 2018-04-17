<template>
  <cube-scroll @pulling-down="aaa" @pulling-up="bbb" ref="scroll" :options="options">
    <!-- 头图 -->
    <Banner :banner_item="banner" />
    <!-- 大专题 -->
    <Classification :classification_item="classification" />
    <!-- 新品 -->
    <newPosts :newposts_item="newposts" />
  </cube-scroll>
</template>

<script>
import Banner from '~/components/index/banner.vue'
import Classification from '~/components/index/classification.vue'
import newPosts from '~/components/index/newPosts.vue'

export default {
  async asyncData ({app}) {
    // banner
    const banner = await app.$axios.$get('appv3/modules', {
      data: {
        qt: 1
      }
    })
    // 大专题
    const classification = await app.$axios.$get('appv3/modules', {
      data: {
        qt: 2
      }
    })
    const newposts = await app.$axios.$get('appv3/modules', {
      data: {
        qt: 4
      }
    })
    return {
      banner: banner.data,
      classification: classification.data,
      newposts: newposts.data.result
    };
  },
  data() {
    return {
      options: {
        pullDownRefresh: {
          threshold: 90,
          stop: 40,
          txt: 'Refresh success'
        },
        pullUpLoad: true
      }
    }
  },
  methods: {
    aaa () {
      this.$refs.scroll.forceUpdate()
      console.log('下拉刷新')
    },
    bbb () {
      console.log('上拉刷新')
    }
  },
  components: {
    Banner, Classification, newPosts
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/common.less';


</style>
