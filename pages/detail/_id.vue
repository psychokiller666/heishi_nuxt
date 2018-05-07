<template>
  <cube-scroll>
    <!-- 头图 -->
    <div class="article-header">
      <div class="image" v-lazy:background-image.container="article.banner[0] + '@640w_1l'">
        <button class="reward-btn" @click="openRewardPopup"></button>
        <button class="collect-btn"></button>
      </div>
      <div class="title">{{ article.title }}</div>
      <div class="label">
        <div class="price">￥{{ article.price[0] }}</div>
        <div class="tags">
          <span>包邮</span>
          <span>预售</span>
          <span>库存紧张</span>
        </div>
      </div>
    </div>
    <!-- 简介 -->
    <div class="article-summary">
      <div class="item avatar">
        <div class="label" v-lazy:background-image.container="article.seller.avatar"></div>
        <div class="text">{{ article.seller.announcement }}</div>
      </div>
      <div class="item">
        <div class="label">已选</div>
        <div class="text">深海诱惑 1件</div>
      </div>
      <div class="item">
        <div class="label">预售</div>
        <div class="text">预计发货时间为10月31日</div>
      </div>
      <div class="decs">
        <div class="title">狠货简介</div>
        <div class="content" v-html="article.desc"></div>
      </div>
    </div>
    <!-- 狠人说 -->
    <div class="article-say">
      <div class="decs">
        <div class="title">狠人说</div>
        <div class="content" v-html="article.content"></div>
        <div class="image">
          <div class="item" src="item" v-for="(item, index) in article.images" :key="index" v-lazy:background-image.container="item + '@!320x320'"></div>
        </div>
      </div>
      <div class="praise">
        <div class="label">
          <span>{{ article.fans.like_num }}个人觉得非常牛逼</span>
        </div>
        <div class="list">
          <button class="praise-btn"></button>
          <div class="item" v-for="(item, index) in article.fans.like_list" :key="index" v-lazy:background-image.container="item.avatar"></div>
          <!-- <div class="item" v-lazy:background-image.container="'//img8.ontheroadstore.com/upload/180117/e2cf78b9c74f2d82053afd2b842ad7a7.png'"></div> -->
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <comment :data="article.comments.comment_list" :total_count="article.comments.total_count" :id="Number(this.$route.params.id)" />
    <!-- 卖家 -->
    <seller :data="article.modules[0].data.result[0].goods" :seller="article.seller" />
    <!-- 猜你喜欢 -->
    <guessLike :data="article.modules[1].data.result" />
    <!-- 打赏 -->
    <Popup type="reward-popup" addbodyend ref="rewardPopup">
      <div class="box">
        <div class="avatar" v-lazy:background-image.container="article.seller.avatar"></div>
        <div class="nickname">{{ article.seller.name }}</div>
        <div class="title">{{ article.title }}</div>
        <div class="form">
          <cube-input v-model="rewardValue" class="reward-input" placeholder="随意打赏，但必须是整数～"></cube-input>
          <button class="submit-btn"><strong>赏</strong></button>
        </div>
      </div>
      <button class="close-btn" @click="closeRewardPopup"></button>
    </Popup>

  </cube-scroll>
</template>

<script>
import guessLike from '~/components/article/guessLike.vue'
import comment from '~/components/article/comment.vue'
import seller from '~/components/article/seller.vue'
import Popup from '~/components/basePopup.vue'

