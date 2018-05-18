<template>
  <cube-scroll class="index-cart">
    <div class="cart">
      <div class="item"></div>
    </div>
    <div class="not-data">
      <div class="item">
        <img class="jiangzemin" v-lazy="'//img8.ontheroadstore.com/upload/180116/75948a9b79dfa13c50da3c3b78fb20c5.png'" />
      </div>
      <div class="item label">购物车里毛都没有</div>
      <div class="item">
        <nuxt-link to="/"><img class="go-index" v-lazy="'//img8.ontheroadstore.com/upload/180116/38b410551ed00fe3bf4bc1106c3ca68a.png'" /></nuxt-link>
      </div>
    </div>
    <guessLike :data="recommended">
      <div class="label" slot="header">
        <span>猜你喜欢</span>
      </div>
    </guessLike>
  </cube-scroll>
</template>

<script>
import guessLike from '~/components/baseGuessLike.vue'

export default {
  layout: 'indexLayout',
  async asyncData ({app}) {
    const cart = await app.$axios.$get('appv4/getcart')
    // console.log(cart.data.cart)
    return {
      cart: cart.data.cart,
      recommended: cart.data.recommended
    }
  },
  components: {
    guessLike
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/less/common.less';
  .index-cart {
    .not-data {
      width: 10rem;
      box-sizing: border-box;
      padding: 1.69rem 0;
      border-bottom: .2rem solid #f5f5f5;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 10rem;
        margin-bottom: .4rem;
        .font-dpr(14px);
        &.label {
          margin-bottom: .8rem;
        }
        &:last-child {
          margin-bottom: 0;
        }
        // 蛤蛤的眼镜
        .jiangzemin {
          width: 2.14rem;
        }
        .go-index {
          width: 3.45rem;
        }
      }
    }
    .cart {
      // border-bottom: .2rem solid #f5f5f5;
    }
  }
</style>
