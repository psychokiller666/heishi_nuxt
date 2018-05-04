<template>
  <cube-popup type="reward-popup" :center="false" ref="popup">
    <!-- <button @click="hide">关闭</button> -->
    sdfsdfsds
  </cube-popup>
</template>

<script>
export default {
  props: {
    categories_item: {
      type: Array
    }
  },
  data () {
    return {
      keyworld: null
    }
  },
  methods: {
    show () {
      this.$refs.popup.show()
    },
    hide () {
      this.$refs.popup.hide()
      this.$emit('hide')
    }
  }
}
</script>

<style lang="less">
  @import '../../assets/less/common.less';

  .cube-reward-popup {
    .cube-popup-mask {
      // opacity: 1;
      background: none;
    }
    .cube-popup-container {
      width: 10rem;
      margin-left: -5rem;
      left: 50%;
      position: relative;
      .cube-popup-content {
        position: absolute;
        // left: 0;
        background-color: rgba(0, 0, 0, .8);
        box-sizing: border-box;
        height: 100%;
        // padding: 20px;
        // background-color: #fff;
        // padding: 0 .4rem;
      }
    }
  }
</style>
