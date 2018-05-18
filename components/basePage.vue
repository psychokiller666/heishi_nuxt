<template>
  <div class="hs-page" :class="type">
    <slot name="header"></slot>
    <main class="hs-container" :style="containerHeight">
      <slot name="content"></slot>
    </main>
    <slot name="tabber"></slot>
  </div>
</template>

<script>
  export default {
    name: 'page',
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
    },
    computed: {
      containerHeight () {
        return {
          'padding-top': this.top,
          'padding-bottom': this.bottom
        }
      }
    }
  }
</script>

<style lang="less">
html {
  .hs-page {
    color: #202123;
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
    overflow: hidden;
    margin: 0 auto;
  }
  // a标签
  a, a:link, a:active, a:hover, ins {
    color: #202123;
    text-decoration: none;
  }
}
</style>
