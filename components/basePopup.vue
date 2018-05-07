<template>
  <cube-popup :type="type" :mask="mask" ref="popup" @mask-click="hide">
    <slot></slot>
  </cube-popup>
</template>

<script>
export default {
  // 重写cube popup组件，增加addbodyend方法，把popup dom，添加到 .hs-page dom上
  // 属性、方法参考 https://didi.github.io/cube-ui/#/zh-CN/docs/popup
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
    },
    center: {
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
