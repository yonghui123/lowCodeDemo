<template>
  <div :key="id">
    <div class="mb-10">标题内容</div>
    <el-input placeholder="请输入题目标题" v-model="text" @input="inputHandler"></el-input>
  </div>
</template>
<script lang="ts" setup>
import { inject, watch, ref } from 'vue';
import MaterialManager from '@/configs/MaterialConfig/SelectManager';
console.log('MaterialManager: ', MaterialManager);
const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  id: string;
}>();

const text = ref(props.status);
watch(
  () => props.status,
  () => {
    console.log('props.status: ', props.status);
  },
);

// const emits = defineEmits(['updateStatus']);
// 定义 updateStatus 函数类型
type UpdateStatusFunction = (configKey: string, newValue: string) => void;

// 注入时指定类型
const updateStatus = inject<UpdateStatusFunction>('updateStatus');

function inputHandler(newValue: string) {
  console.log('newValue: ', newValue);
  // 检查 updateStatus 是否存在
  if (updateStatus) {
    updateStatus(props.configKey, newValue);
  }
}
</script>
<style lang="scss" scoped></style>
