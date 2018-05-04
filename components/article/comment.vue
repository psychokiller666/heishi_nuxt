<template>
  <div class="article-comment">
    <div class="title">评论</div>
    <button class="comment-btn">淡逼为主 聊事为辅</button>
    <div class="list">
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="avatar" v-lazy:background-image.container="item.uid_img"></div>
        <div class="text">
          <div class="label">
            <div class="username">{{ item.full_name }}</div>
            <div class="date">{{ item.createtime }}</div>
          </div>
          <div class="content">
            <div class="parent-content" :class="'color' + item.type">
              <template v-if="item.type == 4">
                <div class="image" v-lazy:background-image.container="item.content + '@!320x320'"></div>
              </template>
              <template v-else>
                {{ item.content }}
              </template>
            </div>
            <div class="children" v-show="item.children.length">
              <div class="children-item" v-for="(children, index) in item.children" :key="index">
                <div class="children-label">{{ children.full_name }} 回复 {{ children.be_commented_username }}</div>
                <div class="children-content">{{ children.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nuxt-link class="comment-all" to="/">查看全部{{ total_count }}条评论</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    total_count: {
      type: Number
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';
  
  .article-comment {
    padding: .4rem .4rem 0 .4rem;
    border-bottom: .21rem solid #F5F5F5;
    .title {
      .font-dpr(18px);
      margin-bottom: .4rem;
      font-weight: 700;
    }
    .comment-btn {
      .font-dpr(14px);
      width: 100%;
      height: .93rem;
      background-color: #F5F5F5;
      border-radius: .16rem;
      color: #919191;
      border: none;
      margin-bottom: .4rem;
    }
    .list {
      .item {
        display: flex;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: space-between;
        padding: .4rem 0;
        border-bottom: .013rem solid rgba(153,153,153,.3);
        .avatar {
          width: 1rem;
          height: 1rem;
          .hs-avatar;
        }
        .text {
          width: 7.79rem;
          .label {
            display: flex;
            flex-wrap: nowrap;
            align-items: flex-start;
            justify-content: space-between;
            color: #8E8E8E;
            .font-dpr(14px);
          }
          .content {
            .font-dpr(14px);
            margin-top: .27rem;
            .image {
              width: 2.62rem;
              height: 2.62rem;
              border-radius: .16rem;
              .hs-cover;
            }
            .parent-content {
              &.color2 {
                color: #AE2121;
              }
              &.color3 {
                color: blue;
              }
              &.color14 {
                color: #7b7b7b;
              }
            }
            .children {
              box-sizing: border-box;
              padding: .4rem;
              border-radius: .16rem;
              background-color: #F5F5F5;
              margin-top: .27rem;
              .children-item {
                margin-bottom: .27rem;
                .children-label {
                  color: #8E8E8E;
                  margin-bottom: .27rem;
                }
                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
        }
      }
      .comment-all {
        display: block;
        text-align: center;
        padding: .53rem 0;
        .font-dpr(14px);
      }
    }
  }
</style>
