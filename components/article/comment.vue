<template>
  <div class="article-comment" :class="child ? 'child': ''">
    <template v-if="!child">
      <div class="title">评论</div>
      <button class="comment-btn" @click="replyComment(id)">淡逼为主 聊事为辅</button>
    </template>
    <div class="list">
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="avatar" v-lazy:background-image.container="item.uid_img" @click="replyComment(item.id)"></div>
        <div class="text">
          <div class="label" @click="replyComment(item.id)">
            <div class="username">{{ item.full_name }}</div>
            <div class="date">{{ item.createtime }}</div>
          </div>
          <div class="content">
            <div class="parent-content" :class="'color' + item.type" @click="replyComment(item.id)">
              <template v-if="item.type == 4">
                <div class="image" v-lazy:background-image.container="item.content + '@!320x320'"></div>
              </template>
              <template v-else>
                {{ item.content }}
              </template>
            </div>
            <div class="children" v-show="item.children.length">
              <div class="children-item" v-for="(children, index) in item.children" :key="index" @click="replyComment(children.id)">
                <div class="children-label">{{ children.full_name }} 回复 {{ children.be_commented_username }}</div>
                <div class="children-content">{{ children.content }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template v-if="!child">
        <nuxt-link v-if="total_count > 5" class="comment-all" :to="{ name: 'detail-comment-id', params: { id: id } }">查看全部{{ total_count }}条评论</nuxt-link>
      </template>
    </div>
    <!-- 回复弹框 -->
    <Popup type="comment-popup" addbodyend ref="commentPopup" position="top">
      <div class="reply-box">
        <cube-textarea v-model="replyContent" :maxlength="180" :placeholder="replyPlaceholder" class="reply-input"></cube-textarea>
        <div class="feature">
          <div class="image">
            <!-- <cube-button class="upload-btn"><i class="hs-icon"></i></cube-button> -->
            <cube-upload :simultaneous-uploads="1" class="upload-btn">
               <cube-upload-btn multiple><i class="hs-icon"></i></cube-upload-btn>
            </cube-upload>
          </div>
          <div class="btn">
            <cube-button class="close-btn" @click="resetHandler">取消</cube-button>
            <cube-button class="submit-btn" @click="submitHandler">回复</cube-button>
          </div>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import Popup from '~/components/basePopup.vue'

export default {
  data () {
    return {
      replyContent: '',
      replyPlaceholder: 'aaaa',
      files: []
    }
  },
  props: {
    id: {
      type: Number
    },
    data: {
      type: Array
    },
    total_count: {
      type: Number
    },
    child: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    replyComment (commentId) {
      console.log(commentId)
      this.openCommentPopup()
    },
    openCommentPopup () {
      this.$refs.commentPopup.show()

    },
    closeCommentPopup () {
      this.$refs.commentPopup.hide()
    },
    submitHandler() {
      console.log('submit')
    },
    validateHandler(result) {

    },
    resetHandler(e) {
      this.closeCommentPopup()
    },
    filesAdded(files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore && this.$createToast({
        type: 'warn',
        time: 1000,
        txt: 'You selected >1M files'
      }).show()
    }
  },
  components: {
    Popup
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/less/common.less';

  .cube-comment-popup {
    .reply-box {
      box-sizing: border-box;
      background-color: #fff;
      padding: .4rem;
      .reply-input {
        padding: 0;
      }
      .feature {
        margin-top: .4rem;
        display: flex;
        justify-content: space-between;
        .image {
          .cube-upload {
            width: 1.2rem;
            height: 1.2rem;
            .cube-upload-btn {
              display: inline-block;
              width: 1.2rem;
              height: 1.2rem;
              padding: 0;
              box-sizing: border-box;
              background-color: transparent;
              border: none;
              line-height: 1.2rem;
              .font-dpr(20px);
              i:after {
                content: "\e627";
                color: #000;
              }
              &:after {
                border: none;
              }
            }
          }
        }
        .btn {
          .cube-btn {
            display: inline-block;
            width: 2rem;
            height: 1.2rem;
            padding: 0;
            box-sizing: border-box;
            .font-dpr(15px);
            &:after {
              border: none;
            }
          }
          .close-btn {
            background-color: #fff;
            color: #9d9d9d;
          }
          .submit-btn {
            background-color: #ae2121;
          }
        }
      }
    }
  }

  .article-comment {
    padding: .4rem .4rem 0 .4rem;
    border-bottom: .21rem solid #F5F5F5;
    &.child {
      padding: 0 .4rem;
      border-bottom: none;
    }
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
        &:last-child {
          border-bottom: 0;
        }
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
