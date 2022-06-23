<template>
  <div id="test" draggable="true" @dragstart="drag($event)">哈哈哈哈</div>
  <div class="test2" @drop="drop($event)" @dragover="allowDrop($event)"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    function drop(ev: any) {
      ev.preventDefault()
      var data = ev.dataTransfer.getData('Text')
      ev.target.appendChild(document.getElementById(data))
    }
    function allowDrop(ev: any) {
      // console.log(ev)

      ev.preventDefault()
      console.log(1)
    }
    function drag(ev: any) {
      ev.dataTransfer.setData('Text', ev.target.id)
    }
    return {
      drop,
      allowDrop,
      drag,
    }
  },
})
</script>

<style lang="less" scoped>
#test {
  width: 200px;
  height: 200px;
  background: pink;
}
.test2 {
  width: 400px;
  height: 400px;
  border: 1px solid;
}
</style>
