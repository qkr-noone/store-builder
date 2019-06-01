<template>
  <div id="zhongdiantuijian_p">
    <table>
      <tr>
        <td rowspan="2" class="product_item col_main">
          <div class="col_main_card">
            <a class="product_img product_big_img" href=""><div class="product_img_box"><img class="product_img_con" src="static/img/tem.jpeg"></div></a>
            <div class="product_info product_big_info">
              <div class="product_title"><a href="" class="product_word"><span>1234567890876543221345612345678908765432213456乁3213456乁321345612345678908765432213456乁3213456</span></a></div>
              <div class="product_price">1212</div>
              <div class="col_main_more"><a href=""><button type="button" class="col_main_btn">查看更多</button></a></div>
            </div>
          </div>
        </td>
        <td class="product_item">
          <div class="product_small col_main_card">
            <a class="product_img" href="">
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
        </td>
        <td rowspan="2" class="product_item col_main">
          <div class="col_main_card">
            <a class="product_img product_big_img" href=""><div class="product_img_box"><img class="product_img_con" src="static/img/tem.jpeg"></div></a>
            <div class="product_info product_big_info">
              <div class="product_title"><a href="" class="product_word"><span>1234567890876543221345612345678908765432213456乁3213456乁321345612345678908765432213456乁3213456</span></a></div>
              <div class="product_price">1212</div>
              <div class="col_main_more"><a href=""><button type="button" class="col_main_btn">查看更多</button></a></div>
            </div>
          </div>
        </td>
        <td class="product_item">
          <div class="product_small col_main_card">
            <a class="product_img" href="">
              <div class="product_img_box">
                <img class="product_img_con" src="static/img/tem.jpeg">
              </div>
            </a>
            <div class="product_info">
              <div class="product_title"><a href="" class="product_word"><span>1234567890876543221345612345678908765432213456乁3213456乁321345612345678908765432213456乁3213456</span></a></div>
              <div class="product_price">1212</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="product_item">
          <div class="product_small col_main_card">
            <a class="product_img" href="">
              <div class="product_img_box">
                <img class="product_img_con" src="static/img/tem.jpeg">
              </div>
            </a>
            <div class="product_info">
              <div class="product_title"><a href="" class="product_word"><span>1234567890876543221345612345678908765432213456乁3213456乁321345612345678908765432213456乁3213456</span></a></div>
              <div class="product_price">1212</div>
            </div>
          </div>
        </td>
        <td class="product_item">
          <div class="product_small col_main_card">
            <a class="product_img" href="">
              <div class="product_img_box">
                <img class="product_img_con" src="static/img/tem.jpeg">
              </div>
            </a>
            <div class="product_info">
              <div class="product_title"><a href="" class="product_word"><span>1234567890876543221345612345678908765432213456乁3213456乁321345612345678908765432213456乁3213456</span></a></div>
              <div class="product_price">1212</div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'zhongdiantuijian_p',
  // 和智能产品推荐一样
  data () {
    return {
    }
  },
  methods: {
  }
}

</script>
<style lang="" scoped>
/* 主题颜色 #141414 */
  #zhongdiantuijian_p {
    width: 1226px;
    border: 1px solid #dbe3ef;
    display: flex;
    flex-wrap: nowrap;
  }
  #zhongdiantuijian_p > table {
    width: 100%;
  }
  table tr+tr td{
    border-top: 1px solid #dbe3ef;
  }
  .col_main {
    padding: 20px;
    border-left: 1px solid #dbe3ef;
    border-right: 1px solid #dbe3ef;
    width: 25%;
    max-width: 25%;
    flex: 0 0 25%;
    text-align: center;
  }
  .col_main_card {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
  }
  .product_img {
    width: 160px;
    height: 160px;
    margin-bottom: 13px;
    display: block;
  }
  .product_big_img {
    width: 220px;
    height: 220px;
  }
  .product_img.product_big_img {
    margin-bottom: 20px;
  }
  .product_img_box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .product_img_con {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
  .product_info {
    color: #666;
    overflow: hidden;
    width: 100%;
  }
  .product_info.product_big_info .col_main_btn{
    width: 100%;
    max-width: 100%;
  }
  .product_big_info .product_price {
    margin-top: 10px;
    font-size: 16px;
  }
  .product_big_info .col_main_more {
    margin-top: 60px;
  }
  .product_big_info .product_word{
    font-size: 16px;
  }
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
  }
  .product_word {
    color: #333;
    word-break: break-all;
  }
  .product_word:hover {
    color: #ef7026;
    text-decoration:underline;
  }
  .product_price {
    color: #333;
    font-weight: 700;
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .product_price.pro_n_sale {
    color: #999;
    margin-top: 5px;
    font-weight: initial;
  }
  .pro_n_sale span {
    color: #c97;
    font-weight: 700;
  }
  .col_main_more {
    margin-top: 35px;
  }
  .col_main_btn {
    width: 80%;
    max-width: 200px;
    height: 40px;
    padding: 0 20px;
    color: #333;
    border: 1px solid #c4c6cf;
    background-color: transparent;
  }

  .col_main .col_main_btn:hover {
    cursor: pointer;
    color: #333 !important;
    background-color: rgba(0,0,0,.03) !important;
  }
  .product_item {
    width: 25%;
    padding: 18px 15px;
    /*border: 1px solid #dbe3ef;*/
    text-align: center;
    vertical-align: middle;
  }
  .col_main_card {
    width: 220px;
  }
  .product_small {
    width: 160px;
  }
</style>
