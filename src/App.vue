<template>
  <div id="app" class="container">
    <Table/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Table: () => import( /* webpackChunkName: "Table" */ './components/Table.vue')
  }
}
</script>

<style lang="scss">
  @import "assets/sass/main.scss";
</style>
