<template>
  <cube-scroll class="categories-category-content">
    <div class="banner">
    </div>
    <div class="list">
      <nuxt-link :to="{ name: 'category-id-tag', params: { id: item.id, tag: item.name } }" class="item" v-for="(item, index) in tags" :key="index">
        <div class="image" v-lazy:background-image.container="item.image"></div>
      </nuxt-link>
    </div>
  </cube-scroll>
</template>

<script>
export default {
  layout: 'categoriesLayout',
  async asyncData ({app}) {
    const tags = await app.$axios.$get('appv3/category/index')
    // console.log(tags.data.modules[1].data)
    return {
      tags: tags.data.modules[1].data
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .categories-category-content {
  display: flex;
    .list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: .4rem;
      .item {
        margin-bottom: .29rem;
        .image {
          width: 2.08rem;
          height: 2.08rem;
          .hs-cover;
          border-radius: .11rem;
        }
      }
    }
  }
</style>
