<template>
    <div id="app">
        <Navbar/>
        <b-container>
            <b-row></b-row>
            <b-row>
                <b-col>
                    <router-view/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Navbar from './components/Navbar';

    export default {
        name: 'app',
        components: {
            Navbar
        },
        mounted() {
            document.title = 'Cryptomania';
        }
    };
</script>

<style lang="scss">
    @import "assets/sass/main.scss";

    .container {
        padding-top: 70px;
    }
</style>
