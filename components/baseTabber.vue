<template>
  <footer class="hs-tabber">
    <nuxt-link :to="item.link" class="item" v-for="(item, index) in tabber" :key="index" exact>
      <span class="icon">
        <i class="hs-icon" :class="item.icon"></i>
        <span class="dot" v-if="item.dot"></span>
      </span>
      <span class="text">{{ item.title }}</span>
    </nuxt-link>
  </footer>
</template>

<script>
import _ from 'underscore'

export default {
  data () {
    return {
      tabber: [
        {
          name: 'index',
          icon: 'home',
          title: '黑市',
          link: '/',
          isActive: false,
          dot: false
        },
        {
          name: 'categories',
          icon: 'culture',
          title: '分类',
          link: '/categories/category',
          isActive: false,
          dot: false
        },
        {
          name: 'cart',
          icon: 'shopping',
          title: '购物车',
          link: '/cart',
          isActive: false,
          dot: false
        },
        {
          name: 'message',
          icon: 'explore',
          title: '消息',
          link: '/message',
          isActive: false,
          dot: false
        },
        {
          name: 'me',
          icon: 'me',
          title: '我的',
          link: '/me',
          isActive: false,
          dot: false
        }
      ]
    }
  },
  computed: {
    // tabber_item() {
    //   let temp_array = []
    //   console.log(this.$route.fullPath)
    //   _.each(this.tabber, (item, index) => {
    //     if(this.$route.fullPath.indexOf(item.name) === 1) {
    //       item.isActive = true
    //     }
    //     temp_array.push(item)
    //   })
    //   return temp_array
    // }
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/less/common.less';

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
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #C6C6C6;
      &.active, &.nuxt-link-active {
        color: #AE2121;
      }
      .icon {
        height: 0.58rem;
        font-size: 0.58rem;
        align-items: center;
        position: relative;
        display: flex;
        text-align: center;
        .dot {
          position: absolute;
          left: 100%;
          z-index: 99;
          display: block;
          width: .3rem;
          height: .3rem;
          background-color: #ef4f4f;
          border-radius: 50%;
          top: -.06rem;
          margin-left: -.12rem;
        }
        .home:before {
          content: "\e66d";
        }
        .culture:before {
          content: "\e664";
        }
        .me:before {
          content: "\e66a";
        }
        .explore:before {
          content: "\e669";
        }
        .shopping:before {
          content: "\e668";
        }
      }
      .text {
        display: inline-block;
        transform: scale(0.9);
        margin-top: .1rem;
        .font-dpr(11px);
        font-weight: 700;
      }
    }
  }
</style>
