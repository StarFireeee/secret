<template>
  <div class="mapchart" ref="mapcharts"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import * as echarts from 'echarts'
const dataJson = require('./services/world.json')
console.log(dataJson)

export default defineComponent({
  setup() {
    const mapcharts = ref(null)
    onMounted(() => {
      // DOM 元素将在初始渲染后分配给 ref
      console.log(mapcharts.value) // <div>This is a root element</div>
    })
    return {
      mapcharts,
    }
  },
})
</script>

<style lang="less" scoped></style>
