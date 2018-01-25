<template>
  <header class="header header--hero dashboard__hero">
    <figure class="container container--hero dashboard__hero--container">
      <figcaption class="caption caption--hero dashboard__hero--caption">
        <h1 class="heading heading--hero dashboard__hero--heading">
          Commercial Property
          <small class="meta meta--hero dashboard__hero--meta">
            Add Field
          </small>
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

      .dashboard__hero--heading {
        margin: 0;
        color: $light;
        font-size: $size-base;
        text-align: left;
        text-transform: uppercase;

        .dashboard__hero--meta {
          display: inline-block;
          margin: 0;
          margin-left: $space-press;
          color: $loblolly;
          font-size: 90%;
        }
      }
    }
  }
</style>
