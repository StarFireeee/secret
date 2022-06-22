<template>
  <div class="btnbox">
    <el-button type="primary" @click="handleAdd">新增</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="date" label="日期" width="120" />
    <el-table-column prop="deadline" label="截止日期" width="120" />
    <el-table-column prop="task" label="任务描述" />
    <el-table-column fixed="right" label="Operations" width="160">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleData('finish', scope.row)">完成</el-button>
        <el-button link type="primary" size="small" @click="handleData('edit', scope.row)">修改</el-button>
        <el-button link type="primary" size="small" @click="handleData('delete', scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const tableData = reactive([
      {
        id: 1,
        date: '2016-05-03',
        deadline: 'Tom',
        task: '测试任务',
      },
    ])

    const handleData = (state: string, scope: any) => {
      if (state === 'delete') {
        tableData.pop()
      }
    }
    const handleAdd = () => {
      tableData.push({
        id: 1,
        date: '2016-05-03',
        deadline: 'Tom',
        task: '测试任务',
      })
    }

    return {
      handleAdd,
      handleData,
      tableData,
    }
  },
})
</script>

<style lang="less" scoped>
.btnbox {
  height: 50px;
}
</style>
