<template>
    <ul>
        <node :note="velcrote[1]"></node>
    </ul>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import Node from './Node.vue'
    import {ACTION} from '../common'

    export default {
        name: 'Overview',
        computed: mapState([
            'velcrote',
        ]),

        created(){
            this[ACTION.initialize]()
        },

        methods: mapActions([
            ACTION.initialize
        ]),

        components: {
            Node
        }
    }
</script>