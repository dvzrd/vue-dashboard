<template>
  <header class="wrapper dashboard__header" id="topbar">
    <figure class="wrapper wrapper--media">
      <img class="media media--logo topbar__media dashboard__header--logo" src="/static/logo.png" />
    </figure>
    <figure class="topbar__menu dashboard__header--menu">
      <figcaption class="topbar__menu--caption" v-on:click="toggleDropdown">
        <span class="topbar__menu--caption-label">Cliff Jones</span>
        <img class="media media--avatar topbar__menu--caption--avatar" />
      </figcaption>
      <ul class="dropdown--menu topbar__menu--list">
        <li class="dropdown--menu-item topbar__menu--list-item" v-on:click="closeDropdown">
          Logout
        </li>
      </ul>
    </figure>
  </header>
</template>

<script>
  // TODO: create vuex dashboard-header module
  // to contain topbar and sidebar components
  export default {
    name: 'dashboard-header',
    data: () => ({
      dropdownActive: false
    }),
    methods: {
      toggleDropdown () {
        console.log('toggle dropdown menu')
        this.dropdownActive = !this.dropdownActive
      },
      closeDropdown () {
        console.log('close dropdown menu')
        this.dropdownActive = false
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../theme/constants/palette';

  .dashboard__header {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    box-shadow: 0 0 0.05em 0 $cadet;
    background: $loblolly;
    padding: 1em;

    .wrapper--media {
      flex: 0;
      margin: 0;

      .dashboard__header--logo {
        width: 8em;
      }
    }

    .dashboard__header--menu {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      margin: 0;
    }
  }
</style>
