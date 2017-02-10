<template>
    <div>
        <nav class="section">
            <button @click="onSave">save</button>
            <button @click="onLink(1)">root</button>
            <button @click="onDelete">delete</button>
            <button @click="onDebug">debug</button>
        </nav>
        <section class="section">
            <input type="text" placeholder="title" v-model="note.title" class="editor">
            <textarea placeholder="detail" class="editor">{{ note.detail }}</textarea>
            <ul>
                <li v-for="link in note.links" @click="onLink(note.links)">{{ velcrote[note.links].title }}</li>
                <li @click="onCreate"> +</li>
            </ul>
        </section>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import {
        ROOT,
        ACTION
    } from '../common'

    export default {
        name: 'Root',
        data(){
            return {
                note: {},
            }
        },
        computed: mapState([
            'velcrote',
            'noteIdMax',
        ]),
        created() {
            this[ACTION.initialize]()
            this.note = Object.assign(this.velcrote[ROOT])
        },
        methods: {
            onLink(id){
                this.onSave()
                this.note = this.velcrote[id]
            },

            onCreate(){
                this.onSave()
                this[ACTION.createNote](this.note)
                this.note = this.velcrote[this.noteIdMax]
            },

            onSave(){
                this[ACTION.updateNote](this.note)
            },

            onDelete(){
                this[ACTION.deleteNote](this.note)
                this.onLink(ROOT)
            },

            onDebug(){
                window.localStorage.clear()
                location.reload()
            },

            ...mapActions([
                ACTION.initialize,
                ACTION.updateNote,
                ACTION.createNote,
                ACTION.deleteNote,
            ])
        },
    }
</script>

<style scoped>
    .editor {
        width: 100%;
    }
</style>