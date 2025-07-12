<template>
  <div class="layout-container flex">
    <div class="left flex wrap space-between">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <router-view v-slot="{ Component }">
        <component :is="Component" :serial-num="0" :status="currentCom" />
      </router-view>
    </div>
    <div class="right">编辑面板</div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useMaterialStore } from '@/stores/useMaterialStore';
import type { BaseSelect } from '@/configs/SelectConfig/BaseSelect';
defineOptions({
  name: 'MaterialLayout',
});

const materialStore = useMaterialStore();

const currentCom = computed(() => {
  return (materialStore.coms[materialStore.currentMaterial] as BaseSelect).editComs;
});
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: calc(100vh - 100px - 40px - 20px);
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg) 0 var(--border-radius-lg) var(--border-radius-lg);
}
.left {
  width: 180px;
  text-align: center;
  align-items: flex-start;
  padding: 20px;
  box-sizing: content-box;
}
.center {
  width: 530px;
  height: calc(100vh - 100px - 40px - 20px);
  overflow-y: scroll;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}
.right {
  width: 350px;
  height: calc(100vh - 100px - 40px - 20px);
  overflow-y: scroll;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}
</style>
