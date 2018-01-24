<template>
  <section
    v-bind:id="config.id"
    class="container dashboard__container"
  >
    <DashboardTopbar
      :dropdownOpen="dropdownOpen"
      :sidebarExtend="sidebarExtend"
      :logo="config.logo"
      :avatar="config.avatar"
      :user="config.user"
    />
    <DashboardSidebar
      :sidebarExtend="sidebarExtend"
    />
    <DashboardMain
      :sidebarExtend="sidebarExtend"
      :breadcrumbs="config.breadcrumbs"
      :footer="config.footer"
      :legal="config.legal"
    />
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import store from './_store';
  import DashboardTopbar from './_components/dashboard__topbar';
  import DashboardSidebar from './_components/dashboard__sidebar';
  import DashboardMain from './_components/dashboard__main';
  export default {
    name: 'dashboard-module',
    components: {
      DashboardTopbar,
      DashboardSidebar,
      DashboardMain
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
      console.log(this.$store)
    },
    mounted() {
      this.$store.dispatch('$_dashboard/getConfig');
    }
  };
</script>
