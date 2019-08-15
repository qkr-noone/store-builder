<template>
  <div data-attr="手机端" class="container">
    <div class="iframe_box">
      <div>
        <div data-attr="店招" class="pagetag mobile_header">
          <div class="mobile_header_a_box">
            <img class="linear_img" :src="pageSign.image">
          </div>
          <div class="mobile_header_title_box">
            <div class="mobile_header_title">
              <img src="static/img/component/1.png">
              <div class="mobile_header_name_title">
                <p>新兴脚轮源头工厂</p>
                <div class="mobile_header_series_title">
                  <a class="star" v-for="i in 3" :key="i">
                    <img src="static/img/shops/star.png">
                    <span class="mobile_header_A_title">A</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="mobile_header_star">
              <div class="mobile_header_fans_star">
                <a href="">
                  <span>101</span>
                  <p>{{''||'千'||'万'}}粉丝</p>
                </a>
                <a href="">
                  <img src="static/img/shops/star_black.png">
                  <p>已收藏</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-attr="头部导航" class="pagetag mobile_nav">
          <div class="mobile_nav_item active">
            <a href=""><img class="linear_img" src="static/img/shops/nav_home.png"></a>
            <p>首页</p>
          </div>
          <div class="mobile_nav_item">
            <a href=""><img class="linear_img" src="static/img/shops/nav_all.png"></a>
            <p>全部商品</p>
          </div>
          <div class="mobile_nav_item">
            <a href=""><img class="linear_img" src="static/img/shops/nav_video.png"></a>
            <p>工厂视频</p>
          </div>
          <div class="mobile_nav_item">
            <a href=""><img class="linear_img" src="static/img/shops/nav_bag.png"></a>
            <p>活动</p>
          </div>
        </div>
        <div data-attr="大图轮播" class="pagetag mobile_switch">
          <div class="mobile_switch_box">
            <div class="mobile_switch_item">
              <a href="">
                <img class="linear_img" src="static/img/tem_bg.jpg">
              </a>
            </div>
          </div>
        </div>
        <div data-attr="橱窗推荐" class="pagetag mobile_recom">
          <div class="mobile_recom_title">
            <p>橱窗推荐</p>
          </div>
          <div class="mobile_recom_con">
            <a href="">
              <img class="linear_img" src="static/img/tem_bg.jpg">
            </a>
          </div>
        </div>
        <div data-attr="产品推荐" class="pagetag mobile_goods">
          <div class="mobile_goods_title">
            <p>产品推荐</p>
          </div>
          <div class="mobile_goods_con">
            <div class="mobile_goods_con_box">
              <ul>
                <li v-for="i in 7" :key="i">
                  <a href="">
                    <img class="linear_img" src="static/img/component/3.png">
                  </a>
                  <p class="title">双USB汽车充电器 车载点烟器车充 快充车充</p>
                  <div class="tip"><span class="tip_price">￥11.11</span><span>成交123笔</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div data-attr="底部导航" class="pagetag mobile_footer">
          <a href="">商品分类</a>
          <a href="">公司介绍</a>
          <a href="">深度验厂</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pageTag: [],
      pageSign: {
        id: '12',
        image: 'static/img/tem_bg.jpg',
        isSign: 1,
        sellerId: 'conghuaxinxing'
      },
      pageSwitch: {
        isBanner: 1,
        componentId: '121',
        id: '186'
      }
    }
  },
  created () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.50 + 'px' // 设计稿 750 放大 100倍
  },
  mounted () {
    let page = document.querySelectorAll('.pagetag')
    Array.from(page).map(item => {
      this.pageTag.push({ height: item.offsetHeight, top: item.offsetTop })
    })
    // console.log(window.parent, 10)
    // if (window.parent) {
    //   window.parent.getIframeInfo(this.pageTag, 'pageTag')
    //   window.parent.getIframeInfo(this.pageSign, 'pageSign')
    //   window.parent.getIframeInfo(this.pageSwitch, 'pageSwitch')
    // }
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
    max-width: 750px;
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
          font-size: 0.32rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            overflow: hidden;
            white-space: nowrap;
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
              .mobile_header_A_title {
                position: absolute;
                left: 45%;
                top: 40%;
                color: #936500;
                font-size: 0.2rem;
                transform: translate3d(-50%, -50%, 0);
                line-height: 1;
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
        height: 0.6rem
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
    margin: 0.3rem 0;
    .mobile_switch_box {
      .mobile_switch_item {
        a {
          width: 7.5rem;
          height: 3.75rem;
          display: block;
        }
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
      a {
        display: block;
        width: calc(100vw - 0.4rem);
        height: 2.40rem;
      }
    }
  }
  .mobile_goods {
    background-color: #ffffff;
    padding: 0 0.16rem;
    padding-bottom: 0.62rem;
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
            a {
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
    /* position: fixed; */
    bottom: -0.02rem;
    left: 0;
    right: 0;
    z-index: 10000;
    background-color: #ffffff;
    border-top: 0.02rem solid #D7D7D7;
    display: flex;
    a {
      flex: 1;
      color: #5F5F5F;
      font-size: 0.28rem;
      text-align: center;
      height: 0.97rem;
      line-height: 1rem;
      display: block;
      background-color: #ffffff;
      &+a {
        border-left: 0.02rem solid #D7D7D7;
      }
    }
  }
</style>
