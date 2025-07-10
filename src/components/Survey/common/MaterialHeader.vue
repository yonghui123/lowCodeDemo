<template>
  <div class="container mb-15">
    <h2 class="title font-weight-100">这是标题</h2>
    <div class="desc">这是描述</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'MaterialHeader',
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
