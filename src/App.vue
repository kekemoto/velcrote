<template>
    <div>
        <header>
            <router-link to="/" class="title">Velcrote</router-link>
            <router-link to="/" class="link">Detail</router-link>
            <router-link to="/overview" class="link">Overview</router-link>
        </header>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    const root = { template: '<div>root</div>'}
    const overview = { template: '<div>overview</div>'}

    export default {
        name: 'app',
        data () {
            return {}
        },
        routes: [
            {path: '/', component: root},
            {path: '/overview', component: overview}
        ]
    }
</script>

<style scoped>
    .title {
        margin: 1em;
        font-size: 2em;
    }

    .link {
        padding: 0 0.5em;
    }
</style>