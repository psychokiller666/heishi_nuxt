<template>
  <div class="index-classification">
    <cube-scroll :data="classification_item" direction="horizontal" ref="classification">
      <nuxt-link to="/" class="item" v-for="item in classification_item" :key="item.url">
        <div class="image" v-lazy:background-image.container="item.image"></div>
        <div class="label">{{ item.title }}</div>
      </nuxt-link>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  props: {
    classification_item: {
      type: Array
    }
  },
  computed: {
    // 计算横向滚动元素宽度
    itemWidth() {
      return this.classification_item.length * (2.75 + 0.27) + 0.4 - 0.27 + "rem";
    }
  },
  mounted () {
    // 赋予 cube-scroll 宽度。参考：https://didi.github.io/cube-ui/#/zh-CN/docs/scroll
    // * 横向滚动：内容元素的宽度必须大于容器元素。由于在默认情况下，子元素的宽度不会超过容器元素，所以需要给 Scroll 组件的 .cube-scroll-content 元素设置大于 .cube-scroll-wrapper 的宽度。
    this.$refs.classification.$el.children[0].style.width = this.itemWidth;
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/common.less';

.index-classification {
  width:9.6rem;
  margin-left: .4rem;
  padding: .53rem 0;
  height: 2.08rem;;
  border-bottom: .013rem solid #E8E8E8;
  border-top: .013rem solid #E8E8E8;
  white-space: nowrap;
  .item {
    width: 2.75rem;
    height: 2.08rem;
    display: inline-block;
    margin-right: .27rem;
    position: relative;
    border-radius: .16rem;
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
      .hs-cover
    }
    .label {
      .font-dpr(14px);
      position: absolute;
      bottom: .32rem;
      left: .32rem;
      z-index: 1;
      color: #fff;
    }
  }
}
</style>
