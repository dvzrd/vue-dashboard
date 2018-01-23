<template>
  <header class="header dashboard__topbar" id="topbar">
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
          src="/static/logo.png"
        />
      </router-link>
    </div>
    <figure class="frame dashboard__topbar--frame topbar__frame--dropdown">
      <figcaption
        class="caption dropdown__caption--toggle"
        v-on:click="handleToggleDropdown"
      >
        <span
          class="label dashboard__context--label"
          v-text="user"
        >
        </span>
        <img class="media dashboard__media--avatar topbar__media--avatar" />
      </figcaption>
      <ul
        v-bind:class="{
          'list list--menu dropdown__menu--list': true,
          'open': dropdownOpen
        }"
      >
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
  @import '../../../theme/constants/palette';

  .dashboard__topbar {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    box-shadow: 0 0 0.05em 0 $cadet;
    background: $loblolly;
    padding: 1em;

    .topbar__frame--media {
      flex: 0;
      margin: 0;

      .topbar__media--logo {
        width: 8em;
      }
    }

    .topbar__frame--dropdown {
      display: flex;
      justify-content: flex-end;
      flex: 1;
      margin: 0;
    }
  }
</style>
