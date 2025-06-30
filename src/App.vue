<template>
  <div class="container">
    <h1 class="title font-weight-300 text-center">低代码平台问卷</h1>
    <!-- 按钮 -->
    <div class="mb-15">
      <el-button type="primary" :icon="Plus">添加问卷</el-button>
      <el-button type="success" :icon="Compass">组件市场</el-button>
    </div>
    <!-- 问卷列表 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column fixed prop="createDate" label="创建日期" width="150"></el-table-column>
      <el-table-column props="title">问卷名称</el-table-column>
      <el-table-column props="surveyCount" width="150" align="center">题目数量</el-table-column>
      <!-- 最近更新日期 -->
      <el-table-column
        prop="updateDate"
        label="最近更新日期"
        width="150"
        align="center"
      ></el-table-column>
      <!-- 操作： 查看、编辑、删除 -->
      <el-table-column fixed="right" label="操作" width="150" align="center" >
        <template #default="scope">
          <el-button size="mini" type="primary">查看</el-button>
          <el-button size="mini" type="success">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { Plus, Compass } from '@element-plus/icons-vue';
import { ref } from 'vue';

const tableData = ref([]);

</script>

<style lang="scss" scoped>
  .container {
    padding: 40px;
  }
</style>
