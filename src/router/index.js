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


//** chatgpt generiert!!! austauschen mit eigener funktion */
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  // Initialisiere den Store nur einmal
  if (!userStore.isInitialized) {
    await userStore.initialize()
  }

  const isLoggedIn = userStore.user !== null

  // Wenn nicht eingeloggt, und Route verlangt Login
  const requiresAuth = to.path.startsWith('/home') || to.path.startsWith('/profile') || to.path.startsWith('/editProfile') || to.path.startsWith('/account') || to.path.startsWith('/help')

  if (!isLoggedIn && requiresAuth) {
    // Redirect zum Login
    return next({ name: 'login' })
  }

  // Optional: Wenn eingeloggt, verhindere Zugriff auf Login/Register
  if (isLoggedIn && (to.name === 'login' || to.name === 'register')) {
    return next({ name: 'home' })
  }

  // Sonst weitermachen
  next()
})

export default router
