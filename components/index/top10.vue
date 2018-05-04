<template>
  <div class="index-top10">
    <baseTitle title="本周TOP10" label="图层卖的贼鸡儿好的" class="header_hack" />
    <div class="list" ref="scroll">
      <div class="item" v-for="(item, index) in item_top10" :key="index" :style="[transformIndex(index), transform(index)]" @webkit-transition-end="onTransitionEnd(index)"
      @transitionend="onTransitionEnd(index)">
        <div class="image" v-lazy:background-image.container="item.image + '@640w_1l'" ></div>
        <div class="text">
          <div class="title">如果捡肥皂都长这样长这样 长这样</div>
          <div class="label">
            <span>夜店蹦迪</span>
          </div>
        </div>
      </div>
    </div>
    <cube-button icon="cubeic-right" class="button" @click="next"></cube-button>
  </div>
</template>
<script>
import baseTitle from '~/components/baseTitle.vue'

// https://warpcgd.github.io/vue-tantan-stack/
// 动画效果
// https://github.com/warpcgd/vue-tantan-stack/blob/v2.0/src/components/stack.vue
export default {
  props: {
    item_top10: {
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
      // basicdata数据包含组件基本数据
      basicdata: {
        start: {}, // 记录起始位置
        end: {}, // 记录终点位置
        currentPage: 0 // 默认首图的序列
      },
      // temporaryData数据包含组件临时数据
      temporaryData: {
        offsetY: '',
        poswidth: 0,
        posheight: 0.54,
        lastPosWidth: 0,
        lastPosHeight: 0.27,
        lastZindex: '',
        rotate: 0,
        lastRotate: 0,
        tracking: false,
        animation: false,
        opacity: 1,
        lastOpacity: 0,
        swipe: false,
        zIndex: 10
      }
    }
  },
  methods: {
    inStack (index, currentPage) {
      let stack = []
      let visible = this.visible
      let length = this.item_top10.length
      for (let i = 0; i < visible; i++) {
        if (currentPage + i < length) {
          stack.push(currentPage + i)
        } else {
          stack.push(currentPage + i - length)
        }
      }
      return stack.indexOf(index) >= 0
    },
    nextTick () {
      // 记录最终滑动距离
      this.temporaryData.lastPosWidth = this.temporaryData.poswidth
      this.temporaryData.lastPosHeight = this.temporaryData.posheight
      this.temporaryData.lastRotate = this.temporaryData.rotate
      this.temporaryData.lastZindex = 20
      // 循环currentPage
      this.temporaryData.currentPage = this.temporaryData.currentPage === this.item_top10.length - 1 ? 0 : this.temporaryData.currentPage + 1
      // currentPage切换，整体dom进行变化，把第一层滑动置最低
      this.$nextTick(() => {
        this.temporaryData.poswidth = 0
        this.temporaryData.posheight = 0
        this.temporaryData.opacity = 1
        this.temporaryData.rotate = 0
      })
    },
    onTransitionEnd (index) {
      let lastPage = this.temporaryData.currentPage === 0 ? this.item_top10.length - 1 : this.temporaryData.currentPage - 1
      // dom发生变化正在执行的动画滑动序列已经变为上一层
      if (this.temporaryData.swipe && index === lastPage) {
        this.temporaryData.animation = true
        this.temporaryData.lastPosWidth = 0
        this.temporaryData.lastPosHeight = 0
        this.temporaryData.lastOpacity = 0
        this.temporaryData.lastRotate = 0
        this.temporaryData.swipe = false
        this.temporaryData.lastZindex = -1
      }
    },
    next () {
      this.temporaryData.tracking = false
      this.temporaryData.animation = true
      // 计算划出后最终位置
      let width = this.$refs.scroll.offsetWidth
      this.temporaryData.poswidth = width
      this.temporaryData.posheight = 0
      this.temporaryData.opacity = 0
      this.temporaryData.rotate = '3'
      this.temporaryData.swipe = true
      this.nextTick()
    },
    rotateDirection () {
      if (this.temporaryData.poswidth <= 0) {
        return -1
      } else {
        return 1
      }
    },
    // 非首页样式切换
    transform (index) {
      let currentPage = this.current
      let length = this.item_top10.length
      let lastPage = currentPage === 0 ? this.item_top10.length - 1 : currentPage - 1
      let style = {}
      let visible = this.visible
      if (index === this.current) {
        return
      }
      if (this.inStack(index, currentPage)) {
        let perIndex = index - currentPage > 0 ? index - currentPage : index - currentPage + length
        let tempHeight = this.temporaryData.posheight - (0.27 * perIndex)
        style['opacity'] = '1'
        style['transform'] = 'translate3D('+ index * 0.27 +'rem,' + tempHeight + 'rem, 0)'
        style['zIndex'] = visible - perIndex
        if (!this.temporaryData.tracking) {
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = 300 + 'ms'
        }
      } else if (index === lastPage) {
        style['transform'] = 'translate3D(' + this.temporaryData.lastPosWidth + 'rem' + ',' + this.temporaryData.lastPosHeight + 'rem' + ',0rem) ' + 'rotate(' + this.temporaryData.lastRotate + 'deg)'
        style['opacity'] = this.temporaryData.lastOpacity
        style['zIndex'] = this.temporaryData.lastZindex
        style['transitionTimingFunction'] = 'ease'
        style['transitionDuration'] = 300 + 'ms'
      } else {
        style['zIndex'] = '-1'
        style['transform'] = 'translate3D(0,0,' + -1 * visible * 0.27 + 'rem' + ')'
      }
      return style
    },

    // 首页样式切换
    transformIndex (index) {
      if (index === this.current) {
        let style = {}
        style['transform'] = 'translate3D(' + this.temporaryData.poswidth + 'rem' + ',' + this.temporaryData.posheight + 'rem' + ', 0rem) ' + 'rotate(' + this.temporaryData.rotate + 'deg)'
        style['opacity'] = this.temporaryData.opacity
        style['zIndex'] = 10
        if (this.temporaryData.animation) {
          style['transitionTimingFunction'] = 'ease'
          style['transitionDuration'] = (this.temporaryData.animation ? 300 : 0) + 'ms'
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
      box-shadow: 0 0.134rem 0.4rem rgba(0,0,0,.06);
      background-color: #fff;
      left: .4rem;
      overflow: hidden;
      position: absolute;
      opacity: 0;
      display: -ms-flexbox;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      pointer-events: auto;
      .hs-cf();
      .image {
        width: 4.48rem;
        height: 2.29rem;
        .hs-cover;
        .hs-fl;
        border-radius: .16rem 0 0 .16rem;
      }
      .text {
        width: 3.84rem;
        margin-right: .53rem;
        margin-top: .35rem;
        text-align: left;
        .hs-fr;
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
      }
    }
  }
}
</style>
