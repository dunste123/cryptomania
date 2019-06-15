<template>
    <b-modal size="lg" @show="loadHistory" @hide="resetTitle" id="info-modal" :title="title">
        <b-alert
                :show="dismissCountDown"
                dismissible
                variant="success"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
        >
            <p>{{ title }} added to your CryptoFolio</p>
            <b-progress
                    variant="success"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
            ></b-progress>
        </b-alert>

        <b-container fluid>
            <b-row>
                <b-col>
                    <h5>Price</h5>
                    <p>${{ parseFloat(data.priceUsd) }} ({{ data.changePercent24Hr }}%)</p>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    <h5>Market Cap</h5>
                    <p>${{ parseFloat(data.marketCapUsd) }}</p>
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
        <LineChart :chart-data="historyData"/>
        <div slot="modal-footer">
            <b-button squared variant="outline-primary" @click="addToCryptoFolio">Add to CryptoFolio</b-button>
        </div>
    </b-modal>
</template>

<script>
    import axios from 'axios';
    import { addCoinToStorage } from '../helpers';

    export default {
        name: 'InfoModal',
        components: {
            LineChart: () => import('./LineChart'),
        },
        props: {},
        data () {
            return {
                title: '',
                id: '',
                data: {},
                historyData: [],
                dismissSecs: 5,
                dismissCountDown: 0,
            };
        },
        methods: {
            async loadHistory() {
                const {data} = await axios.get(`/assets/${this.id}/history?interval=d1`);
                this.historyData = data.data;
            },
            resetTitle() {
                this.dismissCountDown = 0;
                document.title = 'Live Coin Prices';
            },
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown;
            },
            uuidv4() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            },
            addToCryptoFolio() {
                const toStore = {
                    ...this.data,
                    uid: this.uuidv4(),
                };
                addCoinToStorage(toStore);
                this.dismissCountDown = this.dismissSecs;
            },
        },
    };
</script>
