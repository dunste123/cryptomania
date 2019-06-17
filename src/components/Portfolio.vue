<template>
    <div v-if="coinsStored.length">
        <h3 class="text-center">Your Stored Coins:</h3>
        <p class="text-center">All values are from when you stored the coin</p>
        <p class="text-center">These values are sorted from newest added to oldest added</p>

        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Short</th>
                <th scope="col">Coin</th>
                <th scope="col">Stored Price</th>
                <th scope="col">Market Cap</th>
                <th scope="col">Current Price</th>
                <th scope="col">Remove Coin</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, i) in coinsStored"
                :key="i"
            >
                <th>{{ i + 1 }}</th>
                <th scope="row">
                    <CoinIcon :symbol="item.symbol"/>
                    {{ item.symbol }}
                </th>
                <td>{{ item.name }}</td>
                <td>${{ parseFloat(item.priceUsd).toFixed(5) }}</td>
                <td>${{ item.marketCapUsd }}</td>
                <td :ref="item.id">${{ parseFloat(item.priceUsd).toFixed(5) }}</td>
                <td>
                    <b-button variant="outline-danger" @click="remove(item)">Remove</b-button>
                </td>
            </tr>
            </tbody>
        </table>

        <!--<div v-for="(coin, i) in coinsStored" :key="i">
            {{ coin }}
        </div>-->
    </div>
    <div v-else>
        <h4 class="text-center">You don't have any coins in your CryptoFolio, you can do this via the more info modal on
            the live coin page</h4>
    </div>
</template>

<script>
    import {getItem, setItem} from '../helpers';

    export default {
        name: 'Portfolio',
        components: {
            CoinIcon: () => import('./CoinIcon'),
        },
        data: () => ({
            coinsStored: [],
            pricesWs: null,
            priceUpdates: {},
        }),
        mounted() {
            this.coinsStored = getItem('coins', []);

            const assets = [...new Set(this.coinsStored.map(x => x.id))].join();

            this.$nextTick(() => {
                this.initWS(assets);
            });

            document.title = 'My CryptoFolio';
        },
        beforeDestroy() {
            this.pricesWs.close();
        },
        watch: {
            priceUpdates: 'updatePrice',
        },
        methods: {
            remove(coin) {
                const conf = confirm(`Are you sure that you want to delete this stored ${coin.name}?`);

                if (!conf) {
                    return;
                }

                for (let i = 0; i < this.coinsStored.length; i++) {
                    const item = this.coinsStored[i];

                    if (coin.uid === item.uid) {
                        this.coinsStored.splice(i, 1);
                        break;
                    }
                }

                setItem('coins', this.coinsStored);
            },
            initWS(assets) {
                this.pricesWs = new WebSocket(`wss://ws.coincap.io/prices?assets=${assets}`);

                this.pricesWs.onmessage = (msg) => {
                    this.priceUpdates = JSON.parse(msg.data);
                };
            },

            updatePrice() {
                const update = this.priceUpdates;
                const keys = Object.keys(update);

                for (let key of keys) {
                    const newVal = update[key];
                    const refs = this.$refs[key];

                    if (refs && refs.length) {
                        for (let ref of refs) {
                            ref.innerHTML = `$${parseFloat(newVal).toFixed(5)}`;
                        }
                    }
                }
            },
        },
    };
</script>

<style scoped>

</style>
