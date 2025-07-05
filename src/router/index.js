import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
    },
    {
      path: '/editProfile',
      name: 'editProfile',
      component: () => import('@/views/ProfileEdit.vue'),
    }
  ],
})

export default router
