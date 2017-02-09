import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from './component/Root.vue'
import Overview from './component/Overview.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Root
        },
        {
            path: '/overview',
            component: Overview
        },
    ],
    mode: 'history'
})