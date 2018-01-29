<template>
  <ul
    id="field-details-list"
    class="list fields__list field-details__list"
  >
    <fieldDetailsItem
      v-for="fieldDetail in fieldDetails"
      :key="fieldDetail.id"
      :fieldDetail="fieldDetail"
      :fieldReferenceName="fieldReferenceName"
    />
    <li
      class="item loading__item field-details__loading"
      v-if="!fieldDetails || fieldDetails.length === 0"
    >
      Fetching available field details...
    </li>
  </ul>
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
      },
      fieldReferenceName: {
        type: String
      }
    }
  };
</script>

<style lang="scss" scoped>
  // import design structure variables
  @import '../../../theme/structure';
  // import design composition variables
  @import '../../../theme/composition';

  .field-details__list {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    align-content: flex-start;
    max-width: $container-base;
    padding: $space-frame;

    @media only screen and (min-width: $tablet) {
      max-width: $container-tablet;
      margin-left: -$space-frame;
    }

    @media only screen and (min-width: $laptop) {
      max-width: $container-laptop;
    }
  }
</style>
