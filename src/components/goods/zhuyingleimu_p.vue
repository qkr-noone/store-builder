<template>
  <div id="zhuyingleimu_p">
    <div  class="zy_left">
      <div v-for="index in length" :key='index'>
        <div class="zy_cate" :class="{active: hasCate===index}" @mouseenter="hasCate=index"><div class="zy_cate_con">{{list.label}}</div></div>
      </div>
    </div>
    <div class="zy_right">
      <div class="zy_right_box" v-for="tip in length" :key="tip" v-show="hasCate===tip">
        <div class="zy_con_box" v-for="index in length" :key='index'>
          <li class="com_item">
            <a href="" class="comm_img_set_wh">
              <div class="comm_img_box">
                <img class="comm_img_con" src="static/img/tem.jpeg">
              </div>
            </a>
            <div class="comm_info">
              <div class="comm_title">
                <a class="comm_title_sort" href="" target="_blank">
                  <span>qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq</span>
                </a>
              </div>
              <div class="comm_price">
                <span>121212</span>
              </div>
              <div class="comm_price comm_sale_extra">asdada<span class="comm_sale_extra_change">asdfasd</span></div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zhuyingleimu_p',
  data () {
    return {
      list: { img: 'static/img/tem.jpeg', title: 'tilstadsadsdtilstilssasstilstadsadsdsass', price: 12.00, sale: 11222, label: 'series' },
      length: 4,
      hasCate: 1
    }
  },
  methods: {
  },
  watch: {
  }
}

</script>
<style lang="" scoped>
  #zhuyingleimu_p {
    width: 1226px;
    border: 1px solid #dbe3ef;
    display: flex;
  }
/* 自营类目 */
  .zy_left {
    width: 16.6667%;
    flex-shrink: 0;
    background: #f7f8fa;
    border-right: 1px solid #dbe3ef;
  }
  .zy_cate {
    height: 80px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .zy_cate.active {
    background: #fff;
    border-right-color: transparent;
  }
  .zy_cate_con {
    max-height: 100%;
    overflow: hidden;
    text-align: center;
  }
/* 自营类目内容项 */
  .zy_right {
    flex-grow: 1;
  }
  .zy_right_box {
    display: flex;
    flex-wrap: wrap;
  }
  .zy_con_box {
    width: 33.33%;
    border-right: 1px solid #dbe3ef;
  }
  div.zy_con_box:nth-child(3n) {
    border-right: 1px solid transparent;
  }
  div.zy_con_box:nth-child(-n+3) {
    border-bottom: 1px solid #dbe3ef;
  }
  .com_item{
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    text-align: left;
    line-height: 16px;
    font-size: 14px;
    height: 160px;
    overflow: hidden;
    padding: 20px 0;
    margin: 0 20px;
  }
/* 设置内容项的图片 */
  .comm_img_set_wh {
    width: 120px;
    height: 120px;
    display: inline-block;
    flex-shrink: 0;
  }
  .comm_img_box {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .comm_img_con {
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
  }
/* 设置内容项的基本信息 */
  .comm_info {
    margin-left: 12px;
    flex-grow: 1;
    color: #666;
    overflow: hidden;
  }
  .comm_title {
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    max-height: 38px;
    line-height: 20px;
  }
  .comm_title_sort {
    word-break: break-all;
    white-space: normal;
    color: #333333;
  }
  .comm_price {
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .comm_sale_extra {
    margin-top: 5px;
  }
  .comm_sale_extra_change {
    color: #c97;
  }
</style>
