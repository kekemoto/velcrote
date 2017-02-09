import Vue from 'vue'
import Vuex from 'vuex'
import {
    VELCROTE,
    ROOT
} from './common'

Vue.use(Vuex)

const SET_VELCROTE = 'SET_VELCROTE'

export default new Vuex.Store({
    state: {
        velcrote: {},
    },
    mutations: {
        [SET_VELCROTE](state, data) {
            state.velcrote = data
        }
    },
    actions: {
        async initialize({commit}){
            let data = await window.localStorage.getItem(VELCROTE) || {
                    [ROOT]: {
                        title: 'はじめまして',
                        detail: 'タップで編集、プラスボタンで作成',
                        links: []
                    }
                }
            commit(SET_VELCROTE, data)
        }
    },
})