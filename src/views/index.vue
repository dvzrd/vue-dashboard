<template>
  <main class="view" id="home">
    <h1 class="heading">Dashboard</h1>
    <FieldTypesContainer />
  </main>
</template>

<script>
  import FieldTypesContainer from '@/modules/field_types'
  export default {
    name: 'app-home',
    components: {
      FieldTypesContainer
    }
  }
</script>

<style lang="scss" scoped>
  .view {
    flex: 1;
    padding: 1em;

    .heading {
      color: #222;
      font-size: 3em;
      text-transform: uppercase;
    }
  }
</style>
