
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuex from "vuex"
import axios from "axios"




// import Vue from 'vue'
// import VueSweetalert2 from 'vue-sweetalert2';



axios.defaults.baseURL = 'http://localhost:3000/api/';

createApp(App).use(store).use(store).use(router).mount('#app')







