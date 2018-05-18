<template>
  <cube-popup :type="type" :mask="mask" :center="false" ref="popup" @mask-click="hide" :class="'cube-popup-' + position">
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
    },
    position: {
      required: true,
      type: String,
      default: ''
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
// hack cube ui popup组件
.cube-popup {
  width: 10rem;
  left: 50%;
  margin-left: -5rem;
  .cube-popup-mask {

  }
  &.cube-popup-top {
    .cube-popup-container {
      .cube-popup-content {
        height: 100%;
      }
    }
  }
  &.cube-popup-bottom {
    .cube-popup-container {
      .cube-popup-content {
        height: auto;
      }
    }
  }
  &.cube-popup-center {
    .cube-popup-container {
      .cube-popup-content {
        height: auto;
      }
    }
  }
  // .cube-popup-container {
  //   .cube-popup-content {
  //     height: 100%;
  //   }
  //   &.cube-popup-center {
  //     .cube-popup-content {
  //       height: auto;
  //     }
  //   }
  // }
}
</style>
