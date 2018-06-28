<template>
  <cube-scroll class="index-follow">
    <div class="tabs">
      <nuxt-link to="/index/follow/bully" class="item bully" exact></nuxt-link>
      <nuxt-link to="/index/follow/goods" class="item goods" exact></nuxt-link>
    </div>
    <nuxt class="follow-content"></nuxt>
  </cube-scroll>
</template>

<script>
export default {
  async asyncData (cx) {
    // console.log(cx)
    // const follow = await app.$axios.$get('appv3/channels', {
    //   params: {
    //     channel: 3,
    //     random: 1
    //   }
    // })
    // console.log(follow)
    // return {
    //   aaaa: 'test'
    // }
  },
  middleware: 'auth'
}
</script>

<style lang="less" scoped>
@import '../assets/less/common.less';
.index-follow {
  .tabs {
    display: flex;
    padding: .4rem;
    width: 10rem;
    box-sizing: border-box;
    border-bottom: .2rem solid #f5f5f5;

    .item {
      width: 4.5rem;
      height: 1rem;
      .hs-cover;
      &.bully {
        background-image: url('//img8.ontheroadstore.com/upload/180109/59f946b9f72edb3ac24ebabdc9a8f0a8.png');
        &.nuxt-link-active {
          background-image: url('//img8.ontheroadstore.com/upload/180109/b7c745554e96e4faba368f9e8e9787e2.png');
        }
      }
      &.goods {
        background-image: url('//img8.ontheroadstore.com/upload/180109/d72d49113aab251e4a0a8bf6f675f20d.png');
        &.nuxt-link-active {
          background-image: url('//img8.ontheroadstore.com/upload/180109/be0141a4d561da92b0c7c45793b38cdb.png');
        }
      }
    }
  }
}
</style>
