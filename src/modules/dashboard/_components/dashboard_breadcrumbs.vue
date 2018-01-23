<template>
  <nav class="menu menu__breadcrumbs dashboard__breadcrumbs--menu">
    <p>Dashboard Breadcrumbs Menu</p>
  </nav>
</template>

<script>
  export default {
    name: 'dashboard-breadcrumbs',
    props: {
      navigation: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  .dashboard__breadcrumbs--menu {
    padding: 1em;
  }
</style>
