<template>
  <div class="tools">
    <el-button type="primary">领地</el-button>
    <el-button type="primary">将领</el-button>
    <el-button type="primary">兵种</el-button>
    <el-button type="primary">背包</el-button>
    <el-button type="primary">探索</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="less" scoped>
.tools {
  height: 60px;
  box-sizing: border-box;
  border-radius: 16px;
  margin: 0 auto;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px;
  background: rgba(89, 111, 132, 0.3);
  .el-button {
    height: 40px;
  }
}
</style>
