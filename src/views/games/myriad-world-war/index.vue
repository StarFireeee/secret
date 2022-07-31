<template>
  <teleport to="body" :disabled="data.isFC">
    <div id="main">
      <Header :handleFullscreen="handleFullscreen" />

      <Tools />
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Header, Tools } from './components/index.js'
export default defineComponent({
  components: { Header, Tools },
  setup() {
    const data = reactive({
      isFC: true,
    })
    function handleFullscreen() {
      data.isFC = !data.isFC

      const app: any = document.getElementById('app')
      if (!data.isFC) {
        app.style.display = 'none'
      } else {
        app.style.display = 'block'
      }
    }
    return {
      handleFullscreen,
      data,
    }
  },
})
</script>

<style lang="less" scoped>
#main {
  box-sizing: border-box;
  border: 1px solid #000;
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 1000px;
  min-height: 600px;
}
</style>
