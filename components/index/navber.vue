<template>
  <header class="index-navber">
    <div class="item">
      <nuxt-link :to="item.link" class="link" exact v-for="(item, index) in navbar" :key="index">{{ item.title }}</nuxt-link>
    </div>
    <div class="item center"></div>
    <div class="item">
      <button class="search-btn" @click="show"></button>
    </div>
    <!-- 搜索popup -->
    <baseSearch ref="popup" />
  </header>
</template>

<script>
  import baseSearch from '~/components/baseSearchPopup.vue'

  export default {
    data () {
      return {
        navbar: [
          {
            title: '推荐',
            link: '/'
          },
          {
            title: '热门',
            link: '/index/showall'
          },
          {
            title: '关注',
            link: '/index/follow'
          },
          {
            title: '特卖',
            link: '/index/sale'
          }
        ]
      }
    },
    components: {
      baseSearch
    },
    methods: {
      show() {
        this.$refs.popup.show()
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .index-navber {
    position: fixed;
    z-index: 9;
    box-sizing: border-box;
    height: 1.2rem;
    line-height: 1.2rem;
    width: 10rem;
    margin-left: -5rem;
    left: 50%;
    display: flex;
    align-items: center;
    padding: 0 .4rem;
    border-bottom: .01rem solid #E8E8E8;
    background-color: #fff;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      .search-btn {
        .hs-icon;
        &:before {
          .font-dpr(20px);
          content: "\e65f";
          color: #333;
        }
      }
      .link {
        position: relative;
        .font-dpr(14px);
        margin-right: .69rem;
        &:last-child {
          margin-right: 0;
        }
        &.nuxt-link-active {
          color: #E03B29;
        }
        &.nuxt-link-active:after {
          content: "";
          display: block;
          height: 0.08rem;
          width: 0.32rem;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          bottom: .18rem;
          background-color: #E03B29;
          border-radius: .27rem;
        }
      }
    }
    .center {
      flex: 1;
      align-self: center;
    }
  }
</style>
