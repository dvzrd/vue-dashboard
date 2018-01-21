<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  // TODO: import globals from theme
  #app {
    body {
      color: #5d5d5d;
    }
  }
</style>
