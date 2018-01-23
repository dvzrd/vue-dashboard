<template>
  <main class="main main__dashboard">
    <DashboardBreadcrumbs v-if="breadcrumbs" />
    <router-view></router-view>
  </main>
</template>

<script>
  import DashboardBreadcrumbs from './dashboard_breadcrumbs';
  export default {
    name: 'dashboard-main',
    props: {
      breadcrumbs: {
        type: Boolean
      }
    },
    components: {
      DashboardBreadcrumbs
    }
  };
</script>

<style lang="scss" scoped>
  // Styles scoped for dashboard main
</style>
