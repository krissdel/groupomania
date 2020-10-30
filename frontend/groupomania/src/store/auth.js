import Vuex from 'vuex'
import axios from 'axios'

export default {
    namespaced: true,

    state: {
        token: null, 
        user: null
    },

    mutations: {
        SET_TOKEN (state, token) {
            state.token = token 
        },
        SET_USER (state, data ) {
            state.user = data
        }

    },
    actions: {
        async Login ({ dispatch }, credentials) {
            try {
                let response = await axios.post( "user/ogin", credentials)

                return dispatch('attempt', response.data.token)
            } catch (err) {
                console.log(err.response.data)
                return err.response.data.error 
            }    
        },


        async attempt ({ commit, state }, token) {
            if(token) {
                commit('SET_TOKEN', token)
            }

            if(!state.token) {
                return
            }

            try {
                let response =  await Vuex.get("User")

                commit ('SET_USER', response.data)

            }catch (error) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }

    },

    // async logout ({ commit }) {
    //     return axios.post('auth/logout').then(() => {
    //         commit('SET_TOKEN', null)
    //         commit('SET_USER', null)
    //     })
    // }

    }
};