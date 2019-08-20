<template>
  <div data-attr="手机端" class="phone">
    <div class="phone_box" :style="'height:'+ autoHeight + 'px;'">
      <div class="phone_shadow" :style="'height:'+ autoHeight + 'px;'">
        <div class="phone_handle_box" v-if="isPhoneHandle" :style="'top:'+pageTag[pageIndex].top+'px; height:'+pageTag[pageIndex].height+'px;'"></div>
        <div class="phone_wrap" ref="phoneWrap"></div>
      </div>
      <iframe ref="iframe" :src="'/#/test?storeId='+storeId" scrolling="no" frameborder="0"></iframe>
    </div>
    <section class="handle_component_edit" v-show="isMobileEditPanel">
      <section class="edit_panel" :class="{'transform': isMobileEditPanel }">
        <div class="editor_panel_container">
          <div class="editor_panel_title">
            <span class="editor_title">信息配置</span>
            <!-- <span class="editor_second_title">{{currentComponent.templateName || ''}}</span> -->
          </div>
          <div class="editor_panel_con">
            <div>
              <div v-if="currentComponent.isSign">
                <div class="rec_goods_box hidden_border">
                  <p class="set_desc">背景图片建议设置为750 * 375, 仅支持 jpg/png/jpeg 格式</p>
                </div>
                <div class="rec_goods_box hidden_border">
                  <div>设置背景图片<sup class="set_sup">*</sup></div>
                  <div class="set_con_banner_cell_img_upload">
                    <input type="file" id="uploadBg" ref="uploadBg" accept="image/png, image/jpeg, image/jpg" style="position: absolute; left: -9999px;"  @change="uploadBgFile()" value="">
                    <div v-if="currentComponent.image" class="set_con_banner_cell_img_upload_con">
                      <img :src="currentComponent.image">
                      <label class="set_con_banner_cell_img_upload_reUpload" for="uploadBg">
                        <i class="el-icon-edit"></i>
                      </label>
                    </div>
                    <label v-else class="set_con_banner_cell_img_upload_text" for="uploadBg">
                      <i class="el-icon-plus"></i>
                    </label>
                  </div>
                </div>
              </div>
              <div class="rec_goods_box hidden_border" v-if="currentComponent.isGoods">
                <button class="editor_btn_button set_button select_goods" @click="cropperGoods=isMobileEditPanel; goodsData()">选择商品 {{!Object.keys(currentComponent).length || currentComponent.dataList.length || 0}}/12</button>
              </div>
              <div class="rec_goods_box hidden_border" v-if="currentComponent.isBanner">
                <div>图片设置<sup class="set_sup">*</sup></div>
                <button class="editor_btn_button set_button select_goods set_banner" @click="frontBanner()">上传并编辑图片</button>
                <div class="set_img_show">
                  <img v-for="tip in currentComponent.dataList" :key="tip.id" :src="tip.url">
                </div>
              </div>
            </div>
          </div>
          <div class="editor_panel_booth"></div>
          <div class="editor_panel_btn">
            <button class="editor_btn_button" @click="cancle()">取消</button>
            <button class="editor_btn_button" @click="save()">保存</button>
          </div>
        </div>
      </section>
    </section>
    <!-- 加载loading -->
    <div class="loading_wrap" v-show="isLoading"><i class="el-icon-loading"></i></div>
    <!-- 弹框banner -->
    <div v-if="cropperBanner">
      <!-- 遮罩层 -->
      <div class="wrapper"></div>
      <div class="set_con_banner">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="cancleCropperBanner()"></i>
            <div class="set_con_banner_title">上传/编辑图片</div>
            <div class="set_con_banner_info">
              <div class="set_con_banner_row">
                <div class="set_con_banner_cell_img">图片缩略图</div>
                <div class="set_con_banner_cell_url">设置链接</div>
                <div class="set_con_banner_cell_set">操作</div>
              </div>
              <input type="file" id="uploadID" ref="uploadID" accept="image/png, image/jpeg, image/jpg" style="position: absolute; left: -9999999px;"  @change="handleFilesUpload()" value="">
              <div class="set_con_banner_row set_con_banner_row_con" v-for="(tip, index) in markList" :key="tip.id">
                <div class="set_con_banner_cell_img">
                  <div>
                    <div class="set_con_banner_cell_img_upload">
                      <div v-if="Object.keys(tip).length" class="set_con_banner_cell_img_upload_con">
                        <img :src="tip.url">
                        <label class="set_con_banner_cell_img_upload_reUpload" for="uploadID" @click="markIndex=index">
                          <i class="el-icon-edit"></i>
                        </label>
                      </div>
                      <label v-else class="set_con_banner_cell_img_upload_text" for="uploadID" @click="markIndex=index">
                        <i class="el-icon-plus"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="set_con_banner_cell_url">
                  <div class="set_con_banner_cell_url_action">
                    <span class="set_con_banner_cell_url_con"><input type="text" :data-title="tip.link" disabled :value="tip.link"></span>
                    <el-popover
                      placement="bottom"
                      title="选择链接页面类型"
                      width="250"
                      trigger="hover"
                      class="set_con_banner_cell_url_popper">
                      <ul>
                        <li>
                          <a class="set_con_banner_cell_url_popper_a" href="javascript:;" @click="cropperBannerGoods(index)">商品详情页</a>
                        </li>
                        <!-- <li>
                          <a class="set_con_banner_cell_url_popper_a" href="javascript:;" @click="cropperBannerCate(index)">店内类目商品列表页</a>
                        </li> -->
                        <li>
                          <a class="set_con_banner_cell_url_popper_a" href="javascript:;" @click="cropperBanner3D(index)">店内3D页面</a>
                        </li>
                        <li>
                          <a class="set_con_banner_cell_url_popper_a" href="javascript:;" @click="cropperBannerLive(index)">店内直播页面</a>
                        </li>
                      </ul>
                      <el-button slot="reference" size="mini"><i class="el-icon-menu"></i></el-button>
                    </el-popover>
                  </div>
                </div>
                <div class="set_con_banner_cell_set">
                  <div class="set_con_banner_cell_set_action">
                    <span class="set_con_banner_cell_set_action_btn action_btn_active" @click="index > 0 && upBannerImg(tip, index)" :class="{'notToday':index<=0}"><i class="el-icon-arrow-up"></i></span>
                    <span class="set_con_banner_cell_set_action_btn action_btn_active" @click="index < markList.length - 1 && downBannerImg(tip, index)" :class="{'notToday':index>=markList.length - 1}"><i class="el-icon-arrow-down"></i></span>
                    <span class="set_con_banner_cell_set_action_btn action_btn_active" @click="markList.length>1 && deleteBannerImg(index)" :class="{'notToday':markList.length<=1}"><i class="el-icon-delete"></i></span>
                  </div>
                </div>
              </div>
              <div class="set_con_banner_add_btn">
                <button class="editor_btn_button" @click="addCropBanner()" :class="{disabled: markList.length===markNum}">新增</button>
                <span class="set_con_banner_upload_tip">{{markList.length}}/{{markNum}}</span>
              </div>
              <span class="set_con_banner_upload_tip">图片建议上传尺寸&nbsp;≧&nbsp;{{markImgSize.width}}X{{markImgSize.height}}像素，仅支持JPG/JPEG/PNG格式。</span>
            </div>
            <div class="set_con_banner_handle">
              <button class="editor_btn_button" @click="cancleCropperBanner()">取消</button>
              <button class="editor_btn_button" @click="btnCropperBanner()">确定</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 上传图片截图 -->
      <div class="set_con_banner set_con_cropper" v-if="cropperImg">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="cropperImg = ''"></i>
            <div class="set_con_banner_title">上传<span class="set_con_banner_title_tip">拖动选框选择具体图片<sup>*</sup></span></div>
            <div class="set_con_cropper_con">
              <div class="set_con_cropper_box">
                <VueCropper
                  ref="cropper"
                  data-ref="cropper"
                  :img="cropperImg"
                  :canScale="false"
                  :autoCrop="true"
                  :canMove="false"
                  :fixedBox="false"
                  :fixed="true"
                  :fixedNumber="[markImgSize.width, markImgSize.height]"
                  :centerBox="true"
                  :full="true"
                  :infoTrue="true"
                  :info="false">
                </VueCropper>
              </div>
              <label for="uploadID" class="set_con_cropper_reset"><i class="el-icon-plus"></i><span>重新选择</span></label>
            </div>
            <div class="set_con_cropper_btn"><button class="editor_btn_button" @click="saveCropImg()">保存并关闭</button></div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹框商品列表 -->
    <div v-if="cropperGoods">
      <!-- 遮罩层 -->
      <div class="wrapper"></div>
      <div class="set_con_banner">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="closeCropGoods()"></i>
            <div class="set_con_banner_title">选择商品详情页</div>
            <div class="set_con_banner_info set_con_banner_info_two">
              <div class="set_con_banner_row">
                <!-- 后期分页查询操作 -->
                <div class="set_con_banner_cell_img set_con_banner_info_two_filter">
                  <select v-model="currentCate" placehlder="所有分类" class="set_con_banner_info_two_select">
                    <option value="">所有分类</option>
                    <option :value="cate.id" v-for="cate in menuCate" :key="cate.id">{{cate.name}}</option>
                  </select>
                  <div class="set_box_store_search">
                    <input type="search" name="" placeholder="请输入产品名称" v-model="searchGoodsName" @keyup.enter="page=1;goodsResetData()">
                    <span class="set_box_search_btn" @click="page=1;goodsResetData()"><i class="el-icon-search"></i></span>
                  </div>
                </div>
                <div class="set_con_banner_cell_url set_con_banner_info_two_other"></div>
                <div class="set_con_banner_cell_set set_con_banner_info_two_sort">
                  <el-pagination
                    v-if="storeGoods.total"
                    small
                    @current-change="goodsResetData()"
                    :current-page.sync="page"
                    :page-size="rows"
                    layout="prev, pager, next"
                    :total="storeGoods.total">
                  </el-pagination>
                </div>
              </div>
              <div class="pane-box pane_box_title">
                <ul>
                  <li>
                    <span></span>
                    <span>产品图片</span>
                    <span>产品名称</span>
                    <span>产品价格</span>
                    <span>更新时间</span>
                  </li>
                </ul>
              </div>
              <div class="pane-box" style="border-bottom: 1px solid #663399;">
                <ul class="pane_limit_height pane_limit_goods">
                  <li v-for="list in storeGoods.rows" :key="list.id">
                    <span><input type="checkbox" :value="list" v-model="pickList" @change="goodsChange($event)"/></span>
                    <span class="pane_good_img">
                      <img :src="list.smallPic"> <!--  @click="goPage(WEBSITE,'/detail',{goodsId: list.id})" -->
                      <a
                        v-if="list.threeId"
                        target="_blank"
                        class="t3D_play"
                        title="商品支持3D展示">
                        <img src="static/img/detail_play_3D.png"> <!-- @click="goPage(WEBSITE,'/3D/3Dshow',{ id: list.threeId,homeShops:storeId,goodsId: list.id})" -->
                      </a>
                    </span>
                    <span>{{list.goodsName}}</span> <!-- @click="goPage(WEBSITE,'/detail',{goodsId: list.id})" -->
                    <span>
                      <span>{{list.priceShow}}元</span>
                    </span>
                    <span>{{formatDate(list.createTime)}}</span>
                  </li>
                </ul>
                <div v-if="!storeGoods.total" class="set_con_banner_title set_con_banner_upload_tip">暂无商品，请先相关添加商品~</div>
              </div>
              <div class="set_con_banner_add_btn">
                <span class="set_con_banner_upload_tip">拖动产品图片可调整顺序&nbsp;&nbsp;</span>
                <span class="set_con_banner_upload_tip">已选择的产品:</span>
                <span class="set_con_banner_upload_tip">{{pickList.length}}/{{pickNum}}</span>
              </div>
              <span class="set_select_order">
                <ul>
                  <li v-for="item in pickNum" :key="item.id">{{item}}</li>
                  <draggable class="draggable" v-model="pickList">
                    <li v-for="list in pickList" :key="list.id" style="cursor: move">
                      <img :src="list.smallPic">
                      <i class="el-icon-delete" @click="chooseDeleteData(list)"></i>
                    </li>
                  </draggable>
                </ul>
              </span>
            </div>
            <div class="set_con_banner_handle">
              <button class="editor_btn_button" @click="closeCropGoods()">取消</button>
              <button class="editor_btn_button" @click="btnCropGoods()">确定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹框3D列表 -->
    <div v-if="cropper3D">
      <!-- 遮罩层 -->
      <div class="wrapper"></div>
      <div class="set_con_banner">
        <div>
          <div class="set_con_banner_box">
            <i class="el-icon-close" @click="closeCropp3D()"></i>
            <div class="set_con_banner_title">选择3D展示</div>
            <div class="set_con_banner_info set_con_banner_info_two">
              <div class="set_con_banner_row">
                <!-- 后期分页查询操作 -->
                <div class="set_con_banner_cell_img set_con_banner_info_two_filter">
                  <div class="set_box_store_search">
                    <input type="search" name="" placeholder="请输入产品名称" v-model="threeD.goodsName" @keyup.enter="threeD.page=1;get3DData()">
                    <span class="set_box_search_btn" @click="threeD.page=1;get3DData()"><i class="el-icon-search"></i></span>
                  </div>
                </div>
                <div class="set_con_banner_cell_url set_con_banner_info_two_other"></div>
                <div class="set_con_banner_cell_set set_con_banner_info_two_sort">
                  <el-pagination
                    v-if="storeRes3D.total"
                    small
                    @current-change="get3DData()"
                    :current-page.sync="threeD.page"
                    :page-size="threeD.rows"
                    layout="prev, pager, next"
                    :total="storeRes3D.total">
                  </el-pagination>
                </div>
              </div>
              <div class="pane-box pane_box_title">
              </div>
              <div class="pane-box" style="border-bottom: 1px solid #663399;">
                <ul class="pane_limit_height video_pane_limit_height" v-if="storeRes3D.total">
                  <li class="video_li_pane_limit_height" v-for="list in storeRes3D.rows" :key="list.id">
                    <div class="video_pane_box tD_item_box">
                      <a class="video_pane_box_img_box">
                        <img class="video_pane_box_img" style="display: block; background-color: #000;" :src="list.smallPic">
                      </a>
                    </div>
                    <p class="video_pane_title">{{list.goodsName}}</p>
                    <div><button class="editor_btn_button" @click="select3D(list)">选择</button></div>
                  </li>
                </ul>
                <div v-else class="set_con_banner_title set_con_banner_upload_tip">暂无相关3D商品，请在数字管理先添加3D文件，并且绑定商品~</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="publish_box">
      <div class="publish_item" @click="release()">发布</div>
      <div class="publish_item">预览</div>
    </div>
  </div>
