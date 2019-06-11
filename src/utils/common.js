// 获取随机ID，组件拖到预览视图后就会被设置个ID   GUID
export const guid = () => {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4()
}

/**
 * 格式化时间 2019-01-22 17:24:08
 */
export const formatDate = date => {
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  let mi = date.getMinutes()
  mi = mi < 10 ? ('0' + mi) : mi
  let s = date.getSeconds()
  s = s < 10 ? ('0' + s) : s
  return y + '-' + m + '-' + d + ' ' + h + ':' + mi + ':' + s
}
