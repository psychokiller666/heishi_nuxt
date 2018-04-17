<template>
  <div class="index-posts-list">
    <div class="item" to="/" v-for="item in postslist_item" :key="item.id">
      <div class="image" v-lazy:background-image.container="item.cover + '@640w_1l'"></div>
      <div class="text">
        <nuxt-link to="/">
          <div class="title">{{ item.title }}</div>
        </nuxt-link>
        <nuxt-link to="/" class="user">
          <div class="avatar" v-lazy:background-image.container="item.user_avatar"></div>
          <span class="nickname">{{ item.user_name }}</span>
        </nuxt-link>
        <nuxt-link to="/" class="label" v-for="label in item.characteristics" :key="label">
          {{ label }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postslist_item: {
      type: Array
    }
  }
}
</script>

<style lang="less">
@import '../../assets/less/common.less';

.index-posts-list {
  margin-top: .53rem;
  padding: 0 .4rem;
  .item {
    border-bottom: .013rem solid #E8E8E8;
    margin-bottom: .53rem;
    &:last-child {
      margin-bottom: 0;
      border: none;
    }
    .image {
      border-radius: .16rem;
      width: 100%;
      height: 4.69rem;
      border: none;
      .hs-cover;
    }
    .text {
      height: 1.89rem;
      padding: .32rem;
      position: relative;
      box-sizing: border-box;
      .title {
        overflow: hidden;
        text-align: left;
        line-height: 1em;
        .font-dpr(15px);
        color: #202123;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .user {
        position: absolute;
        left: .32rem;
        bottom: .32rem;
        line-height: .53rem;
        overflow: hidden;
        white-space: nowrap;
        .hs-cf;
        .avatar {
          width: .53rem;
          height: .53rem;
          .hs-avatar;
          .hs-fl;
        }
        .nickname {
          margin-left: .21rem;
          line-height: .6rem;
          .font-dpr(14px);
          color: #8E8E8E;
          .hs-fl;
        }
      }
      .label {
        position: absolute;
        right: .32rem;
        bottom: .32rem;
        color: #8E8E8E;
        .font-dpr(12px);
        margin: 0 0.16rem 0 0;
        padding: 0.08rem 0.133rem;
        border-radius: 0.107rem;
        background: #F5F5F5;
        display: inline-block;
      }
    }
  }
}
</style>
