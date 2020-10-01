import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'


// // Auth views
// import signin from "../views/auth/signin.vue";
// import login from "../views/auth/login.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Users/Users_login',
    name: 'Users_login',
    component: () => import('../views/Users/Users_login.vue')
  },
  {
    path: '/Users/Users_signin',
    name: 'Users_signin',
    component: () => import('../views/Users/Users_signin.vue')
  }



]









const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
