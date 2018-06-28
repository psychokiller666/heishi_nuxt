export default {
  data () {
    return {
      bottom: 0,
      top: 0
    }
  },
  mounted () {
    // tabber添加到底部
    if (document.getElementsByClassName('hs-tabber').length) {
      const buttomElement = document.getElementsByClassName('hs-tabber')[0]

      this.bottom = Number(this.bottom) + Number(buttomElement.dataset.bottom)
      document.getElementsByClassName('hs-page')[0].appendChild(buttomElement)
    }
    // tabber 二级添加到底部
    if (document.getElementsByClassName('tabber-child').length) {
      const buttomElement = document.getElementsByClassName('tabber-child')[0]
      this.bottom = Number(this.bottom) + Number(buttomElement.dataset.bottom)
      // console.log(Number(buttomElement.dataset.bottom))

      document.getElementsByClassName('hs-page')[0].appendChild(buttomElement)
    }
  }
}
