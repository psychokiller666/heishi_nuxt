<template>
  <div class="index-banner">
    <cube-slide :data="banner_item">
      <cube-slide-item class="item" v-for="item in banner_item" :key="item.url">
        <nuxt-link to="/" v-lazy:background-image.container="item.image + '@640w_1l'"></nuxt-link>
      </cube-slide-item>
      <div slot="dots" slot-scope="props" class="dots">
        <span :class="{active: props.current === index}" v-for="(item, index) in props.dots" :key="index"></span>
      </div>
    </cube-slide>
  </div>
</template>

<script>
export default {
  props: {
    banner_item: {
      type: Array
    }
  }
}
</script>

<style lang="less">
  @import '../../assets/less/common.less';

  .index-banner {
    margin-bottom: .27rem;
    .cube-slide {
      height: 5.07rem;
      width: 8.4rem;
      margin: 0 auto;
      .item {
        border-radius: .16rem;
        padding: .27rem .13rem .53rem .13rem;
        a {
          box-shadow: 0 0.134rem 0.4rem rgba(0,0,0,.06);
          border-radius: .16rem;
          .hs-cover
        }
      }
      .cube-slide-dots {
        bottom: .16rem;
        .dots {
          span {
            background-color: #000;
            opacity: .5;
            width: .11rem;
            height: .11rem;
            border-radius: 100%;
            transition: all .3s;
            margin: 0 .07rem;
            display: inline-block;
            vertical-align: bottom;
            &.active {
              background-color: #000;
              opacity: 1;
              width: .69rem;
              border-radius: .69rem;
            }
          }
        }
      }
    }
  }
</style>
