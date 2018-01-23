<template>
  <aside
    id="sidebar"
    v-bind:class="{
      'sidebar dashboard__sidebar': true,
      'expand': sidebarExtend
    }"
  >
    <button
      type="button"
      v-bind:class="{
        'button button--icon sidebar__button--toggle dashboard__sidebar--button': true,
        'close': sidebarExtend
      }"
      v-on:click="handleToggleSidebar"
    >
      <i class="icon fa fa-times" v-if="sidebarExtend"></i>
      <i class="icon fa fa-bars" v-if="!sidebarExtend"></i>
    </button>
    <nav
      v-bind:class="{
        'menu sidebar__menu dashboard__sidebar--menu': true,
        'expand': sidebarExtend
      }"
    >
      <ul class="list list--menu sidebar__menu--list">
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <router-link
            to="/policies"
            class="link link--container sidebar__menu--link"
            active-class="active"
          >
            <span class="label label--menu sidebar__menu--label">
              Policies
            </span>
            <i class="icon fa fa-umbrella" aria-hidden="true"></i>
          </router-link>
        </li>
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <router-link
            to="/claims"
            class="link link--container sidebar__menu--link"
            active-class="active"
          >
            <span class="label label--menu sidebar__menu--label">
              Claims
            </span>
            <i class="icon fa fa-bolt" aria-hidden="true"></i>
          </router-link>
        </li>
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <router-link
            to="/contacts"
            class="link link--container sidebar__menu--link"
            active-class="active"
          >
            <span class="label label--menu sidebar__menu--label">
              Contacts
            </span>
            <i class="icon fa fa-user" aria-hidden="true"></i>
          </router-link>
        </li>
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <router-link
            to="/data"
            class="link link--container sidebar__menu--link"
            active-class="active"
          >
            <span class="label label--menu sidebar__menu--label">
              Data
            </span>
            <i class="icon fa fa-bar-chart" aria-hidden="true"></i>
          </router-link>
        </li>
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <router-link
            to="/lines"
            class="link link--container sidebar__menu--link"
            active-class="active"
          >
            <span class="label label--menu sidebar__menu--label">
              Lines
            </span>
            <i class="icon fa fa-book" aria-hidden="true"></i>
          </router-link>
        </li>
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <router-link
            to="/modules"
            class="link link--container sidebar__menu--link"
            active-class="active"
          >
            <span class="label label--menu sidebar__menu--label">
              All Modules
            </span>
            <i class="icon fa fa-cubes" aria-hidden="true"></i>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  export default {
    name: 'dashboard-sidebar',
    props: {
      sidebarExtend: {
        type: Boolean
      }
    },
    methods: {
      handleToggleSidebar () {
        this.$store.dispatch('$_dashboard/toggleSidebar');
      },
      handleCloseDropdown () {
        this.$store.dispatch('$_dashboard/closeDropdown');
      },
      relativePath (url) {
        url = url.replace('https://', '');
        var domain = url.split('/')[0];
        return url.replace(domain, '');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../../theme/constants/palette';

  .dashboard__sidebar {
    background: map-get($brand, 'contrast');

    .dashboard__sidebar--button {
      margin: 0.5em;
    }
  }
</style>
