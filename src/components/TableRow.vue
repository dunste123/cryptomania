<template>
    <tr :class="clsName">
        <th scope="row"><CoinIcon :symbol="symbol"/> {{ symbol }}</th>
        <td>{{ name }}</td>
        <td>${{ priceUsdParsed }}</td>
        <td>${{ marketCapUsd }}</td>
        <td :class="percentClass">{{ changePercent24Hr }}%</td>
        <td><b-button @click="showModal" variant="primary">More info</b-button></td>
    </tr>
</template>

<script>
    export default {
        name: 'TableRow',
        components: {
            CoinIcon: () => import('./CoinIcon'),
        },
        props: {
            value: {
                required: true,
                type: Object,
            },
        },
        data () {
            return {
                clsName: '',
                symbol: this.value.symbol,
                name: this.value.name,
                priceUsd: parseFloat(this.value.priceUsd).toFixed(5),
                // marketCapUsd:  parseFloat(this.value.marketCapUsd).toFixed(5),
                changePercent24Hr: parseFloat(this.value.changePercent24Hr).toFixed(2),
            };
        },
        watch: {
            priceUsd: 'flashBg',
        },
        computed: {
            percentClass() {
                return this.changePercent24Hr > 0 ? 'green' : 'red';
            },
            priceUsdParsed() {
                return parseFloat(this.priceUsd).toFixed(5);
            },
            marketCapUsd() {
                return (parseFloat(this.priceUsd) * parseFloat(this.value.supply)).toFixed(5);
            },
        },
        methods: {
            showModal() {
                this.$emit('modal', {
                    id: this.value.id,
                    name: this.name,
                    symbol: this.symbol,
                    priceUsd: this.priceUsdParsed,
                    marketCapUsd: this.marketCapUsd,
                    volumeUsd24Hr: this.value.volumeUsd24Hr,
                    changePercent24Hr: this.changePercent24Hr,
                    supply: this.value.supply,
                });
            },
            flashBg(newValue, oldValue) {

                if (newValue > oldValue) {
                    this.clsName = 'bg-green';
                } else {
                    this.clsName = 'bg-red';
                }

                setTimeout(() => {
                    this.clsName = '';
                }, 500);
            },
        },
    };
</script>

<style scoped>
    .green {
        color: green;
    }

    .red {
        color: red;
    }

    .bg-green {
        background-color: rgba(0, 255, 0, 0.08);
    }

    .bg-red {
        background-color: rgba(255, 0, 0, 0.09);
    }

    tr {
        transition: background-color ease-in-out 50ms;
    }
</style>

