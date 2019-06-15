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
                    <b-nav-item :to="{name: 'portfolio'}">My CryptoFolio</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
    };
</script>

<style scoped>

</style>
