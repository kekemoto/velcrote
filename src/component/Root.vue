<template>
    <div>
        <nav class="section">
            <button @click="onSave"><i class="fa fa-floppy-o"></i> save</button>
            <button @click="onLink(1)"><i class="fa fa-home"></i> home</button>
            <button @click="onDelete"><i class="fa fa-trash-o"></i> delete</button>
            <button @click="onDebug">debug</button>
        </nav>
        <section class="section">
            <input type="text" placeholder="title" v-model="note.title" class="editor">
            <textarea placeholder="detail" class="editor" v-model="note.detail"></textarea>
            <ul>
                <li v-for="link in note.links" @click="onLink(link)">{{ velcrote[link].title }}</li>
                <li @click="onCreate"><i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i></li>
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
                this.note = Object.assign({}, this.velcrote[id])
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
                if (this.note.id != ROOT) {
                    swal({
                        title: 'Are you sure?',
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Delete'
                    }).then(() => {
                        this[ACTION.deleteNote](this.note)
                        this.onLink(ROOT)
                    }).catch(() => {
                    })
                }
            },

            onDebug(){
                swal({
                    title: 'Initialize?',
                    text: 'This button is for developer.',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'OK'
                }).then(() => {
                    window.localStorage.clear()
                    location.reload()
                }).catch(()=>{})
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