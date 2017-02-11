import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from './component/Note.vue'
import Overview from './component/Overview.vue'
import {ROUTE} from './common'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: `/${ROUTE.note}/:id?`,
            name: ROUTE.note,
            component: Detail,
            alias: ['/']
        },
        {
            path: `/${ROUTE.overview}`,
            name: ROUTE.overview,
            component: Overview
        },
        {
            // old url. Do not define name.
            path: '/detail/:id',
            redirect: '/',
        }
    ],
})