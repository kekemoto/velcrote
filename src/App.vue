<template>
    <div>
        <header class="section">
            <router-link :to="{name:'root'}" class="link title">Velcrote</router-link>
            <router-link :to="{name:'root'}" class="link">Detail</router-link>
            <router-link :to="{name:'overview'}" class="link">Overview</router-link>
        </header>
        <section class="section">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'app',
    }
</script>

<style>
    .title {
        font-size: 4rem;
        font-weight: 300;
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