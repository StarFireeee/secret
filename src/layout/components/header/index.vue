<template>
  <div class="header">
    <div class="top">
      <div class="title">
        {{ title }}
      </div>
    </div>
  </div>
  <el-tag v-for="item in items" :key="item.label" class="mx-1" effect="dark" closable>
    {{ item.label }}
  </el-tag>
</template>

<script lang="ts">
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Header',
  setup() {
    const title = ref<string>('')
    const route = useRoute()
    type Item = { label: string }
    const items = ref<Array<Item>>([{ label: 'Tag 1' }, { label: 'Tag 2' }, { label: 'Tag 3' }, { label: 'Tag 4' }, { label: 'Tag 5' }])

    title.value = route.meta.title as string
    onBeforeRouteUpdate((to, from) => {
      title.value = to.meta.title as string
    })

    return { title, items }
  },
})
</script>

<style lang="less" scoped>
.header {
  // height: 100%;
  background: rgb(206, 233, 243);
  border-bottom: 1px solid rgb(181, 222, 237);
  .top {
    padding-top: 20px;
    padding-left: 20px;

    .title {
      font-size: 26px;
      color: cadetblue;
      user-select: none;
    }
  }
}

.el-tag {
  margin-top: 8px;
  margin-left: 8px;
}
.el-tag:first-of-type {
  margin-left: 20px;
}
</style>
