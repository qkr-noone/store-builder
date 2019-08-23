<template>
  <div data-attr="手机端" class="container" ref="mobileTag">
    <div class="iframe_box">
      <div>
        <div data-attr="店招" class="pagetag mobile_header">
          <div class="mobile_header_a_box">
            <img class="linear_img" :src="pageSign.image">
          </div>
          <div class="mobile_header_title_box">
            <div class="mobile_header_title">
              <img :src="sellerInfo.logoPic">
              <div class="mobile_header_name_title">
                <p>{{sellerInfo.name}}</p>
                <div class="mobile_header_series_title">
                  <a class="star" v-for="i in 3" :key="i">
                    <img src="static/img/shops/star.png">
                  </a>
                </div>
              </div>
            </div>
            <div class="mobile_header_star">
              <div class="mobile_header_fans_star">
                <a>
                  <span v-if="sellerInfo.sellerFans">{{filterNum(sellerInfo.sellerFans)}}</span>
                  <p>{{((sellerInfo.sellerFans+'').length>8&&'亿')||((sellerInfo.sellerFans+'').length>4&&'万')||((sellerInfo.sellerFans+'').length>3&&'千')||''}}粉丝</p>
                </a>
                <a>
                  <img src="static/img/shops/star_black.png">
                  <p>已收藏</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-attr="头部导航" class="pagetag mobile_nav" id="navTag" :class="{'scroll_top': navHeight}">
          <div class="mobile_nav_item active">
            <a><i class="iconfont sb-icon-_h5_shop_home"></i></a>
            <p>首页</p>
          </div>
          <div class="mobile_nav_item">
            <a><i class="iconfont sb-icon-_h5_shop_all"></i></a>
            <p>全部商品</p>
          </div>
          <div class="mobile_nav_item">
            <a><i class="iconfont sb-icon-_h5_shop_video"></i></a>
            <p>工厂视频</p>
          </div>
          <div class="mobile_nav_item">
            <a><i class="iconfont sb-icon-_h5_shop_activity"></i></a>
            <p>活动</p>
          </div>
        </div>
        <div data-attr="大图轮播" class="pagetag mobile_switch" :style="'margin-top:'+navHeight+'px;'">
          <div class="mobile_switch_box">
            <el-carousel :interval="4000" arrow="never" indicator-position="" height="100%">
              <el-carousel-item v-for="item in pageSwitch.dataList" :key="item.id" class="mobile_switch_item">
                <a :href="item.link || null">
                  <img :src="item.url" class="linear_img">
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div data-attr="橱窗推荐" class="pagetag mobile_recom">
          <div class="mobile_recom_title">
            <p>橱窗推荐</p>
          </div>
          <div class="mobile_recom_con">
            <el-carousel :interval="4000" arrow="never" indicator-position="none" height="100%">
              <el-carousel-item v-for="item in pageWindow.dataList" :key="item.id">
                <a :href="item.link || null">
                  <img :src="item.url" class="linear_img">
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div data-attr="产品推荐" class="pagetag mobile_goods" :class="{'hasSetMobileBottom': isSetMobileTag}">
          <div class="mobile_goods_title">
            <p>产品推荐</p>
          </div>
          <div class="mobile_goods_con">
            <div class="mobile_goods_con_box">
              <ul>
                <li v-for="item in pageGoods.dataList" :key="item.id">
                  <a class="mobile_goods_con_a">
                    <img class="linear_img" :src="item.smallPic">
                    <a
                      :to="{path: '/3D/3Dshow',query:{ id: item.threeId,homeShops: storeId,goodsId: item.id}}"
                      v-if="item.threeId"
                      target="_blank"
                      class="t3D_play"
                      title="商品支持3D展示">
                      <img src="static/img/detail_play_3D.png">
                    </a>
                  </a>
                  <p class="title">{{item.goodsName}}</p>
                  <div class="tip"><span class="tip_price">￥{{item.priceShow}}</span><span>成交{{item.salesCount||0}}笔</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div data-attr="底部导航" class="pagetag mobile_footer" :class="{'hasSetMobile': isSetMobileTag}">
          <a>商品分类</a>
          <a>公司介绍</a>
          <a class="mobile_footer_factory">深度验厂</a>
        </div>
      </div>
    </div>
    <!-- 加载loading -->
    <div class="loading_wrap" v-show="isLoading"><i class="el-icon-loading"></i></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      storeId: this.$route.query.storeId || '',
      isSetMobileTag: this.$route.query.setmobiletag,
      sellerInfo: {},
      pageSign: {},
      pageSwitch: [],
      pageWindow: {},
      pageGoods: {},
      navHeight: 0,
      isLoading: true
    }
  },
  created () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.50 + 'px' // 设计稿 750 放大 100倍
  },
  watch: {
    pageGoods (val) {
      this.$nextTick(() => {
        let page = document.querySelectorAll('.pagetag')
        let pageTag = []
        Array.from(page).map(item => {
          pageTag.push({ height: item.offsetHeight, top: item.offsetTop })
        })
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(pageTag, 'pageTag')
          window.parent.getIframeInfo(document.documentElement.offsetHeight, 'autoHeight')
        }
      })
    }
  },
  mounted () {
    this.getPageTag()
    this.getPageSwitch()
    this.getPageWindow()
    this.getPageGoods()
    // 商家信息
    this.API.getSeller({ name: this.storeId }).then(res => {
      this.sellerInfo = res.data.seller
    })

    window.getPageData = function (tagName) {
      this[tagName]()
    }.bind(this)
    let navDom = document.getElementById('navTag').getBoundingClientRect()
    document.addEventListener('scroll', () => {
      if (navDom.top <= document.documentElement.scrollTop) {
        this.$nextTick(() => {
          this.navHeight = navDom.height
        })
      } else {
        this.$nextTick(() => {
          this.navHeight = 0
        })
      }
    })
    this.isLoading = false
  },
  methods: {
    getPageTag () {
      this.API.getAppSign().then(res => {
        this.pageSign = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageSign, 'pageSign')
        }
      })
    },
    getPageSwitch () {
      this.API.getAppBanner().then(res => {
        this.pageSwitch = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageSwitch, 'pageSwitch')
        }
      })
    },
    getPageWindow () {
      this.API.getAppWindow().then(res => {
        this.pageWindow = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageWindow, 'pageWindow')
        }
      })
    },
    getPageGoods () {
      this.API.getAppProduct().then(res => {
        this.pageGoods = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageGoods, 'pageGoods')
        }
      })
    },
    filterNum (data) {
      let num = data ? data + '' : ''
      if (num.length > 8) {
        return num.slice(0, -8)
      } else if (num.length > 4) {
        return num.slice(0, -4)
      } else if (num.length > 3) {
        return num.slice(0, -3)
      } else {
        return num
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .container {
    width: 100%;
    background-color: #EDEDED;
  }
  .iframe_box {
    width: 100%;
    min-height: 100%;
    border: none;
  }
  .linear_img {
    width: 100%;
    height: 100%;
  }
  .mobile_header {
    position: relative;
    background-color: #ffffff;
    .mobile_header_a_box {
      width: 7.5rem;
      height: 3.75rem;
      overflow: hidden;
    }
    .mobile_header_title_box {
      position: absolute;
      bottom: 0.1rem;
      left: 0.1rem;
      right: 0;
      display: flex;
      justify-content: space-between;
      .mobile_header_title {
        display: flex;
        img {
          width: 1.12rem;
          height: 1.12rem;
        }
        .mobile_header_name_title {
          margin-left: 0.12rem;
          margin-right: 0.1rem;
          color: #ffffff;
          text-shadow: 0 0.02rem 0.01rem rgba(0, 0, 0, 1);
          font-size: 0.28rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 4rem;
          }
          .mobile_header_series_title {
            display: flex;
            .star {
              width: 0.5rem;
              height: 0.5rem;
              margin-right: 0.06rem;
              position: relative;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      .mobile_header_star {
        display: flex;
        align-items: center;
        .mobile_header_fans_star {
          display: flex;
          a {
            width: 0.9rem;
            height: 0.86rem;
            color: #ffffff;
            font-size: 0.28rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 0.1rem 0;
            img {
              width: 0.27rem;
              height: 0.25rem;
            }
            &:first-child {
              background-color: #E26A09;
            }
            &:last-child {
              background-color: #464646;
            }
            &>* {
              line-height: 1;
            }
          }
        }
      }
    }
  }
  .mobile_nav {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    background-color: #ffffff;
    border-bottom: 0.3rem solid transparent;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    .mobile_nav_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #5f5F5F;
      font-size: 0.28rem;
      padding-top: 0.24rem;
      padding-bottom: 0.2rem;
      border-bottom: 0.04rem solid transparent;
      width: 1.2rem;
      a {
        width: 0.6rem;
        height: 0.6rem;
        line-height: 1;
        i {
          font-size: 0.6rem;
        }
      }
      p {
        margin-top: 0.14rem;
      }
      &.active {
        color: #D62722;
        border-bottom-color: #D62722;
      }
    }
  }
  .scroll_top {
    border-bottom: none;
    position: fixed;
    box-shadow: 0 1px 5px 2px rgba(0,0,0,0.08);
  }
  .mobile_switch {
    background-color: #ffffff;
    margin-bottom: 0.3rem;
    .mobile_switch_box {
      width: 7.5rem;
      height: 3.75rem;
      .mobile_switch_item {
        width: 100%;
        height: 100%;
        a {
          height: 100%;
          width: 100%;
          display: block;
        }
      }
      .el-carousel {
        height: 100%;
      }
    }
  }
  .mobile_recom {
    background-color: #ffffff;
    padding: 0 0.16rem;
    .mobile_recom_title {
      font-size: 0.27rem;
      padding-top: 0.14rem;
      color: #5f5F5F;
      padding-bottom: 0.07rem;
      border-bottom: 0.01rem solid #D7D7D7;
      p {
        font-weight: initial;
        line-height: 1;
      }
    }
    .mobile_recom_con {
      padding: 0.23rem 0.04rem 0.24rem 0.04rem;
      height: 2.87rem;
      a {
        display: block;
        width: calc(100vw - 0.4rem);
        height: 2.40rem;
      }
      .el-carousel {
        height: 100%;
      }
    }
  }
  .mobile_goods {
    background-color: #ffffff;
    padding: 0 0.16rem;
    padding-bottom: 1.2rem;
    .mobile_goods_title {
      font-size: 0.27rem;
      padding-top: 0.14rem;
      color: #5f5F5F;
      padding-bottom: 0.07rem;
      border-bottom: 0.01rem solid #D7D7D7;
      p {
        font-weight: initial;
        line-height: 1;
      }
    }
    .mobile_goods_con {
      padding: 0.23rem 0.04rem 0.24rem 0.04rem;
      .mobile_goods_con_box {
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: calc(50% - 0.04rem);
            margin-bottom: 0.09rem;
            &:nth-child(odd) {
              margin-right: 0.04rem
            }
            &:nth-child(even) {
              margin-left: 0.04rem
            }
            .mobile_goods_con_a {
              position: relative;
              width: 100%;
              height: calc(50vw - 0.04rem - 0.16rem);
              overflow: hidden;
              display: block;
            }
            .title {
              line-height: 0.32rem;
              height: 0.64rem;
              overflow: hidden;
              font-size: 0.23rem;
              color: #5F5F5F;
              width: 100%;
              display: block;
              padding: 0 0.1rem;
              margin-top: 0.06rem;
              margin-bottom: 0.09rem;
            }
            .tip {
              display: flex;
              justify-content: space-between;
              font-size: 0.23rem;
              color: #5F5F5F;
              padding: 0.19rem 0.08rem 0.1rem 0.08rem;
              border-top: 0.01rem dashed #9A9A9A;
              .tip_price {
                color: #FF2F2F;
              }
            }
          }
        }
      }
    }
  }
  .hasSetMobileBottom {
    padding-bottom: 0.2rem;
  }
  .mobile_footer {
    position: fixed;
    bottom: -0.02rem;
    left: 0;
    right: 0;
    z-index: 10000;
    background-color: #ffffff;
    border-top: 0.02rem solid #D7D7D7;
    display: flex;
    &>a {
      flex: 1;
      color: #5F5F5F;
      font-size: 0.28rem;
      text-align: center;
      height: 0.97rem;
      line-height: 1rem;
      background-color: #ffffff;
      position: relative;
      &+a {
        border-left: 0.02rem solid #D7D7D7;
      }
      &.mobile_footer_factory:before {
        position: absolute;
        left: 50%;
        top: 0.22rem;
        transform: translate3d(-50%, -50%, 0);
        content: '=';
        line-height: 1;
        color: #BDBDBD;
      }
    }
  }
  .hasSetMobile {
    position: initial;
  }
  .t3D_play {
    position: absolute;
    bottom: 8px;
    z-index: 100;
    font-size: 36px;
    color: #404040;
    border-radius: 50%;
    line-height: 35px;
    width: 45px;
    height: 45px;
    left: initial;
    right: 6px;
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
  .loading_wrap {
    position: fixed;
    left: 50vw;
    top: 50vh;
    margin: auto;
    font-size: 32px;
    color: ef7026;
    z-index: 10000;
  }
</style>
