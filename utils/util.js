import _ from 'underscore'

const thirdwx = 'http://thirdwx.qlogo.cn/'
const wxUrl = 'http://wx.qlogo.cn/'

export function get_Avatar (data, fieldName) {

  // console.log(arrayList)
  // 多个用户头像转换(+/64)
  if (_.isArray(data)) {
    // _.each(data, (item, index) => {
    //   // data[index][fieldName] = item[fieldName] + '/64'
    //
    //   console.log(item[fieldName])
    // })

    // _.map(data, (item, index) => {
    //   if (item[fieldName].indexOf(thirdwx) || item[fieldName].indexOf(wxUrl)) {
    //     data[index][fieldName] = item[fieldName] + '/64'
    //   }
    // })
  }



  // console.log(arrayList, fieldName)
  // _.find('http://thirdwx.qlogo.cn/mmopen/DrfuYticfJSjp0wSwFJodNULucqVqyIePFC0shYBHf4g4wZUj8pNQA73XWwYxCibIk4qeGE1YP6aIPz2iaUdtCPTgfKs7wmJsHW', ('a'))
  return data
}



// export default (context, inject) {
//
//   Date.prototype.toLocaleString = function () {
//     return this.getMonth() + 1 + "月" + this.getDate() + "日 "
//   };
//   // 转换时间
//   const formatTime = date => {
//     const nowDate = Number(new Date())/1000
//     if (nowDate > date){
//       return null
//     }else{
//       const newTime = new Date(date * 1000);
//       return newTime.toLocaleString()
//     }
//   }
//
//   // 多个用户头像转换(+/64)
//   const thirdwx = 'http://thirdwx.qlogo.cn/'
//   const wxUrl = 'http://wx.qlogo.cn/'
//   // date 列表 parem 字段名
//   const userAvatarTransform = (date, param) => {
//     let newGoods = []
//     date.forEach(function (item, index) {
//       if (!item[param]){
//         newGoods.push(item)
//       }else if (item[param].indexOf(thirdwx) || item[param].indexOf(wxUrl)) {
//         item[param] = item[param] + '/64'
//         newGoods.push(item)
//       }else{
//         newGoods.push(item)
//       }
//     })
//     return newGoods
//   }
//   // 单个用户头像转换(+/64)
//   const singleUserAvatarTransform = date => {
//     let newUserAvatar = null
//     if (date.indexOf(thirdwx) || date.indexOf(wxUrl)) {
//       newUserAvatar = date + '/64'
//     } else {
//       newUserAvatar = date
//     }
//     return newUserAvatar
//   }
//   // 替换文本中换行<br />
//   const replaceBr = date => {
//     if (!date) return false
//     let newText = date
//     let m = date.length/4
//     for(let i = 0; i < m; i++){
//       newText = newText.replace("<br />", "\n")
//     }
//     return newText
//   }
//
//
//   inject('myPlugin', myPlugin)
// }

// module.exports = {
//   formatTime: formatTime,
//   userAvatarTransform: userAvatarTransform,
//   singleUserAvatarTransform: singleUserAvatarTransform,
//   replaceBr: replaceBr
// }
