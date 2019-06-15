<template>
    <img :src="getImg" :alt="symbol" @error="fixSrc" ref="img">
</template>

<script>
    export default {
        name: 'CoinIcon',
        props: {
            symbol: {
                type: String,
                required: true
            },
        },
        methods: {
            fixSrc() {
                this.$refs.img.src = 'https://coincap.io/static/logo_mark.png';
            },
        },
        computed: {
            getImg() {
                return `https://static.coincap.io/assets/icons/${this.symbol.toLowerCase()}@2x.png`;
            },
        },
    };
</script>

<style scoped>
    img {
        max-width: 20px;
        max-height: 20px;
    }
</style>
