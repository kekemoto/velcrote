import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from './component/Detail.vue'
import Overview from './component/Overview.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/detail',
            name: 'detailDefault',
            component: Detail,
            alias: ['/']
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail,
        },
        {
            path: '/overview',
            name: 'overview',
            component: Overview
        },
    ],
})