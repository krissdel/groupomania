
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from "vuex"
import axios from "axios"

import Vue from 'vue'



axios.defaults.baseURL = 'http://localhost:3000/api/';

createApp(App).use(Vue).use(store).use(Vuex).use(router).mount('#app')









