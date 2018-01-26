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
      <ul class="list list--menu sidebar__menu--list" id="navigation">
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
      <ul class="list list--menu sidebar__menu--list" id="support">
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <button
            type="button"
            class="button button--spread button--info button--icon-label sidebar__menu--button"
          >
            <i class="icon fa fa-phone" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              Contact Us
            </span>
          </button>
        </li>
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <button
            type="button"
            class="button button--spread button--pass button--icon-label sidebar__menu--button"
          >
            <i class="icon fa fa-life-ring" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              Get Help
            </span>
          </button>
        </li>
        <li
          class="item item--stack sidebar__menu--item"
          v-on:click="handleCloseDropdown"
        >
          <button
            type="button"
            class="button button--spread button--warn button--icon-label sidebar__menu--button"
          >
            <i class="icon fa fa-bug" aria-hidden="true"></i>
            <span class="label label--menu sidebar__menu--label">
              Report Issue
            </span>
          </button>
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
    overflow: hidden;
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
    box-shadow: $shadow-dash $night;
    background: $bond-core;
    transition: $shift-base;

    @media only screen and (min-width: $tablet) {
      align-items: flex-start;
      height: 100vh;
      width: $space-core;
      box-shadow: $shadow-drop $night;
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
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      height: 100%;
      margin: 0;

      .sidebar__menu--list {
        justify-content: center;
        display: flex;
        flex: $fill-base;
        margin: 0;
        padding: 0;

        @media only screen and (min-width: $tablet) {
          flex-flow: row wrap;
        }

        &#navigation {
          align-items: flex-start;
          align-content: flex-start;

          @media only screen and (min-width: $tablet) {
            margin-top: $space-core;
          }
        }

        &#support {
          display: none;
          align-self: flex-end;

          @media only screen and (min-width: $tablet) {
            display: flex;
          }
        }
      }

      .sidebar__menu--item {
        margin: 0;
        flex: 1;

        @media only screen and (min-width: $tablet) {
          flex: $fill-base;
        }

        .icon {
          margin: 0;
          color: $cadet;
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
      }

      .sidebar__menu--link {
        display: flex;
        flex-flow: wrap;
        align-items: center;
        justify-content: center;
        flex: $fill-base;
        padding: $space-frame;
        font-size: $space-trim;

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

      .sidebar__menu--button {
        display: flex;
        justify-content: center;
        text-align: left;
        font-size: $space-trim;
        padding: $space-frame;
        background: $night;
        margin: 0;

        &.button--info {

          .icon {
            color: $serve-info;
          }

          &:hover {
            background: $serve-info;

            .icon {
              color: $night;
            }
          }
        }

        &.button--pass {

          .icon {
            color: $serve-pass;
          }

          &:hover {
            background: $serve-pass;

            .icon {
              color: $night;
            }
          }
        }

        &.button--warn {

          .icon {
            color: $serve-warn;
          }

          &:hover {
            background: $serve-warn;

            .icon {
              color: $night;
            }
          }
        }
      }

      // dashboard sidebar menu expand
      &.expand {

        .sidebar__menu--list {
          flex-flow: row wrap;

          .sidebar__menu--item {
            flex: $fill-base;
          }

          &#navigation {
            margin-top: $space-core;
          }

          &#support {
            display: flex;

            @media only screen and (min-width: $phablet) {
              .sidebar__menu--item {
                flex: 1;
              }
            }

            @media only screen and (min-width: $tablet) {
              .sidebar__menu--item {
                flex: $fill-base;
              }
            }
          }
        }

        .sidebar__menu--link {
          justify-content: left;
        }

        .sidebar__menu--button {
          justify-content: left;
        }

        .icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
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
</style>
