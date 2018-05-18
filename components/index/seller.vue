<template>
  <div class="index-follow-seller">
    <slot name="header"></slot>
    <div class="item" v-for="item in data" :key="item.id">
      <div class="user">
        <div class="info">
          <div class="avatar" v-lazy:background-image.container="item.avatar"></div>
          <div class="username">
            <div class="nickname">{{ item.name }}</div>
            <div class="motto">{{ item.motto }}</div>
          </div>
        </div>
        <nuxt-link :to="{ name: 'user-id', params: { id: item.id }}" class="seller-all">全部狠货</nuxt-link>
      </div>
      <div class="list">
        <cube-scroll :data="item.goods" direction="horizontal" ref="seller">
          <nuxt-link :to="{ name: 'detail-id', params: { id: good.id } }" class="item" v-for="good in item.goods" :key="good.id">
            <div class="image" v-lazy:background-image.container="good.cover + '@640w_1l'"></div>
            <div class="label">{{ good.title }}</div>
          </nuxt-link>
        </cube-scroll>
      </div>
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
  computed: {
    // 计算横向滚动元素宽度
    itemWidth() {
      return this.data.length * (7.23 + 0.27) + 0.4 - 0.27 + "rem";
    }
  },
  mounted () {
    console.log(this.$refs.seller)
    // console.log(this.data['goods'])
    // this.$refs.seller.$el.children[0].style.width = this.itemWidth;
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/common.less';

.index-follow-seller {
  // padding: .4rem;
  padding-top: .4rem;
  padding-bottom: .4rem;
  padding-left: .4rem;
  border-bottom: .21rem solid #F5F5F5;
  
  &:last-child {
    border: none;
  }
  & > .item {
    padding-bottom: .4rem;
    margin-bottom: .4rem;
    border-bottom: .013rem solid #E8E8E8;
    box-sizing: border-box;
    &:last-child {
      border: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }
    .user {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      justify-content: space-between;
      padding-bottom: .4rem;
      padding-right: .4rem;
      .seller-all {
        display: block;
        background-color: #fff;
        padding: .13rem .27rem;
        border: .05rem solid #202123;
        border-radius: .16rem;
        .font-dpr(14px);
        margin-top: .16rem;
      }
      .info {
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-start;

        .avatar {
          width: 1rem;
          height: 1rem;
          .hs-avatar;
        }
        .username {
          margin-left: .4rem;
          .nickname {
            .font-dpr(16px);
            margin-bottom: .16rem;
          }
          .motto {
            .font-dpr(14px);
            color: #8E8E8E;
            line-height: 1.1em;
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1;
          }
        }
      }
    }
    .list {
      width:9.6rem;
      // margin-left: .4rem;
      white-space: nowrap;
      .item {
        width: 7.23rem;
        display: inline-block;
        margin-right: .27rem;
        border-radius: .16rem;
        .image {
          width: 7.23rem;
          height: 3.68rem;
          border-radius: .16rem;
          .hs-cover;
        }
        .label {
          line-height: 1.1em;
          overflow:hidden;
          text-overflow:ellipsis;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:1;
          .font-dpr(16px);
          margin-top: .27rem;
        }
      }
    }
  }
}
</style>
