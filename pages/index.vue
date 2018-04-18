<template>
  <cube-scroll :data="goodslist" @pulling-up="getgoodsList" ref="scroll" :options="options">
    <!-- 头图 -->
    <Banner :banner_item="banner" />
    <!-- 大专题 -->
    <Classification :classification_item="classification" />
    <!-- 新品 -->
    <newPosts :newposts_item="newposts" />
    <!-- 本周TOP10 -->
    <top10 :item_top10="topten" />
    <!-- 热卖 -->
    <hotSale :hotsale_item="hotsale" />
    <!-- 分类 -->
    <Categories :categories_item="categories" />
    <postsList :postslist_item="goodslist" />
  </cube-scroll>
</template>

<script>
import Banner from '~/components/index/banner.vue'
import Classification from '~/components/index/classification.vue'
import newPosts from '~/components/index/newPosts.vue'
import hotSale from '~/components/index/hotSale.vue'
import Categories from '~/components/index/categories.vue'
import postsList from '~/components/index/postsList.vue'
import top10 from '~/components/index/top10.vue'

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
      newposts: newposts.data.result,
      hotsale: hotsale.data.result,
      categories: categories.data,
      goodslist: goodslist.data.result,
      topten: top10.data
    };
  },
  data () {
    return {
      // 分页
      goodslistpage: 2,
      options: {
        pullUpLoad: {
          threshold: 40,
          txt: {
            more: 'Load more',
            noMore: 'No more data'
          }
        }
      }
    }
  },
  methods: {
    async getgoodsList () {
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
    }
  },
  mounted () {
    // this.getgoodsList()
  },
  components: {
    Banner, Classification, newPosts, hotSale, Categories, postsList, top10
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/common.less';

</style>
