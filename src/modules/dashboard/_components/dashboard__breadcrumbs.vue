<template>
  <nav
    id="breadcrumbs"
    class="menu menu__breadcrumbs dashboard__breadcrumbs--menu">
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
  // import design composition variables
  @import '../../../theme/composition';

  .dashboard__breadcrumbs--menu {
    padding: $space-base;
  }
</style>
