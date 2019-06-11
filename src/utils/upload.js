//未使用该文件  未使用该文件 未使用该文件
import axios from 'axios'
import { Notification } from 'element-ui'

let upload = {
  // 上传前的判断
  // 参数 DOM上传upload的节点，uploadFiles 上传的文件， num 限定的数量，hasFiles 已存在的文件, size 单张图片限定大小（M, typeList 限定数据格式
  handleUpload: (DOM, uploadFiles, num = 5, hasFiles = [], SIZE_M = 5, typeList = []) => {
    return new Promise(resolve => {
      if (uploadFiles.length + hasFiles.length > num) {
        Notification.warning({
          title: '提示',
          message: '普通上传一次最多可上传' + num + '张'
        })
        return
      }
      // 判断图片大小 、格式
      for (let i = 0; i < uploadFiles.length; i++) {
        let size = uploadFiles[i].size
        if (size > SIZE_M * 1024 * 1024) {
          Notification.warning({
            title: '提示',
            message: uploadFiles[i].name + '这张图片大于' + SIZE_M + 'M'
          })
          return
        }
        if (typeList.length > 0 && typeList.indexOf(uploadFiles[i].type.split('/')[1]) < 0) {
          Notification.warning({
            title: '提示',
            message: uploadFiles[i].name + '这张图片格式不支持'
          })
          return
        }
      }
      for (let i = 0; i < uploadFiles.length; i++) {
        let obj = Object.assign({ blobUrl: URL.createObjectURL(uploadFiles[i]) }, { file: uploadFiles[i] })
        hasFiles.push(obj)
      }
      // 可以重复上传 继续触发change
      DOM.value = ''
      resolve(hasFiles)
    })
  },
  // 过滤图片尺寸 超过HEIGH WIDTH时 等比例缩放
  // file上传的数据，HEIGH 限定的高 WIDTH 限定的宽
  filterWH (file, WIDTH = 1920, HEIGH = 1920) {
    return new Promise(resolve => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        // this.result 图片的base64数据
        let img = new Image()
        img.src = this.result
        img.onload = function () { // 事件是异步
          if (this.height > HEIGH || this.width > WIDTH) {
            let [height, width] = []
            if (this.height > this.width) {
              let rate = this.width / this.height
              height = HEIGH
              width = rate * HEIGH
            } else {
              let rate = this.height / this.width
              width = WIDTH
              height = rate * WIDTH
            }
            let canvas = document.createElement('canvas')
            let context = canvas.getContext('2d')
            canvas.width = width
            canvas.height = height
            context.drawImage(this, 0, 0, width, height)
            // canvas => blob
            canvas.toBlob(blob => {
              resolve(blob)
            }, file.type)
          } else {
            resolve(false)
          }
        }
      }
    })
  },
  // 上传图片
  // papers 上传文件，reqUrl 请求地址， diskId相册id, Authorization 权限验证， callback 回调
  async submitFile (papers, reqUrl, diskId, Authorization, callback, WIDTH = 1920, HEIGH = 1920) {
    let formData = new FormData()
    for (let i = 0; i < papers.length; i++) {
      let file = papers[i].file
      // 判断图片的宽高
      await upload.filterWH(file, WIDTH, HEIGH).then(theBlob => {
        let temFile = file
        if (theBlob) {
          // blob => file
          temFile = new File([theBlob], file.name, { type: theBlob.type })
        }
        formData.append('file', temFile)
      })
    }
    axios({
      method: 'post',
      url: reqUrl,
      data: formData,
      params: { diskId: diskId },
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': Authorization
      }
    }).then(res => {
      if (res.data.code === 2000) {
        callback(res.data.data)
      } else {
        Notification.error({
          title: '错误',
          message: res.data.message
        })
      }
    }).catch(() => {
      Notification.error({
        title: '错误',
        message: '请求有误，请核对再上传'
      })
    })
  }
}
export default upload
