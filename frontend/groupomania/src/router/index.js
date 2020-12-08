import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/Post/post',
    name: 'post',
    component: () => import('../views/Post/post.vue')
  },

  {
    path: '/Post/allPosts',
    name: 'allPosts',
    component: () => import('../views/Post/allPosts.vue')
  },

  {
    path: '/User/Account',
    name: 'Account',
    component: () => import('../views/User/Account.vue')
  },

  {
    path: '/Post/modifyPost/:id',
    name: 'modifyPost',
    component: () => import('../views/Post/modifyPost.vue'),
    props: (route) => (route.params)
  },

  {
    path: '/Post/reply/:id',
    name: 'reply',
    component: () => import('../views/Post/reply.vue'),
    props: (route) => (route.params)
  },

  {
    path: '/Post/comments',
    name: 'comments',
    component: () => import('../views/Post/comments.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router



