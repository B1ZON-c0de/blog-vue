import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/users',
      name: 'Users',
      meta: { requiresAuth: true },
      component: () => import('../views/UsersView.vue'),
    },
    {
      path: '/posts',
      name: 'Posts',
      meta: { requiresAuth: true },
      component: () => import('../views/NewArticleView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'Registration',
      component: () => import('../views/RegistrationView.vue'),
    },
    {
      path: '/posts/:id',
      name: 'Article',
      component: () => import('../views/ArticleView.vue'),
    },
  ],
})
// GUARD
router.beforeEach((to) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isAuthorized) {
    return { name: 'Login' }
  }
})

export default router
