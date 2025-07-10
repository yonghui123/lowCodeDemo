<template>
  <Layout>
    <template slot="left">
      <router-link class="link-item mb-15">手机号</router-link>
      <router-link class="link-item mb-15">微信号</router-link>
      <router-link class="link-item mb-15">QQ号</router-link>
      <router-link class="link-item mb-15">邮箱</router-link>
      <router-link class="link-item mb-15">地址</router-link>
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
