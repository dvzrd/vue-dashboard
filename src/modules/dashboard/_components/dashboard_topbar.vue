<template>
  <header class="header dashboard__topbar" id="topbar">
    <!-- topbar-media-logo -->
    <figure class="frame dashboard__topbar--frame topbar__frame--media">
      <figcaption
        class="caption topbar__logo--wrapper"
        v-on:click="handleToggleSidebar"
      >
        <i
          class="icon fa fa-chevron-right"
          aria-hidden="true"
          v-if="!sidebarExtend"
        />
        <i
          class="icon fa fa-chevron-left"
          aria-hidden="true"
          v-if="sidebarExtend"
        />
        <img
          class="media topbar__logo--media"
          v-bind:src="logo"
        />
        <h1 class="heading topbar__logo--heading">
          BriteCore
        </h1>
      </figcaption>
    </figure>
    <!-- topbar-menu-right -->
    <figure class="frame dashboard__topbar--frame topbar__frame--menu">
      <!-- topbar-dropdown-toggle -->
      <figcaption
        class="caption topbar__dropdown--toggle"
        v-on:click="handleToggleDropdown"
      >
        <span
          class="label topbar__context--user"
          v-text="user"
        >
        </span>
        <img
          class="media topbar__media--avatar"
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
          <i class="icon fa fa-users" aria-hidden="true"></i>
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
              Updates
              <i class="icon fa fa-bell" aria-hidden="true"></i>
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
              Groups
              <i class="icon fa fa-sitemap" aria-hidden="true"></i>
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
              Fields
              <i class="icon fa fa-pencil" aria-hidden="true"></i>
            </router-link>
          </li>
        </ul>
        <!-- dropdown-menu-options -->
        <h3 class="heading heading--title dropdown__menu--title">
          <i class="icon fa fa-cogs" aria-hidden="true"></i>
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
              Profile
              <i class="icon fa fa-user" aria-hidden="true"></i>
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
              Settings
              <i class="icon fa fa-cog" aria-hidden="true"></i>
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
              Packages
              <i class="icon fa fa-microchip" aria-hidden="true"></i>
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
      sidebarExtend: {
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
      handleToggleSidebar () {
        this.$store.dispatch('$_dashboard/toggleSidebar');
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
  // import color palette variables
  @import '../../../theme/palette';
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';

  // dashboard topbar
  .dashboard__topbar {
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    padding: $space-split;
    box-shadow: $shadow-glow $bali;
    background: $loblolly;

    // topbar frame media
    .topbar__frame--media {
      flex: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .topbar__logo--wrapper {
        cursor: pointer;
        margin: 0;
        display: flex;
        align-items: center;

        .icon {
          display: none;
          visibility: hidden;
          opacity: 0;
          margin: 0 0.75em;
          margin-left: -1.25em;
          transition: $shift-base;

          @media only screen and (min-width: $tablet) {
            display: inline-block;
          }
        }

        .topbar__logo--media {
          width: $space-clear;
          margin-right: $space-split;
        }

        .topbar__logo--heading {
          margin: 0;
          color: $bond-core;
          transition: $shift-base;
          font-size: $size-point;

          @media only screen and (min-width: $tablet) {
            font-size: $size-brief;
          }
        }

        &:hover {

          .icon {
            opacity: 1;
            margin-left: 0.5em;
            visibility: visible;
          }

          .topbar__logo--heading {
            color: $brand-contrast;
          }
        }
      }
    }

    // topbar frame menu
    .topbar__frame--menu {
      flex: 1;
      margin: 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;

      .topbar__dropdown--toggle {
        cursor: pointer;
        margin: 0;
        flex: none;
        display: flex;
        align-items: center;
        align-content: right;
        justify-content: flex-end;

        .topbar__context--user {
          flex: 1;
          margin-right: $space-frame;
          font-size: $size-legal;
        }

        .topbar__media--avatar {
          flex: 0;
          margin: 0;
          border-radius: 50%;
          width: $space-clear;
        }
      }

      // topbar dropdown menu
      .topbar__dropdown--menu {
        visibility: hidden;
        opacity: 0;
        top: 3em;
        right: -100%;
        position: fixed;
        text-align: right;
        align-items: right;
        align-content: right;
        display: flex;
        flex-flow: row wrap;
        flex: $fill-base;
        max-width: $frame-bar;
        box-shadow: $shadow-drop $bali;
        background: $loblolly;
        transition: $shift-base;

        .icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .dropdown__menu--title {
          margin: 0;
          padding: 0.75em;
          background: #a4b7c1;
          color: #606060;
          font-size: 0.9em;

          .icon {
            left: 0.75em;
          }
        }

        .dropdown__menu--list {
          margin: 0;
          padding: 0;
          width: 100%;
          list-style: none;

          .dropdown__menu--item {
            margin: 0;
            border-bottom: 0.05em solid #a4b7c1;
            border-right: 0.05em solid #a4b7c1;
          }
        }

        .dropdown__menu--link {
          display: block;
          padding: 0.5em;
          padding-right: 2.25em;
          color: $lynch;
          font-size: 0.75em;

          .icon {
            right: 0.75em;
          }

          &:hover {
            background: $athens;
            color: $bali;
          }
        }

        .dropdown__menu--button {
          position: relative;
          display: block;
          width: 100%;
          padding: 0.75em;
          border: 0;
          background: $serve-fail;
          color: $light;
          font-size: 0.9em;
          font-weight: 700;
          text-align: right;
          transition: $shift-base;

          .icon {
            left: 0.75em;
            transition: $shift-base;
          }
        }

        &.open {
          right: 0;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
</style>
