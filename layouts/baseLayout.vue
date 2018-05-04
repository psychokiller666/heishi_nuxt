<template>
  <basePage>
    <transition name="page-move" slot="content">

      <nuxt class="hs-view"></nuxt>
    </transition>
  </basePage>
</template>

<style lang="less" scoped>
// @import '../assets/less/common.less';

.hs-view {
  box-sizing: border-box;
  transform: translate3d(0, 0, 0)
}

.page-move-enter, .page-move-leave-active {
  transform: translate3d(100%, 0, 0)
}

.page-move-enter-active, .page-move-leave-active {
  transition: transform .3s
}
</style>

<script>
import basePage from '~/components/basePage.vue'

export default {
  components: {
    basePage
  }
}
</script>
