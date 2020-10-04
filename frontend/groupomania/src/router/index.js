import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'



const routes = [
  {
    path: '/app',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/Users/Users_login',
    name: 'Users_login',
    component: () => import('../views/Users/Users_login.vue')
  },

  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/Users/Users_signup',
    name: 'Users_signup',
    component: () => import('../views/Users/Users_signup.vue')
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
