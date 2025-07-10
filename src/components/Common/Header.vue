<template>
  <div class="header flex self-start border-box">
    <div class="header-left flex align-items-center justify-content-center">
      <el-button :icon="ArrowLeft" circle @click="goHome" size="small"></el-button>
    </div>
    <div class="header-center flex align-items-center space-between pl-15 p-15">

    </div>
    <div class="header-right flex align-items-center justify-content-center">
      <el-avatar
        :size="30"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push("/");
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--border-color);
  .header-left {
    width: 60px;
    height: 100%;
  }
  .header-center {
    flex: 1;
    height: 100%;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }
  .header-right {
    width: 80px;
    height: 100%;
  }
}
</style>
