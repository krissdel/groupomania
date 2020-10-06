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


// const store = createStore({
//   state () {
//     return {
//       count: 1
//     }
//   }
// })

export default new Vuex.Store({
  modules: {
    auth
  }
});