export default {
  validate ({ params }) {
    return (!!params.id && !Object.is(Number(params.id), NaN))
  },
  data () {
    return {
      rewardValue: null
    }
  },
  layout: 'articleLayout',
  async asyncData ({app, params}) {
    const res = await app.$axios.$get('appv3_1/goods/' + params.id)
    return {
      article: res.data
    }
  },
  components: {
    guessLike, comment, seller, Popup
  },
  methods: {
    openRewardPopup () {
      this.$refs.rewardPopup.show()
    },
    closeRewardPopup () {
      this.$refs.rewardPopup.hide()
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    // this.$refs.rewardPopup.show()
    // console.log(this.article)
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .cube-reward-popup {
    text-align: center;
    .box {
      width: 7.65rem;
      background-color: #fefeff;
      border-radius: .28rem;
      position: relative;
      padding: .4rem;
      text-align: center;
      box-sizing: border-box;
      .avatar {
        .hs-avatar;
        width: 1.58rem;
        height: 1.58rem;
        margin: 0 auto;
      }
      .nickname {
        margin-top: .4rem;
        .font-dpr(16px);
      }
      .title {
        width: 100%;
        margin-top: .4rem;
        position: relative;
        .font-dpr(14px);
        color: #8f8e8e;
        padding: 0 1em;
        box-sizing: border-box;
        &:after, &:before {
          position: absolute;
          font-family: "iconfont"!important;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -webkit-text-stroke-width: .2px;
          .font-dpr(16px);
          line-height: 1em;
        }
        &:before {
          top: -.04rem;
          left: 0;
          content: "\e644";
        }
        &:after {
          top: -.08rem;
          right: 0;
          content: "\e643";
        }
      }
      .form {
        height: 1rem;
        margin-top: .4rem;
        position: relative;
        .reward-input {
          box-sizing: border-box;
          width: 5.1rem;
          height: 1rem;
          position: absolute;
          .cube-input-field {
            padding: .05rem;
            border-radius: .653333rem 0 0 .653333rem;
          }
        }
        .submit-btn {
          box-sizing: border-box;
          position: absolute;
          width: 1.75rem;
          line-height: 1rem;
          height: 1rem;
          border: none;
          float: right;
          text-align: center;
          background-color: transparent;
          right: 0;
          border: #f5f5f5 solid .0133rem;
          border-radius: 0 .653333rem .653333rem 0;
          strong {
            font-style: normal;
            background-color: #ae2121;
            color: #fff;
            display: block;
            width: .653333rem;
            height: .653333rem;
            border-radius: .653333rem;
            line-height: .653333rem;
            font-size: .4rem;
            margin: 0 auto;
          }
        }
      }
    }
    .close-btn {
      background-image: url(//img8.ontheroadstore.com/upload/180417/35113f83e81449ea76530e26bcc9385d.png);
      background-size: 100% 100%;
      width: .96rem;
      height: .96rem;
      border: none;
      margin-top: .8rem;
      background-color: transparent;
    }
  }

  .article-header {
    border-bottom: .21rem solid #F5F5F5;

    .image {
      height: 5.09rem;
      .hs-cover;
      position: relative;
      button {
        width: .91rem;
        height: .91rem;
        text-align: center;
        line-height: .91rem;
        position: absolute;
        font-size: .533rem;
        border: none;
        border-radius: .91rem;
        top: .4rem;
        color: #fff;
        .hs-icon;
        &.reward-btn {
          right: 1.71rem;
          font-weight: 900;
          background:rgba(0,0,0,0.6);
          &:after {
            content: '赏';
          }
        }
        &.collect-btn {
          right: .4rem;
          background:rgba(0,0,0,0.5);
          &:after {
            content: '\e652';
          }
        }
      }
    }
    .title {
      padding: .4rem;
      .font-dpr(18px);
      font-weight: 700;
      line-height: 1.2em;
    }
    .label {
      display: flex;
      flex-flow: row wrap;
      align-items: stretch;
      justify-content: space-between;
      padding: 0 .4rem .4rem .4rem;
      .price {
        font-family: "din";
        font-weight: 700;
        .font-dpr(18px);
      }
      .tags {
        span {
          margin-left: .4rem;
          display: inline-block;
          background-color: #F5F5F5;
          padding: .16rem .32rem;
          border-radius: .32rem;
          color: #8E8E8E;
          .font-dpr(12px);
          &:first-of-type {
            margin-left: 0;
          }
        }
      }
    }
  }
  .article-summary {
    padding: .4rem;
    box-sizing: border-box;
    border-bottom: .21rem solid #F5F5F5;
    .item {
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-start;
      justify-content: space-between;
      padding-bottom: .4rem;
      border-bottom: .013rem solid #E8E8E8;
      margin-bottom: .4rem;
      .font-dpr(14px);
      &.avatar {
        .label {
          height: .88rem;
          .hs-avatar;
        }
      }
      .title {
        margin: .4rem 0;
      }
      .label {
        width: .88rem;
        color: #888888;
      }
      .text {
        width: 7.92rem;
        line-height: 1.1em;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
      }
    }
  }
  .article-say {
    padding: .4rem;
    box-sizing: border-box;
    border-bottom: .21rem solid #F5F5F5;
    .praise {
      .list {
        display: flex;
        justify-content: flex-start;
        .praise-btn {
          width: 1rem;
          height: 1rem;
          margin-right: .16rem;
          border: none;
          background: none;
          .hs-icon;
          &:after {
            content: "\e656";
            .font-dpr(20px);
            line-height: 1rem;
            text-align: center;
          }
        }
        .item {
          width: 1rem;
          height: 1rem;
          margin-right: .16rem;
          .hs-avatar;
          .hs-cover;
          &:nth-child(8n) {
            margin-right: 0;
          }
        }
      }
      .label {
        color: #878787;
        height: 1.17rem;
        position: relative;
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
          color: #878787;
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
    }
  }

  .decs {
    .title {
      .font-dpr(16px);
      font-weight: 700;
      margin-bottom: .4rem;
    }
    .content {
      .font-dpr(15px);
      overflow: hidden;
      text-align: justify;
      word-break: break-all;
      font-weight: 200;
      line-height: 1.4em;
      letter-spacing: .02rem;
    }
    .image {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      margin-top: .4rem;
      .item {
        width: 2.8rem;
        height: 2.8rem;
        margin-right: .4rem;
        margin-bottom: .4rem;
        border-radius: .16rem;
        .hs-cover;
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
</style>
