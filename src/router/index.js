import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: ()=>import('../views/Login.vue'),
    }
  ]
})

export default router
