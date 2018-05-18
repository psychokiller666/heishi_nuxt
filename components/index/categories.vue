<template>
  <div class="index-categories">
    <baseTitle title="热门分类" label="该在哪儿的都去哪儿待着" />
    <div class="list">
      <nuxt-link to="/" class="item" v-for="(item, index) in data" :key="index">
        <img class="image" v-lazy="item.home_picture" />
        <div class="title">{{ item.name }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import baseTitle from '~/components/baseTitle.vue'

export default {
  props: {
    data: {
      type: Array
    }
  },
  components: {
    baseTitle
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/common.less';

.index-categories {
  padding-top: .53rem;
  margin-left: .4rem;
  margin-right: .4rem;
  border-bottom: .013rem solid #E8E8E8;
  border-top: .013rem solid #E8E8E8;
  .list {
    padding-top: 0.4rem;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    .item {
      margin-right: 0.6rem;
      &:nth-child(1) {
          margin-bottom: 0.88rem;
      }
      &:nth-child(4n) {
          margin-right: 0;
      }
      &:nth-child(5) {
          margin-bottom: 0.88rem;
      }
      &:nth-child(9) {
          margin-bottom: 0.88rem;
      }
      .image {
        height: 1.52rem;
        width: 1.52rem;
      }
      .title {
        margin-top: .21rem;
        .font-dpr(13px);
        text-align: center;
        color: #343434;
      }
    }
  }
}
</style>
