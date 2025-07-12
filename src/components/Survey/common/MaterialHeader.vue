<template>
  <div class="container mb-15">
    <h2
      class="title font-weight-100"
      :style="{
        fontSize: `${titleSize}px`,
        color: titleColor,
      }"
    >
      <span>{{ showSerial }}</span>
      <span
        :class="{
          'font-bold': !titleWeight,
          'font-italic': !titleItalic,
        }"
        >{{ title }}</span
      >
    </h2>
    <div
      class="desc"
      :style="{
        fontSize: `${descSize}`,
        color: descColor,
      }"
      :class="{
        'font-bold': !descWeight,
        'font-italic': !descItalic,
      }"
    >
      {{ desc }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { formatSerialNumber } from '@/utils/common';

defineOptions({
  name: 'MaterialHeader',
});
const props = defineProps({
  serialNum: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  titleSize: {
    type: String,
    default: '20',
  },
  descSize: {
    type: String,
    default: '16',
  },
  titleWeight: {
    type: Number,
    default: 0,
  },
  descWeight: {
    type: Number,
    default: 0,
  },
  titleItalic: {
    type: Number,
    default: 0,
  },
  descItalic: {
    type: Number,
    default: 0,
  },
  titleColor: {
    type: String,
    default: '',
  },
  descColor: {
    type: String,
    default: '',
  },
});

const showSerial = computed(() => {
  // 传入数组下标，转成可读的序号（即数组下标加1），小于10的补0，后面加个序号的.
  return formatSerialNumber(props.serialNum) + '.';
});
</script>
<style lang="scss" scoped>
.container {
  > h2 {
    font-size: 20px;
    > span {
      margin: 0 5px;
    }
  }
}
.desc {
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  text-indent: 5px;
}
</style>
