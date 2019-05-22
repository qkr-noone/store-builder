<template>
  <div id="banner">
    <div class="full_box">
      <el-carousel :interval="4000" arrow="always" height="100%" style="width: 100%; height: 100%;">
        <el-carousel-item v-for="index in 5" :key="index" class="full_item">
          <a class="full_link" href="" target="_blank">
            <img src="static/img/tem_bg.jpg">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: 'banner',
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
  #banner {
    max-width: 1226px;
    width: 100%;
    margin: 0 auto 20px;
  }
  .full_box {
    width: 100%;
    height: 550px;
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
</style>
