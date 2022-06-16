<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="unfold ? '64px' : '200px'"><Aside @unfold="getUnfold"></Aside></el-aside>
      <el-container>
        <el-header>{{ unfold }}</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Aside from './components/aside/index.vue'

export default defineComponent({
  components: { Aside },
  setup() {
    let unfold = ref(false)
    function getUnfold(x: any) {
      unfold.value = x.value
    }

    return {
      unfold,
      getUnfold,
    }
  },
})
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;
}
.el-container {
  position: relative;
  height: 100%;
}
</style>

<style lang="less">
.el-aside:hover .show-btn {
  display: inline-block !important;
}
</style>
