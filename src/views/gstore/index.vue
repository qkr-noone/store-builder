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
                <div class="mobile_header_series_title"></div>
              </div>
            </div>
            <div class="mobile_header_star">
              <a>Follow</a>
            </div>
          </div>
        </div>
        <div data-attr="头部导航" class="pagetag mobile_nav">
          <div class="mobile_nav_item" :class="{'active': navPath==='shop'}">
            <a><i class="iconfont sb-icon-_g_home"></i></a>
            <p>Home</p>
          </div>
          <div class="mobile_nav_item" :class="{'active': navPath==='shop_auction'}">
            <a><i class="iconfont sb-icon-_g_product"></i></a>
            <p>Product</p>
          </div>
          <div class="mobile_nav_item" :class="{'active': navPath==='shop_dynamic'}">
            <a><i class="iconfont sb-icon-_g_profile"></i></a>
            <p>Profile</p>
          </div>
          <div class="mobile_nav_item" :class="{'active': navPath==='shop_video'}">
            <a><i class="iconfont sb-icon-_g_video"></i></a>
            <p>Video</p>
          </div>
        </div>
        <transition>
          <router-view ref="shopPage"></router-view>
        </transition>
        <div data-attr="底部导航" class="pagetag mobile_footer" :class="{'hasSetMobile': isSetMobileTag}">
          <a><span>Chat Now</span></a>
          <a><span>Factory Live</span></a>
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
      isLoading: true,
      navPath: 'shop'
    }
  },
  mounted () {
    this.getPageTag()
    // 商家信息
    this.APIG.getSeller({ name: this.storeId }).then(res => {
      this.sellerInfo = res.data.seller
    })

    window.getPageData = function (tagName) {
      this[tagName]()
    }.bind(this)
    this.isLoading = false
  },
  watch: {
    $route (newV) {
      this.navPath = newV.path.split('/')[2]
    }
  },
  methods: {
    getPageTag () {
      this.APIG.getAppSign().then(res => {
        this.pageSign = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageSign, 'pageSign')
        }
      })
    },
    getPageSwitch () {
      this.$refs.shopPage.getPageSwitch()
    },
    getPageWindow () {
      this.$refs.shopPage.getPageWindow()
    },
    getPageGoods () {
      this.$refs.shopPage.getPageGoods()
    },
    getPageVideo () {
      this.$refs.shopPage.getPageVideo()
    }
  }
}
</script>
<style>
  html {
    font-size: calc(100vw / 7.5);
  }
</style>
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
    background-color: #ffffff;
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
      right: 0.1rem;
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
          }
        }
      }
      .mobile_header_star {
        a {
          color: #ffffff;
          padding: 0.12rem 0.2rem;
          background-color: #CC3434;
          border-radius: 0.26rem;
        }
      }
    }
  }
  .mobile_nav {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    background-color: #ffffff;
    border-bottom: 0.3rem solid #EDEDED;
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
  .mobile_footer {
    position: fixed;
    bottom: 0.22rem;
    left: 0;
    right: 0;
    z-index: 10000;
    background-color: #ffffff;
    display: flex;
    padding: 0 0.12rem;
    &>a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      color: #FFFFFF;
      font-size: 0.42rem;
      text-align: center;
      height: 0.97rem;
      background-color: #FFC000;
      position: relative;
      border-radius: 0.4rem;
      i {
        line-height: 1;
        font-size: 0.44rem;
      }
      span {
        margin-top: 0.04rem;
        line-height: 1;
      }
      &+a {
        background-color: #FF0000;
        margin-left: 0.12rem;
      }
    }
  }
  .hasSetMobile {
    position: initial;
    margin-bottom: 0.22rem;
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
    color: #ef7026;
    z-index: 10000;
  }
</style>
