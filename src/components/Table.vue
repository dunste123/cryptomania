<template>
    <div>
        <template v-if="!coinData.length">
            <div>Loading I guess</div>
        </template>
        <table v-else class="table">
            <thead>
            <tr>
                <th scope="col">Short</th>
                <th scope="col">Coin</th>
                <th scope="col">Price</th>
                <th scope="col">Market Cap</th>
                <th scope="col">%24hr</th>
                <th scope="col">More info</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, i) in coinData" v-bind:key="i">
                <th scope="row">{{ item.symbol }}</th>
                <td>{{ item.name }}</td>
                <td>${{ parseFloat(item.priceUsd).toFixed(5) }}</td>
                <td>${{ parseFloat(item.marketCapUsd).toFixed(5) }}</td>
                <td class="green">...</td>
                <td><b-button @click="showModal(item)" variant="primary">More info</b-button></td>
            </tr>
            </tbody>
        </table>
        <InfoModal ref="modal"/>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Table",
        components: {
            InfoModal: () => import(/* webpackChunkName: "Modal" */ './InfoModal.vue'),
        },
        data: () => ({
            coinData: [],
        }),
        mounted () {
            this.loadData();
        },
        methods: {
            async loadData() {
                if (!this.coinData.length) {
                    const {data} = await axios.get('https://api.coincap.io/v2/assets');
                    this.coinData = data.data;
                }
            },
            showModal(item) {
                const modal = this.$refs.modal;

                modal.title = `${item.name} (${item.symbol})`;
                modal.id = item.id;
                modal.data = item;

                this.$bvModal.show('info-modal')
            },
        },
    }
</script>

<style scoped>
    .green {
        color: green;
    }

    .red {
        color: red;
    }
</style>
