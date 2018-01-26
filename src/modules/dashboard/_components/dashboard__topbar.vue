<template>
  <header class="header dashboard__topbar" id="topbar">
    <!-- topbar-media-logo -->
    <figure class="frame dashboard__topbar--frame topbar__frame--media">
      <figcaption
        class="caption topbar__logo--wrapper"
        v-on:click="handleToggleSidebar"
      >
        <i
          class="icon fa fa-bars"
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
              Manage Groups
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
              Edit Fields
              <i class="icon fa fa-pencil" aria-hidden="true"></i>
            </router-link>
          </li>
          <li
            class="item item--stack dropdown__menu--item"
            v-on:click="handleCloseDropdown"
          >
            <button
              type="button"
              class="button button--spread button--warn button--icon-label dropdown__menu--button"
            >
              <i class="icon fa fa-lock" aria-hidden="true"></i>
              Lock Account
            </button>
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
              to="/account/plan"
              class="link link--container dropdown__menu--link"
            >
              <i class="icon fa fa-map" aria-hidden="true"></i>
              Plan
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
              to="/account/package"
              class="link link--container dropdown__menu--link"
            >
              <i class="icon fa fa-cube" aria-hidden="true"></i>
              Package
            </router-link>
          </li>
          <li
            class="item item--stack dropdown__menu--item"
            v-on:click="handleCloseDropdown"
          >
            <button
              type="button"
              class="button button--spread button--fail button--icon-label dropdown__menu--button"
            >
              Logout
              <i class="icon fa fa-sign-out" aria-hidden="true"></i>
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
    box-shadow: $shadow-dash $bali;
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
          opacity: 0;
          display: none;
          visibility: hidden;
          margin: $gutter-gap;
          margin-left: -$space-convex;
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
            visibility: visible;
            opacity: 1;
            margin-left: $space-split;
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
          flex: 8;
          margin-right: $space-frame;
          margin-left: $space-clear;
          font-size: $size-legal;
          text-align: right;
        }

        .topbar__media--avatar {
          flex: 2;
          margin: 0;
          border-radius: 50%;
          width: $space-clear;
        }
      }

      // topbar dropdown menu
      .topbar__dropdown--menu {
        visibility: hidden;
        opacity: 0;
        right: -100%;
        top: $space-core;
        position: fixed;
        display: flex;
        text-align: right;
        align-items: right;
        align-content: right;
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
          padding: $space-frame;
          background: $cadet;
          color: $bond-core;
          font-size: $space-trim;

          .icon {
            left: $space-frame;
          }
        }

        .dropdown__menu--list {
          width: 100%;
          margin: 0;
          padding: 0;

          .dropdown__menu--item {
            margin: 0;
            border-bottom: $border-lead $cadet;
            border-right: $border-lead $cadet;
          }
        }

        .dropdown__menu--link,
        .dropdown__menu--button {
          text-align: right;
          display: block;
          margin: 0;
          padding: $space-split;
          padding-right: $space-spread;
          font-size: $size-legal;

          .icon {
            margin: 0;
            right: $space-frame;
          }
        }

        .dropdown__menu--link {
          color: $bayoux;

          &:hover {
            background: $athens;
            color: $spruce;
          }
        }

        .dropdown__menu--button {
          color: $night;
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
