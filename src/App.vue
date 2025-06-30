<template>
  <div>
    <router-view></router-view>
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
