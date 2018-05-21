<template>
  <div class="two-col-posts">
    <slot name="header"></slot>
    <div class="two-col-posts-list">
      <nuxt-link :to="{ name: 'detail-id', params: { id: item.id } }" class="two-col-posts-list-item" v-for="item in data" :key="item.id">
        <div class="image" v-lazy:background-image.container="item.cover + '@640w_1l'"></div>
        <div class="title">{{ item.post_title }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/less/common.less';

  .two-col-posts {
    .two-col-posts-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: .4rem;
      .two-col-posts-list-item {
        display: block;
        background-color: #fff;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.08);
        border-radius: .16rem;
        width: 4.4rem;
        box-sizing: border-box;
        margin-bottom: .4rem;
        overflow: hidden;
        .image {
          width: 4.4rem;
          height: 2.24rem;
          border-radius: .16rem .16rem 0 0;
          .hs-cover;
        }
        .title {
          .font-dpr(14px);
          padding: .27rem;
          overflow: hidden;
          box-sizing: border-box;
          width: 4.4rem;
        }
      }
    }
  }
</style>
