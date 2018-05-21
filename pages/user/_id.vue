<template>
  <cube-scroll :data="goodslist" @pulling-up="getGoodsList" ref="scroll" :options="options" style="background-color: #f5f5f5;">
    <div class="user-header">
      <div class="image" v-lazy:background-image.container="userinfo.covers[0] + '@640w_1l'"></div>
      <div class="avatar" v-lazy:background-image.container="userinfo.avatar"></div>
      <div class="nickname">{{ userinfo.user_nicename }}</div>
      <div class="signature">{{ userinfo.motto }}</div>
      <div class="amount">
        <span class="goods">
          <strong>{{ total_count }}</strong>
          狠货
        </span>
        <span class="fans">
          <strong>{{ userinfo.fansnum }}</strong>
          粉丝
        </span>
      </div>
      <div class="btn">
        <button class="attention-btn">关注</button>
        <nuxt-link to="/" class="message-btn">私信</nuxt-link>
      </div>
    </div>
    <twoColPostsList :data="goodslist" />
  </cube-scroll>
</template>

<script>
import twoColPostsList from '~/components/twoColPostsList.vue'

export default {
  validate ({ params }) {
    return (!!params.id && !Object.is(Number(params.id), NaN))
  },
  async asyncData ({app, params}) {
    const userinfo = await app.$axios.$get('appv2/userinfo', {
      params: {
        to_user_id: params.id
      }
    })
    const goodslist = await app.$axios.$get('appv1/useritem', {
      params: {
        cur_page: 1,
        to_user_id: params.id
      }
    })
    return {
      userinfo: userinfo.data,
      goodslist: goodslist.data.user_items,
      total_count: goodslist.data.total_count
    }
  },
  layout: 'baseLayout',
  data () {
    return {
      options: {
        pullUpLoad: true,
      },
      goodlistpage: 2
    }
  },
  methods: {
    async getGoodsList () {
      await this.$axios.$get('appv1/useritem', {
        params: {
          cur_page: this.goodlistpage,
          to_user_id: this.$route.params.id
        }
      }).then(res => {
        if (res.data.total_pages != this.goodlistpage) {
          this.goodslist = this.goodslist.concat(res.data.user_items)
          this.goodlistpage = this.goodlistpage + 1
        } else {
          this.$refs.scroll.forceUpdate()
        }
      })
    }
  },
  components: {
    twoColPostsList
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';
  .user-header {
    box-sizing: border-box;
    height: 6.4rem;
    position: relative;
    .image {
      .hs-cover;
      height: 6.4rem;
      position: relative;
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,.3);
      }
    }
    .avatar {
      position: absolute;
      left: .4rem;
      top: .67rem;
      .hs-avatar;
      height: 1.87rem;
      width: 1.87rem;
      border: #fff solid .05rem;
    }
    .nickname {
      position: absolute;
      left: .4rem;
      top: 2.93rem;
      .font-dpr(14px);
      color: #fff;
      font-weight: 700;
    }
    .signature {
      position: absolute;
      left: .4rem;
      top: 3.57rem;
      .font-dpr(12px);
      color: #fff;
      font-weight: lighter;
    }
    .amount {
      position: absolute;
      left: .4rem;
      bottom: .4rem;
      color: #fff;
      line-height: 1em;
      span {
        .font-dpr(16px);
        display: inline-block;
        text-align: center;
        font-weight: lighter;
        margin-right: .67rem;
        strong {
          .font-dpr(18px);
          font-family: "din";
          font-weight: 900;
          display: block;
          margin-bottom: .27rem;
        }
      }
    }
    .btn {
      position: absolute;
      top: 1.89rem;
      right: .4rem;
      .attention-btn, .message-btn {
        border: none;
        .font-dpr(12px);
        padding: .13rem .27rem;
        border-radius: .12rem;
        color: #fff;
      }
      .attention-btn {
        background-color: transparent;
        border: #fff solid .03rem;
        margin-right: .4rem;
      }
      .message-btn {
        background:rgba(255,255,255,.4);
      }
    }
  }
</style>
