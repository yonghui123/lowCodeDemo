<template>
  <Layout>
    <template #left>
      <router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/material/select/single"
        >单选题</router-link
      >
      <router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/material/select/multi"
        >多选题</router-link
      >
      <router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/material/select/option"
        >下拉选择</router-link
      >
      <router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/material/select/singpick"
        >图片单选题</router-link
      >
      <router-link
        class="link-item mb-15"
        exact-active-class="link-item-active"
        to="/material/select/multipick"
        >图片多选题</router-link
      >
    </template>
  </Layout>
</template>
<script lang="ts" setup>
import Layout from '../Layout.vue';
import { ref } from 'vue';
</script>
<style lang="scss" scoped>
.select-group-view {
}
</style>
