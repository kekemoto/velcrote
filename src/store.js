import Vue from 'vue'
import Vuex from 'vuex'
import {
    KEY,
    ACTION,
    ROOT,
} from './common'

Vue.use(Vuex)

// mutation
const NOTE_SET = 'noteSet'
const NOTE_DELETE = 'noteDelete'
const NOTE_ID_MAX_SET = 'noteIdMaxSet'
const VELCROTE_SET = 'velcroteSet'

export default new Vuex.Store({
    state: {
        velcrote: {},
        noteIdMax: 0,
    },
    mutations: {
        [NOTE_SET](state, data) {
            state.velcrote[data.id] = data
            window.localStorage.setItem(KEY.velcrote, JSON.stringify(state.velcrote))
        },

        [NOTE_DELETE](state, id){
            delete state.velcrote[id]
            window.localStorage.setItem(KEY.velcrote, JSON.stringify(state.velcrote))
        },

        [NOTE_ID_MAX_SET](state, data){
            state.noteIdMax = data
            window.localStorage.setItem(KEY.noteIdMax, JSON.stringify(data))
        },

        [VELCROTE_SET](state, data){
            state.velcrote = data
            window.localStorage.setItem(KEY.velcrote, JSON.stringify(data))
        },
    },
    actions: {
        [ACTION.initialize]({commit}){
            let velcrote = window.localStorage.getItem(KEY.velcrote)
            if (typeof velcrote == 'string') {
                velcrote = JSON.parse(velcrote)
            } else {
                velcrote = {
                    [ROOT]: {
                        id: ROOT,
                        title: 'はじめまして',
                        detail: 'タップで編集、プラスボタンで作成',
                        links: []
                    }
                }
            }
            commit(VELCROTE_SET, velcrote)
            commit(NOTE_ID_MAX_SET, JSON.parse(window.localStorage.getItem(KEY.noteIdMax)) || ROOT)
        },

        [ACTION.updateNote]({commit}, note){
            commit(NOTE_SET, note)
        },

        [ACTION.createNote]({state, dispatch}, parentNote){
            dispatch(ACTION.incrementNoteId)

            parentNote.links.push(state.noteIdMax)
            dispatch(ACTION.updateNote, parentNote)

            dispatch(ACTION.updateNote, {
                id: state.noteIdMax,
                title: '',
                detail: '',
                links: [],
                linked: [parentNote.id],
            })
        },

        [ACTION.deleteNote]({commit, dispatch, state}, note){
            commit(NOTE_DELETE, note.id)

            note.linked.forEach(link => {
                let linkedNote = Object.assign({}, state.velcrote[link])
                linkedNote.links = linkedNote.links.filter(id => id != note.id)
                dispatch(ACTION.updateNote, linkedNote)
            })
        },

        [ACTION.incrementNoteId]({state, commit}){
            commit(NOTE_ID_MAX_SET, state.noteIdMax+1)
        },
    },
})