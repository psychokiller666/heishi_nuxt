<template>
  <cube-scroll class="index" :data="goodslist" @pulling-up="getgoodsList" ref="scroll" :options="options" :scroll-events="['scroll']">
    <!-- 头图 -->
    <Banner :data="banner" />
    <!-- 大专题 -->
    <Classification :data="classification" />
    <!-- 本周TOP10 -->
    <top10 :data="topten" />
    <!-- 新品 -->
    <newPosts :data="newposts" />
    <!-- 热卖 -->
    <hotSale :data="hotsale" />
    <!-- 分类 -->
    <Categories :data="categories" />
    <postsList :data="goodslist" :pages="goodslistpage" />
    <scrollTo :show="scrolltoVisible">
      <button class="scrollto-btn" @click="scrollTo">顶部</button>
    </scrollTo>
    <template slot="pullup" slot-scope="props">
      <div class="cube-pullup-wrapper" v-if="props.pullUpLoad">
        <div class="before-trigger" v-if="!props.isPullUpLoad">
          加载完成
        </div>
        <div class="after-trigger" v-else>
          正在加载
        </div>
      </div>
    </template>
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
import scrollTo from '~/components/basescrollTo.vue'

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
      topten: top10.data.concat(top10.data)
    };
  },
  data () {
    return {
      // 分页
      goodslistpage: 2,
      options: {
        pullUpLoad: {
          txt: {
            more: '加载更多',
            noMore: '没有更多了'
          }
        }
      },
      scrolltoVisible: false
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
        if (res.data.totalPages >= this.goodslistpage) {
          this.goodslist = this.goodslist.concat(res.data.result)
          this.goodslistpage++
        } else {
          this.$refs.scroll.forceUpdate()
        }
      })
    },
    scrollTo () {
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0, 0, 700)
    },
    scrolltoInit () {
      let tempHeight = this.$refs.scroll.$el.clientHeight * 2

      this.$refs.scroll.$on('scroll', object => {
        if (Math.abs(object.y) > tempHeight) {
          this.scrolltoVisible = true
        } else {
          this.scrolltoVisible = false
        }
      })
    }
  },
  mounted () {
    this.scrolltoInit()

    // console.log(this.$refs.scroll)
  },
  components: {
    Banner, Classification, newPosts, hotSale, Categories, postsList, top10, allStreamer, scrollTo
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/less/common.less';

  .index {
    .scrollto-btn {
      position: absolute;
      right: .5rem;
      bottom: 1.8rem;
      .font-dpr(14px);
      width: 1rem;
      height: 1rem;
      // line-height: 1rem;
      border-radius: 100%;
      background-color: rpga(0 ,0 ,0 ,0.8);
      border: none;
      text-align: center;
      color: #333;
    }
  }
</style>
