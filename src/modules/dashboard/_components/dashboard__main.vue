<template>
  <main
    id="main"
    v-bind:class="{
      'main dashboard__main': true,
      'reduce': sidebarExtend
    }"
  >
    <DashboardBreadcrumbs
      v-if="breadcrumbs"
    />
    <router-view></router-view>
    <DashboardFooter
      v-if="footer"
      :copyright="legal"
    />
  </main>
</template>

<script>
  import DashboardBreadcrumbs from './dashboard__breadcrumbs';
  import DashboardFooter from './dashboard__footer';
  export default {
    name: 'dashboard-main',
    props: {
      sidebarExtend: {
        type: Boolean
      },
      breadcrumbs: {
        type: Boolean
      },
      footer: {
        type: Boolean
      },
      legal: {
        type: String
      }
    },
    components: {
      DashboardBreadcrumbs,
      DashboardFooter
    }
  };
</script>

<style lang="scss" scoped>
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';

  .dashboard__main {
    flex: 5;
    display: flex;
    align-self: stretch;
    transition: $shift-base;
    margin-top: $space-core;
    margin-bottom: $space-core;

    @media only screen and (min-width: $tablet) {
      margin-bottom: 0;
      margin-left: $space-core;

      &.reduce {
        margin-left: $frame-stamp;
      }
    }
  }
</style>
