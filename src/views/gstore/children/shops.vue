<template>
  <div>
    <div data-attr="大图轮播" class="pagetag mobile_switch">
      <div class="mobile_switch_box">
        <el-carousel :interval="4000" arrow="never" indicator-position="" height="100%">
          <el-carousel-item v-for="item in pageSwitch.dataList" :key="item.id" class="mobile_switch_item">
            <a>
              <img :src="item.url" class="linear_img">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div data-attr="橱窗推荐" class="pagetag mobile_recom">
      <div class="mobile_recom_title">
        <p>Gallery Featured</p>
      </div>
      <div class="mobile_recom_con">
        <el-carousel :interval="4000" arrow="never" indicator-position="none" height="100%">
          <el-carousel-item v-for="item in pageWindow.dataList" :key="item.id">
            <a>
              <img :src="item.url" class="linear_img">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div data-attr="产品推荐" class="pagetag mobile_goods" :class="{'hasSetMobileBottom': isSetMobileTag}">
      <div class="mobile_goods_title">
        <p>Product recommendation</p>
      </div>
      <div class="mobile_goods_con">
        <div class="mobile_goods_con_box">
          <ul>
            <li v-for="item in pageGoods.dataList" :key="item.id">
              <a class="mobile_goods_con_a">
                <img class="linear_img" :src="item.imagesCover">
                <a
                  :to="{path: '/3D/3Dshow',query:{ id: item.threeId,homeShops: storeId,goodsId: item.id}}"
                  v-if="item.threeId"
                  target="_blank"
                  class="t3D_play"
                  :title="$t('home.productSupportsDisplay')">
                  <img src="static/img/detail_play_3D.png">
                </a>
              </a>
              <p class="title">{{item.goodsName}}</p>
              <div class="tip"><p class="tip_price">{{item.priceUnit}}{{item.priceShow}}</p></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      storeId: this.$route.query.storeId || '',
      isSetMobileTag: this.$route.query.setmobiletag,
      pageSwitch: [],
      pageWindow: {},
      pageGoods: {}
    }
  },
  mounted () {
    this.getPageSwitch()
    this.getPageWindow()
    this.getPageGoods()
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
  methods: {
    getPageSwitch () {
      this.APIG.getAppBanner().then(res => {
        this.pageSwitch = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageSwitch, 'pageSwitch')
        }
      })
    },
    getPageWindow () {
      this.APIG.getAppWindow().then(res => {
        this.pageWindow = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageWindow, 'pageWindow')
        }
      })
    },
    getPageGoods () {
      this.APIG.getAppProduct().then(res => {
        this.pageGoods = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageGoods, 'pageGoods')
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .linear_img {
    width: 100%;
    height: 100%;
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
    padding-top: 0.4rem;
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
      padding: 0.23rem 0.06rem 0.24rem 0.06rem;
      .mobile_goods_con_box {
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: calc(50% - 0.13rem);
            margin-bottom: 0.24rem;
            &:nth-child(odd) {
              margin-right: 0.13rem
            }
            &:nth-child(even) {
              margin-left: 0.13rem
            }
            .mobile_goods_con_a {
              position: relative;
              width: calc(100% - 0.02rem);
              height: calc(50vw - 0.15rem - 0.22rem);
              overflow: hidden;
              display: block;
              background-image: url(/static/img/bg_160.png);
              background-size: contain;
            }
            .title {
              line-height: 0.33rem;
              height: 0.64rem;
              overflow: hidden;
              font-size: 0.24rem;
              color: #666666;
              width: 100%;
              display: block;
              padding: 0 0.1rem;
              margin-top: 0.06rem;
              margin-bottom: 0.09rem;
            }
            .tip {
              color: #333333;
              padding: 0.13rem 0.08rem 0.08rem;
              .tip_price {
                font-size: 0.3rem;
                margin-bottom: 0.04rem;
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
</style>
