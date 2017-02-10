import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from './component/Root.vue'
import Overview from './component/Overview.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'root',
            component: Root
        },
        {
            path: '/overview',
            name: 'overview',
            component: Overview
        },
    ],
})