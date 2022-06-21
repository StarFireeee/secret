<template>
  <div class="btnbox">
    <el-button type="primary">新增</el-button>
    <el-button type="danger">删除</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="date" label="日期" width="120" />
    <el-table-column prop="state" label="截止日期" width="120" />
    <el-table-column prop="name" label="任务描述" />
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
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
      },
    ])

    const handleData = (state: string, scope: any) => {
      console.log(state, scope)
    }
    return {
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
