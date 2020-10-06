
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vuex from "vuex"
import axios from "axios"

// import { ValidationProvider, extend } from 'vee-validate';
// import { required } from 'vee-validate/dist/rules';

axios.defaults.baseURL = 'http://localhost:3000/api/';

createApp(App).use(store).use(store).use(router).mount('#app')


// extend('required', {
//     ...required,
//     message: 'This field is required'
//   });



//   new Vue({
//     el: '#app',
//     components: {
//       ValidationProvider
//     },
//     data: () => ({
//       value: ''
//     })
//   });