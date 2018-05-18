<template>
  <cube-scroll class="index-me">
    <div class="header" v-lazy:background-image.container="'http://img8.ontheroadstore.com/upload/180110/a8e0ca6f97110dda7934cba1022686e3.png'">
      <div class="mask">
        <div class="avatar" v-lazy:background-image.container="me.avatar">
        </div>
        <div class="nikename">{{ me.nickname }}</div>

      </div>
    </div>
    <div class="order">
      <div class="all">
        <nuxt-link to="/">全部订单 <i class="hs-icon"></i></nuxt-link>
      </div>
      <div class="todo">
        <nuxt-link to="/" class="item"><i class="hs-icon deliver"></i>待发货</nuxt-link>
        <nuxt-link to="/" class="item"><i class="hs-icon receive"></i>待收货</nuxt-link>
        <nuxt-link to="/" class="item"><i class="hs-icon complete"></i>已完成</nuxt-link>
      </div>
    </div>
    <div class="list">
      <nuxt-link to="/" class="item"><i class="hs-icon collect"></i>我关注的</nuxt-link>
      <nuxt-link to="/" class="item"><i class="hs-icon record"></i>浏览记录</nuxt-link>
      <nuxt-link to="/" class="item"><i class="hs-icon join"></i>发布商品</nuxt-link>
      <nuxt-link to="/" class="item" v-if="me.phone_verified == 0"><i class="hs-icon binding_tel"></i>绑定手机</nuxt-link>
    </div>
  </cube-scroll>
</template>

<script>
export default {
  layout: 'indexLayout',
  async asyncData ({app}) {
    const me = await app.$axios.$get('appv4/user/simple')
    return {
      me: me.data
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/less/common.less';
  .index-me {
    .header {
      width: 10rem;
      height: 4.4rem;
      box-sizing: border-box;
      border-bottom: .2rem solid #f5f5f5;
      .hs-cover;
      .mask {
        background: rgba(0,0,0,.4);
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        .avatar {
          align-self:center;
          width: 1.45rem;
          height: 1.45rem;
          border: .04rem solid #000;
          margin: 0 auto;
          box-sizing: border-box;
          .hs-avatar;
          // overflow: auto;
        }
        .nikename {
          margin-top: 0rem;
          width: 10rem;
          text-align: center;
          // align-self:center;
          .font-dpr(15px);
          color: #fff;
        }
      }
    }
    .order {
      display: flex;
      flex-wrap: wrap;
      padding: .4rem;
      border-bottom: .2rem solid #f5f5f5;
      .all {
        width: 100%;
        padding-bottom: .4rem;
        .font-dpr(15px);
        border-bottom: .013rem solid #f5f5f5;
        position: relative;
        .hs-icon {
          position: absolute;
          right: 0;
          &:after {
            content: "\e512";
          }
        }

      }
      .todo {
        width: 10rem;
        display: flex;
        justify-content: space-around;
        .item {
          min-width: 1.2rem;
          text-align: center;
          margin-top: .4rem;
          .font-dpr(13px);
          .hs-icon {
            margin-bottom: .4rem;
            display: block;
            .font-dpr(30px);
            &.deliver:after {
              content: "\e712";
            }
            &.receive:after {
              content: "\e713";
            }
            &.complete:after {
              content: "\e64f";
            }
          }
        }
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      padding: .4rem;
      box-sizing: border-box;
      .item {
        width: 100%;
        padding-top: .4rem;
        padding-bottom: .4rem;
        .font-dpr(14px);
        line-height: 1em;
        border-bottom: .013rem solid #f5f5f5;
        padding-left: .9rem;
        position: relative;
        &:first-child {
          padding-top: 0;
        }
        &:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }
        .hs-icon {
          position: absolute;
          left: 0;
          // width: 1rem;
          .font-dpr(28px);
          // margin-right: .4rem;
          &.collect:after {
            content: "\e63f";
          }
          &.address:after {
            content: "\e721";
          }
          &.record:after {
            content: "\e650";
          }
          &.join:after {
            content: "\e640";
          }
          &.binding_tel:after {
            // .font-dpr(24px);
            content: "\e64a";
          }
        }
      }
    }
  }
</style>
