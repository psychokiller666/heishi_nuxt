<template>
  <div class="index-posts-list">
    <slot name="header"></slot>
    <div class="item" v-for="item in postslist_item" :key="item.id">
      <nuxt-link :to="{ name: 'detail-id', params: { id: item.id } }" class="image" v-lazy:background-image.container="item.cover + '@640w_1l'"></nuxt-link>
      <div class="text">
        <nuxt-link :to="{ name: 'detail-id', params: { id: item.id } }">
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
    <div class="pages" v-show="pages >= 5">
      <nuxt-link to="/" class="item left"></nuxt-link>
      <nuxt-link to="/" v-for="(item, index) in pages_array" :key="index" :class="pages == item? 'item active':'item'">{{ item }}</nuxt-link>
      <nuxt-link to="/" class="item right"></nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    postslist_item: {
      type: Array
    },
    pages: {
      type: Number
    },
    all_pages : {
      type: Number,
      default: 13
    },
    show_page: {
      type: Number,
      default: 5
    }
  },
  computed: {
    pages_array () {
      // 分页参考轮子：https://github.com/JSlife23/vue-page/blob/master/index.html
      let temp_page = []

      if (this.pages < this.show_page) { //如果当前的激活的项 小于要显示的条数
        //总页数和要显示的条数那个大就显示多少条
        let temp_array = Math.min(this.show_page, this.all_pages)
        while(temp_array){
            temp_page.unshift(temp_array--)
        }
      } else { //当前页数大于显示页数了
        let temp = this.pages - Math.floor(this.show_page / 2 ), //从哪里开始
        temp_show_page = this.show_page

        if (temp > (this.all_pages - this.show_page)) {
          temp = (this.all_pages - this.show_page) + 1
        }
        while(temp_show_page--){
            temp_page.push( temp++ )
        }
      }
      return temp_page
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/less/common.less';

.index-posts-list {
  margin-top: .53rem;
  padding: 0 .4rem;
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
  >.item {
    border-bottom: .013rem solid #E8E8E8;
    margin-bottom: .53rem;
    &:last-child {
      margin-bottom: 0;
      border: none;
    }
    .image {
      display: block;
      border-radius: .16rem;
      width: 100%;
      height: 4.69rem;
      border: none;
      .hs-cover;
    }
    .text {
      height: 1.89rem;
      padding: .32rem 0;
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
        left: 0;
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
        right: 0;
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
  .pages {
    height: 1rem;
    display: flex;
    justify-content: center;
    .item {
      text-align: center;
      width: 1.17rem;
      height: 1rem;
      line-height: 1rem;
      color: #8e8e8e;
      border-top: .0133rem solid #e8e8e8;
      border-right: .0133rem solid #e8e8e8;
      border-bottom: .0133rem solid #e8e8e8;
      .font-dpr(16px);
      &:first-child {
        margin-left: 0;
      }
      &.left {
        width: .93rem;
        border: .0133rem solid #e8e8e8;
        border-top-left-radius: .987rem;
        border-bottom-left-radius: .987rem;
        position: relative;
        .hs-icon;
        &:after {
          content: '\e662';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      &.right {
        width: .93rem;
        border-top: .0133rem solid #e8e8e8;
        border-right: .0133rem solid #e8e8e8;
        border-bottom: .0133rem solid #e8e8e8;
        border-top-right-radius: .987rem;
        border-bottom-right-radius: .987rem;
        position: relative;
        .hs-icon;
        &:after {
          content: '\e662';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
      &.active {
        color: #ae2121;
      }
    }
  }
}
</style>
