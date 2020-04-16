import Vue from 'vue'
import Vuex from 'vuex'
import vuexAlong from 'vuex-along'

Vue.use(Vuex)

const store = new Vuex.Store({

    state : {
        index : 0
    },

    getters: {
        getIndex(state){
            return(state.index)
        }
    },
    mutations: {
        mutationsChangeIndex(state, n){
            sessionStorage.setItem('banner_index', n)
            return state.index = n
        }
    },
    
    actions: {
        actionsChangeIndex({commit}, n){
            return commit('mutationsChangeIndex', n)
        }
    },
    
    plugins: [vuexAlong]
});



export default store;