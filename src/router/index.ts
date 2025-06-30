import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView/index.vue'),
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('@/views/EditorView/index.vue'),
    },
    {
      path: '/material',
      name: 'material',
      component: () => import('@/views/MaterialView/index.vue'),
    },
  ],
})

export default router
