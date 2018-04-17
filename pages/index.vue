<template>
  <cube-scroll :data="goodslist" @pulling-down="aaaa" ref="scroll" :options="options">
    <!-- 头图 -->
    <Banner :banner_item="banner" />
    <!-- 大专题 -->
    <Classification :classification_item="classification" />
    <!-- 新品 -->
    <newPosts :newposts_item="newposts" />
    <!-- 本周TOP10 -->
    <div class="top10"></div>
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
        size: 30
      }
    })

    return {
      banner: banner.data,
      classification: classification.data,
      newposts: newposts.data.result,
      hotsale: hotsale.data.result,
      categories: categories.data,
      goodslist: goodslist.data.result
    };
  },
  data () {
    return {
      // 分页
      goodslistpage: 2,
      options: {
        // pullUpLoad: {
        //   threshold: 0,
        //   txt: {
        //     more: 'Load more',
        //     noMore: 'No more data'
        //   }
        // }
      }
    }
  },
  methods: {
    aaaa () {
      console.log('ffffffff')
    },
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
    Banner, Classification, newPosts, hotSale, Categories, postsList
  }
}
</script>

<style lang="less" scoped>
@import '../assets/less/common.less';

.index-posts-list {
  padding: 0 .4rem;
  .item {
    border-bottom: .013rem solid #E8E8E8;
    padding-bottom: .53rem;
    margin-top: .53rem;
    .image {
      border-radius: .16rem;
      width: 100%;
      height: 4.69rem;
      border: none;
      .hs-cover;
    }
    .text {
      height: 1.89rem;
      padding: .32rem;
      position: relative;
      box-sizing: border-box;
      .title {
        overflow: hidden;
        text-align: left;
        line-height: 1em;
        .font-dpr(15px);
        color: #202123;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .user {
        position: absolute;
        left: .32rem;
        bottom: .32rem;
        line-height: .53rem;
        overflow: hidden;
        white-space: nowrap;
        .hs-cf;
        .avatar {
          width: .53rem;
          height: .53rem;
          .hs-avatar;
          .hs-fl;
        }
        .nickname {
          margin-left: .21rem;
          line-height: .6rem;
          .font-dpr(14px);
          color: #8E8E8E;
          .hs-fl;
        }
      }
      .label {
        position: absolute;
        right: .32rem;
        bottom: .32rem;
        color: #8E8E8E;
        .font-dpr(12px);
        margin: 0 0.16rem 0 0;
        padding: 0.08rem 0.133rem;
        border-radius: 0.107rem;
        background: #F5F5F5;
        display: inline-block;
      }
    }
  }
}
</style>
