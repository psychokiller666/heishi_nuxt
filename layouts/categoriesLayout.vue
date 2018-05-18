<template>
  <basePage type="categories" top="1.2rem" bottom="1.3rem">
    <!-- <navber slot="header" /> -->
    <transition name="page-move" slot="content">
      <nuxt class="hs-view"></nuxt>
    </transition>
    <baseTabber slot="tabber" />
  </basePage>
</template>

<style lang="less" scoped>
.hs-view {
  box-sizing: border-box;
  transform: translate3d(0, 0, 0);
  overflow: hidden;
}

.page-move-enter, .page-move-leave-active {
  transform: translate3d(100%, 0, 0)
}

.page-move-enter-active, .page-move-leave-active {
  transition: transform .3s
}
</style>

<script>
import navber from '~/components/categories/navber.vue'
import baseTabber from '~/components/baseTabber.vue'
import basePage from '~/components/basePage.vue'

export default {
  components: {
    navber, baseTabber, basePage
  }
}
</script>
