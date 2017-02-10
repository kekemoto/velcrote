<template>
    <div>
        <nav class="section">
            <button @click="onSave"><i class="fa fa-floppy-o"></i> save</button>
            <button @click="onDelete"><i class="fa fa-trash-o"></i> delete</button>
            <button @click="onDebug">debug</button>
        </nav>

        <nav class="section history">
            /<span v-for="(id, index) in history" @click="onHistory(index)"><a :class="{empty:isEmpty(velcrote[id].title)}"> {{ titleChecker(velcrote[id].title) }} </a>/</span>
        </nav>

        <section class="section">
            <input type="text" placeholder="title" v-model="note.title" class="editor">
            <textarea placeholder="detail" class="editor editor-detail" v-model="note.detail"></textarea>
            <ul>
                <li v-for="link in note.links" @click="onLink(link)" :class="{empty:isEmpty(velcrote[link].title)}">{{ titleChecker(velcrote[link].title, 'empty title') }}</li>
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
                history: [],
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
                this.history.push(this.note.id)
                this.note = Object.assign({}, this.velcrote[id])
            },

            onCreate(){
                this.onSave()
                this[ACTION.createNote](this.note)
                this.onLink(this.noteIdMax)
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
                        this.onHistory(this.history.length-1)
                    }).catch(() => {
                    })
                }
            },

            onHistory(index) {
                this.onLink(this.history[index])
                this.history = this.history.splice(0, index)
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
                }).catch(() => {
                })
            },

            titleChecker(title, stead){
                if(this.isEmpty(title)){
                    return stead || 'empty'
                }
                return title
            },

            isEmpty(string){
                return string == ''
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

    .editor-detail{
        height: 6.5em;
        line-height: 1.5;
    }

    .history{
        font-size: 0.75em;
    }

    .empty {
        color: gray;
    }
</style>