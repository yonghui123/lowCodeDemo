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
    <div class="right">
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, provide } from 'vue';
import EditPannel from '@/components/Survey/EditItem/Pannels/EditPannel.vue';
import { useMaterialStore } from '@/stores/useMaterialStore';
import type { SelectEditKeyType, SelectEditStatusType } from '@/configs/ConfigTypes/selector';
import MaterialSelectManager from '@/configs/MaterialConfig/SelectManager';

defineOptions({
  name: 'MaterialLayout',
});

const materialStore = useMaterialStore();

const currentCom = computed(() => {
  return materialStore.coms[materialStore.currentMaterial].editComs;
});

const updateStatus = (configKey: SelectEditKeyType, payLoad: SelectEditStatusType) => {
  console.log('payLoad: ', payLoad);
  console.log('configKey: ', configKey);
  let select = materialStore.coms[materialStore.currentMaterial];
  console.log('select: ', select);
  MaterialSelectManager.setSelectEditStatus(select.name, configKey, payLoad);
};
provide('updateStatus', updateStatus);
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
