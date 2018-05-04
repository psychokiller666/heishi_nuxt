const isProdMode = Object.is(process.env.NODE_ENV, 'production')

export default {
  wechatAppid: isProdMode ? 'wxd2e58c3ee4c455ea' : 'wx952669458db9b1f5'
}
