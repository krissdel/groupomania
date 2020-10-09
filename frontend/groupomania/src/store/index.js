// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })


// import Vue from "vue";
import Vuex from "vuex";
import auth from './auth';

// Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    auth
  }
});

