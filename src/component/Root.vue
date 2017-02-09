<template>
    <div>
        <nav class="section">
            <button>save</button>
        </nav>
        <section class="section">
            <div>{{ note.title }}</div>
            <div>{{ note.detail }}</div>
            <ul>
                <li v-for="link in note.links" @click="onLink(note.links)">{{ velcrote[note.links] }}</li>
                <li @click="onCreate"> + </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {ROOT} from '../common'

    export default {
        name: 'Root',
        data(){
            return {
                note: {},
            }
        },
        created(){
            this.initialize()
//            this.note = this.velcrote[ROOT]
        },
        methods: {
            onLink(id){
                this.note = this.velcrote[id]
            },

            onCreate(){
                console.log('create !')
            },

            ...mapActions(['initialize'])
        },
    }
</script>