<template>
  <Layout>
    <template slot="left">
      <router-link class="link-item mb-15">评价/打分</router-link>
      <router-link class="link-item mb-15">日期/时间</router-link>
    </template>
  </Layout>
</template>
<script lang="ts" setup>
import Layout from '../Layout.vue';
import { ref } from 'vue';
</script>
<style scoped>
.input-group-view {
}
</style>
