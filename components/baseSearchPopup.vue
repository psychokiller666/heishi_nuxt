<template>
  <Popup type="search-popup" position="top" addbodyend ref="popup">
    <!-- <button @click="hide">关闭</button> -->
    <div class="box">
      <div class="search">
        <span class="icon-search"></span>
        <cube-input class="input-keyworld" v-model="keyworld" placeholder="请输入搜索关键词" :autofocus="true"></cube-input>
        <button class="btn-search" @click="submit">搜索</button>
        <span class="hr"></span>
        <button class="btn-close" @click="hide">取消</button>
      </div>
      <div class="hot">
        <div class="title">
          热门搜索
        </div>
        <div class="list">
          <nuxt-link to="/" class="item">的点点滴滴的的的的的</nuxt-link>
          <nuxt-link to="/" class="item">哦</nuxt-link>
          <nuxt-link to="/" class="item">呵呵</nuxt-link>
          <nuxt-link to="/" class="item">的点点滴滴的的的的的</nuxt-link>
        </div>
      </div>
      <div class="history">
        <div class="title">
          搜索历史
          <button @click="claer" class="btn-clear hs-icon">删除</button>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script type="text/ecmascript-6">

import Popup from '~/components/basePopup.vue'

export default {
  props: {
    categories_item: {
      type: Array
    }
  },
  data () {
    return {
      keyworld: null
    }
  },
  components: {
    Popup
  },
  methods: {
    show () {
      this.$refs.popup.show()
    },
    hide () {
      this.$refs.popup.hide()
      this.$emit('hide')
    },
    claer () {
      this.$createDialog({
        type: 'confirm',
        content: '是否清空所有搜索历史',
        confirmBtn: {
          text: '确定',
          active: false,
          disabled: false
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false
        },
        onConfirm: () => {
          console.log('确定')
        }
      }).show()
    },
    submit () {
      if (!this.keyworld) {
        this.$createToast({
          type: 'warn',
          time: 800,
          txt: '请输入查找关键词'
        }).show()
        return false
      }
      console.log('搜索')
    }
  }
}
</script>

<style lang="less">
  @import '../assets/less/common.less';

  .cube-search-popup {
    width: 10rem;
    margin-left: -5rem;
    left: 50%;
    .cube-popup-mask {
      opacity: 1;
      background-color: #fff;
    }
    .cube-popup-container {
      // width: 10rem;
      // margin-left: -5rem;
      // left: 50%;
      transform: none;
      .cube-popup-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        // box-sizing: border-box;
        height: 100%;
        // background-color: #fff;
        // padding: 0 .4rem;
        transform: none;
      }
    }
    .box {
      padding: 0 .4rem;
      .title {
        .font-dpr(18px);
        color: #838383;
        display: inline-block;
        line-height: 1em;
        padding-bottom: .27rem;
        margin-bottom: .4rem;
        position: relative;
        width: 100%;
        &:after {
          position: absolute;
          bottom: 0;
          left: 0;
          content: '';
          width: 1.33rem;
          height: .013rem;
          border-bottom: .013rem solid #E8E8E8;
        }
        .btn-clear {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .search {
        height: 1.2rem;
        line-height: 1.2rem;
        margin-top: .27rem;
        border-bottom: .05rem solid #000;
        display: flex;
        justify-content: space-between;
        .icon-search {
          .hs-icon;
          &:before {
            .font-dpr(20px);
            content: "\e65f";
            color: #333;
          }
          flex-shrink: 1;
        }
        .input-keyworld {
          flex-shrink: 3;
          height: 1.2rem;
          line-height: 1.2rem;
          // display: inline-block;
          // height: 1em;
          .font-dpr(16px);
          &:after {
            border: 0;
          }
          input {
            padding: .07rem;
            height: 1em;
            .font-dpr(16px);
            // padding: 0;
          }
        }
        .btn-search {
          border: none;
          background-color: transparent;
          flex-shrink: 1;
          .font-dpr(14px);
        }
        .btn-close {
          border: none;
          background-color: transparent;
          flex-shrink: 1;
          .font-dpr(14px);
        }
        .hr {
          margin-top: .3rem;
          height: .5rem;
          width: .06rem;
          background-color: #E8E8E8;
        }
      }
      .hot {
        margin-top: .4rem;
        .list {
          line-height: 0;
          .item {
            .font-dpr(14px);
            display: inline-block;
            height: .667rem;
            line-height: .667rem;
            margin-right: .2rem;
            margin-bottom: .33rem;
            border: .013rem solid #e8e8e8;
            padding: 0 .33rem;
            border-radius: .08rem;
            color: #202123;
          }
        }
      }
    }
  }
</style>
