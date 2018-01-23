<template>
  <aside
    id="sidebar"
    v-bind:class="{
      'sidebar dashboard__sidebar': true,
      'expand': sidebarExtend
    }"
  >
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
            to="/"
            class="link link--container sidebar__menu--link"
            active-class="active"
          >
            <i class="icon fa fa-dashboard" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              Dashboard
            </span>
          </router-link>
        </li>
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <router-link
            to="/policies"
            class="link link--container sidebar__menu--link"
            active-class="active"
          >
            <i class="icon fa fa-umbrella" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              Policies
            </span>
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
            <i class="icon fa fa-bolt" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              Claims
            </span>
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
            <i class="icon fa fa-user" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              Contacts
            </span>
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
            <i class="icon fa fa-bar-chart" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              Data
            </span>
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
            <i class="icon fa fa-book" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              Lines
            </span>
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
            <i class="icon fa fa-cubes" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              All Modules
            </span>
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
  // import color palette variables
  @import '../../../theme/palette';
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';

  // dashboard sidebar
  .dashboard__sidebar {
    position: fixed;
    display: flex;
    align-self: stretch;
    align-items: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: $space-mast;
    box-shadow: $shadow-glow $smoke;
    background: $bond-core;
    transition: $shift-base;

    @media only screen and (min-width: $tablet) {
      align-items: flex-start;
      height: 100vh;
      width: $space-core;
      box-shadow: $shadow-glow $smoke inset;
    }

    // dashboard sidebar expand
    &.expand {
      height: 100vh;
      align-items: flex-start;

      @media only screen and (min-width: $tablet) {
        width: $frame-stamp;
      }
    }

    // dashboard sidebar menu
    .dashboard__sidebar--menu {
      width: 100%;

      @media only screen and (min-width: $tablet) {
        margin-top: $space-core;
      }

      .sidebar__menu--list {
        display: flex;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;

        @media only screen and (min-width: $tablet) {
          flex-flow: row wrap;
        }

        .sidebar__menu--item {
          margin: 0;
          flex: 1;

          @media only screen and (min-width: $tablet) {
            flex: $fill-base;
          }
        }
      }

      .sidebar__menu--link {
        display: flex;
        flex-flow: wrap;
        align-items: center;
        justify-content: center;
        flex: $fill-base;
        padding: $space-frame;
        font-size: $space-trim;

        .icon {
          color: $brand-base;
          font-size: $size-brief;
        }

        .sidebar__menu--label {
          opacity: 0;
          position: absolute;
          visibility: hidden;
          transition: none;
          margin-left: $space-mast;
          color: $light;
        }

        &.active {
          background: $lynch;

          .icon {
            color: $brand-contrast;
          }
        }

        &:hover {
          background: $brand-contrast;

          .icon {
            color: $light;
          }
        }
      }

      // dashboard sidebar menu expand
      &.expand {
        margin-top: $space-core;

        .sidebar__menu--list {
          flex-flow: row wrap;

          .sidebar__menu--item {
            flex: $fill-base;
          }
        }

        .sidebar__menu--link {
          justify-content: left;

          .icon {
            position: absolute;
          }

          .sidebar__menu--label {
            opacity: 1;
            position: relative;
            visibility: visible;
            transition: $shift-base;
          }
        }
      }
    }
  }
</style>
