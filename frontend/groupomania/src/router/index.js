// import Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'



//auth views
// import Users_login from '@/views/auth/Users_login'
// import Users_signup from '@/views/auth/Users_signup'


const routes = [

  // {
  //   path: '/Users/User_login',
  //   name: 'Users_login',
  //   component: Login
  // },



  {
    path: '/app',
    name: 'Home',
    component: Home
  },

  {
    path: '/Users/Login',
    name: 'Login',
    component: () => import('../views/Users/Login.vue')
  },

  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/Users/Sign_up',
    name: 'Sign_up',
    component: () => import('../views/Users/Sign_up.vue')
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



