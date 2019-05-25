<template>
  <div id="customer">
    <div class="customer_box">
      <div class="customer_wrap">
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
  name: 'customer',
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
  #customer {
    max-width: 1226px;
    width: 100%;
    margin: 0 auto 20px;
  }
  .customer_box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    overflow: hidden;
    background: url('/static/img/tem_bg.jpg') no-repeat center;
    background-size: cover;
  }
  .customer_wrap {
    flex-grow: 1;
    padding: 25px 40px;
    background: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .customer_item {
    text-align: center;
    padding: 0 10px;
    width: 16.66667%;
    max-width: 16.66667%;
    flex: 0 0 16.66667%;

  }
  .customer_portrait {
    margin: 0 auto;
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
    margin-top: 8px;
  }
  .customer_name {
    color: #fff;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .el-icon-service {
    color: #fff;
    font-size: 20px;
  }
</style>
