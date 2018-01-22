<template>
  <div class="layout layout-dashboard" id="dashboard">
    <layout-header></layout-header>
    <router-view></router-view>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
  import Header from '@/components/header';
  import Footer from '@/components/footer';
  export default {
    name: 'layout',
    components: {
      'layout-header': Header,
      'layout-footer': Footer
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
