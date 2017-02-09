<template>
    <div>
        <header class="section">
            <router-link to="/" class="link title">Velcrote</router-link>
            <router-link to="/" class="link">Detail</router-link>
            <router-link to="/overview" class="link">Overview</router-link>
        </header>
        <section class="section">
            <router-view :velcrote="velcrote"></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                velcrote: {
                    0: {
                        title: 'はじめまして',
                        detail: 'タップで編集、プラスで新規',
                        links: [],
                    }
                }
            }
        },
    }
</script>

<style>
    .title {
        font-size: 2em;
        text-decoration: none;
        color: black;
    }

    .link {
        padding: 0 0.5em;
    }

    .section{
        margin: 1em;
    }
</style>