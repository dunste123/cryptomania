<template>
    <b-modal modal-lg @show="loadHistory" id="info-modal" :title="title">
        <b-container fluid>
            <b-row>
                <b-col>
                    <h5>Price</h5>
                    <p>${{ parseFloat(data.priceUsd).toFixed(2) }} ({{ data.changePercent24Hr }}%)</p>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <h5>Market Cap</h5>
                    <p>${{ parseFloat(data.marketCapUsd).toFixed(2) }}</p>
                </b-col>

                <b-col>
                    <h5>Volume</h5>
                    <p>{{ parseFloat(data.volumeUsd24Hr).toFixed(2) }}</p>
                </b-col>

                <b-col>
                    <h5>Supply</h5>
                    <p>{{ parseFloat(data.supply).toFixed(2) }}</p>
                </b-col>
            </b-row>
        </b-container>
        <pre><p class="m y-4">{{ historyData }}</p></pre>
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
                historyData: {},
            };
        },
        methods: {
            async loadHistory() {
                const {data} = await axios.get(`/assets/${this.id}/history?interval=d1`);
                this.historyData = data.data;
            }
        },
    }
</script>

<style scoped>

</style>
