<template>
  <footer class="hs-tabber">
    <div class="icon">
      <nuxt-link to="/" class="item">
        <span class="icon">
          <i class="hs-icon message"></i>
        </span>
        <span class="text">私信</span>
      </nuxt-link>
      <nuxt-link to="/cart" class="item">
        <span class="icon">
          <i class="hs-icon shopping"></i>
        </span>
        <span class="text">购物车</span>
      </nuxt-link>
      <nuxt-link to="/" class="item">
        <span class="icon">
          <i class="hs-icon stores"></i>
        </span>
        <span class="text">店铺</span>
      </nuxt-link>
    </div>
    <div class="btn">
      <button class="addcart-btn">加入购物车</button>
      <button class="buy-btn">买他妈的</button>
    </div>
  </footer>
</template>

<script>
import _ from 'underscore'

export default {
  data () {
    return {
      tabber: [
        {
          name: 'home',
          title: '黑市',
          link: '/',
          isActive: false,
          dot: false
        },
        {
          name: 'shopping',
          title: '购物车',
          link: '/cart',
          isActive: false,
          dot: false
        },
        {
          name: 'explore',
          title: '消息',
          link: '/message',
          isActive: false,
          dot: false
        }
      ]
    }
  },
  computed: {
    tabber_item() {
      let temp_array = []
      _.each(this.tabber, (item, index) => {
        // console.log(this.$route)
        // if(this.$route.name.indexOf(item.name) === 1) {
        //   item.isActive = true
        // }
        temp_array.push(item)
      })
      return temp_array
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .hs-tabber {
    width: 10rem;
    position: fixed;
    // z-index: 9;
    bottom: 0;
    background-color: #FFF;
    height: 1.3rem;
    left: 50%;
    margin-left: -5rem;
    display: flex;
    align-items: center;
    border-top: 0.013rem solid #e8e8e8;
    box-sizing: border-box;
    z-index: 11;
    .btn {
      height: 1.3rem;
      display: flex;
      align-items: center;
      width: 6.3rem;
      border-left: rgba(0, 0, 0, .1) solid .04rem;
      box-sizing: border-box;
      button {
        height: 1.3rem;
        text-align: center;
        .font-dpr(15px);
        border: none;
      }
      .addcart-btn {
        width: 50%;
        background-color: #fff;
        font-weight: 700;
      }
      .buy-btn {
        width: 50%;
        background-color: #ae2121;
        color: #fff;
        font-weight: 400;
      }
    }
    & > .icon {
      display: flex;
      align-items: center;
      width: 3.7rem;
      height: 1.3rem;
      box-sizing: border-box;
      .item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #333;
        .icon {
          height: 0.5rem;
          font-size: 0.5rem;
          align-items: center;
          position: relative;
          display: flex;
          text-align: center;
          .message:before {
            content: "\e654";
          }
          .stores:before {
            content: "\e655";
          }
          .shopping:before {
            content: "\e648";
          }
        }
        .text {
          display: inline-block;
          transform: scale(0.9);
          margin-top: .1rem;
          .font-dpr(11px);
          font-weight: normal;
        }
      }
    }

  }
</style>
