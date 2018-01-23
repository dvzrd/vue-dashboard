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
  // import design content variables
  @import '../theme/content';

  .heading__hero {
    font-size: $size-hero;
  }
</style>
