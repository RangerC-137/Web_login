import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory()(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ()=>('../views/Login.vue')
    },
    {
      path: '/home/:id',
      name: 'home',
      component: ()=>('../views/HomeView.vue')
    }
  ]
})

export default router
