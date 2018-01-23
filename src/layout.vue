<template>
  <div class="wrapper layout__wrapper" id="layout">
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
  // Import theme styles for app
  @import './theme/styles';
</style>
