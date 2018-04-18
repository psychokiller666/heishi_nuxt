<template>
  <div class="layouts">
    <allStreamer>
      <ul slot="content">
        <li><a href="/Portal/index.html" class="active external">推荐</a></li>
        <li><a href="/Portal/index/showall.html" class="external">热门</a></li>
        <li><a href="/Portal/index/sale.html" class="external">特卖</a></li>
        <li class="search_btn">
          <a href="" class="hs-icon"></a>
        </li>
      </ul>
    </allStreamer>
    <nuxt class="hs-main" />
    <Footer />
  </div>
</template>

<style lang="less">
@import '../assets/less/common.less';

html {
  color: #202123;
  .layouts {
    background-color: #f0f2f5;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .hs-main {
    width: 10rem;
    max-width: 10rem;
    height: calc(100% - 1.17rem - 1.306rem);
    background-color: #fff;
    box-shadow: 0 .03rem .13rem #ddd;
    overflow-x: hidden;
    position: absolute;
    left: 50%;
    margin-left: -5rem;
    top: 1.17rem;
  }

}
</style>

<script>
import allStreamer from '~/components/allStreamer.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    allStreamer, Footer
  },
  mounted () {
    // console.log(this.$refs.main)
  },
  methods: {
    aaa () {
      console.log('aaaaaaa')
    }
  }
}
</script>
