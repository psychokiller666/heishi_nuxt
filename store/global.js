export const state = () => ({
  // 文档参考props配置
  // https://didi.github.io/cube-ui/#/zh-CN/docs/scroll
  scroll: {
    data: [],
    options: {
      observeDOM: true,
      click: true,
      probeType: 1,
      scrollbar: false,
      pullDownRefresh: false,
      pullUpLoad: false
    },
    direction: 'vertical',
    listenScroll: false,
    listenBeforeScroll: false,
    refreshDelay: 20,
    pulldown: null,
    pullup: null
  }
})
