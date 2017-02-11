<template>
    <li>
        <router-link :to="{name:ROUTE.note, params:{id: note.id}}" :class="{empty:isEmpty(note.title)}">{{ titleChecker(note.title) }}</router-link>
        <ul>
            <node v-for="id in note.links" :note="velcrote[id]"></node>
        </ul>
    </li>
</template>

<script>
    import Helper from './Helper'
    import {mapState} from 'vuex'
    import {ROUTE} from '../common'

    export default {
        name: 'Node',

        data: ()=>({ROUTE}),

        props: ['note'],

        computed: mapState([
            'velcrote',
        ]),

        methods: {
            titleChecker: Helper.titleChecker,

            isEmpty: Helper.isEmpty,
        },

        components: {
            Node
        }
    }
</script>

<style scoped>
    a {
        color: black;
        text-decoration: none;
    }

    .empty {
        color: gray;
    }
</style>