<template>
    <div>
        <header class="section">
            <router-link to="/" class="title">Velcrote</router-link>
            <router-link :to="{name:'detailDefault'}" class="link">Detail</router-link>
            <router-link :to="{name:'overview'}">Overview</router-link>
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
        font-size: 3.5rem;
        font-weight: 300;
        text-decoration: none;
        color: black;
        padding: 0 1.5rem;
    }

    .link {
        padding: 0 1rem 0 0;
    }

    .section {
        margin: 1.5rem;
    }
</style>