<template>
  <header class="header dashboard__topbar" id="topbar">
    <!-- topbar-media-logo -->
    <div
      class="frame dashboard__topbar--frame topbar__frame--media"
      v-on:click="handleCloseDropdown"
    >
      <router-link
        to="/"
        class="link dashboard__wrapper--link topbar__wrapper--media"
      >
        <img
          class="media dashboard__media--logo topbar__media--logo"
          v-bind:src="logo"
        />
      </router-link>
    </div>
    <!-- topbar-menu-right -->
    <figure class="frame dashboard__topbar--frame topbar__frame--menu">
      <!-- topbar-dropdown-toggle -->
      <figcaption
        class="caption topbar__dropdown--toggle"
        v-on:click="handleToggleDropdown"
      >
        <span
          class="label dashboard__context--user"
          v-text="user"
        >
        </span>
        <img
          class="media dashboard__media--avatar topbar__media--avatar"
          v-bind:src="avatar"
        />
      </figcaption>
      <!-- topbar-dropdown-menu -->
      <nav
        v-bind:class="{
          'menu dropdown--menu topbar__dropdown--menu': true,
          'open': dropdownOpen
        }"
      >
        <!-- dropdown-menu-account -->
        <h3 class="heading heading--title dropdown__menu--title">
          Account
        </h3>
        <ul class="list list--menu dropdown__menu--list">
          <li
            class="item item--stack dropdown__menu--item"
            v-on:click="handleCloseDropdown"
          >
            <router-link
              to="/account/updates"
              class="link link--container dropdown__menu--link"
            >
              <i class="icon fa fa-bell" aria-hidden="true"></i>
              Updates
            </router-link>
          </li>
          <li
            class="item item--stack dropdown__menu--item"
            v-on:click="handleCloseDropdown"
          >
            <router-link
              to="/account/groups"
              class="link link--container dropdown__menu--link"
            >
              <i class="icon fa fa-sitemap" aria-hidden="true"></i>
              Groups
            </router-link>
          </li>
          <li
            class="item item--stack dropdown__menu--item"
            v-on:click="handleCloseDropdown"
          >
            <router-link
              to="/account/fields"
              class="link link--container dropdown__menu--link"
            >
              <i class="icon fa fa-pencil" aria-hidden="true"></i>
              Fields
            </router-link>
          </li>
        </ul>
        <!-- dropdown-menu-options -->
        <h3 class="heading heading--title dropdown__menu--title">
          Options
        </h3>
        <ul class="list list--menu dropdown__menu--list">
          <li
            class="item item--stack dropdown__menu--item"
            v-on:click="handleCloseDropdown"
          >
            <router-link
              to="/account/profile"
              class="link link--container dropdown__menu--link"
            >
              <i class="icon fa fa-user" aria-hidden="true"></i>
              Profile
            </router-link>
          </li>
          <li
            class="item item--stack dropdown__menu--item"
            v-on:click="handleCloseDropdown"
          >
            <router-link
              to="/account/settings"
              class="link link--container dropdown__menu--link"
            >
              <i class="icon fa fa-cog" aria-hidden="true"></i>
              Settings
            </router-link>
          </li>
          <li
            class="item item--stack dropdown__menu--item"
            v-on:click="handleCloseDropdown"
          >
            <router-link
              to="/account/packages"
              class="link link--container dropdown__menu--link"
            >
              <i class="icon fa fa-microchip" aria-hidden="true"></i>
              Packages
            </router-link>
          </li>
          <li
            class="item item--stack dropdown__menu--item"
            v-on:click="handleCloseDropdown"
          >
            <button
              type="button"
              class="button button--icon-label dropdown__menu--button"
            >
              <i class="icon fa fa-sign-out" aria-hidden="true"></i>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </figure>
  </header>
</template>

<script>
  export default {
    name: 'dashboard-topbar',
    props: {
      dropdownOpen: {
        type: Boolean
      },
      logo: {
        type: String
      },
      avatar: {
        type: String
      },
      user: {
        type: String
      }
    },
    methods: {
      handleToggleDropdown () {
        this.$store.dispatch('$_dashboard/toggleDropdown');
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
  @import '../../../theme/palette';

  .dashboard__topbar {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    box-shadow: 0 0 0.05em 0 $cadet;
    background: $loblolly;

    .topbar__frame--media {
      flex: 0;
      margin: 0;

      .topbar__media--logo {
        width: 8em;
      }
    }

    .topbar__frame--menu {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      margin: 0;
    }
  }
</style>
