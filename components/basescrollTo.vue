<template>
  <div class="scrollto" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  name: 'basescrollTo',
  mounted() {
    document.getElementsByClassName('hs-container')[0].appendChild(this.$el)
  }
}
</script>

<style lang="less" scoped>
// @import '../assets/less/common.less';
  .scrollto {
    position: fixed;
    bottom: 0;
    right: 0;
  }
</style>
