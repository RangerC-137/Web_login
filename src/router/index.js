import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
<<<<<<< HEAD
      component: Login
    },
    {
      path: '/home/:id',
      name: 'home',
      component: HomeView
=======
      component: ()=>import('../views/Login.vue'),
>>>>>>> 2cbb7ea97df27821ba173221c43333a5871e0a86
    }
  ]
})

export default router
