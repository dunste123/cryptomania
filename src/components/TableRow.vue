<template>
    <tr>
        <th scope="row">{{ symbol }}</th>
        <td>{{ name }}</td>
        <td>${{ priceUsd }}</td>
        <td>${{ marketCapUsd }}</td>
        <td :class="percentClass">{{ changePercent24Hr }}%</td>
        <td><b-button @click="showModal" variant="primary">More info</b-button></td>
    </tr>
</template>

<script>
    export default {
        name: "TableRow",
        props: {
            value: {
                required: true,
                type: Object,
            },
        },
        data () {
            return {
                symbol: this.value.symbol,
                name: this.value.name,
                priceUsd:  parseFloat(this.value.priceUsd).toFixed(5),
                marketCapUsd:  parseFloat(this.value.marketCapUsd).toFixed(5),
                changePercent24Hr:  parseFloat(this.value.changePercent24Hr).toFixed(2),
            };
        },
        computed: {
            percentClass() {
                return this.changePercent24Hr > 0 ? "green" : "red";
            }
        },
        methods: {
            showModal() {
                this.$emit('modal', this.value);
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

