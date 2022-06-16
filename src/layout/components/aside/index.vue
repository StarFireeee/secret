<template>
  <el-button :class="isCollapse ? 'show-btn btn-left' : 'show-btn btn-right'" type="primary" :icon="isCollapse ? ArrowRightBold : ArrowLeftBold" @click="handleUnfold" />
  <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose" :collapse-transition="false">
    <el-sub-menu index="1">
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
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><Menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><Document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { ArrowRightBold, ArrowLeftBold } from '@element-plus/icons-vue'
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Aside',
  emits: ['unfold'],
  setup(props, context) {
    const isCollapse = ref<boolean>(true)
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }

    function handleUnfold() {
      isCollapse.value = !isCollapse.value
      context.emit('unfold', isCollapse)
    }

    context.emit('unfold', isCollapse)

    return {
      isCollapse,
      handleOpen,
      handleClose,
      handleUnfold,
      ArrowRightBold,
      ArrowLeftBold,
    }
  },
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100%;
}

.el-button {
  opacity: 0.5;
  width: 60px;
  height: 100px !important;
  position: absolute;
  display: none !important;
  top: 50%;
  margin-top: -50px;
  z-index: 999;
}

.btn-left {
  left: 35px;
}
.btn-right {
  left: 175px;
}
</style>
