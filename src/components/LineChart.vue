<template>
    <canvas ref="chart" width="700" height="400"></canvas>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: 'LineChart',
        props: {
            chartData: {
                type: Array,
                default: () => [],
            },
        },
        data: () => ({
            chart: null,
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        },
                        ticks: {
                            beginAtZero: false
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        time: {
                            unit: 'week',
                        },
                    }],
                },
                elements: {point: {radius: 0}}
            }
        }),
        mounted() {
            const ctx = this.$refs.chart.getContext('2d');
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {},
                options: this.options,
            });

        },
        watch: {
            chartData() {
                this.chart.data = this.mapChartData();
                this.chart.update();
            },
        },
        methods: {
            mapChartData() {
                const labels = [];
                const datasets = [
                    {
                        type: 'line',
                        label: 'Price',
                        backgroundColor: 'rgba(92,180,255,0.39)',
                        borderColor: '#3e95cd',
                        data: [],
                    }
                ];

                this.chartData.forEach((data) => {
                    labels.push(data.date.replace('T', ' '));
                    datasets[0].data.push(parseFloat(data.priceUsd).toFixed(5));
                });

                return {
                    labels,
                    datasets,
                }
            },
        },
    }
</script>
