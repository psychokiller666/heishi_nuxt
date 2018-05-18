<template>
  <header class="categories-navber">
    <div class="item"></div>
    <div class="item">
      <div class="tabs">
        <nuxt-link to="/categories/category" class="link" exact>分类</nuxt-link>
        <nuxt-link to="/categories/tag" class="link" exact>关注</nuxt-link>
      </div>
    </div>
    <div class="item">
      <button class="search-btn" @click="show"></button>
    </div>
    <baseSearch ref="popup" />
  </header>
</template>

<script>
  import baseSearch from '~/components/baseSearchPopup.vue'

  export default {
    methods: {
      show () {
        this.$refs.popup.show()
      }
    },
    components: {
      baseSearch
    },
    mounted() {
      document.getElementsByClassName('hs-page')[0].appendChild(this.$el)
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .categories-navber {
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
    justify-content: space-between;
    padding: 0 .4rem;
    border-bottom: .01rem solid #E8E8E8;
    background-color: #fff;
    top: 0;
    .item {
      // width: 3.33rem;
      .tabs {
        width: 3.58rem;
        height: .64rem;
        background-color: #202123;
        border-radius: .32rem;
        // margin-top: .28rem;
        display: flex;
        align-items: center;
        // border: .013rem solid #202123;
        .link {
          box-sizing: border-box;
          width: 1.79rem;
          line-height: .62rem;
          height: .64rem;
          text-align: center;
          border: none;
          border-radius: .32rem;
          background-color: #202123;
          color: #fff;
          border: .013rem solid #202123;
          .font-dpr(13px);
          &.nuxt-link-active {
            background-color: #fff;
            color: #202123;
          }
        }
      }
      .search-btn {
        border: none;
        background-color: transparent;
        .hs-icon;
        &:before {
          .font-dpr(20px);
          content: "\e65f";
          color: #333;
        }
      }
    }
  }
</style>
