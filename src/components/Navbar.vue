<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            <b-navbar-brand :to="{name: 'home'}">CryptoMania</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :to="{name: 'home'}">Home</b-nav-item>
                    <b-nav-item :to="{name: 'current'}">Live coin prices</b-nav-item>
                    <b-nav-item :to="{name: 'news'}">News</b-nav-item>
                    <b-nav-item disabled>Portfolio</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        methods: {
            shouldBeActive(path) {
                const current = this.$route.path;

                return current === path;
            }
        },
    };
</script>

<style scoped>

</style>
