<template>
  <Layout>
    <template slot="left">
      <router-link class="link-item mb-15">文本输入</router-link>
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
