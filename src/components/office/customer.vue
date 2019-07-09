<template>
  <div id="customer">
    <div class="customer_box" ref="customerBg">
      <div class="customer_wrap">
        <div class="customer_item">
          <div class="customer_info">
            <p class="customer_name">小二:&nbsp;{{list[0].name}}</p>
            <p class="customer_name">邮件:&nbsp;{{list[0].email}}</p>
            <p class="customer_name">职称:&nbsp;{{list[0].position}}</p>
            <p class="customer_name">电话:&nbsp;{{list[0].fixedLine}}</p>
            <p class="customer_name">手机:&nbsp;{{list[0].mobile}}</p>
            <p class="customer_name">传真:&nbsp;{{list[0].fax}}</p>
            <p class="customer_name">Q&nbsp;Q:&nbsp;{{list[0].qq}}</p>
            <!-- <i class="el-icon-service"></i> -->
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
  props: {
    dataUrl: {
      type: [String, Number],
      defaul: null
    },
    list: {
      type: [Object, Array]
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.$refs.customerBg.style.backgroundImage = 'url(' + this.dataUrl + ')'
  },
  methods: {
  },
  watch: {
    dataUrl: {
      hanlder (val, old) {
        this.$refs.customerBg.style.backgroundImage = 'url(' + val + ')'
      },
      deep: true
    }
  }
}

</script>
<style lang="" scoped>
  #customer {
    max-width: 1226px;
    width: 100%;
  }
  .customer_box {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 280px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .customer_wrap {
    flex-grow: 1;
    padding-bottom: 62px;
    /*background: rgba(0,0,0,.5);*/
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .customer_item {
    /*text-align: center;*/
    /*width: 16.66667%;*/
    /*max-width: 16.66667%;*/
    /*flex: 0 0 16.66667%;*/

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
    background-color: #fff;
    color: red;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-radius: 17px;
    padding: 0 24px;
    padding-top: 20px;
    width: 800px;
    height: 240px;
  }
  .customer_name {
    color: #000000;
    line-height: 34px;
    font-size: 16px;
    width: 270px;
    margin-left: 80px;
    /*line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;*/
  }
  /*p.customer_name:not(:last-child){
    margin-right: 46px;
  }*/
  .el-icon-service {
    color: #fff;
    font-size: 20px;
  }
</style>
