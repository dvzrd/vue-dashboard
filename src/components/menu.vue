<template>
  <aside class="wrapper dashboard__menu" id="sidebar">
    <button type="button" class="button button--icon sidebar__button dashboard__menu--button" v-on:click="toggleMenu">
      <i class="icon fa fa-bars"></i>
    </button>
    <nav class="sidebar__nav dashboard__menu--sidebar-nav">
      <ul class="sidebar__nav--list">
        <li class="sidebar__nav--list-item" v-on:click="closeMenu">
          <span class="sidebar__nav--label">Policies</span>
          <i class="icon fa fa-umbrella" aria-hidden="true"></i>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  export default {
    name: 'dashboard-menu',
    data: () => ({
      menuActive: false
    }),
    methods: {
      toggleMenu () {
        console.log('toggle sidebar menu')
        this.menuActive = !this.menuActive
      },
      closeMenu () {
        console.log('close sidebar menu')
        this.menuActive = false
      },
      relativePath (url) {
        url = url.replace('https://', '')
        var domain = url.split('/')[0]
        return url.replace(domain, '')
      }
    }
  };
</script>

<style lang="scss" scoped>
  .dashboard__menu {
    position: fixed;
    top: 0;
    left: 0;

    .dashboard__menu--button {
      margin: 0.5em;
    }
  }
</style>
