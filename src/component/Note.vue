<template>
    <div>
        <nav class="section">
            <button @click="onMenu"><i class="fa fa-bars"></i> menu</button>
            <button @click="onDelete"><i class="fa fa-trash-o"></i> delete</button>
        </nav>

        <nav class="section history">
            <router-link :to="{name:ROUTE.note}"><i class="fa fa-home"></i></router-link>
            /<span v-for="(id, index) in history" @click="onHistory(index)"><a
                :class="{empty:isEmpty(velcrote[id].title)}"> {{ titleChecker(velcrote[id].title) }} </a>/</span>
        </nav>

        <section class="section">
            <input type="text" placeholder="title" v-model="note.title" class="editor" @keyup.enter.ctrl="onDebug">
            <textarea placeholder="detail" class="editor editor-detail" v-model="note.detail"></textarea>
            <ul>
                <li v-for="link in note.links" @click="onLink(link)" :class="{empty:isEmpty(velcrote[link].title)}">{{
                    titleChecker(velcrote[link].title, 'empty title') }}
                </li>
                <li @click="onCreate"><i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i></li>
            </ul>
        </section>
    </div>
</template>

<script>
    import Helper from './Helper'
    import {mapActions, mapState} from 'vuex'
    import {
        ROOT,
        ACTION,
        ROUTE,
    } from '../common'

    let closeEventFlag = true

    export default {
        name: 'Root',

        data(){
            return {
                note: {},
                history: [],

                //const
                ROUTE: ROUTE,
            }
        },

        computed: mapState([
            'velcrote',
            'noteIdMax',
        ]),

        created() {
            console.log('created')//debug
            this[ACTION.initialize]()
            this._initializeNote()
            window.onbeforeunload = () => {
                if(closeEventFlag) {
                    this.onSave()
                }
            }
        },

        beforeRouteLeave(to, from, next) {
            console.log('beforeRouteLeave')//debug
            this.onSave()
            next()
        },

        watch: {
            '$route'(){
                console.log('route change')//debug
                if(this.note.id){
                    this.onSave()
                }
                if (!this.$route.params.id) {
                    this.history = []
                }
                this._initializeNote()
            }
        },

        methods: {
            _initializeNote(){
                this.note = Object.assign({}, this.velcrote[this.$route.params.id || ROOT] || this.velcrote[ROOT])
            },

            onLink(id){
                this.history.push(this.note.id)
                this.$router.push({name: ROUTE.note, params: {id: id}})
            },

            onHistory(index) {
                this.onLink(this.history[index])
                this.history = this.history.splice(0, index)
            },

            onCreate(){
                this[ACTION.createNote](this.note)
                this.onLink(this.noteIdMax)
            },

            onSave(){
                this[ACTION.updateNote](this.note)
                console.log('saved')//debug
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
                        this.onHistory(this.history.length - 1)
                    }).catch(() => {
                    })
                }
            },

            onMenu(){},

            onDebug(){
                swal({
                    title: 'Initialize?',
                    text: 'This button is for developer.\n\ncommand: ctrl + enter',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'OK'
                }).then(() => {
                    window.localStorage.clear()
                    closeEventFlag = false
                    this.history = []
                    location.href = '/'
                }).catch(() => {
                })
            },

            titleChecker: Helper.titleChecker,

            isEmpty: Helper.isEmpty,

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

    .editor-detail {
        height: 10em;
        line-height: 1.5;
    }

    .history {
        font-size: 0.75em;
    }

    .empty {
        color: gray;
    }
</style>