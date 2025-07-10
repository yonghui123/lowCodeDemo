import { createRouter, createWebHistory } from 'vue-router';

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
      redirect: '/material/select',
      component: () => import('@/views/MaterialView/index.vue'),
      children: [
        {
          path: 'select',
          name: 'select',
          redirect: '/material/select/single',
          component: () => import('@/views/MaterialView/components/ViewGroup/SelectGroupView.vue'),
          children: [
            {
              path: 'single',
              name: 'single',
              component: () => import('@/components/Survey/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: 'multi',
              name: 'multi',
              component: () => import('@/components/Survey/Materials/SelectComs/MultiSelect.vue'),
            },
            {
              path: 'option',
              name: 'option',
              component: () => import('@/components/Survey/Materials/SelectComs/OptionSelect.vue'),
            },
            {
              path: 'singpick',
              name: 'singpick',
              component: () =>
                import('@/components/Survey/Materials/SelectComs/SingPickSelect.vue'),
            },
            {
              path: 'multipick',
              name: 'multipick',
              component: () =>
                import('@/components/Survey/Materials/SelectComs/MultiPickSelect.vue'),
            },
          ],
        },
        {
          path: 'input',
          name: 'input',
          component: () => import('@/views/MaterialView/components/ViewGroup/InputGroupView.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/MaterialView/components/ViewGroup/ContactGroupView.vue'),
        },
        {
          path: 'personal',
          name: 'personal',
          component: () =>
            import('@/views/MaterialView/components/ViewGroup/PersonalGroupView.vue'),
        },
        {
          path: 'note',
          name: 'note',
          component: () => import('@/views/MaterialView/components/ViewGroup/NoteGroupView.vue'),
        },
        {
          path: 'advanced',
          name: 'advanced',
          component: () =>
            import('@/views/MaterialView/components/ViewGroup/AdvancedGroupView.vue'),
        },
      ],
    },
  ],
});

export default router;
