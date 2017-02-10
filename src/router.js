import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from './component/Detail.vue'
import Overview from './component/Overview.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'detailDefault',
            component: Root
        },
        {
            path: '/:id',
            name: 'detail',
            component: Root
        },
        {
            path: '/overview',
            name: 'overview',
            component: Overview
        },
    ],
})