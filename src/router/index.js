import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHashHistory()(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home/:id',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
