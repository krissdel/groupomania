// import Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'



//auth views
// import User_login from '@/views/auth/User_login'
// import User_signup from '@/views/auth/User_signup'


const routes = [



  {
    path: '/app',
    name: 'Home',
    component: Home
  },

  {
    path: '/User/Login',
    name: 'Login',
    component: () => import('../views/User/Login.vue')
  },

  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/User/Sign_up',
    name: 'Sign_up',
    component: () => import('../views/User/Sign_up.vue')
  },

  {
    path: '/Articles/post',
    name: 'post',
    component: () => import('../views/Articles/post.vue')
  }


]




const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



