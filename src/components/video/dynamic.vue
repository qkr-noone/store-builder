<template>
  <div id="dynamic">
    <div class="dynamic_box">
      <div class="dynamic_player">
        <div class="dynamic_player_bg">
          <video preload="metadata" muted width="100%" height="100%" loop="false" style="display: block; background-color: #000;" :src="dataUrl" controls></video>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dynamic',
  props: {
    dataUrl: {
      type: [String, Number],
      defaul: null
    }
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
<style lang="" scoped>
  #dynamic {
    max-width: 1226px;
    width: 100%;
  }
  .dynamic_box {
    min-height: 600px;
    max-height: 817px;
    overflow: hidden;
  }
  .dynamic_player {
    width: 100%;
    width: auto;
  }
  .dynamic_player_bg {
    width: 100%;
    height: 100%;
  }
</style>
