<template>
  <figure
    id="field-details-list"
    class="container main__container field-details__container"
  >
    <fieldDetailsItem
      v-for="fieldDetail in fieldDetails"
      :key="fieldDetail.id"
      :fieldDetail="fieldDetail"
    />
    <figcaption
      class="caption main__caption field-details__caption"
      v-if="!fieldDetails || fieldDetails.length === 0"
    >
      Fetching available field details...
    </figcaption>
  </figure>
</template>

<script>
  import FieldDetailsItem from './field_details__item';
  export default {
    name: 'field-details-list',
    components: {
      FieldDetailsItem
    },
    props: {
      fieldDetails: {
        type: Array
      }
    }
  };
</script>

<style lang="scss" scoped>
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';

  .main__container {
    align-items: flex-start;
    align-content: flex-start;
    padding: $space-frame;

    @media only screen and (min-width: $tablet) {
      margin-left: -$space-frame;
    }

    @media only screen and (min-width: $desktop) {
      margin-top: $space-core;
    }
  }
</style>
