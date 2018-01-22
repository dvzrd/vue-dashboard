<template>
  <header class="header">
    <img class="logo" src="/static/logo.png" />
  </header>
</template>

<script>
  export default {
    name: 'app-header'
  };
</script>

<style lang="scss" scoped>
  .header {
    padding: 1em;
    background-color: #eee;

    .logo {
      width: 8em;
    }
  }
</style>
