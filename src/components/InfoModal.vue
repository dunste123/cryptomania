<template>
    <b-modal id="info-modal" :title="title">
        <p class="my-4">Hello from modal!</p>
    </b-modal>
</template>

<script>
    export default {
        name: "InfoModal",
        props: {
            value: {
                required: true,
                type: Object,
            },
        },
        data () {
            return {
                title: this.value.title || 'Title',
            };
        },
    }
</script>

<style scoped>

</style>
