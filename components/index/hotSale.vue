<template>
  <div class="index-hot-sale">
    <baseTitle title="热门" label="我都买不到你知道么" class="header_hack" />
    <cube-slide :data="hotsale_item" :showDots="false">
      <cube-slide-item class="item" v-for="item in hotsale_item" :key="item.id">
        <nuxt-link :to="{ name: 'detail-id', params: { id: item.id } }" class="image" v-lazy:background-image.container="item.cover + '@640w_1l'"></nuxt-link>
        <div class="text">
          <nuxt-link :to="{ name: 'detail-id', params: { id: item.id } }">
            <div class="title">{{ item.title }}</div>
          </nuxt-link>
          <nuxt-link :to="{ name: 'user-id', params: { id: item.author } }" class="user">
            <div class="avatar" v-lazy:background-image.container="item.user_avatar"></div>
            <span class="nickname">{{ item.user_name }}</span>
          </nuxt-link>
          <span class="label" v-for="label in item.characteristics" :key="label">
            {{ label }}
          </span>
        </div>
        <!-- <div class="mark"></div> -->
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
import baseTitle from '~/components/baseTitle.vue'

export default {
  props: {
    hotsale_item: {
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

.index-hot-sale {
  .header_hack {
    padding-top: .53rem;
    padding-left: .4rem;
    padding-right: .4rem;
  }
  .cube-slide {
    height: 6.75rem;
    width: 8.4rem;
    margin: 0 auto;
    .item {
      border-radius: .16rem;
      padding: 0 .13rem;
      background-color: #fff;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        width: 8.14rem;
        height: 6.08rem;
        top: 0;
        left: .13rem;
        box-shadow: 0 0.134rem 0.4rem rgba(0,0,0,.06);
        border-radius: .16rem;
        // z-index: -999;
        background-color: transparent;
      }
      .image {
        position: absolute;
        width: 8.14rem;
        border-radius: .16rem .16rem 0 0;
        height: 4.32rem;
        .hs-cover;
        display: block;
        z-index: 999;
      }
      .text {
        position: absolute;
        top: 4.32rem;
        height: 1.89rem;
        padding: .32rem;
        position: relative;
        box-sizing: border-box;
        z-index: 999;
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
}
</style>
