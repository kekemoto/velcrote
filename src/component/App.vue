<template>
    <div>
        <header class="section">
            <router-link to="/" class="title-logo">Velcrote</router-link>
            <router-link :to="{name:ROUTE.note}" class="link">Detail</router-link>
            <router-link :to="{name:ROUTE.overview}">Overview</router-link>
        </header>
        <section class="section">
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    import {ROUTE} from '../common'

    export default {
        name: 'app',
        data: () => ({ROUTE})
    }
</script>

<style>
    .title-logo {
        font-size: 3.5rem;
        font-weight: 300;
        text-decoration: none;
        color: black;
        padding: 0 1.5rem;
    }

    .title-logo:visited {
        color: black;
    }

    .link {
        padding: 0 1rem 0 0;
    }

    .section {
        margin: 1.5rem;
    }
</style>