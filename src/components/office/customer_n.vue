<template>
  <div id="customer_n">
    <div class="customer_box">
      <div class="customer_header"><h3 class="customer_title">Chat</h3></div>
      <div class="customer_wrap">
        <div class="customer_item">
          <div class="customer_portrait"><img src="static/img/tem.jpeg"></div>
          <div class="customer_info">
            <p class="customer_name">name</p>
            <i class="el-icon-service"></i>
          </div>
        </div>
        <div class="customer_item">
          <div class="customer_portrait"><img src="static/img/tem.jpeg"></div>
          <div class="customer_info">
            <p class="customer_name">name</p>
            <i class="el-icon-service"></i>
          </div>
        </div>
        <div class="customer_item">
          <div class="customer_portrait"><img src="static/img/tem.jpeg"></div>
          <div class="customer_info">
            <p class="customer_name">name</p>
            <i class="el-icon-service"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 客服通栏和宽栏 样式相似
  name: 'customer_n',
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
  }
}

</script>
<style lang="" scoped>
/* #141414 样式 */
  #customer_n {
    max-width: 220px;
    width: 100%;
    margin: 0 auto 20px;
    border-top: 2px solid;
    background: #fff;
    border-top-color: #141414;
  }
  .customer_box {
    min-height: 80px;
    border: 1px solid #dbe3ef;
    border-top: none;
  }
  .customer_header {
    padding: 12px 20px;
    border-bottom: 1px solid #dbe3ef;
    line-height: 30px;
  }
  .customer_title {
    font-weight: 400;
    color: #141414;
    font-size: 18px;
  }
  .customer_wrap {
    padding: 20px;
  }
  .customer_item {
    display: flex;
  }
  div.customer_item+div{
    margin-top: 23px;
  }
  .customer_portrait {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
  .customer_portrait img {
    max-height: 100%;
    max-width: 100%;
  }
  .customer_info {
    margin-left: 8px;
  }
  .customer_name {
    color: #333;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .el-icon-service {
    color: #333;
    font-size: 20px;
  }
</style>
