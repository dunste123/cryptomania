<template>
    <div>
        <template v-if="!coinData.length">
            <Loader class="from-top"/>
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
            <TableRow v-for="(item, i) in coinData"
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
    import TableRow from "./TableRow";
    import Loader from "./Loader";

    export default {
        name: "Table",
        components: {
            Loader,
            TableRow,
            InfoModal: () => import(/* webpackChunkName: "Modal" */ './InfoModal.vue'),
        },
        data: () => ({
            coinData: [],
        }),
        mounted() {
            this.loadData();
        },
        methods: {
            async loadData() {
                if (!this.coinData.length) {
                    const {data} = await axios.get('/assets');
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
    .from-top {
        padding-top: 25%;
    }
</style>
