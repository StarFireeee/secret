<template>
  <el-button :class="isCollapse ? 'show-btn btn-left' : 'show-btn btn-right'" type="primary" :icon="isCollapse ? ArrowRightBold : ArrowLeftBold" @click="handleUnfold" />
  <el-menu default-active="home" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose" @select="handleNav" :collapse-transition="false">
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <el-menu-item index="home">
      <el-icon><Menu /></el-icon>
      <template #title>home</template>
    </el-menu-item>
    <el-menu-item index="history">
      <el-icon><Document /></el-icon>
      <template #title>history</template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>财政数据</span>
      </template>
      <el-menu-item index="finance">财政</el-menu-item>
      <el-menu-item index="history">item two</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="todolist">
      <el-icon><Document /></el-icon>
      <template #title>todolist</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons-vue'
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Aside',
  emits: ['unfold'],
  setup(props, context) {
    const router = useRouter()
    const isCollapse = ref<boolean>(false)
    const handleOpen = (key: string, keyPath: string[]) => {
      // console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      // console.log(key, keyPath)
    }

    function handleUnfold() {
      isCollapse.value = !isCollapse.value
      context.emit('unfold', isCollapse)
    }

    function handleNav(index: string) {
      router.push({
        name: index,
        params: {},
      })
    }

    context.emit('unfold', isCollapse)

    return {
      isCollapse,
      handleOpen,
      handleClose,
      handleUnfold,
      ArrowRightBold,
      ArrowLeftBold,
      handleNav,
    }
  },
})
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 95%;
}

.el-button {
  width: 100%;
  height: 5%;
  min-height: 32px;
  border-radius: 0;
}
</style>
