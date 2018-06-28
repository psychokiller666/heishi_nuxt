<template>
  <basePage type="index" :bottom="bottom">
    <transition name="page-move" slot="content">
      <nuxt class="hs-view"></nuxt>
    </transition>
    <baseTabber slot="tabber" data-bottom="1.3" />
  </basePage>
</template>

<style lang="less" scoped>
.hs-view {
  box-sizing: border-box;
  transform: translate3d(0, 0, 0);
}

.page-move-enter, .page-move-leave-active {
  transform: translate3d(100%, 0, 0)
}

.page-move-enter-active, .page-move-leave-active {
  transition: transform .3s
}
</style>

<script>
import baseTabber from '~/components/baseTabber.vue'
import basePage from '~/components/basePage.vue'
import layouts from '~/mixins/layouts.js'

export default {
  mixins: [layouts],
  components: {
    baseTabber, basePage
  },
  mounted () {
    // console.log(this.bottom)
  }
}
</script>
