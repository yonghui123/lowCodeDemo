<template>
  <Layout>
    <template slot="left">
      <router-link class="link-item mb-15">姓名</router-link>
      <router-link class="link-item mb-15">身份证</router-link>
      <router-link class="link-item mb-15">出生日期</router-link>
      <router-link class="link-item mb-15">性别</router-link>
      <router-link class="link-item mb-15">年龄</router-link>
      <router-link class="link-item mb-15">学历</router-link>
      <router-link class="link-item mb-15">大学</router-link>
      <router-link class="link-item mb-15">专业</router-link>
      <router-link class="link-item mb-15">行业</router-link>
      <router-link class="link-item mb-15">职业</router-link>
      <router-link class="link-item mb-15">公司</router-link>
      <router-link class="link-item mb-15">职位</router-link>
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
