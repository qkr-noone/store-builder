<template>
  <div id="fullScreen">
    <div class="full_box">
      <el-carousel :interval="4000" arrow="always" indicator-position="" height="100%" style="width: 1920px; left: 50%; height: 100%; margin-left: -960px;">
        <el-carousel-item v-for="(item, index) in list" :key="index" class="full_item">
          <a class="full_link" :href="item.link || null" target="_blank">
            <img :src="item.url">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'fullScreen',
  props: {
    list: Array
  },
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
<style lang="scss" scoped>
  #fullScreen {
    max-width: 1226px;
    width: 100%;
    margin: 0 auto;
  }
  .full_box {
    width: 100%;
    height: 650px;
  }
  .full_item {
    height: 100%;
  }
  .full_link {
    background-color: transparent;
    display: block;
    width: 100%;
    height: 100%;
  }
  .full_link img {
    display: block;
    width: 100%;
    max-height: 100%;
  }
  /deep/ .el-carousel__arrow--left {
    left: 20%;
  }
  /deep/ .el-carousel__arrow--right {
    right: 20%;
  }
  /deep/ .el-carousel__arrow--right:hover, /deep/ .el-carousel__arrow--left:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
  /deep/ .el-carousel__indicators--horizontal{
    border-radius: 8px;
  }
  /deep/ .el-carousel__button {
    background-color: #fff;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  /deep/ .el-carousel__arrow--left, /deep/ .el-carousel__arrow--right {
    height: 60px;
    border-radius: initial;
    font-size: 40px;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
  }
</style>
