<template>
    <canvas ref="chart" width="700" height="400"></canvas>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: "LineChart",
        props: {
            chartData: {
                type: Array,
                default: () => []
            },
        },
        data: () => ({
            chart: null,
            options: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'week',
                        },
                    }],
                }
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
            chartData () {
                this.chart.data = this.mapChartData();
                this.chart.update();
            }
        },
        methods: {
          mapChartData() {
              const labels = [];
              const datasets = [
                  {
                      label: 'priceUsd',
                      backgroundColor: 'rgba(92,180,255,0.39)',
                      data: [],
                  }
              ];

              this.chartData.forEach((data) => {
                    labels.push(data.date.replace('T', ' '));
                    datasets[0].data.push(parseFloat(data.priceUsd))
              });

              return {
                  labels,
                  datasets,
              }
          }
        },
    }
</script>
