<template>
  <main class="dashboard-main">
    <h1 class="heading">Dashboard</h1>
    <CommercialProperty />
  </main>
</template>

<script>
  import CommercialProperty from '@/modules/commercial_property'
  export default {
    name: 'dashboard',
    components: {
      CommercialProperty
    }
  }
</script>

<style lang="scss" scoped>
  .heading {
    color: #222;
    font-size: 3em;
  }
</style>
