<template>
  <cube-popup :type="type" :mask="mask" ref="popup">
    <slot></slot>
  </cube-popup>
</template>

<script>
export default {
  name: 'basePopup',
  props: {
    type: {
      type: String
    },
    addbodyend: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    show () {
      this.$refs.popup.show()
    },
    hide () {
      this.$refs.popup.hide()
    }
  },
  mounted() {
    if (this.addbodyend) {
      document.getElementsByClassName('hs-page')[0].appendChild(this.$el)
    }
  }
}
</script>

<style lang="less">
  @import '../assets/less/common.less';


</style>
