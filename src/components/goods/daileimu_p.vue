<template>
  <div id="daileimu_p">
    <div class="col_item">
      <div class="col_item_title">desa</div>
      <div class="col_item_more"><a href="" target="_blank"><button type="button" class="col_item_btn">mire</button></a></div>
    </div>
    <div class="col_main">
      <div class="col_main_card">
        <a class="product_img" href=""><div class="product_img_box"><img class="product_img_con" src="static/img/tem.jpeg"></div></a>
        <div class="product_info">
          <div class="product_title"><a href="" class="product_word"><span>1234567890876543221345612345678908765432213456乁3213456乁321345612345678908765432213456乁3213456</span></a></div>
          <div class="product_price">1212</div>
          <div class="col_main_more"><a href=""><button type="button" class="col_main_btn">查看更多</button></a></div>
        </div>
      </div>
    </div>
    <div class="col_main col_sub">
      <div class="col_sub_item">
        <div class="col_sub_card col_main_card">
          <a class="col_sub_img product_img" href="">
            <div class="product_img_box">
              <img class="product_img_con" src="static/img/tem.jpeg">
            </div>
          </a>
          <div class="product_info">
            <div class="product_title"><a href="" class="product_word"><span>1234567890876543221345612345678908765432213456乁3213456乁321345612345678908765432213456乁3213456</span></a></div>
            <div class="product_price">1212</div>
            <div class="product_price pro_n_sale">已售出<span>1213123</span>笔</div>
          </div>
        </div>
      </div>
      <div class="col_sub_item">
        <div class="col_sub_card col_main_card">
          <a class="col_sub_img product_img" href="">
            <div class="product_img_box">
              <img class="product_img_con" src="static/img/tem.jpeg">
            </div>
          </a>
          <div class="product_info">
            <div class="product_title"><a href="" class="product_word"><span>1234567890876543221345612345678908765432213456乁3213456乁321345612345678908765432213456乁3213456</span></a></div>
            <div class="product_price">1212</div>
            <div class="product_price pro_n_sale">已售出<span>1213123</span>笔</div>
          </div>
        </div>
      </div>
      <div class="col_sub_item">
        <div class="col_sub_card col_main_card">
          <a class="col_sub_img product_img" href="">
            <div class="product_img_box">
              <img class="product_img_con" src="static/img/tem.jpeg">
            </div>
          </a>
          <div class="product_info">
            <div class="product_title"><a href="" class="product_word"><span>1234567890876543221345612345678908765432213456乁3213456乁321345612345678908765432213456乁3213456</span></a></div>
            <div class="product_price">1212</div>
            <div class="product_price pro_n_sale">已售出<span>1213123</span>笔</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'daileimu_p',
  data () {
    return {
    }
  },
  methods: {
  }
}

</script>
<style lang="scss" scoped>
/* 主题颜色 #141414 */
  #daileimu_p {
    width: 1226px;
    border: 1px solid #dbe3ef;
    display: flex;
    flex-wrap: nowrap;
    .col_item{
      padding: 20px;
      background: #f7f8fa;
      width: 25%;
      max-width: 25%;
      flex: 0 0 25%;
      .col_item_title {
        color: #141414;
        font-size: 22px;
        line-height: 28px;
        font-weight: bold;
        margin-bottom: 50px;
        text-align: center;
      }
      .col_item_more {
        margin: 50px 0 30px;
        text-align: center;
        .col_item_btn {
          margin: 0;
          height: 40px;
          padding: 0 20px;
          color: #333;
          font-size: 18px;
          line-height: 38px;
          border: 1px solid #c4c6cf;
          background-color: transparent;
        }
      }
    }
    .col_main {
      padding: 20px;
      border-left: 1px solid #dbe3ef;
      border-right: 1px solid #dbe3ef;
      width: 37.5%;
      max-width: 37.5%;
      flex: 0 0 37.5%;
      text-align: center;
      .col_main_card, .col_sub_card {
        width: 280px;
        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        line-height: 16px;
        text-align: left;
        .product_img {
          margin-bottom: 13px;
          display: block;
          .product_img_box {
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: relative;
            .product_img_con {
              display: block;
              max-width: 100%;
              max-height: 100%;
            }
          }
        }
        .product_info {
          color: #666;
          overflow: hidden;
          width: 100%;
          .product_title {
            width: 100%;
            max-height: 38px;
            white-space: normal;
            line-height: 20px;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            .product_word {
              color: #333;
              word-break: break-all;
              &:hover {
                color: #ef7026;
                text-decoration:underline;
              }
            }
          }
          .product_price {
            color: #333;
            font-weight: 700;
            margin-top: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .col_main_more {
            margin-top: 35px;
            .col_main_btn {
              width: 80%;
              max-width: 200px;
              height: 40px;
              padding: 0 20px;
              color: #333;
              border: 1px solid #c4c6cf;
              background-color: transparent;
            }
          }
        }
      }
    }
    .col_item .col_item_btn:hover, .col_main .col_main_btn:hover {
      cursor: pointer;
      color: #333 !important;
      background-color: rgba(0,0,0,.03) !important;
    }
    .col_sub {
      width: 37.5%;
      max-width: 37.5%;
      flex: 0 0 37.5%;
      border: none;
      padding: 0;
      .col_sub_item {
        padding: 20px;
        &:nth-child(n+2) {
          border-top: 1px solid #dbe3ef;
        }
        .col_sub_card {
          display: flex;
          flex-wrap: nowrap;
          white-space: nowrap;
          width: initial;
          .product_img {
            margin-bottom: 0;
            flex-shrink: 0;
            width: 140px;
            height: 140px;
          }
          .product_info {
            margin-left: 12px;
            .product_price {
              margin-top: 12px;
              &.pro_n_sale {
                color: #999;
                margin-top: 5px;
                font-weight: initial;
                span {
                  color: #c97;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
