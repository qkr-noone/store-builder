<template>
  <div id="dynamic">
    <div class="dynamic_box">
      <div class="dynamic_player">
        <div class="dynamic_player_bg">
          <video preload="metadata" muted width="100%" height="100%" loop="false" style="display: block; background-color: #000;" src="//cloud.video.alibaba.com/play/u/2153292369/p/1/e/6/t/1/d/hd/210692166549.mp4" controls></video>
        </div>
      </div>
      <div class="dynamic_desc">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dynamic',
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
  #dynamic {
    max-width: 1226px;
    width: 100%;
    margin: 0 auto 20px;
  }
  .dynamic_box {
    height: 460px;
    display: flex;
  }
  .dynamic_desc {
    flex-grow: 1;
    height: 100%;
    padding: 20px;
    overflow: hidden;
  }
  .dynamic_player {
    width: 818px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .dynamic_player_bg {
    width: 100%;
    height: 100%;
  }
</style>
