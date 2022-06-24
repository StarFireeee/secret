<template>
  <div class="box">
    <div class="left" @drop="drop($event)" @dragover="allowDrop($event)">
      住宅
      <div class="goods" id="a" @dragstart="drag($event)" draggable="true">张三</div>
      <div class="goods" id="b" @dragstart="drag($event)" draggable="true">李四</div>
      <div class="goods" id="c" @dragstart="drag($event)" draggable="true">爱丽丝</div>
      <div class="goods" id="d" @dragstart="drag($event)" draggable="true">佛伯勒</div>
    </div>
    <div class="right" @drop="drop($event)" @dragover="allowDrop($event)">商店</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const show = ref(false)
    function isshow() {
      show.value = !show.value
    }
    function drop(ev: any) {
      ev.preventDefault()
      var data = ev.dataTransfer.getData('Text')
      console.log(data)

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
      show,
      isshow,
      drop,
      allowDrop,
      drag,
    }
  },
})
</script>

<style lang="less" scoped>
.box {
  // height: 500px;
  border: 1px solid;
  display: flex;
  .left {
    width: 200px;
    background: rgb(239, 233, 233);
    margin: 20px;
    padding: 40px 20px;
  }
  .right {
    width: 200px;
    background: rgb(239, 233, 233);
    margin: 20px;
    padding: 40px 20px;
  }
  .goods {
    margin: 10px 0;
    padding: 10px;
    background: pink;
  }
}
</style>
