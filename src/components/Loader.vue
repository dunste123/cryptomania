<template>
    <div class="text-center">
        <p>Loading...</p>
        <b-spinner style="width: 5rem; height: 5rem;" variant="primary" label="Spinning"></b-spinner>
    </div>
</template>

<script>
    export default {
        name: 'Loader'
    }
</script>

<style scoped>
    .spinner-border {
        border-width: 0.50rem !important;
    }
</style>
