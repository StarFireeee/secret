<template>
  <div class="header">
    <div class="list">
      <div class="resourceShow"><b>人口</b>:<span class="now">100,100</span> <span class="output">+ 100,100 /m</span></div>
      <div class="resourceShow"><b>食物</b>:<span class="now">100,100</span> <span class="output">+ 100,100 /m</span></div>
      <div class="resourceShow"><b>资源</b>:<span class="now">100,100</span> <span class="output">+ 100,100 /m</span></div>
      <div class="resourceShow"><b>兵装</b>:<span class="now">100,100</span> <span class="output">+ 100,100 /m</span></div>
      <div class="resourceShow"><b>金币</b>:<span class="now">100,000.00</span> <span class="output">+ 100,100 /m</span></div>
    </div>
    <el-button class="fullscreen" @click="props.handleFullscreen">
      <el-icon :size="30"><FullScreen /></el-icon>
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MWW-header',
  props: {
    handleFullscreen: Function,
  },
  setup(props) {
    return { props }
  },
})
</script>

<style lang="less" scoped>
.header {
  height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  .fullscreen {
    margin: 5px;
    width: 30px;
    height: 30px;
    border: 0;
  }

  .list {
    display: flex;
    height: 40px;
    line-height: 40px;

    .resourceShow {
      margin-left: 14px;
      font-size: 14px;

      .now {
        color: chocolate;
      }

      .output {
        font-size: 12px;
        color: #333;
      }
    }
  }
}
</style>
