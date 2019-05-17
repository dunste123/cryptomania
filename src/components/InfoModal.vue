<template>
    <b-modal @show="loadHistory" id="info-modal" :title="title">
        <div>
            <h5>Price</h5>
            <p>${{ data.priceUsd }}</p>
        </div>

        <div>
            <h5>Market Cap</h5>
            <p>${{ data.marketCapUsd }}</p>
        </div>
        <p class="m y-4">{{ data }}</p>
    </b-modal>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "InfoModal",
        props: {},
        data () {
            return {
                title: '',
                id: '',
                data: {},
            };
        },
        methods: {
            async loadHistory() {
                /*const {data} = await axios.get(`https://api.coincap.io/v2/assets/${this.id}`);
                this.data = data.data;*/
            }
        },
    }
</script>

<style scoped>

</style>
