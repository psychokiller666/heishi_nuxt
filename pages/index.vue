<template>
  <cube-scroll :data="goodslist" @pulling-up="getgoodsList" ref="scroll" :options="options">
    <!-- 头图 -->
    <Banner :banner_item="banner" />
    <!-- 大专题 -->
    <Classification :classification_item="classification" />
    <!-- 本周TOP10 -->
    <top10 :item_top10="topten" />
    <!-- 新品 -->
    <newPosts :newposts_item="newposts" />
    <!-- 热卖 -->
    <hotSale :hotsale_item="hotsale" />
    <!-- 分类 -->
    <Categories :categories_item="categories" />
    <postsList :postslist_item="goodslist" :pages="goodslistpage" />
    <div class="scrollto">
      <button @click="scrollTo">回到顶部</button>
    </div>
  </cube-scroll>
</template>

<script>
import allStreamer from '~/components/allStreamer.vue'
import Banner from '~/components/index/banner.vue'
import Classification from '~/components/index/classification.vue'
import newPosts from '~/components/index/newPosts.vue'
import hotSale from '~/components/index/hotSale.vue'
import Categories from '~/components/index/categories.vue'
import postsList from '~/components/index/postsList.vue'
import top10 from '~/components/index/top10.vue'

import { get_Avatar } from '~/utils/util.js'


export default {
  async asyncData ({app}) {
    // banner
    const banner = await app.$axios.$get('appv3/modules', {
      params: {
        qt: 1
      }
    })
    // 大专题
    const classification = await app.$axios.$get('appv3/modules', {
      params: {
        qt: 2
      }
    })
    // 新品
    const newposts = await app.$axios.$get('appv3/modules', {
      params: {
        qt: 4
      }
    })
    // top10
    const top10 = await app.$axios.$get('appv3/modules', {
      params: {
        qt: 7
      }
    })
    // 热门
    const hotsale = await app.$axios.$get('appv3/modules', {
      params: {
        qt: 9
      }
    })
    // 分类
    const categories = await app.$axios.$get('appv3/categories')
    // 商品列表
    const goodslist = await app.$axios.$get('appv3/modules', {
      params: {
        qt: 11,
        page: 1,
        size: 10
      }
    })

    return {
      banner: banner.data,
      classification: classification.data,
      newposts: get_Avatar(newposts.data.result, 'user_avatar'),
      hotsale: get_Avatar(hotsale.data.result, 'user_avatar'),
      categories: categories.data,
      goodslist: get_Avatar(goodslist.data.result, 'user_avatar'),
      topten: top10.data
    };
  },
  data () {
    return {
      // 分页
      goodslistpage: 2,
      options: {
        pullUpLoad: true,
        // pullDownRefresh: true
      },
      scrollToshow: false
    }
  },
  watch: {
    scrollToshow: function(val) {
      console.log(this.scroll)
    }
  },
  methods: {
    async getgoodsList () {
      if (this.goodslistpage >= 5) {
        this.$refs.scroll.forceUpdate()
        return false
      }
      await this.$axios.$get('appv3/modules', {
        params: {
          qt: 11,
          page: this.goodslistpage,
          size: 10
        }
      }).then(res => {
        if (res.data.totalPages != this.goodslistpage) {
          this.goodslist = this.goodslist.concat(res.data.result)
          this.goodslistpage = this.goodslistpage + 1
        } else {
          this.$refs.scroll.forceUpdate()
        }
      })
    },
    scrollTo () {
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0, 0, 700)
    }
  },
  mounted () {
    // this.scrollTo()
    this.$refs.scroll.$on(this.$refs.scroll.bubbleY, (a) => {
      console.log(a)
    })
    // console.log(this.$refs.scroll.bubbleY)
  },
  components: {
    Banner, Classification, newPosts, hotSale, Categories, postsList, top10, allStreamer
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/common.less';

</style>
