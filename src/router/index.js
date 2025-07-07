import { useUserStore } from '@/stores/useUserStore'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/LoggedOutLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/LoginView.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/RegisterView.vue')
        }
      ]
    },
    {
      path: '/',
      component: () => import('@/layouts/LoggedInLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/ProfileView.vue'),
        },
        {
          path: '/editProfile',
          name: 'editProfile',
          component: () => import('@/views/ProfileEdit.vue'),
        },
        {
          path: '/account',
          name: 'account',
          component: () => import('@/views/AccountView.vue'),
        },
        {
          path: '/help',
          name: 'help',
          component: () => import('@/views/HelpView.vue'),
        },
      ],
    },
    {
      redirect: '/home',
    }
  ],
})

router.beforeEach(() => useUserStore().initialize());

export default router
