<template>
  <div class="layout layout__dashboard" id="dashboard">
    <dashboard-header></dashboard-header>
    <dashboard-menu></dashboard-menu>
    <router-view></router-view>
    <dashboard-footer></dashboard-footer>
  </div>
</template>

<script>
  import Header from '@/components/header';
  import Menu from '@/components/menu';
  import Footer from '@/components/footer';
  export default {
    name: 'layout-dashboard',
    components: {
      'dashboard-header': Header,
      'dashboard-menu': Menu,
      'dashboard-footer': Footer
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
