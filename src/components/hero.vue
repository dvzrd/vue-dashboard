<template>
  <header class="header hero dashboard__hero">
    <figure class="container dashboard__hero--container">
      <figcaption class="caption caption__hero">
        <h1 class="heading heading__hero">
          Commercial Property
        </h1>
      </figcaption>
    </figure>
  </header>
</template>

<script>
  export default {
    name: 'Hero'
  };
</script>

<style lang="scss" scoped>
  // import color palette variables
  @import '../theme/palette';
  // import design composition variables
  @import '../theme/composition';
  // import design content variables
  @import '../theme/content';

  .dashboard__hero {
    box-shadow: $shadow-glow $lynch;
    background: $bali;

    .dashboard__hero--container {
      padding: $gutter-bar;

      .heading__hero {
        margin: 0;
        color: $light;
        font-size: $size-base;
        text-align: left;
        text-transform: uppercase;
      }
    }
  }
</style>
