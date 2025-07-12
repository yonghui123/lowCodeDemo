<template>
  <div
    :class="{
      'text-center': computedState.align,
    }"
  >
    <MaterialHeader
      :serial-num="serialNum"
      :title="computedState.title"
      :desc="computedState.desc"
      :titleSize="computedState.titleSize"
      :descSize="computedState.descSize"
      :titleWeight="computedState.titleWeight"
      :descWeight="computedState.descWeight"
      :titleItalic="computedState.descItalic"
      :descItalic="computedState.descItalic"
      :titleColor="computedState.titleColor"
      :descColor="computedState.descColor"
    />
    <div class="radio-group">
      <el-radio-group>
        <el-radio v-for="item in computedState.options" :key="item" :value="item">{{
          item
        }}</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>
<script setup lang="ts">
import MaterialHeader from '@/components/Survey/common/MaterialHeader.vue';
import type {
  SingleEditComKeys,
  SingleEditComType,
  SingleStateType,
} from '@/configs/ConfigTypes/selector';
import { computed } from 'vue';
const props = defineProps<{
  serialNum: number;
  status: SingleEditComType;
}>();

const computedState = computed(() => {
  let status = props.status || {};
  let keys = Object.keys(status) as SingleEditComKeys[];
  let states = keys.reduce((pre, key) => {
    let item = props.status[key];
    return {
      ...pre,
      [key]: item.getState(),
    };
  }, {} as SingleStateType);
  console.log('states', states);
  return states;
});
</script>
<style lang="scss" scoped></style>