</template>
<script>
import { guid } from '@/utils/common'
import axios from 'axios'
import draggable from 'vuedraggable'
export default {
  props: {
    menuCate: {
      type: Array
    }
  },
  data () {
    return {
      autoHeight: 0,
      isPhoneHandle: false,
      getIframeInfo: '',
      pageTag: [],
      pageIndex: null,
      pageSign: {},
      pageSwitch: {},
      isMobileEditPanel: '',
      isLoading: false,
      currentComponent: {},
      // 弹框产品列表选择的数量
      pickNum: 12,
      pickList: [],
      // 弹框图片列表选择的数量
      markNum: 5,
      markList: [],
      markIndex: null,
      markDeleteImgId: [],
      markImgSize: { width: 750, height: 375 },
      storeGoods: {},
      storeRes3D: {},
      cropperBanner: '',
      cropperGoods: '',
      cropperImg: '',
      cropper3D: '',
      storeId: this.$cookies.get('st_b_user'),
      searchGoodsName: '',
      currentCate: '',
      page: 1,
      rows: 20,
      threeD: {
        goodsName: '',
        rows: 21,
        page: 1
      }
    }
  },
  components: { draggable },
  mounted () {
    window.getIframeInfo = function (pageInfo, tagName) {
      this[tagName] = pageInfo
    }.bind(this)

    document.addEventListener('click', this.handleModule)
  },
  destroyed () {
    document.removeEventListener('click', this.handleModule)
  },
  watch: {
    currentCate (val) {
      this.page = 1
      this.searchGoodsName = ''
      this.goodsResetData()
    },
    autoHeight (val) {
      this.$nextTick(() => {
        this.$refs.iframe.style.height = val + 'px'
      })
    }
  },
  methods: {
    init () {
      this.isMobileEditPanel = ''
      this.cropperGoods = ''
      this.cropperBanner = ''
      this.cropperImg = ''
      this.pickList = []
      this.markDeleteImgId = []
      this.markNum = 5
      this.markList = []
      this.markImgSize = { width: 750, height: 375 }
    },
    handleModule (e) {
      if (this.$refs.phoneWrap.contains(e.target)) {
        this.isPhoneHandle = true
        let { offsetY } = e
        for (let i = 0; i < this.pageTag.length; i++) {
          if ((i === this.pageTag.length - 1) || (this.pageTag[i].top <= offsetY && this.pageTag[i + 1].top > offsetY)) {
            this.pageIndex = i
            if (this.pageIndex === 0) {
              this.init()
              this.currentComponent = JSON.parse(JSON.stringify(this.pageSign))
              this.isMobileEditPanel = this.pageSign.id
            } else if (this.pageIndex === 2) {
              this.init()
              this.currentComponent = JSON.parse(JSON.stringify(this.pageSwitch))
              this.isMobileEditPanel = this.pageSwitch
            } else if (this.pageIndex === 3) {
              this.init()
              this.markNum = 1
              this.markImgSize = { width: 710, height: 240 }
              this.currentComponent = JSON.parse(JSON.stringify(this.pageWindow))
              this.isMobileEditPanel = this.pageWindow
            } else if (this.pageIndex === 4) {
              this.init()
              this.currentComponent = JSON.parse(JSON.stringify(this.pageGoods))
              this.isMobileEditPanel = this.pageGoods
            } else if (this.pageIndex === 1 || this.pageIndex === 5) {
              this.$notify.warning({
                message: '该模块不可操作'
              })
            }
            break
          }
        }
      }
    },
    cancle () {
      this.init()
    },
    save () {
      if (this.currentComponent.isSign) {
        this.isLoading = true
        this.API.saveAppSign(this.currentComponent).then(res => {
          if (res.code === 2000) this.$refs.iframe.contentWindow.getPageData('getPageTag')
          this.currentComponent = {}
          this.isMobileEditPanel = ''
          this.isLoading = false
        }).catch(() => { this.isLoading = false })
      } else if (this.currentComponent.isBanner) {
        if (this.pageIndex === 3) {
          this.isLoading = true
          this.API.saveAppWindow(this.currentComponent.dataList).then(res => {
            if (res.code === 2000) this.$refs.iframe.contentWindow.getPageData('getPageWindow')
            this.currentComponent = {}
            this.isMobileEditPanel = ''
            this.isLoading = false
          }).catch(() => { this.isLoading = false })
        } else {
          this.API.saveAppBanner(this.currentComponent.dataList, this.markDeleteImgId.join(',')).then(res => {
            if (res.code === 2000) this.$refs.iframe.contentWindow.getPageData('getPageSwitch')
            this.currentComponent = {}
            this.isMobileEditPanel = ''
            this.isLoading = false
          }).catch(() => { this.isLoading = false })
        }
      } else if (this.currentComponent.isGoods) {
        if (!this.currentComponent.dataList.length) {
          this.$notify.warning({
            message: '当前选择商品数据为空，请填写完整'
          })
          return false
        }
        this.isLoading = true
        this.API.saveAppProduct({
          goodsIds: this.currentComponent.dataList.map(item => item.id).join(','),
          sellerId: this.storeId,
          id: this.currentComponent.decorationAppProduct.id
        }).then(res => {
          if (res.code === 2000) this.$refs.iframe.contentWindow.getPageData('getPageGoods')
          this.currentComponent = {}
          this.isMobileEditPanel = ''
          this.isLoading = false
        }).catch(() => { this.isLoading = false })
      }
    },
    release () {
      this.$confirm('是否发布当前手机店铺版本?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.isLoading = true
        this.API.appOnlineVersion().then(res => {
          if (res.code === 2000) {
            this.$notify.success({ title: '成功', message: '发布成功' })
          } else {
            this.$notify.error({ title: '失败', message: res.message || '发布失败' })
          }
          this.isLoading = false
        }).catch(() => { this.isLoading = false })
      }).catch(() => {})
    },
    // 上传店招背景图
    uploadBgFile () {
      let uploadDom = document.getElementById('uploadBg')
      let uploadFiles = this.$refs.uploadBg.files
      let typeList = ['jpg', 'jpeg', 'png']
      if (typeList.length > 0 && typeList.indexOf(uploadFiles[0].type.split('/')[1]) < 0) {
        this.$notify.warning({
          title: '提示',
          message: '只支持jpg、jpeg、png图片格式'
        })
        uploadDom.value = ''
        return
      }
      this.isLoading = true
      let form = new FormData()
      form.append('file', uploadFiles[0])
      axios({
        method: 'post',
        url: process.env.BASE_API + '/shop/commonDataUpload/uploadFile',
        data: form,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': this.$cookies.get('st_token')
        }
      }).then(res => {
        if (res.data.code === 2000) {
          this.currentComponent.image = res.data.data
        } else {
          this.$notify.error({
            title: '提示',
            message: '上传图片失败请重新上传~~'
          })
        }
        this.isLoading = false
      }).catch(() => { this.isLoading = false })
    },
    // 设置图片的前奏
    frontBanner () {
      this.cropperBanner = this.isMobileEditPanel
      this.markList = JSON.parse(JSON.stringify(this.currentComponent.dataList))
    },
    // banner图片上传前的判断
    handleFilesUpload () {
      let uploadDom = document.getElementById('uploadID')
      let uploadFiles = this.$refs.uploadID.files
      let typeList = ['jpg', 'jpeg', 'png']
      if (typeList.length > 0 && typeList.indexOf(uploadFiles[0].type.split('/')[1]) < 0) {
        this.$notify.warning({
          title: '提示',
          message: '只支持jpg、jpeg、png图片格式'
        })
        uploadDom.value = ''
        return
      }
      this.uploadFilterWH(uploadFiles[0], this.markImgSize.width, this.markImgSize.height).then(res => {
        uploadDom.value = ''
        if (!res) {
          this.$notify.warning({
            title: '提示',
            message: '您上传的图片尺寸不符合要求，请重新上传'
          })
          return false
        } else {
          // 得到 base64 展示
          this.cropperImg = res.src
        }
      })
    },
    // 判断图片宽高
    uploadFilterWH (file, WIDTH = 1920, HEIGH = 1920) {
      return new Promise(resolve => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function (e) {
          // this.result 图片的base64数据
          let img = new Image()
          img.src = this.result
          img.onload = function () { // 事件是异步
            if (this.height < HEIGH || this.width < WIDTH) resolve(false)
            else resolve(this)
          }
        }
      })
    },
    // 保存截图
    saveCropImg () {
      this.isLoading = true
      this.$refs.cropper.getCropBlob(theBlob => {
        let fd = new FormData()
        let substr = guid() + 'bannerCrop.' + theBlob.type.split('/')[1]
        let temFile = new File([theBlob], substr, { type: theBlob.type })
        fd.append('file', temFile)
        axios({
          method: 'post',
          url: process.env.BASE_API + '/shop/commonDataUpload/uploadFile',
          data: fd,
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': this.$cookies.get('st_token')
          }
        }).then(res => {
          if (res.data.code === 2000) {
            this.markList[this.markIndex].url = res.data.data
          } else {
            this.$notify.error({
              title: '提示',
              message: '上传图片失败请重新上传~~'
            })
          }
          this.isLoading = false
          this.cropperImg = ''
        })
      })
    },
    // 新增图片
    addCropBanner () {
      if (this.markList.length < this.markNum) this.markList.push({ link: null, sellerId: this.storeId, url: null })
    },
    // banner图片上移
    upBannerImg (list, index) {
      this.$set(this.markList, index, this.markList[index - 1])
      this.$set(this.markList, index - 1, list)
    },
    // banner图片下移
    downBannerImg (list, index) {
      this.$set(this.markList, index, this.markList[index + 1])
      this.$set(this.markList, index + 1, list)
    },
    // banner图片删除
    deleteBannerImg (index) {
      if (this.markList[index].id) this.markDeleteImgId.push(this.markList[index].id)
      this.$delete(this.markList, index)
    },
    // banner图片商品链接
    cropperBannerGoods (index) {
      this.cropperGoods = this.isMobileEditPanel
      this.goodsData()
      this.pickNum = 1
      this.markIndex = index
    },
    // 确定上传banner
    btnCropperBanner () {
      for (let val of this.markList) {
        if (!val.url) {
          this.$message.error({
            message: '请上传图片'
          })
          return
        }
      }
      this.currentComponent.dataList = JSON.parse(JSON.stringify(this.markList))
      this.cropperBanner = ''
    },
    // 取消上传banner
    cancleCropperBanner () {
      this.markDeleteImgId = []
      this.cropperBanner = ''
    },
    // 商品列表
    goodsData () {
      this.API.getGoodsList({ goodsName: this.searchGoodsName, page: this.page, rows: this.rows, productTypeId: this.currentCate }).then(res => {
        this.storeGoods = res.data
        if (this.cropperBanner) this.pickList = []
        else this.pickList = JSON.parse(JSON.stringify(this.currentComponent.dataList))
      })
    },
    goodsResetData () {
      this.API.getGoodsList({ goodsName: this.searchGoodsName, page: this.page, rows: this.rows, productTypeId: this.currentCate }).then(res => {
        this.storeGoods = res.data
      })
    },
    // 选取数据产品
    chooseDeleteData (item) {
      if (this.pickList.indexOf(item) >= 0) {
        this.$delete(this.pickList, this.pickList.indexOf(item))
      } else {
        if (this.pickList.length < this.pickNum) this.pickList.push(item)
      }
    },
    // 时间戳转日期
    formatDate (val) {
      let date = new Date(val)
      let y = date.getFullYear()
      let m = date.getMonth()
      let d = date.getDate()
      return y + '-' + m + '-' + d
    },
    // 关闭选择产品
    closeCropGoods () {
      this.pickList = []
      this.initCropGoods()
    },
    // 初始化
    initCropGoods () {
      this.page = 1
      this.rows = 20
      this.searchGoodsName = ''
      this.pickNum = 12
      this.cropperGoods = ''
      this.currentCate = ''
    },
    // 确定选择产品
    btnCropGoods () {
      if (!this.pickList.length) {
        this.$notify.warning({
          message: '当前选择数据为空，请填写完整'
        })
        return false
      }
      let pickIdList = []
      this.pickList.forEach(item => {
        pickIdList.push(item.id)
      })
      // 作用于 产品
      if (!this.cropperBanner && this.cropperGoods) {
        Object.assign(this.currentComponent, { dataList: this.pickList })
      }
      // banner 选产品链接
      if (this.cropperBanner && this.cropperGoods) {
        this.markList[this.markIndex].link = this.WEBSITE + '/#/detail?goodsId=' + pickIdList[0]
      }
      this.initCropGoods()
    },
    // 选择商品变化
    goodsChange (event) {
      if (this.pickList.length > this.pickNum) {
        this.pickList.splice(this.pickNum, 1)
        event.target.checked = false
      }
    },
    // 显示3D 列表弹框
    cropperBanner3D (index) {
      this.cropper3D = this.isMobileEditPanel
      this.markIndex = index
      this.get3DData()
    },
    // 获取3D 商品列表
    get3DData () {
      this.API.get3DList({ page: this.threeD.page, rows: this.threeD.rows, goodsName: this.threeD.goodsName }).then(res => {
        this.storeRes3D = res.data
      })
    },
    // 关闭3D 列表弹框
    closeCropp3D () {
      this.threeD = { goodsName: '', rows: 21, page: 1 }
      this.markIndex = null
      this.cropper3D = ''
    },
    // 选择3D 展示
    select3D (item) {
      this.markList[this.markIndex].link = this.WEBSITE + '/#/3D/3DShow?homeShops=' + this.storeId + '&id=' + item.threeId + '&goodsId=' + item.id
      this.closeCropp3D()
    },
    cropperBannerLive (index) {
      this.markList[index].link = this.WEBSITE + '/#/live/factory?homeShops=' + this.storeId
    }
  }
}
</script>
<style scoped>
  .phone {
    width: 375px;
    margin: auto;
    margin-top: 50px;
    padding: 20px 0;
    height: 100%;
  }
  .phone_box {
    width: 100%;
    min-height: 100%;
    position: relative;
  }
  .phone_shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .phone_handle_box {
    border: 3px dashed #3089DC;
    width: 100%;
    left: 0;
    position: absolute;
    z-index: 1;
  }
  .phone_wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 100%;
    z-index: 2;
  }
  iframe {
    width: 100%;
    min-height: 100%;
    border: none;
  }
  .publish_box {
    position: absolute;
    top: 0;
    right: 40px;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,.1);
    height: 50px;
    color: #ef7026;
    font-size: 14px;
  }
  .publish_item {
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .publish_item + .publish_item {
    border-left: 1px solid #aba2a2;
  }
</style>
<style scoped lang="scss">
/* 变量 */
  $aside-theme-color: #ef7026;
  @mixin border($height,$width,$borderColor,$border-radio:0){
    width: $width;
    height:$height;
    text-align: center;
    line-height: $height;
    border: 1px solid $borderColor;
    border-radius:$border-radio ;
  }
  @mixin flex($flex-direction:row,$justify-content:space-around,$align-items:center){
    display: flex;
    flex-direction:$flex-direction;
    justify-content:$justify-content;
    align-items: $align-items;
  }
  @mixin redBorder($width,$height){
    width: $width;
    height:$height;
    line-height: $height;
    text-align: center;
    border: 1px solid #E53031;
    cursor: pointer;
  }
/* 编辑面板 */
  .handle_component_edit {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 8;
    .edit_panel {
      position: absolute;
      height: 100%;
      width: 300px;
      padding: 20px;
      top: 0;
      right: 0;
      opacity: 0;
      transform: translate(300px);
      transition: all .3s;
      background-color: #fff;
      .editor_panel_container {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        .editor_panel_title {
          flex-shrink: 0;
          order: 1;
          padding-bottom: 16px;
          border-bottom: 1px solid #dcdee3;
          display: flex;
          flex-direction: column;
          .editor_title {
            color: #333;
            font-size: 20px;
          }
          .editor_second_title {
            margin-top: 4px;
            color: #666;
            font-size: 14px;
          }
        }
        .editor_panel_con {
          padding-right: 3px;
          overflow-x: hidden;
          overflow-y: auto;
          order: 2;
        }
        .editor_panel_booth {
          order: 3;
          height: 45px;
          flex-shrink: 0;
        }
        .editor_panel_btn {
          display: flex;
          flex-shrink: 0;
          height: 38px;
          width: 100%;
          background: #fff;
          position: absolute;
          bottom: 0;
        }
      }
    }
    &>.transform { transform: translate(0); opacity: 1; }
  }
  .editor_btn_button {
    flex: 1 1 0%;
    margin: 0px 5px;
    height: 28px;
    padding: 0 16px;
    font-size: 14px;
    line-height: 23px;
    border-width: 1px;
    border: 1px solid rgb(192, 194, 203);
    background-color: $aside-theme-color;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
    &:first-child {
      color: #333;
      background-color: #fff;
      border-color: #c4c6cf;
      &:focus {
        background-color: #f5f7fa;
        border-color: #a0a2ad;
      }
    }
    &:last-child:focus { background-color: saturate($aside-theme-color, 100%); }
  }
/* 隐藏下边距 button 按钮 */
  .rec_goods_box {
    margin-top: 16px;
    margin: 10px 0;
    margin-bottom: 20px;
  }
  .rec_goods_box.bottom {
    border-bottom: 1px solid rgb(225, 225, 225);
  }
  .rec_goods_box.hidden_border {
    padding-bottom: 0;
    .checked .radio_inner {
      border-color: #c4c6cf;
    }
    .radio_inner {
      border-radius: initial;
      &::after {
        content: none;
      }
      .el-icon-check {
        color: $aside-theme-color;
        font-weight: 700;
      }
    }
  }

  .editor_btn_button.set_button {
    margin: 0;
    &:last-child:focus {
      background-color: initial
    }
    :hover {
      background-color: #f5f7fa;
      border-color: #a0a2ad;
    }
  }
  .editor_btn_button.set_button.select_goods {
    width: 100%;
  }
  .editor_btn_button.set_button.set_banner {
    color: #333;
    background-color: #fff;
    border-color: #c4c6cf;
    margin-top: 10px;
  }
  .set_sup {
    color: #e91e63;
    margin: 0 5px;
  }
  .set_img_show {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .set_img_show img {
    width: 115px;
    height: 60px;
    margin-top: 10px;
  }
  .wrapper {
    background: #000;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 998;
    transition: opacity .3s;
    opacity: 0.2;
  }
/* bannerBox */
  .notToday {
    color: #e4e7ed !important;
    cursor: not-allowed !important;
  }
  .set_con_banner {
    position: absolute;
    width: 900px;
    height: 600px;
    background: #fff;
    z-index: 999;
    left: calc(50vw - 900px/2);
    top: calc(50vh - 600px/2);
  }
  .set_con_banner_box {
    width: 100%;
    height: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 20px;
  }
  .set_con_banner_box .el-icon-close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .set_con_banner_title {
    height: 40px;
  }
  .set_con_banner_info {
    height: 490px;
    overflow-y: auto;
    position: relative;
  }
  .set_con_banner_handle {
    position: absolute;
    bottom: 15px;
    right: 20px;
  }
  .set_con_banner_row {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #333333;
    font-size: 14px;
  }
  .set_con_banner_row_con {
    align-items: flex-start;
    height: 85px;
    padding: 10px;
    background: #f7f8fa;
    border: 1px solid #dcdee3;
  }
  .set_con_banner_cell_img {
    width: 300px;
  }
  .set_con_banner_cell_img_upload {
    width: 230px;
    height: 65px;
    background-color: #F2F3F7;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .set_con_banner_cell_img_upload_con {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #9E9E9E;
  }
  .set_con_banner_cell_img_upload_con img {
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
  }
  .set_con_banner_cell_img_upload_reUpload {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 1s;
    opacity: 1;
    background-color: rgba(0,0,0,0.7);
    color: #ffffff;
    cursor: pointer;
    visibility: hidden;
  }
  .set_con_banner_cell_img_upload_con:hover .set_con_banner_cell_img_upload_reUpload {
    visibility: visible;
  }
  .set_con_banner_cell_img_upload_text {
    width: 100%;
    height: 100%;
    cursor: pointer;
    font-size: 20px;
    text-align: center;
    line-height: 65px;
  }
  .set_con_banner_cell_url {
    width: 330px;
  }
  .set_con_banner_cell_url_action {
    width: 90%;
    display: flex;
    align-items: center;
  }
  .set_con_banner_cell_url_action i {
    font-size: 20px;
  }
  .set_con_banner_cell_url_action /deep/ .el-button--mini {
    padding: 2px;
  }
  .set_con_banner_cell_url_con {
    color: #ccc;
    background-color: #F5F7FA;
    cursor: not-allowed;
    display: inline-table;
    overflow: visible;
    border: 1px solid #DAE2ED;
    transition: border 0.3s ease 0.1s;
    width: 240px;
    border-spacing: 0;
  }
  .set_con_banner_cell_url_popper {
    display: inline-block;
    cursor: pointer;
  }
  .set_con_banner_cell_url_popper_a {
    color: #333;
  }
  .set_con_banner_cell_set {
    flex: 1;
  }
  input:disabled {
    width: 100%;
    height: 21px;
    color: #ccc;
    border-color: #DAE2ED;
    background-color: #F5F7FA;
    cursor: not-allowed;
    padding: 0 8px;
  }
  .disabled {
    color: #E3e3e3 !important;
    cursor: not-allowed !important;
  }
  .set_con_banner_cell_set_action {
    width: 100%;
    height: 35px;
    display: flex;
  }
  .set_con_banner_cell_set_action_btn {
    width: 28px;
    height: 28px;
    margin-right: 5px;
    background-color: #f7f8fa;
    border: 1px solid #e0e2e7;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #999;
    font-size: 20px;
  }
  .action_btn_active {
    background-color: #fff;
    border-color: #d5d5d5;
    color: #333;
  }
  .set_con_banner_add_btn button{
    margin-left: 0px;
  }
  .set_con_banner_upload_tip {
    font-size: 14px;
    line-height: 17px;
    color: #777;
  }
  .set_con_banner_info_two {
    overflow-y: initial;
  }
  .set_con_banner_info_two_filter {
    display: flex;
    width: 360px;
  }
  .set_con_banner_info_two_other {
    width: 240px;
  }
  .set_con_banner_info_two_sort {
    display: flex;
    justify-content: flex-end;
    width: 260px;
  }
  .set_con_banner_info_two_select {
    width: 120px;
    height: 28px;
    border: 1px solid #aaa;
    border-radius: 4px;
    overflow: hidden;
    margin-right: 20px;
  }
.set_con_cropper {
  background: rgba(0, 0, 0, 0.2);
  .set_con_banner_box {
    position: absolute;
    background-color: #fff;
    left: calc(50% - 445px/2);
    top: calc(50% - 450px/2);
    width: 445px;
    height: 450px;
    .set_con_banner_title_tip {
      font-size: 12px;
      margin-left: 10px;
      color: red;
    }
    .set_con_cropper_con {
      flex-grow: 1;
      color: #333;
      .set_con_cropper_box {
        background-color: rgba(0, 0, 0, 0.5);
        height: 290px;
        width: 100%;
      }
      .set_con_cropper_reset {
        margin: 5px 0;
        font-size: 12px;
        cursor: pointer;
      }
    }
    .set_con_cropper_btn {
      border-top: 1px solid #E3e3e3;
      padding-top: 10px;
      text-align: center;
      button {
        background-color: #FF6A00;
        color: #fff;
      }
    }
  }
}
.loading_wrap {
  position: fixed;
  left: 50vw;
  top: 50vh;
  margin: auto;
  font-size: 32px;
  color: $aside-theme-color;
  z-index: 10000;
}
/* 弹框列表搜索框 */
  .set_box_store_search {
    width: 220px;
    text-align: left;
    display: flex;
    align-items: center;
    input {
      display: block;
      width: 168px;
      height: 28px;
      border-radius: 4px;
      text-decoration: none;
      border: none;
      border: 1px solid #aaa;
      -webkit-appearance: none;
      &:hover {
        outline: none;
      }
      &:focus {
        outline: none;
      }
    }
    input[type="search"]::-webkit-search-cancel-button {
      display: none;
    }
    .set_box_search_btn {
      padding-left: 10px;
      font-size: 20px;
      line-height: 28px;
      color: #333;
      cursor: pointer;
    }
  }
/* banner图片商品 */
  .pane-box{
    ul{
      display: flex;
      flex-direction: column;
      border:1px solid #D6D6D6;
      border-bottom: none;
      li{
        display: flex;
        align-items: center;
        padding-left: 20px;
        font-size: 14px;
        &>span{
          text-align: center;
          margin-right:30px;
        }
        &>span:nth-child(2){
          width:80px;
          margin-left: -10px;
        }
        &>span:nth-child(3){
          width:400px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        &>span:nth-child(4){
          width:130px;
        }
        &>span:nth-child(5){
          width:110px;
        }
      }
      &>li{
        height:89px;
        border-bottom: 1px solid #D6D6D6;
        flex-shrink: 0;
        &>span:nth-child(2){
          @include border(62px,62px,#E2E2E2);
          @include flex(row,center,center);
          img{
            max-width: 100%;
            max-height: 100%;
          }
        }
        &>span:last-child{
          border-radius: 2px;
        }
      }
    }
  }
  .pane-box.pane_box_title {
    ul {
      &>li:first-child{
        height:40px;
        border-bottom:1px solid #A2A2A2;
        font-size:14px;
        color:rgba(0,0,0,1);
        &>span:nth-child(2){
          display: initial;
          line-height: 16px;
          height: initial;
          border: none;
          cursor: initial;
        }
      }
    }
  }
  .pane_limit_height {
    max-height: 318px;
    overflow-y: auto;
    li:hover {
      background-color: rgba(238, 238, 238, 0.68);
    }
    &.pane_limit_goods li > span {
      margin-right: 25px;
    }
    &.pane_limit_goods li > span:last-child {
      margin-right: 0;
    }
    &.pane_limit_goods li > span:nth-child(3):hover {
      cursor: pointer;
      text-decoration: underline;
      color: $aside-theme-color;
    }
    .pane_good_img {
      cursor: pointer;
      position: relative;
      .t3D_play {
        position: absolute;
        top: 1px;
        z-index: 100;
        font-size: 36px;
        color: #404040;
        border-radius: 50%;
        line-height: 20px;
        width: 25px;
        height: 25px;
        left: initial;
        right: 1px;
        border: 1px solid transparent;
        cursor: pointer;
        &:hover {
          border: 1px solid rgba(64, 64, 64, 0.33);
        }
        &>img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
  .set_select_order {
    display: block;
    width: 700px;
    overflow-x: auto;
    overflow-y: hidden;
    ul{
      position: relative;
      width: 100%;
      display: inline-block;
      white-space: nowrap;
      .draggable {
        position: absolute;
        overflow-x: auto;
        top: 0;
        left: 0;
        display: flex;
      }
      li{
        @include border(66px,66px,#D8D8D8);
        background:rgba(247,247,247,1);
        border:1px dotted rgba(216,216,216,1);
        margin:6px 10px 8px 2px;
        font-size:18px;
        font-weight:500;
        font-style:italic;
        color:rgba(212,212,212,1);
        cursor: initial;
        position: relative;
        display: inline-block;
        img{
          max-height: 64px;
          max-width: 64px;
        }
        i{
          font-size: 16px;
          position: absolute;
          right: 2px;
          bottom: 2px;
          cursor: pointer;
          color: #989898;
          font-weight: bolder;
        }
        i:hover{
          color: #E43031;
        }
      }
    }
  }
  .video_pane_limit_height {
    flex-direction: initial !important;
    flex-wrap: wrap !important;
    max-height: 470px;
    height: 470px;
    li.video_li_pane_limit_height {
      width: 30%;
      height: 216px;
      display: flex;
      flex-direction: column;
      border: 1px solid transparent;
      margin-top: 15px;
      .video_pane_box {
        max-height: 150px;
        max-width: 200px;
      }
      .tD_item_box {
        height: 150px;
        width: 200px;
        .video_pane_box_img_box {
          width: 100%;
          height: 100%;
          .video_pane_box_img {
            max-width: 100%;
            max-height: 100%;
            margin: 0 auto;
          }
        }
      }
      .video_pane_title {
        width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 10px;
      }
    }
  }
</style>
