<template>
  <Header />
  <div>
    <h1 class="material-title text-center font-weight-100 m0 p0">组件市场</h1>
    <div class="container mc flex">
      <!-- 左侧大标题一级导航 -->
      <nav class="category ">
        <router-link class="category-item" to="/material/select">
          <el-icon>
            <CircleCheck />
          </el-icon>
          <div>选择题</div>
        </router-link>
        <router-link class="category-item" to="/material/input">
          <el-icon>
            <EditPen />
          </el-icon>
          <div>文本输入</div>
        </router-link>
        <router-link class="category-item" to="/material/advanced">
          <el-icon>
            <Files />
          </el-icon>
          <div>高级题型</div>
        </router-link>
        <router-link class="category-item" to="/material/note">
          <el-icon>
            <ChatLineSquare />
          </el-icon>
          <div>备注说明</div>
        </router-link>
        <router-link class="category-item" to="/material/personal">
          <el-icon>
            <User />
          </el-icon>
          <div>个人信息</div>
        </router-link>
        <router-link class="category-item" to="/material/contact">
          <el-icon>
            <Message />
          </el-icon>
          <div>联系方式</div>
        </router-link>
      </nav>
      <!-- 路由出口 -->
      <div class="material-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Common/Header.vue';
import {
  CircleCheck,
  Files,
  EditPen,
  ChatLineSquare,
  User,
  Message,
} from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped>
.material-title {
  height: 50px;
  margin: 20px 0;
}

.container {
  width: 1180px;
  height: 600px;
}
.category {
  width: 70px;
  height: 100%;
  > .category-item {
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    font-size: var(--font-size-base);
    color: var(--white);
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }
}
@for $i from 1 through 4 {
  .category-item:nth-child(4n + #{$i}) {
    @if $i == 1 {
      background-color: var(--primary-color);
    }
    @if $i == 2 {
      background-color: var(--warning-color);
    }
    @if $i == 3 {
      background-color: var(--success-color);
    }
    @if $i == 4 {
      background-color: var(--danger-color);
    }
  }
}
</style>
