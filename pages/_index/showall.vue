<template>
  <cube-scroll :data="goodslist" @pulling-up="getgoodsList" ref="scroll" :options="options">
    <!-- 哆嗦排行榜 -->
    <div class="showall-hot-sale">
      <baseTitle title="哆嗦排行榜" label="群众的眼睛贼亮" />
      <cube-scroll :data="ranking_item" direction="horizontal" ref="ranking">
        <nuxt-link to="/" class="item" v-for="(item, index) in ranking_item" :key="index">
          <div class="image" v-lazy:background-image.container="item.cover"></div>
          <div class="label">{{ item.title }}</div>
        </nuxt-link>
      </cube-scroll>
    </div>
    <!-- 当下最热 -->
    <postsList :postslist_item="goodslist" :pages="goodslistpage">
      <baseTitle slot="header" title="当下最热" label="看看别人偷摸买了啥" />
    </postsList>
  </cube-scroll>
</template>

<script>
import baseTitle from '~/components/baseTitle.vue'
import postsList from '~/components/index/postsList.vue'

import { get_Avatar } from '~/utils/util.js'

export default {
  async asyncData ({app}) {
    const ranking_item = await app.$axios.$get('appv3/modules', {
      params: {
        qt: 9
      }
    })
    const goodslist = await app.$axios.$get('appv3/modules', {
      params: {
        qt: 9,
        page: 1,
        size: 10
      }
    })

    return {
      ranking_item: ranking_item.data.result,
      goodslist: get_Avatar(goodslist.data.result, 'user_avatar')
    }
  },
  computed: {
    // 计算横向滚动元素宽度
    itemWidth() {
      return this.ranking_item.length * (7.23 + 0.53) + 0.4 - 0.53 + "rem";
    }
  },
  data () {
    return {
      // 分页
      goodslistpage: 2,
      options: {
        pullUpLoad: true,
        // pullDownRefresh: true
      }
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
          qt: 9,
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
    // 赋予 cube-scroll 宽度。参考：https://didi.github.io/cube-ui/#/zh-CN/docs/scroll
    // * 横向滚动：内容元素的宽度必须大于容器元素。由于在默认情况下，子元素的宽度不会超过容器元素，所以需要给 Scroll 组件的 .cube-scroll-content 元素设置大于 .cube-scroll-wrapper 的宽度。
    this.$refs.ranking.$el.children[0].style.width = this.itemWidth;
  },
  components: {
    postsList, baseTitle
  }
}
</script>

<style lang="less">
@import '../../assets/less/common.less';

.showall-hot-sale {
  width:9.6rem;
  margin-left: .4rem;
  padding: .53rem 0;
  // height: 4.45rem;
  white-space: nowrap;
  border-bottom: .013rem solid #E8E8E8;
  .item {
    width: 7.23rem;
    height: 4.45rem;
    display: inline-block;
    margin-right: .53rem;
    position: relative;
    border-radius: .16rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .image {
      width: 100%;
      height: 3.68rem;
      border-radius: .16rem;
      .hs-cover
    }
    .label {
      .font-dpr(16px);
      position: absolute;
      bottom: 0;
      // left: .32rem;
      z-index: 1;
    }
  }
}
</style>
