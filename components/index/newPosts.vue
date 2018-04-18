<template>
  <div class="index-new-post">
    <div class="header">
      <div class="title">新品</div>
      <div class="label">还是热乎的</div>
    </div>
    <div class="item" v-for="item in newposts_item" :key="item.id">
        <nuxt-link to="/" class="image" v-lazy:background-image.container="item.cover"></nuxt-link>
        <div class="text">
          <nuxt-link to="/">
            <div class="title">{{ item.title }}</div>
            <div class="label" v-for="label in item.characteristics" :key="label">{{ label }}</div>
          </nuxt-link>
          <nuxt-link to="/" class="user">
            <div class="avatar" v-lazy:background-image.container="item.user_avatar"></div>
            <span class="nickname">{{ item.user_name }}</span>
          </nuxt-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newposts_item: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/common.less';

.index-new-post {
  margin-top: .53rem;
  // margin-bottom: .4rem;
  margin-left: .4rem;
  margin-right: .4rem;
  border-bottom: .013rem solid #E8E8E8;
  .header {
    margin-bottom: .4rem;
    .title {
      line-height: 1em;
      .font-dpr(18px);
      font-weight: 700;
      margin-bottom: .16rem;
    }
    .label {
      line-height: 1em;
      .font-dpr(12px);
      color: #8E8E8E;
    }
  }
  .item {
    margin-bottom: .53rem;
    overflow: hidden;
    .image {
      width: 4.45rem;
      height: 2.29rem;
      border-radius: .16rem;
      .hs-cover;
      .hs-fl;
    }
    .text {
      width: 4.29rem;
      height: 2.29rem;
      position: relative;
      .hs-fr;
      .title {
        color: #202123;
        // height: 2em;
        line-height: 1.3em;
        .font-dpr(14px);
        overflow: hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
      .label {
        color: #8E8E8E;
        .font-dpr(12px);
        margin: 0.21rem 0.16rem 0.21rem 0;
        padding: 0.08rem 0.133rem;
        border-radius: 0.107rem;
        background: #F5F5F5;
        display: inline-block;
      }
      .user {
        width: 4.29rem;
        height: .53rem;
        line-height: .53rem;
        overflow: hidden;
        white-space: nowrap;
        position: absolute;
        bottom: 0;
        left: 0;
        .hs-cf;
        .avatar {
          width: .53rem;
          height: .53rem;
          .hs-avatar;
          .hs-fl;
        }
        .nickname {
          width: 3.34rem;
          line-height: .6rem;
          .font-dpr(14px);
          .hs-fr;
          color: #8E8E8E;
          text-align: left;
        }
      }
    }
    .hs-cf;
  }
}
</style>
