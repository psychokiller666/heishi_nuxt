<template>
  <cube-scroll>
    <div class="tags">
      <cube-scroll :data="tags" direction="horizontal" ref="tags">
        <nuxt-link :to="{ name: 'category-id-tag', params: { id: categoryId, tag: item.name } }" class="item" v-for="(item, index) in tags" :key="index" exact>
          <div class="image" v-lazy:background-image.container="item.image"></div>
          <div class="label">{{ item.name }}</div>
        </nuxt-link>
      </cube-scroll>
    </div>
    <nuxt class="category-id-tag-content"></nuxt>
  </cube-scroll>
</template>

<script>
import baseGuessLike from '~/components/baseGuessLike.vue'

export default {
  layout: 'indexLayout',
  validate ({ params }) {
    return (!!params.id && !Object.is(Number(params.id), NaN))
  },
  async asyncData ({ app, params }) {
    const category = await app.$axios.$get('appv3/category/tags', {
      params: {
        id: params.id
      }
    })
    return {
      categoryId: params.id,
      tags: category.data
    }
  },
  computed: {
    // 计算横向滚动元素宽度
    itemWidth() {
      return this.tags.length * (1.92 + 0.27) + 0.4 - 0.27 + "rem";
    }
  },
  methods: {

  },
  mounted () {
    // 赋予 cube-scroll 宽度。参考：https://didi.github.io/cube-ui/#/zh-CN/docs/scroll
    // * 横向滚动：内容元素的宽度必须大于容器元素。由于在默认情况下，子元素的宽度不会超过容器元素，所以需要给 Scroll 组件的 .cube-scroll-content 元素设置大于 .cube-scroll-wrapper 的宽度。
    this.$refs.tags.$el.children[0].style.width = this.itemWidth;
    console.log(this)
  },
  components: {
    baseGuessLike
  }
}
</script>


<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .tags {
    width:9.6rem;
    margin-left: .4rem;
    // padding: .53rem 0;
    padding-top: .4rem;
    height: .96rem;
    // border-bottom: .013rem solid #E8E8E8;
    // border-top: .013rem solid #E8E8E8;
    white-space: nowrap;
    .item {
      height: .96rem;
      width: 1.92rem;
      display: inline-block;
      margin-right: .27rem;
      position: relative;
      border-radius: .16rem;
      // text-align: center;
      // line-height: .96rem;
      &.nuxt-link-active {
        &:before {
          content: '';
          position: absolute;
          width: .427rem;
          height: .0533rem;
          border-radius: .08rem;
          background: #fff;
          left: 50%;
          bottom: .16rem;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          z-index: 99;
        }
      }
      &:after {
        position: absolute;
        content: "";
        background: linear-gradient(rgba(1,1,1,0), rgba(0,0,0,0.6));
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: .16rem;
      }
      .image {
        width: 100%;
        height: 100%;
        border-radius: .16rem;
        background-size: cover;
        background-position: center;
      }
      .label {
        .font-dpr(13px);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        color: #fff;
        width: 1.92rem;
        line-height: .96rem;
        text-align: center;
      }
    }
  }
</style>
