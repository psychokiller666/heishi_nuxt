<template>
  <cube-popup type="preview-popup" ref="preview">
    <div class="preview-popup-content" @click="hide">
      <cube-slide ref="slide" :data="data" @change="changePage">
        <cube-slide-item v-for="(item, index) in data" :key="index" @click.native="clickHandler(item, index)">
          <img :src="item.image">
        </cube-slide-item>
      </cube-slide>
    </div>
 </cube-popup>
</template>

<script>
  export default {
    name: 'preview-popup',
    props: {
      data: {
        type: Array
      },
      content: {
        type: String
      }
    },
    methods: {
      show() {
        this.$refs.popup.show()
      },
      hide() {
        this.$refs.popup.hide()
        this.$emit('hide')
      }
    }
  }
</script>

<style lang="less">
  .preview-popup {
    .preview-popup-content {
      padding: 20px
      color: #fff
      background-color: #000;
    }
  }
</style>
