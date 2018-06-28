<template>
  <div class="index-top10">
    <baseTitle title="本周TOP10" label="图层卖的贼鸡儿好的" class="header_hack" />
    <div class="list" ref="scroll">
      <nuxt-link class="item" to="/" v-for="(item, index) in data" :key="index" :style="[transformOne(index),transformTwo(index),transformThree(index),transform(index)]">
        <div class="image" v-lazy:background-image.container="item.image + '@640w_1l'" ></div>
        <div class="text">
          <div class="title">{{ item.title }}</div>
          <div class="label">
            <span>夜店蹦迪</span>
          </div>
        </div>
      </nuxt-link>
    </div>
    <button class="button" @click="next"></button>
  </div>
</template>
<script>
import baseTitle from '~/components/baseTitle.vue'

// https://warpcgd.github.io/vue-tantan-stack/
// 动画效果
// https://github.com/warpcgd/vue-tantan-stack/blob/v2.0/src/components/stack.vue
export default {
  props: {
    data: {
      type: Array
    },
    visible: {
      type: Number,
      default: 3
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      temporaryData: {
        offsetY: '',
        poswidth: 0,
        posheight: 0,
        lastPosWidth: '',
        lastPosHeight: '',
        lastZindex: '',
        rotate: 0,
        lastRotate: 0,
        visible: 3,
        tracking: false,
        animation: false,
        currentPage: 0,
        opacity: 1,
        lastOpacity: 0,
        swipe: false,
        zIndex: 10
      }
    }
  },
  methods: {
    next () {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 计算划出后最终位置
      let width = this.$el.offsetWidth
      this.temporaryData.poswidth = width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '3'
      this.temporaryData.swipe = true
      this.nextTick()
    },
    nextTick () {
      // 记录最终滑动距离
      this.temporaryData.lastPosWidth = this.temporaryData.poswidth
      this.temporaryData.lastPosHeight = this.temporaryData.posheight
      this.temporaryData.lastRotate = this.temporaryData.rotate
      this.temporaryData.lastZindex = 20
      // 循环currentPage
      this.temporaryData.currentPage = this.temporaryData.currentPage === this.data.length - 1 ? 0 : this.temporaryData.currentPage + 1
      // currentPage切换，整体dom进行变化，把第一层滑动置最低
      this.$nextTick(() => {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.opacity = 1
        this.temporaryData.rotate = 0
      })
    },
    inStack (index, currentPage) {
      let stack = []
      let visible = this.temporaryData.visible
      let length = this.data.length
      for (let i = 0; i < visible; i++) {
        if (currentPage + i < length) {
          stack.push(currentPage + i)
        } else {
          stack.push(currentPage + i - length)
        }
      }
      return stack.indexOf(index) >= 0
    },
    // 非首页样式切换
    transform (index) {
      let currentPageOne = this.temporaryData.currentPage
      // console.log(2)
      let currentPageTwo = this.temporaryData.currentPage + 1 === this.data.length ? 0 : this.temporaryData.currentPage + 1
      let currentPageThree = this.temporaryData.currentPage + 1 === this.data.length ? 0 : this.temporaryData.currentPage + 1
      if (currentPageThree == 0) {
        currentPageThree = 1
      }else{
        currentPageThree = this.temporaryData.currentPage + 2 === this.data.length ? 0 : this.temporaryData.currentPage + 2
      }
      if (index !== currentPageOne && index !== currentPageTwo && index !== currentPageThree) {
        let style = {}
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'px' + ',' + this.temporaryData.posheight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.rotate + 'deg)'
        style['opacity'] = 0
        style['zIndex'] = 1
        style['top'] = '0'
        style['width'] = '8.29rem'
        style['left'] = '0.855rem'
        if (this.temporaryData.animation) {
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = (this.temporaryData.animation ? 500 : 0) + 'ms'
        }
        return style
      }
    },
    // 首页样式切换
    transformOne (index) {
      if (index === this.temporaryData.currentPage) {
        let style = {}
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'px' + ',' + this.temporaryData.posheight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.rotate + 'deg)'
        style['opacity'] = 1
        style['zIndex'] = 30
        style['top'] = '0.533rem'
        if (this.temporaryData.animation) {
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = (this.temporaryData.animation ? 500 : 0) + 'ms'
        }
        return style
      }
    },
    // 首页样式切换
    transformTwo (index) {
      let currentPage = this.temporaryData.currentPage + 1 === this.data.length ? 0 : this.temporaryData.currentPage + 1
      if (index === currentPage) {
        let style = {}
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'px' + ',' + this.temporaryData.posheight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.rotate + 'deg)'
        style['opacity'] = 1
        style['zIndex'] = 20
        style['top'] = '0.267rem'
        style['width'] = '8.74rem'
        style['left'] = '0.63rem'
        if (this.temporaryData.animation) {
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = (this.temporaryData.animation ? 500 : 0) + 'ms'
        }
        return style
      }
    },
    // 首页样式切换
    transformThree (index) {
      let currentPage = this.temporaryData.currentPage + 1 === this.data.length ? 0 : this.temporaryData.currentPage + 1
      if (currentPage === 0) {
        currentPage = 1
      } else {
        currentPage = this.temporaryData.currentPage + 2 === this.data.length ? 0 : this.temporaryData.currentPage + 2
      }
      if (index === currentPage) {
        let style = {}
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'px' + ',' + this.temporaryData.posheight + 'px' + ',0px) ' + 'rotate(' + this.temporaryData.rotate + 'deg)'
        style['opacity'] = 1
        style['zIndex'] = 10
        style['top'] = '0'
        style['width'] = '8.29rem'
        style['left'] = '0.855rem'
        if (this.temporaryData.animation) {
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = (this.temporaryData.animation ? 500 : 0) + 'ms'
        }
        return style
      }
    }
  },
  components: {
    baseTitle
  }
}

</script>
<style lang="less" scoped>
@import '../../assets/less/common.less';

.index-top10 {
  position: relative;
  // margin: 0 .4rem;
  padding-bottom: .53rem;
  .header_hack {
    padding-top: .53rem;
    padding-left: .4rem;
    padding-right: .4rem;
  }
  .list {
    position: relative;
    height: 2.83rem;
    -webkit-perspective: 1000px;
    -webkit-perspective-origin: 50% 150%;
    .item {
      width: 9.2rem;
      height: 2.29rem;
      border-radius: .16rem;
      box-shadow: 0 0.134rem 0.4rem rgba(0,0,0,.2);
      background-color: #fff;
      left: .4rem;
      position: absolute;
      opacity: 1;
      display: flex;
      // flex-direction: column;
      // flex-wrap: nowrap;
      .image {
        width: 4.48rem;
        height: 100%;
        .hs-cover;
        // .hs-fl;
        border-radius: .16rem 0 0 .16rem;
        // box-sizing: border-box;
        // display: inline-block;
      }
      .text {
        width: 3.84rem;
        height: 100%;
        margin-left: .53rem;
        margin-top: .35rem;
        text-align: left;
        // display: inline-block;
        // box-sizing: border-box;
        .title {
          color: #202123;
          // height: 2em;
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
      }
    }
  }
  .button{
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    background-color: #fff;
    color: #000;
    left: 50%;
    margin-left: -.4rem;
    bottom: 0;
    border-radius: 100%;
    box-shadow: 0 .04rem .02rem 0 rgba(0,0,0,0.5);
    position: absolute;
    border: none;
  }
}
</style>
