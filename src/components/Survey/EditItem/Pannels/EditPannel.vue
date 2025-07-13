<template>
  <div class="editPannelContainer">
    <div v-for="(item, key) in com" :key="item.id" class="mb-20">
      <component v-if="item.isShow" :is="item.editCom" :config-key="key" v-bind="item" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { BaseEditComType } from '@/configs/ConfigTypes/selector.d';
defineOptions({
  name: 'EditPannel',
});
const props = defineProps<{
  com: BaseEditComType;
}>();
</script>
<style lang="scss" scoped>
.editPannelContainer {
  padding: 30px;
  background-color: var(--background-color);
}
</style>
