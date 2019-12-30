<template>
  <div class="video_con" :class="{'hasSetMobileMarBottom': !isSetMobileTag}">
    <div class="pagetag video_box">
      <div class="video_item">
        <div class="video_detail">
          <video
            id="videoTag"
            preload="metadata"
            width="100%"
            height="100%"
            controls="controls"
            :poster="pageVideo&&pageVideo.pic"
            :src="pageVideo&&pageVideo.url">
          </video>
        </div>
        <p class="video_title">工厂及产品3D展示</p>
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
                  v-if="item.threeId"
                  target="_blank"
                  class="t3D_play"
                  title="商品支持3D展示">
                  <img src="static/img/detail_play_3D.png">
                </a>
              </a>
              <p class="title">{{item.goodsName}}</p>
              <div class="tip">
                <span><span class="tip_price">￥{{item.priceShow}}</span><span class="tip_sales">成交{{item.salesCount||0}}笔</span></span>
                <div class="add_cart"><span>+</span></div>
              </div>
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
      pageGoods: {},
      pageVideo: {}
    }
  },
  mounted () {
    this.getPageVideo()
    this.getPageGoods()
    let video = document.getElementById('videoTag')
    // 存在视频数据时 => 解决视频高度不一致
    video.addEventListener('canplay', () => {
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
    })
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
    getPageGoods () {
      this.APIG.getAppProduct().then(res => {
        this.pageGoods = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageGoods, 'pageGoods')
        }
      })
    },
    getPageVideo () {
      this.APIG.getAppVideo().then(res => {
        this.pageVideo = res.data
        if (this.isSetMobileTag) {
          window.parent.getIframeInfo(this.pageVideo, 'pageVideo')
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .video_con {
    background-color: #fff;
    border-top: 0.02rem solid rgba(188,188,188, 0.23);
    .video_box {
      .video_item {
        .video_detail {
          margin: 0 auto;
          margin-top: 0.26rem;
          width: 6.81rem;
          video {
            border-radius: 0.31rem;
            box-shadow: 0 0 0.1rem 0.01rem #6b6767;
          }
        }
        .video_title {
          line-height: 1.4;
          padding: 0.1rem 0.26rem;
          width: 6.81rem;
          margin: 0 auto;
          color: #5F5F5F;
          font-size: 0.28rem;
          border-bottom: 0.02rem solid rgba(237,237,237,1);
        }
      }
      .video_item + .video_item {
        margin-top: 0.4rem;
      }
    }
  }
  .linear_img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .mobile_goods {
    background-color: #ffffff;
    padding: 0 0.16rem;
    padding-top: 0.4rem;
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
            border: 0.02rem solid rgba(220,220,220,1);
            border-radius: 0.05rem;
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
              align-items: center;
              color: #5F5F5F;
              padding: 0.16rem 0.08rem 0.08rem 0.08rem;
              border-top: 0.02rem dashed #bdbcbc;
              &>span {
              }
              .tip_price {
                color: #FF2F2F;
                font-size: 0.3rem;
                font-weight:bold;
              }
              .tip_sales {
                margin-left: 0.1rem;
                color: #B6B6B6;
                font-size: 0.16rem;
                line-height: 1;
              }
              .add_cart {
                width: 0.3rem;
                height: 0.3rem;
                background-color: rgba(231,22,0,1);
                border-radius: 50%;
                color: #FFFFFF;
                font-size: 0.31rem;
                position: relative;
                &>span {
                  position: absolute;
                  top: 50%;
                  margin-left: 0.03rem;
                  transform: translate3d(0, calc(-50% - 0.01rem), 0);
                  line-height: 1;
                }
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
  .hasSetMobileMarBottom {
    padding-bottom: 1.2rem;
  }
  .t3D_play {
    position: absolute;
    bottom: 8px;
    z-index: 8;
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
