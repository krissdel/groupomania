
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import Vue from 'vue'



axios.defaults.baseURL = 'http://localhost:3000/api/';

createApp(App).use(Vue).use(store).use(router).mount('#app')









