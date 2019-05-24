<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <Table/>
      </b-col>
    </b-row>
  </b-container>
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
