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
    export default {
        name: 'Root',
        props: ['velcrote'],
        data(){
            return {
                note: {},
            }
        },
        created(){
            this.note = this.velcrote[0]
        },
        methods: {
            onLink(id){
                this.note = this.velcrote[id]
            },

            onCreate(){
                //
            },
        },
    }
</script>