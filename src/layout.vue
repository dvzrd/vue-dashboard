<template>
  <div class="layout dashboard__layout" id="layout">
    <DashboardModule />
  </div>
</template>

<script>
  import DashboardModule from '@/modules/dashboard'
  export default {
    name: 'layout-dashboard',
    components: {
      DashboardModule
    }
  };
</script>

<style>
  /* Import font-awesome icons library */
  @import '~font-awesome/css/font-awesome.min.css';
</style>

<style lang="scss">
  // Import global theme styles for app
  @import './theme/styles';
</style>
