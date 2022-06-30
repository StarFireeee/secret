<template>
  <div class="time">{{ time }}</div>
  <div style="border: 1px solid #ccc">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor style="height: 500px; overflow-y: hidden" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated" />
  </div>
  <div class="btn">
    <el-button type="primary" @click="handleOK()">完成</el-button>
  </div>
</template>

<script lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import moment from 'moment'
import { onBeforeUnmount, ref, shallowRef, onMounted, defineComponent } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default defineComponent({
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()
    moment.locale('zh-cn')

    const time = ref('')
    time.value = moment().format('YYYY年MM月DD日星期dd，HH:mm:ss')
    setInterval(() => {
      console.log(1)

      time.value = moment().format('YYYY年MM月DD日星期dd，HH:mm:ss')
    }, 1000)
    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
      }, 1500)
    })

    const handleOK = () => {
      console.log(1)
    }

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    const handleCreated = (editor: any) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    return {
      handleOK,
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      time,
    }
  },
})
</script>

<style lang="less" scoped>
.time {
  // text-align: right;
  padding: 20px;
}
.btn {
  padding: 20px;
  .el-button {
    width: 100px;
    margin: 0 auto;
  }
}
</style>
