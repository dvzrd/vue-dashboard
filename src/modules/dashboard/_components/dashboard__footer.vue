<template>
  <footer
    id="footer"
    class="footer footer__dashboard">
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
  // import color palette variables
  @import '../../../theme/palette';
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';
  // import design content variables
  @import '../../../theme/content';

  .footer__dashboard {
    padding: $gutter-bar;
    background: $bali;

    @media only screen and (min-width: $tablet) {
      margin-right: 14em;
    }

    .footer__dashboard--copyright {
      margin: 0;
      color: $night;
    }
  }
</style>
