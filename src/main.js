import "babel-polyfill"
import Vue from 'vue'
import App from './component/App.vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'

sync(store, router)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})