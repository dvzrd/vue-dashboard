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
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';

  .footer__dashboard {
    padding: $space-split $space-base;

    .footer__dashboard--copyright {
      margin: 0;
    }
  }
</style>
