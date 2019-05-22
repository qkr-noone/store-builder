<template>
  <div id="chuchuang_w">
    <div class="chuchuang_head">
      <p class="chuchuang_title">产品展示</p>
      <a class="chuchuang_more" href="" title="更多产品">更多产品 <i class="el-icon-d-arrow-right"></i></a>
    </div>
    <div class="chuchuang_con">
      <div class="product_item" :class="{has_bottom: length>5 && length%5>0 && (length - length%5 >= index) || (length>5 && length%5===0 && length-5>index-1)}"  v-for="index in length" :key="index">
        <div class="product_cart">
          <a href="" class="product_img" target="_blank">
            <div class="product_img_box">
              <img class="product_img_con" :src="list.img">
            </div>
          </a>
          <div class="product_info">
            <div class="product_title">
              <a class="product_word" href=""><span>{{list.title}}</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'chuchuang_w',
  data () {
    return {
      length: 20,
      list: { img: 'static/img/tem.jpeg', title: 'tilstadsadsdtilstilssasstilstadsadsdsass', price: 12.00, sale: 11222 }
    }
  }
}

</script>
<style lang="scss" scoped>
/* 主题颜色 #141414 */
  #chuchuang_w {
    width: 986px;
    margin: 0 auto;
  }
  .chuchuang_head {
    display: flex;
    align-item: center;
    justify-content: space-between;
    border: 1px solid #dbe3ef;
    border-top: 2px solid transparent;
    border-top-color: #141414;
    border-bottom: none;
    line-height: 30px;
    padding: 12px 20px;
    .chuchuang_title {
      font-size: 22px;
      line-height: inherit;
      font-weight: 400;
      color: #141414;
    }
    .chuchuang_more {
      font-size: 14px;
      color: #333;
      color: #2192d9;
      &:hover {
        text-decoration: underline;
        color: #ef7026;
      }
    }
  }
  .chuchuang_con {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid #dbe3ef;
  }
  .product_item {
    width: 20%;
    border-right: 1px solid #dbe3ef;
    padding: 18px 15px;
    text-align: center;
    overflow: hidden;
    &:nth-child(n).has_bottom {
      border-bottom: 1px solid #dbe3ef;
    }
    &:nth-child(5n) {
      border-right: 1px solid transparent;
    }
    .product_cart {
      width: 160px;
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
          margin-top: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
        }
      }
    }
  }
</style>
