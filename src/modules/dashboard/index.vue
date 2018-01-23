<template>
  <section
    v-bind:id="config.id"
    class="container dashboard__container"
  >
    <DashboardTopbar
      :dropdownOpen="dropdownOpen"
      :logo="config.logo"
      :avatar="config.avatar"
      :user="config.user"
    />
    <DashboardSidebar :sidebarExtend="sidebarExtend" />
    <DashboardMain :breadcrumbs="config.breadcrumbs" />
    <DashboardFooter :copyright="config.legal" />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import DashboardTopbar from './_components/dashboard_topbar';
  import DashboardSidebar from './_components/dashboard_sidebar';
  import DashboardMain from './_components/dashboard_main';
  import DashboardFooter from './_components/dashboard_footer';
  export default {
    name: 'module-dashboard',
    components: {
      DashboardTopbar,
      DashboardSidebar,
      DashboardMain,
      DashboardFooter
    },
    computed: {
      ...mapGetters({
        config: '$_dashboard/config',
        dropdownOpen: '$_dashboard/dropdownOpen',
        sidebarExtend: '$_dashboard/sidebarExtend'
      })
    },
    created() {
      this.$store.registerModule('$_dashboard', store);
    },
    mounted() {
      this.$store.dispatch('$_dashboard/getConfig');
    }
  };
</script>
