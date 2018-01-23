<template>
  <footer class="footer footer__dashboard">
    <p class="context context--legal footer__dashboard--copyright" v-text="copyright"></p>
  </footer>
</template>

<script>
  export default {
    name: 'dashboard-footer',
    props: {
      copyright: {
        type: String
      }
    }
  };
</script>

<style lang="scss" scoped>
  .footer__dashboard {
    padding: 1em;

    .footer__dashboard--copyright {
      margin: 0;
      font-size: 0.75em; // TODO: inherit from `context--legal` class
    }
  }
</style>
