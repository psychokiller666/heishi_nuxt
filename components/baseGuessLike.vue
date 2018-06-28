<template>
  <div class="base-guess-like">
    <!-- <div class="label" v-if="label">
      <span>{{ title }}</span>
    </div>
    <div class="title" v-else>{{ title }}</div> -->
    <slot name="header"></slot>
    <div class="item" v-for="item in data" :key="item.id">
      <nuxt-link :to="{ name: 'detail-id', params: { id: item.id } }" class="image" v-lazy:background-image.container="item.cover+ '@640w_1l'"></nuxt-link>
        <div class="text">
        <nuxt-link :to="{ name: 'detail-id', params: { id: item.id } }">
          <div class="title">{{ item.title }}</div>
          <!-- <div class="label" v-for="label in item.characteristics" :key="label">{{ label }}</div> -->
        </nuxt-link>
        <nuxt-link :to="{ name: 'user-id', params: { id: item.author } }" class="user">
          <div class="avatar" v-lazy:background-image.container="item.user_avatar"></div>
          <span class="nickname">{{ item.user_name }}</span>
        </nuxt-link>
        <div class="price">¥ {{ price(item.price) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    title: {
      type: String
    },
    label: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    price (array) {
      if (array.length === 1) {
        return array[0]
      } else {
        return array[0] + ' ~ ' + array[1]
      }
    }
  },
}
</script>

<style lang="less" scoped>
@import '../assets/less/common.less';

.base-guess-like {
  padding: .4rem;
  &>.title {
    font-weight: 700;
    .font-dpr(18px);
    margin-top: .4rem;
    margin-bottom: .4rem;
  }
  &>.label {
    // color: #878787;
    height: 1.17rem;
    position: relative;
    margin-bottom: .4rem;
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: .013rem;
      top: 50%;
      left: 0;
      border-top: .013rem solid rgba(153,153,153,.3);
    }
    span {
      .font-dpr(14px);
      z-index: 10;
      // color: #878787;
      position: absolute;
      display: block;
      background-color: #fff;
      line-height: 1.15rem;
      height: 1.15rem;
      left: 50%;
      padding: 0 .4rem;
      top: 1px;
      text-align: center;
      transform: translateX(-50%);
    }
  }
  .item {
    margin-bottom: .53rem;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    &:last-child {
      margin-bottom: 0;
    }
    .image {
      width: 4.48rem;
      height: 2.29rem;
      border-radius: .16rem;
      .hs-cover;
    }
    .text {
      width: 4.29rem;
      height: 2.29rem;
      position: relative;
      .title {
        color: #202123;
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
      .price {
        position: absolute;
        font-family: "din";
        font-weight: 700;
        .font-dpr(16px);
        bottom: 0;
      }
      .user {
        width: 4.29rem;
        height: .53rem;
        line-height: .53rem;
        overflow: hidden;
        white-space: nowrap;
        position: absolute;
        bottom: .72rem;
        display: flex;
        .avatar {
          width: .53rem;
          height: .53rem;
          .hs-avatar;
        }
        .nickname {
          width: 3.34rem;
          margin-left: .4rem;
          line-height: .6rem;
          .font-dpr(14px);
          color: #8E8E8E;
          text-align: left;
        }
      }
    }
  }
}
</style>
