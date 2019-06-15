<template>
    <div>
        <h1 class="text-center">Current coin prices</h1>
        <Loader v-if="!coinData.length" class="from-top"/>
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
            <TableRow v-for="(item, i) in coinData"
                      :ref="item.name.toLowerCase().replace(' ', '-')"
                      v-bind:key="i"
                      :value="item"
                      @modal="showModal"/>
            </tbody>
        </table>
        <InfoModal ref="modal"/>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'CurrentPrices',
        components: {
            Loader: () => import('./Loader'),
            TableRow: () => import('./TableRow'),
            InfoModal: () => import('./InfoModal'),
        },
        data: () => ({
            pricesWs: null,
            coinData: [],
            priceUpdates: {},
        }),
        mounted() {
            this.loadData();
            document.title = 'Live Coin Prices';
        },
        beforeDestroy() {
            this.pricesWs.close();
        },
        watch: {
            priceUpdates: 'updatePrice',
        },
        methods: {
            async loadData() {
                if (!this.coinData.length) {
                    const {data} = await axios.get('/assets?limit=15');
                    this.coinData = data.data;

                    const joined = data.data.map(x => x.name.toLowerCase().replace(' ', '-')).join();

                    this.$nextTick(() => {
                        this.initWS(joined);
                    });
                }
            },
            initWS(assets) {
                this.pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${assets}`);

                this.pricesWs.onmessage = (msg) => {
                    this.priceUpdates = msg.data;
                };
            },
            showModal(item) {
                const modal = this.$refs.modal;

                modal.title = `${item.name} (${item.symbol})`;
                modal.id = item.id;
                modal.data = item;

                document.title = modal.title;

                this.$bvModal.show('info-modal');
            },
            updatePrice() {
                const update = JSON.parse(this.priceUpdates);
                const keys = Object.keys(update);

                for (let key of keys) {
                    const newVal = update[key];
                    const ref = this.$refs[key];

                    if (ref && ref.length) {
                        ref[0].priceUsd = parseFloat(newVal);
                    }
                }
            }
        },
    };
</script>

<style scoped>
    .from-top {
        padding-top: 25%;
    }
</style>
