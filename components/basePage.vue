<template>
  <div class="hs-page" :class="type">
    <slot name="header"></slot>
    <main class="hs-container" :style="{ 'padding-top': top, 'padding-bottom': bottom }">
      <slot name="content"></slot>
    </main>
    <slot name="tabber"></slot>
  </div>
</template>

<script>
  export default {
    name: 'page',
    data () {
      return {
        padding: {
          top: 0,
          bottom: 0
        }
      }
    },
    props: {
      type: {
        type: String,
        default: ''
      },
      bottom: {
        type: String,
        default: '0rem'
      },
      top: {
        type: String,
        default: '0rem'
      }
    }
  }
</script>

<style lang="less" scoped>
html {
  color: #202123;
  .hs-page {
    background-color: #f0f2f5;
    height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .hs-container {
    box-sizing: border-box;
    height: 100%;
    width: 10rem;
    background-color: #fff;
    box-shadow: 0 .03rem .13rem #ddd;
    overflow-x: hidden;
    margin: 0 auto;
  }
  // a标签
  a, html a, html a:link, a:active, ins {
    color: #202123;
    text-decoration: none;
  }
}
</style>
